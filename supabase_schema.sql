-- Supabase SQL Database Schema for EnglishAce AI
-- Run this in your Supabase SQL Editor to set up all tables and security policies.

-- Enable pgvector extension for AI similarity search (like question deduplication)
create extension if not exists vector;

-- 1. Profiles Table (Extends Supabase Auth users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text not null,
  level text default 'Beginner', -- Beginner, Intermediate, Advanced, Exam
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Policies for Profiles
create policy "Allow public read access to profiles" on public.profiles
  for select using (true);

create policy "Allow users to update their own profile" on public.profiles
  for update using (auth.uid() = id);

-- 2. Topic Progress Table
create table public.topic_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  topic text not null, -- 'Nouns', 'Tenses', etc.
  category text not null, -- 'Foundation', 'Grammar', etc.
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  accuracy_rate numeric default 0.0,
  total_questions_solved integer default 0,
  unique (user_id, topic)
);

alter table public.topic_progress enable row level security;

-- Policies for Topic Progress
create policy "Users can read their own progress" on public.topic_progress
  for select using (auth.uid() = user_id);

create policy "Users can insert/update their own progress" on public.topic_progress
  for all using (auth.uid() = user_id);

-- 3. Daily Vocabulary Table
create table public.daily_vocab (
  id uuid default gen_random_uuid() primary key,
  word text not null unique,
  meaning text not null,
  example text not null,
  audio_url text,
  created_at date default current_date
);

alter table public.daily_vocab enable row level security;

create policy "Allow read access to daily vocab" on public.daily_vocab
  for select using (true);

-- 4. User Vocabulary Submissions Table
create table public.user_vocab_submissions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  vocab_id uuid references public.daily_vocab(id) on delete cascade not null,
  user_sentence text not null,
  ai_feedback text,
  is_approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.user_vocab_submissions enable row level security;

-- Policies for Vocab Submissions
create policy "Users can view their own submissions" on public.user_vocab_submissions
  for select using (auth.uid() = user_id);

create policy "Users can create their own submissions" on public.user_vocab_submissions
  for insert with check (auth.uid() = user_id);

-- 5. Practice Questions Table
create table public.questions (
  id uuid default gen_random_uuid() primary key,
  topic text not null,
  difficulty text not null, -- Beginner, Intermediate, Advanced, PYQ
  question text not null,
  options jsonb not null, -- Array of strings
  answer text not null,
  explanation text not null,
  frequency_score integer default 1,
  embedding vector(1536), -- For question deduplication
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.questions enable row level security;

create policy "Allow read access to questions" on public.questions
  for select using (true);

-- 6. Mock Papers Table
create table public.mock_papers (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  target_exam text not null, -- 'SBI PO', 'IBPS', 'CAT'
  scheduled_date date default current_date,
  questions jsonb not null, -- Array of question objects
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.mock_papers enable row level security;

create policy "Allow read access to mock papers" on public.mock_papers
  for select using (true);

-- 7. Mock Paper Attempts Table
create table public.paper_attempts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  paper_id uuid references public.mock_papers(id) on delete cascade not null,
  score integer not null,
  total_score integer not null,
  answers jsonb not null, -- User responses
  analysis jsonb, -- AI breakdown
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.paper_attempts enable row level security;

-- Policies for attempts
create policy "Users can view their own paper attempts" on public.paper_attempts
  for select using (auth.uid() = user_id);

create policy "Users can insert their own paper attempts" on public.paper_attempts
  for insert with check (auth.uid() = user_id);

-- Profile Sync Trigger (Automatically create a profile when a user registers)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, level)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', 'Aspirant'), 'Beginner');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

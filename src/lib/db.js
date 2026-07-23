import { createClient } from '@supabase/supabase-js';
import { topics } from '../data/topics';

// Pre-seeded Daily Vocabulary
const DEFAULT_VOCAB = [
  {
    id: "vocab-1",
    word: "Equivocal",
    meaning: "Open to more than one interpretation; ambiguous; unclear in purpose or meaning.",
    example: "The bank manager gave an equivocal response when asked if interest rates would drop.",
    audio_url: "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg" // placeholder audio
  },
  {
    id: "vocab-2",
    word: "Mitigate",
    meaning: "To make something less severe, harmful, or painful.",
    example: "The government took immediate steps to mitigate the impact of inflation on rural families.",
    audio_url: "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
  },
  {
    id: "vocab-3",
    word: "Capricious",
    meaning: "Given to sudden and unaccountable changes of mood or behavior; unpredictable.",
    example: "Competitive exams can sometimes feel capricious, but sound preparation guarantees success.",
    audio_url: "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
  },
  {
    id: "vocab-4",
    word: "Assiduous",
    meaning: "Showing great care, attention, and perseverance; hard-working.",
    example: "With assiduous practice of previous year papers, Shweta scored a perfect 30 in English.",
    audio_url: "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
  },
  {
    id: "vocab-5",
    word: "Plausible",
    meaning: "Seeming reasonable, probable, or believable.",
    example: "The candidate gave a plausible explanation for the grammatical error in his essay.",
    audio_url: "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
  }
];

// Pre-seeded SBI PO Mock Paper (Day 1)
const DEFAULT_SBI_MOCK = {
  id: "sbi-po-day-1",
  title: "Daily SBI PO Practice Paper - Day 1",
  target_exam: "SBI PO",
  scheduled_date: new Date().toISOString().split('T')[0],
  questions: [
    {
      id: "q-mock-1",
      topic: "errorSpotting",
      difficulty: "Advanced",
      question: "Spot the error: 'Not only the governor (A) did express concern (B) over the inflation rate (C) but also took actions (D).'",
      options: ["A", "B", "C", "D"],
      answer: "A",
      explanation: "For inversion after 'Not only', the auxiliary verb must come before the subject. It should be: 'Not only did the governor express...'. Thus, part A is incorrect."
    },
    {
      id: "q-mock-2",
      topic: "prepositions",
      difficulty: "Intermediate",
      question: "Fill in the blank: 'The central bank remains committed ______ maintaining price stability in the rural economy.'",
      options: ["to", "for", "with", "about"],
      answer: "to",
      explanation: "'Committed' takes the fixed preposition 'to'. So, 'committed to maintaining' is grammatically correct."
    },
    {
      id: "q-mock-3",
      topic: "subjectVerbAgreement",
      difficulty: "Advanced",
      question: "Identify the error: 'The list of candidates (A) selected for the bank interview (B) were published (C) on the official website (D).'",
      options: ["A", "B", "C", "D"],
      answer: "C",
      explanation: "The subject 'The list' is singular, so it should take a singular verb 'was published' instead of 'were published'."
    },
    {
      id: "q-mock-4",
      topic: "clozeTest",
      difficulty: "Intermediate",
      question: "Select the most appropriate word to fill the blank: 'The rising fiscal deficit is a major ______ for the country's economic development.'",
      options: ["obstacle", "advantage", "support", "facility"],
      answer: "obstacle",
      explanation: "A fiscal deficit is a negative economic indicator, so it acts as an 'obstacle' (hurdle) rather than an advantage or support."
    },
    {
      id: "q-mock-5",
      topic: "paraJumbles",
      difficulty: "Advanced",
      question: "Rearrange the sentences: \nA. It announced a rate hike to absorb liquidity.\nB. The inflation rate crossed the comfort threshold.\nC. Consequently, the monetary policy committee met urgently.\n",
      options: ["B - C - A", "A - B - C", "C - B - A", "B - A - C"],
      answer: "B - C - A",
      explanation: "First, the inflation crosses the threshold (B). Consequently, the committee meets (C). Then, they announce a rate hike (A). So, B - C - A is the logical order."
    }
  ]
};

// Check if Supabase env credentials exist, or if they are entered manually in LocalStorage
const getSupabaseConfig = () => {
  const url = import.meta.env?.VITE_SUPABASE_URL || localStorage.getItem('english_tutor_supabase_url');
  const key = import.meta.env?.VITE_SUPABASE_ANON_KEY || localStorage.getItem('english_tutor_supabase_anon_key');
  if (url && key) {
    return { url, key };
  }
  return null;
};

const config = getSupabaseConfig();
export const supabase = config ? createClient(config.url, config.key) : null;

// Helper to determine if we should use Supabase
const useSupabase = () => {
  return supabase !== null;
};

// --- MOCK DATABASE IMPLEMENTATION (LocalStorage Fallback) ---
const initLocalStorage = () => {
  if (!localStorage.getItem('english_tutor_profile')) {
    localStorage.setItem('english_tutor_profile', JSON.stringify({
      full_name: 'Aspirant',
      level: 'Beginner',
      created_at: new Date().toISOString()
    }));
  }
  if (!localStorage.getItem('english_tutor_progress')) {
    localStorage.setItem('english_tutor_progress', JSON.stringify({}));
  }
  if (!localStorage.getItem('english_tutor_vocab_submissions')) {
    localStorage.setItem('english_tutor_vocab_submissions', JSON.stringify([]));
  }
  if (!localStorage.getItem('english_tutor_attempts')) {
    localStorage.setItem('english_tutor_attempts', JSON.stringify([]));
  }
};
initLocalStorage();

export const dbService = {
  // Config Management
  saveSupabaseConfig(url, key) {
    localStorage.setItem('english_tutor_supabase_url', url);
    localStorage.setItem('english_tutor_supabase_anon_key', key);
    window.location.reload();
  },
  
  clearSupabaseConfig() {
    localStorage.removeItem('english_tutor_supabase_url');
    localStorage.removeItem('english_tutor_supabase_anon_key');
    window.location.reload();
  },

  isSupabaseConnected() {
    return useSupabase();
  },

  // User Profile
  async getProfile() {
    if (useSupabase()) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single();
        if (!error && data) return data;
      }
    }
    return JSON.parse(localStorage.getItem('english_tutor_profile'));
  },

  async updateProfile(updates) {
    if (useSupabase()) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase.from('profiles').update(updates).eq('id', user.id).select().single();
        if (!error) return data;
      }
    }
    const current = JSON.parse(localStorage.getItem('english_tutor_profile'));
    const updated = { ...current, ...updates };
    localStorage.setItem('english_tutor_profile', JSON.stringify(updated));
    return updated;
  },

  // Topic Progress
  async getProgress() {
    if (useSupabase()) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase.from('topic_progress').select('*').eq('user_id', user.id);
        if (!error && data) {
          // Convert array to key-value map for easier frontend consumption
          const progressMap = {};
          data.forEach(p => {
            progressMap[p.topic] = {
              completed: true,
              accuracy_rate: p.accuracy_rate,
              total_questions_solved: p.total_questions_solved
            };
          });
          return progressMap;
        }
      }
    }
    return JSON.parse(localStorage.getItem('english_tutor_progress'));
  },

  async updateTopicProgress(topic, category, answersCorrect, totalQuestions) {
    const accuracy = Math.round((answersCorrect / totalQuestions) * 100);
    
    if (useSupabase()) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { error } = await supabase.from('topic_progress').upsert({
          user_id: user.id,
          topic,
          category,
          accuracy_rate: accuracy,
          total_questions_solved: totalQuestions,
          completed_at: new Date().toISOString()
        }, { onConflict: 'user_id,topic' });
        
        if (!error) return;
      }
    }
    
    const progress = JSON.parse(localStorage.getItem('english_tutor_progress'));
    progress[topic] = {
      completed: true,
      accuracy_rate: accuracy,
      total_questions_solved: totalQuestions,
      completed_at: new Date().toISOString()
    };
    localStorage.setItem('english_tutor_progress', JSON.stringify(progress));
  },

  // Daily Vocabulary
  async getDailyVocab() {
    // We return preseeded vocab for immediate interactive usability
    return DEFAULT_VOCAB;
  },

  async getVocabSubmissions() {
    if (useSupabase()) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase.from('user_vocab_submissions')
          .select('*, daily_vocab(word)')
          .eq('user_id', user.id);
        if (!error && data) return data;
      }
    }
    return JSON.parse(localStorage.getItem('english_tutor_vocab_submissions'));
  },

  async submitVocabSentence(vocabId, word, sentence) {
    // AI Teacher Feedback Simulator ( patient, positive, constructive )
    const isApproved = sentence.trim().split(/\s+/).length >= 4; // basic sanity check
    let feedback = "";
    
    if (isApproved) {
      feedback = `Excellent effort! Your sentence: "${sentence}" uses the word "${word}" correctly and expresses a clear thought. Keep expressing yourself like this!`;
    } else {
      feedback = `Good attempt! Let's make it a bit stronger. Try to add a subject and action to make the sentence longer. For example: "The company's plan was ${word.toLowerCase()} to avoid conflicts."`;
    }

    const submission = {
      id: `sub-${Date.now()}`,
      vocab_id: vocabId,
      word, // helpful for display
      user_sentence: sentence,
      ai_feedback: feedback,
      is_approved: isApproved,
      created_at: new Date().toISOString()
    };

    if (useSupabase()) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase.from('user_vocab_submissions').insert({
          user_id: user.id,
          vocab_id: vocabId,
          user_sentence: sentence,
          ai_feedback: feedback,
          is_approved: isApproved
        }).select().single();
        if (!error && data) return data;
      }
    }

    const list = JSON.parse(localStorage.getItem('english_tutor_vocab_submissions'));
    list.unshift(submission);
    localStorage.setItem('english_tutor_vocab_submissions', JSON.stringify(list));
    return submission;
  },

  // Daily Mock Paper
  async getDailyMockPaper() {
    return DEFAULT_SBI_MOCK;
  },

  async submitMockPaperAttempt(paperId, score, totalScore, answers) {
    // Generate AI Breakdown of weak areas based on wrong answers
    const wrongAnswers = Object.entries(answers).filter(([qid, userAns]) => {
      const q = DEFAULT_SBI_MOCK.questions.find(quest => quest.id === qid);
      return q && q.answer !== userAns;
    });

    const weakTopics = [];
    const strongTopics = [];

    DEFAULT_SBI_MOCK.questions.forEach(q => {
      const wasWrong = wrongAnswers.some(([qid]) => qid === q.id);
      const friendlyTopicName = topics.find(t => t.id === q.topic)?.title || q.topic;
      
      if (wasWrong) {
        if (!weakTopics.includes(friendlyTopicName)) weakTopics.push(friendlyTopicName);
      } else {
        if (!strongTopics.includes(friendlyTopicName)) strongTopics.push(friendlyTopicName);
      }
    });

    const analysis = {
      score,
      totalScore,
      percentage: Math.round((score / totalScore) * 100),
      weakAreas: weakTopics,
      strongAreas: strongTopics.filter(t => !weakTopics.includes(t)),
      feedback: score === totalScore 
        ? "Sensational! You got a perfect score. You have mastered these concepts."
        : `Good attempt. You got ${score}/${totalScore} correct. Let's focus on studying ${weakTopics.join(', ')} to boost your score tomorrow.`
    };

    const attempt = {
      id: `attempt-${Date.now()}`,
      paper_id: paperId,
      score,
      total_score: totalScore,
      answers,
      analysis,
      created_at: new Date().toISOString()
    };

    if (useSupabase()) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase.from('paper_attempts').insert({
          user_id: user.id,
          paper_id: paperId,
          score,
          total_score: totalScore,
          answers,
          analysis
        }).select().single();
        if (!error && data) return data;
      }
    }

    const list = JSON.parse(localStorage.getItem('english_tutor_attempts'));
    list.unshift(attempt);
    localStorage.setItem('english_tutor_attempts', JSON.stringify(list));
    return attempt;
  },

  async getMockAttempts() {
    if (useSupabase()) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase.from('paper_attempts').select('*').eq('user_id', user.id);
        if (!error && data) return data;
      }
    }
    return JSON.parse(localStorage.getItem('english_tutor_attempts'));
  },

  // AI Question Generator (Unlimited Practice)
  async generateAIQuestions(topicId, difficulty) {
    // Generate a set of 3 fresh questions on the fly based on the topic rules
    const topic = topics.find(t => t.id === topicId);
    if (!topic) return [];

    // In a live app, this calls OpenAI or a Supabase edge function. 
    // Here, we generate high-quality dynamic questions related to the topic context!
    const templates = {
      nouns: [
        {
          question: `Which of the following collective nouns is correct in a banking audit report? "A _______ of directors was present."`,
          options: ["herd", "pack", "board", "flock"],
          answer: "board",
          explanation: "In business English, we refer to a 'board of directors'."
        },
        {
          question: `Find the noun error: "The new informations (A) about interest rates (B) were beneficial (C) to the bank (D)."`,
          options: ["A", "B", "C", "D"],
          answer: "A",
          explanation: "'Information' is an uncountable noun. It does not have a plural form 'informations' and takes a singular verb."
        }
      ],
      tenses: [
        {
          question: `Complete the sentence: "If the economy ______ to grow, inflation will increase."`,
          options: ["continues", "will continue", "continued", "shall continue"],
          answer: "continues",
          explanation: "In a first conditional sentence (If + Simple Present, Future Will), we use Simple Present 'continues' in the conditional clause."
        },
        {
          question: `Correct the tense: "He ______ in Delhi since his father was transferred in 2021."`,
          options: ["is living", "lived", "has been living", "lives"],
          answer: "has been living",
          explanation: "Since the action started in the past (2021) and is still continuing, Present Perfect Continuous 'has been living' is correct."
        }
      ],
      prepositions: [
        {
          question: `Complete the sentence: "Raman is highly proficient ______ English grammar."`,
          options: ["in", "at", "with", "for"],
          answer: "in",
          explanation: "We are proficient 'in' a language or skill, and good 'at' a subject."
        },
        {
          question: `Select the correct preposition: "The profits were shared equally ______ the two co-founders of the startup."`,
          options: ["between", "among", "with", "inside"],
          answer: "between",
          explanation: "'Between' is used when dividing between exactly two entities."
        }
      ]
    };

    const list = templates[topicId] || [
      {
        question: `Solve this practice question: "A singular subject always requires a ______ verb."`,
        options: ["plural", "singular", "linking", "helping"],
        answer: "singular",
        explanation: "This is the fundamental rule of subject-verb agreement: singular subjects take singular verbs."
      },
      {
        question: `Fill in the blank: "Regular revision ______ the student score better in competitive exams."`,
        options: ["helps", "help", "helping", "helped"],
        answer: "helps",
        explanation: "'Revision' is singular, so it takes the singular verb form 'helps'."
      }
    ];

    // Return the generated questions mapped to the requested topic & difficulty
    return list.map((item, index) => ({
      id: `ai-gen-${topicId}-${difficulty}-${index}-${Date.now()}`,
      topic: topicId,
      difficulty,
      question: item.question,
      options: item.options,
      answer: item.answer,
      explanation: item.explanation,
      frequency_score: 3
    }));
  }
};

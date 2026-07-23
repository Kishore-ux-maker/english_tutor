import React, { useState } from 'react';
import Dashboard from './components/pages/Dashboard';
import TutorClassroom from './components/pages/TutorClassroom';
import PracticePlayground from './components/pages/PracticePlayground';
import AdminPanel from './components/pages/AdminPanel';
import MockPaperTest from './components/pages/MockPaperTest';
import { 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  Terminal, 
  CheckCircle,
  HelpCircle,
  Volume2,
  GraduationCap,
  Layers,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // landing, dashboard, classroom, playground, admin, paper
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedPaper, setSelectedPaper] = useState(null);

  const handleStartTopic = (topic) => {
    setSelectedTopic(topic);
    setCurrentPage('classroom');
  };

  const handleStartPaper = (paper) => {
    setSelectedPaper(paper);
    setCurrentPage('paper');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedTopic(null);
    setSelectedPaper(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-violet-600 selection:text-white">
      
      {/* Premium Header Bar */}
      <header className="sticky top-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-slate-900/80 px-4 py-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavigate('landing')}
            className="flex items-center gap-2 cursor-pointer select-none group"
          >
            <div className="p-2 bg-gradient-to-tr from-violet-600 to-amber-500 rounded-xl shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-all">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-extrabold text-lg tracking-tight text-white group-hover:text-violet-400 transition-all">
              EnglishAce <span className="text-amber-400">AI</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 border border-slate-900/80 p-1 rounded-2xl">
            <button
              onClick={() => handleNavigate('landing')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display transition-all ${
                currentPage === 'landing'
                  ? 'bg-slate-900 text-violet-400 font-bold border border-slate-800'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('dashboard')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display transition-all ${
                currentPage === 'dashboard' || currentPage === 'classroom' || currentPage === 'paper'
                  ? 'bg-slate-900 text-violet-400 font-bold border border-slate-800'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => handleNavigate('playground')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display transition-all ${
                currentPage === 'playground'
                  ? 'bg-slate-900 text-violet-400 font-bold border border-slate-800'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Practice Arena
            </button>
            <button
              onClick={() => handleNavigate('admin')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display transition-all ${
                currentPage === 'admin'
                  ? 'bg-slate-900 text-violet-400 font-bold border border-slate-800'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Coaching Optimizer
            </button>
          </nav>

          {/* Call to Action Button */}
          <div>
            <button
              onClick={() => handleNavigate(currentPage === 'landing' ? 'dashboard' : 'playground')}
              className="px-4 py-2 bg-violet-600/10 hover:bg-violet-600/20 text-violet-400 border border-violet-500/20 rounded-xl text-xs font-bold font-display transition-all hover:scale-102"
            >
              {currentPage === 'landing' ? 'Start Learning Free' : 'Practice Playground'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Pages Transition Slot */}
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, cubicBezier: [0.4, 0, 0.2, 1] }}
            className="flex-1 flex flex-col"
          >
            
            {/* 1. LANDING PAGE */}
            {currentPage === 'landing' && (
              <div className="w-full">
                
                {/* Hero Section */}
                <section className="max-w-6xl mx-auto px-4 pt-16 pb-20 text-center relative overflow-hidden flex flex-col items-center justify-center gap-6">
                  {/* Glowing blobs */}
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400">
                    <Sparkles className="w-3.5 h-3.5" /> 100% Free AI Learning Platform for Students
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight max-w-4xl">
                    Master English for Competitive Exams, <span className="text-gradient-purple-amber">Conceptually</span>
                  </h1>

                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                    Built specifically for SBI PO, IBPS, SSC, and CAT aspirants. We explain grammar using simple language, real-life examples, and interactive animations. No textbook memorization needed.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={() => handleNavigate('dashboard')}
                      className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-display font-bold text-sm transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-violet-500/30 hover:scale-102"
                    >
                      Start Studying Now <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleNavigate('playground')}
                      className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-2xl font-display font-bold text-sm transition-all hover:scale-102"
                    >
                      Take Practice Quizzes
                    </button>
                  </div>
                </section>

                {/* Teaching Philosophy Grid */}
                <section className="bg-dark-900 border-y border-slate-900/60 py-16 px-4">
                  <div className="max-w-6xl mx-auto space-y-12">
                    <div className="text-center max-w-xl mx-auto space-y-2">
                      <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">Our Teaching Philosophy</h2>
                      <p className="text-xs sm:text-sm text-slate-450">We believe in making concepts crystal clear, especially for regional medium students.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-slate-950/40 border border-slate-850 rounded-2xl space-y-3">
                        <div className="p-3 bg-violet-950/20 text-violet-400 border border-violet-500/10 rounded-xl w-fit">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-bold text-slate-200 text-base">Simple Meaning First</h3>
                        <p className="text-xs text-slate-450 leading-relaxed">We never explain English using difficult words. Everything is written as if a helpful human tutor is teaching you in person.</p>
                      </div>

                      <div className="p-6 bg-slate-950/40 border border-slate-850 rounded-2xl space-y-3">
                        <div className="p-3 bg-amber-950/20 text-amber-400 border border-amber-500/10 rounded-xl w-fit">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-bold text-slate-200 text-base">Real-Life Examples</h3>
                        <p className="text-xs text-slate-450 leading-relaxed">Instead of abstract definitions, we use scenarios you encounter daily to demonstrate grammatical rules.</p>
                      </div>

                      <div className="p-6 bg-slate-950/40 border border-slate-850 rounded-2xl space-y-3">
                        <div className="p-3 bg-emerald-950/20 text-emerald-400 border border-emerald-500/10 rounded-xl w-fit">
                          <Layers className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-bold text-slate-200 text-base">Visual Animations</h3>
                        <p className="text-xs text-slate-450 leading-relaxed">Prepositions are shown using moving objects; tenses are mapped on interactive timelines. We make grammar visible!</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Syllabus curriculum steps */}
                <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
                  <div className="text-center max-w-xl mx-auto space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">Curriculum Layout</h2>
                    <p className="text-xs sm:text-sm text-slate-450">A structured path designed to gradually elevate your scores from basic class 9 to advanced MBA entrance exams.</p>
                  </div>

                  <div className="relative border-l border-slate-800/80 ml-4 md:ml-10 pl-6 md:pl-10 space-y-10 max-w-3xl mx-auto">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="absolute -left-[35px] md:-left-[51px] w-6 h-6 md:w-8 md:h-8 bg-violet-600 border-4 border-dark-950 rounded-full flex items-center justify-center text-[10px] font-bold text-white font-mono">1</div>
                      <h3 className="text-base font-display font-bold text-slate-250">Foundation (Sentence, Nouns, Pronouns, Verbs...)</h3>
                      <p className="text-xs text-slate-450 mt-1 leading-relaxed">Fix the basic parts of speech. Learn how elements combine into thoughts without memorizing dry textbooks.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                      <div className="absolute -left-[35px] md:-left-[51px] w-6 h-6 md:w-8 md:h-8 bg-violet-600 border-4 border-dark-950 rounded-full flex items-center justify-center text-[10px] font-bold text-white font-mono">2</div>
                      <h3 className="text-base font-display font-bold text-slate-250">Grammar Rules (Tenses, Subject-Verb Agreement, Prepositions...)</h3>
                      <p className="text-xs text-slate-450 mt-1 leading-relaxed">Master the core building block rules of competitive exams. Learn triggers that spot sentence inconsistencies immediately.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                      <div className="absolute -left-[35px] md:-left-[51px] w-6 h-6 md:w-8 md:h-8 bg-violet-600 border-4 border-dark-950 rounded-full flex items-center justify-center text-[10px] font-bold text-white font-mono">3</div>
                      <h3 className="text-base font-display font-bold text-slate-250">Advanced Logic (Error Spotting, Cloze Test, Para Jumbles...)</h3>
                      <p className="text-xs text-slate-450 mt-1 leading-relaxed">Tackle high-weightage sections in Bank and SSC exams. Practice structure-matching and logic elimination.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="relative">
                      <div className="absolute -left-[35px] md:-left-[51px] w-6 h-6 md:w-8 md:h-8 bg-amber-500 border-4 border-dark-950 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-950 font-mono">4</div>
                      <h3 className="text-base font-display font-bold text-slate-250">Exam Level (SBI PO, IBPS, CAT VARC...)</h3>
                      <p className="text-xs text-slate-450 mt-1 leading-relaxed">Challenge yourself with previous year papers and predicted 2026 patterns. Test under actual sectional time limits.</p>
                    </div>
                  </div>

                  <div className="flex justify-center pt-6">
                    <button
                      onClick={() => handleNavigate('dashboard')}
                      className="px-6 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-display font-bold text-sm transition-all shadow-lg flex items-center gap-2"
                    >
                      Start Free Learning Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </section>

              </div>
            )}

            {/* 2. DASHBOARD */}
            {currentPage === 'dashboard' && (
              <Dashboard 
                onStartTopic={handleStartTopic} 
                onStartPaper={handleStartPaper} 
              />
            )}

            {/* 3. CLASSROOM */}
            {currentPage === 'classroom' && selectedTopic && (
              <TutorClassroom 
                topic={selectedTopic} 
                onBack={() => handleNavigate('dashboard')} 
              />
            )}

            {/* 4. PRACTICE PLAYGROUND */}
            {currentPage === 'playground' && (
              <PracticePlayground 
                onBack={() => handleNavigate('dashboard')} 
              />
            )}

            {/* 5. ADMIN PANEL */}
            {currentPage === 'admin' && (
              <AdminPanel 
                onBack={() => handleNavigate('dashboard')} 
              />
            )}

            {/* 6. MOCK PAPER TEST */}
            {currentPage === 'paper' && selectedPaper && (
              <MockPaperTest 
                paper={selectedPaper} 
                onBack={() => handleNavigate('dashboard')} 
              />
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/60 py-8 px-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 EnglishAce AI. Helping aspirants crack competitive exams, free forever.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => handleNavigate('landing')}>Home</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => handleNavigate('dashboard')}>Dashboard</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => handleNavigate('admin')}>Coaching Panel</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

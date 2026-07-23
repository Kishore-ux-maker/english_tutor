import React, { useState, useEffect } from 'react';
import { dbService } from '../../lib/db';
import { topics, categories } from '../../data/topics';
import { 
  BookOpen, 
  Award, 
  Book, 
  CheckCircle, 
  AlertCircle, 
  Volume2, 
  PlayCircle, 
  Sparkles,
  RefreshCw,
  Send,
  Database,
  User,
  ArrowRight
} from 'lucide-react';

export default function Dashboard({ onStartTopic, onStartPaper }) {
  const [profile, setProfile] = useState(null);
  const [progress, setProgress] = useState({});
  const [vocab, setVocab] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [paper, setPaper] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [vocabInputs, setVocabInputs] = useState({});
  const [vocabFeedback, setVocabFeedback] = useState({});
  const [submittingVocab, setSubmittingVocab] = useState({});
  const [dbConfig, setDbConfig] = useState({ url: '', key: '' });
  const [showConfig, setShowConfig] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    loadData();
    setIsConnected(dbService.isSupabaseConnected());
  }, []);

  const loadData = async () => {
    const prof = await dbService.getProfile();
    const prog = await dbService.getProgress();
    const voc = await dbService.getDailyVocab();
    const subs = await dbService.getVocabSubmissions();
    const pap = await dbService.getDailyMockPaper();
    const atts = await dbService.getMockAttempts();

    setProfile(prof);
    setProgress(prog);
    setVocab(voc);
    setSubmissions(subs);
    setPaper(pap);
    setAttempts(atts);
  };

  const handleVocabSentenceSubmit = async (vocabId, word) => {
    const sentence = vocabInputs[vocabId] || '';
    if (!sentence.trim()) return;

    setSubmittingVocab(prev => ({ ...prev, [vocabId]: true }));
    const result = await dbService.submitVocabSentence(vocabId, word, sentence);
    
    setVocabFeedback(prev => ({ ...prev, [vocabId]: result.ai_feedback }));
    setSubmittingVocab(prev => ({ ...prev, [vocabId]: false }));
    
    // reload submissions
    const subs = await dbService.getVocabSubmissions();
    setSubmissions(subs);
  };

  const handleSaveConfig = () => {
    if (dbConfig.url && dbConfig.key) {
      dbService.saveSupabaseConfig(dbConfig.url, dbConfig.key);
    }
  };

  const handleClearConfig = () => {
    dbService.clearSupabaseConfig();
  };

  // Browser Speech Synthesis for Pronunciation
  const speakWord = (word) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.85; // slightly slower for absolute clarity
      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback to placeholder audio
      const audio = new Audio("https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg");
      audio.play();
    }
  };

  // Calculate Progress Stats
  const totalTopicsCount = topics.length;
  const completedTopicsCount = Object.keys(progress).filter(k => progress[k]?.completed).length;
  const completionPercentage = totalTopicsCount > 0 
    ? Math.round((completedTopicsCount / totalTopicsCount) * 100) 
    : 0;

  // Calculate Accuracy
  const progressEntries = Object.values(progress);
  const averageAccuracy = progressEntries.length > 0
    ? Math.round(progressEntries.reduce((sum, item) => sum + (item.accuracy_rate || 0), 0) / progressEntries.length)
    : 0;

  // Classify topics as weak or strong based on score
  const weakTopics = [];
  const strongTopics = [];

  Object.entries(progress).forEach(([topicId, data]) => {
    const t = topics.find(tp => tp.id === topicId);
    if (!t) return;
    if (data.accuracy_rate < 70) {
      weakTopics.push(t.title);
    } else {
      strongTopics.push(t.title);
    }
  });

  const latestAttempt = attempts[0];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 flex-1 flex flex-col gap-8">
      
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-widest font-display mb-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Study Assistant Active
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-1">
            Hello, {profile?.full_name || 'Aspirant'}
          </h1>
          <p className="text-sm text-slate-400">
            Learn English conceptually from scratch. Focus on understanding, not memorization.
          </p>
        </div>

        {/* Database Config Controller */}
        <div className="relative">
          <button
            onClick={() => setShowConfig(!showConfig)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold font-display border transition-all ${
              isConnected
                ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border-slate-800'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            {isConnected ? 'Supabase Sync Active' : 'Supabase Offline Mode'}
          </button>

          {showConfig && (
            <div className="absolute right-0 mt-2 w-80 glass-panel border border-slate-800 rounded-2xl p-5 shadow-2xl z-50">
              <h3 className="text-sm font-display font-semibold text-slate-100 mb-1">Database Connection Setup</h3>
              <p className="text-[11px] text-slate-400 mb-4">Sync your exam papers, vocabulary, and profile scores directly to your Supabase project.</p>
              
              {isConnected ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-400">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    Successfully synced with Supabase.
                  </div>
                  <button
                    onClick={handleClearConfig}
                    className="w-full py-2 bg-red-950/30 hover:bg-red-950/40 border border-red-500/20 rounded-xl text-red-300 text-xs font-semibold font-display transition-all"
                  >
                    Disconnect Database
                  </button>
                </div>
              ) : (
                <div className="space-y-3.5">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block mb-1">Supabase Project URL</label>
                    <input
                      type="text"
                      placeholder="https://your-project.supabase.co"
                      value={dbConfig.url}
                      onChange={(e) => setDbConfig(prev => ({ ...prev, url: e.target.value }))}
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block mb-1">Supabase Anon Key</label>
                    <input
                      type="password"
                      placeholder="eyJhbGciOi..."
                      value={dbConfig.key}
                      onChange={(e) => setDbConfig(prev => ({ ...prev, key: e.target.value }))}
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <button
                    onClick={handleSaveConfig}
                    className="w-full py-2 bg-violet-600 hover:bg-violet-500 rounded-xl text-white text-xs font-semibold font-display transition-all shadow-md shadow-violet-500/20"
                  >
                    Connect & Save Sync
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Grid of Main Dashboard Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Progress Stats & Daily PO Card */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Stat summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Completion Rate */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 flex items-center gap-4">
              <div className="p-3.5 bg-violet-950/40 rounded-xl border border-violet-500/10">
                <BookOpen className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Syllabus Completion</span>
                <span className="text-2xl font-display font-extrabold text-slate-100">{completionPercentage}%</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">({completedTopicsCount}/{totalTopicsCount} topics)</span>
              </div>
            </div>

            {/* Average Accuracy */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 flex items-center gap-4">
              <div className="p-3.5 bg-amber-950/40 rounded-xl border border-amber-500/10">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Average Accuracy</span>
                <span className="text-2xl font-display font-extrabold text-slate-100">{averageAccuracy}%</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Based on quizzes solved</span>
              </div>
            </div>
          </div>

          {/* Daily Mock Exam Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-dark-800 to-dark-900 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-3 max-w-md">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400">
                <Sparkles className="w-3 h-3" /> Predicted 2026 Exam Trend
              </div>
              <h2 className="text-2xl font-display font-bold text-slate-100">
                {paper?.title || "Daily SBI PO Mock Test"}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Take today's simulated paper built exactly on SBI PO patterns. Contains 5 questions with sectional 20-minute limits. Immediately receive analysis of weak topics.
              </p>
              
              {latestAttempt && (
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center gap-3 text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block">Latest Attempt Score: <strong className="text-slate-200">{latestAttempt.score}/{latestAttempt.total_score}</strong></span>
                    <span className="text-[10px] text-slate-500">{new Date(latestAttempt.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => onStartPaper(paper)}
                className="px-6 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-display font-bold text-sm transition-all flex items-center gap-2.5 shadow-lg shadow-violet-500/25 shrink-0"
              >
                Solve Today's Paper <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Curriculum Explorer */}
          <div className="space-y-4">
            <h2 className="text-xl font-display font-bold text-slate-100 flex items-center gap-2">
              <Book className="w-5 h-5 text-violet-400" /> Syllabus Learning Path
            </h2>
            
            <div className="space-y-6">
              {categories.map(cat => (
                <div key={cat.name} className="space-y-2.5">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-display">{cat.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {cat.topics.map(topicId => {
                      const topic = topics.find(t => t.id === topicId);
                      if (!topic) return null;
                      const stats = progress[topicId];
                      return (
                        <div
                          key={topicId}
                          onClick={() => onStartTopic(topic)}
                          className="glass-panel glass-panel-hover rounded-xl p-4 cursor-pointer flex flex-col justify-between min-h-[96px]"
                        >
                          <div>
                            <div className="flex justify-between items-start">
                              <span className="font-display font-bold text-sm text-slate-200">{topic.title}</span>
                              {stats?.completed && (
                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                              )}
                            </div>
                            <span className="text-[10px] text-slate-400 block mt-1 line-clamp-1">{topic.description}</span>
                          </div>

                          {stats && (
                            <div className="flex items-center gap-2 mt-3 text-[10px] text-slate-400 font-semibold border-t border-slate-800/60 pt-2">
                              <span>Score: {stats.accuracy_rate}%</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Strong/Weak lists & Daily Vocab */}
        <div className="flex flex-col gap-8">
          
          {/* Weak / Strong Topics */}
          {(weakTopics.length > 0 || strongTopics.length > 0) && (
            <div className="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col gap-4">
              <h2 className="text-sm font-bold uppercase tracking-wider font-display text-slate-400 border-b border-slate-800 pb-2">Topic Analysis</h2>
              
              {weakTopics.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> Weak Topics (Focus Here)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {weakTopics.map(t => (
                      <span key={t} className="px-2 py-1 bg-rose-950/20 border border-rose-500/20 text-rose-300 text-[10px] font-semibold rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {strongTopics.length > 0 && (
                <div className="mt-2">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-2 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> Strong Topics (Review)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {strongTopics.map(t => (
                      <span key={t} className="px-2 py-1 bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 text-[10px] font-semibold rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Daily Vocabulary Section */}
          <div className="glass-panel rounded-3xl p-5 md:p-6 border border-slate-800 flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-lg font-display font-bold text-slate-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" /> Daily Vocab Builder
                </h2>
                <p className="text-[10px] text-slate-400 mt-0.5">Learn 5 words, write sentences, get feedback</p>
              </div>
            </div>

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
              {vocab.map(v => {
                const sub = submissions.find(s => s.vocab_id === v.id);
                const feedback = vocabFeedback[v.id];

                return (
                  <div key={v.id} className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800/80 space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-extrabold text-sm text-amber-300">{v.word}</span>
                        <button
                          onClick={() => speakWord(v.word)}
                          className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-200 transition-all"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      {sub?.is_approved && (
                        <span className="px-1.5 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-500/20 text-[9px] font-bold rounded">Approved</span>
                      )}
                    </div>
                    
                    <div>
                      <p className="text-xs text-slate-300 leading-relaxed"><strong className="text-slate-400 font-normal">Meaning:</strong> {v.meaning}</p>
                      <p className="text-xs text-slate-400 italic mt-1 leading-relaxed"><strong className="text-slate-400 font-normal not-italic">Example:</strong> "{v.example}"</p>
                    </div>

                    {/* Sentence builder submission */}
                    {!sub ? (
                      <div className="space-y-2 pt-1.5 border-t border-slate-800/60">
                        <label className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold block">Create one sentence using "{v.word}":</label>
                        <div className="flex gap-1.5">
                          <input
                            type="text"
                            placeholder="Write your sentence here..."
                            value={vocabInputs[v.id] || ''}
                            onChange={(e) => setVocabInputs(prev => ({ ...prev, [v.id]: e.target.value }))}
                            className="flex-1 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-violet-500 placeholder-slate-600"
                          />
                          <button
                            onClick={() => handleVocabSentenceSubmit(v.id, v.word)}
                            disabled={submittingVocab[v.id]}
                            className="px-2.5 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-40"
                          >
                            <Send className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="pt-2 border-t border-slate-800/60 space-y-1.5 text-[11px]">
                        <p className="text-slate-400 leading-relaxed"><strong className="font-semibold text-slate-300">Your sentence:</strong> "{sub.user_sentence}"</p>
                        <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800 text-[10px] text-slate-400 leading-relaxed">
                          <span className="font-bold text-violet-400 block mb-0.5">AI Teacher:</span>
                          {sub.ai_feedback}
                        </div>
                      </div>
                    )}

                    {/* Temporary unsaved feedback state */}
                    {feedback && !sub && (
                      <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800 text-[10px] text-slate-400 mt-2 leading-relaxed">
                        <span className="font-bold text-violet-400 block mb-0.5">AI Teacher:</span>
                        {feedback}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

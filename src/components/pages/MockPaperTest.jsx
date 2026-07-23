import React, { useState, useEffect } from 'react';
import { dbService } from '../../lib/db';
import { 
  ArrowLeft, 
  Clock, 
  HelpCircle, 
  CheckCircle, 
  Award,
  ChevronRight,
  BookOpen,
  Sparkles
} from 'lucide-react';

export default function MockPaperTest({ paper, onBack, onFinish }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [completed, setCompleted] = useState(false);
  const [attemptResult, setAttemptResult] = useState(null);
  const [reviewMode, setReviewMode] = useState(false);

  // Timer Countdown Effect
  useEffect(() => {
    if (completed) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit when timer hits zero
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [completed]);

  const handleSelectOption = (questionId, option) => {
    if (completed) return;
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = async () => {
    setCompleted(true);
    
    // Calculate Score
    let correctCount = 0;
    paper.questions.forEach(q => {
      if (answers[q.id] === q.answer) {
        correctCount += 1;
      }
    });

    const result = await dbService.submitMockPaperAttempt(paper.id, correctCount, paper.questions.length, answers);
    setAttemptResult(result.analysis);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = paper.questions[currentIdx];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 flex-1 flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-850 pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-slate-200 transition-all border border-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block font-display">Exam Simulator</span>
            <h2 className="text-xl font-display font-extrabold text-slate-100">{paper.title}</h2>
          </div>
        </div>

        {/* Section Timer */}
        {!completed && (
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 border border-slate-800 rounded-2xl text-amber-400 font-mono font-bold text-xs">
            <Clock className="w-4 h-4 animate-pulse text-amber-400" />
            <span>Time Left: {formatTime(timeLeft)}</span>
          </div>
        )}
      </div>

      {!completed ? (
        // ACTIVE EXAM STATE
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Main Question Area */}
          <div className="lg:col-span-2 glass-panel border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-850 pb-4">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-display">
                Question {currentIdx + 1} of {paper.questions.length}
              </span>
              <span className="px-2 py-0.5 bg-violet-950 text-violet-400 border border-violet-500/20 text-[9px] font-bold rounded uppercase tracking-wider">
                {currentQuestion.difficulty}
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 block flex items-center gap-1"><HelpCircle className="w-3.5 h-3.5 text-violet-400" /> Question:</span>
              <p className="text-base md:text-lg font-display font-medium text-slate-100 leading-relaxed select-all">
                {currentQuestion.question}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = answers[currentQuestion.id] === option;
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentQuestion.id, option)}
                    className={`w-full text-left p-4 border rounded-2xl text-xs md:text-sm font-semibold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-violet-500 text-violet-300 bg-violet-950/20 shadow-md shadow-violet-500/10'
                        : 'border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-350'
                    }`}
                  >
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-850">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(prev => prev - 1)}
                className="px-4 py-2 border border-slate-800 rounded-xl text-slate-400 hover:text-slate-200 text-xs font-semibold font-display disabled:opacity-30"
              >
                Previous
              </button>
              
              {currentIdx + 1 < paper.questions.length ? (
                <button
                  onClick={() => setCurrentIdx(prev => prev + 1)}
                  className="px-4 py-2 bg-slate-850 hover:bg-slate-800 rounded-xl text-slate-200 text-xs font-semibold font-display"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold font-display shadow-md shadow-violet-500/25"
                >
                  Submit Exam Paper
                </button>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Question Navigation Grid */}
          <div className="glass-panel border border-slate-800 rounded-3xl p-5 md:p-6 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display">Question Navigator</h3>
            
            <div className="grid grid-cols-5 gap-2">
              {paper.questions.map((q, idx) => {
                const isSelected = currentIdx === idx;
                const isAnswered = answers[q.id] !== undefined;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                      isSelected
                        ? 'bg-violet-600 text-white scale-110 shadow-md'
                        : isAnswered
                        ? 'bg-slate-800 text-violet-400 border border-violet-500/20'
                        : 'bg-slate-900 border border-slate-850 text-slate-500 hover:bg-slate-800'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-850 text-[10px] text-slate-500 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded bg-violet-600" />
                <span>Active Question</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded bg-slate-800 border border-violet-500/20" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded bg-slate-900 border border-slate-850" />
                <span>Unanswered</span>
              </div>
            </div>
          </div>

        </div>
      ) : (
        // RESULTS STAGE
        <div className="space-y-6">
          
          {/* Main score details card */}
          <div className="glass-panel border border-slate-800 rounded-3xl p-6 md:p-8 text-center flex flex-col items-center justify-center gap-5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="p-4 bg-amber-950/40 rounded-full border border-amber-500/15">
              <Award className="w-10 h-10 text-amber-400" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-display font-extrabold text-slate-100">Paper Submitted Successfully</h3>
              <p className="text-sm text-slate-400">Scorecard and AI performance analysis generated.</p>
            </div>

            {/* Score Stats */}
            {attemptResult && (
              <div className="space-y-4">
                <div className="bg-slate-900 border border-slate-850 rounded-2xl px-6 py-4 flex gap-8 justify-center">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Correct</span>
                    <span className="text-xl font-display font-extrabold text-slate-100">{attemptResult.score}/{attemptResult.totalScore}</span>
                  </div>
                  <div className="border-l border-slate-800" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Percentage</span>
                    <span className="text-xl font-display font-extrabold text-slate-100">{attemptResult.percentage}%</span>
                  </div>
                </div>

                {/* AI Performance Commentary */}
                <div className="p-4 bg-slate-950 border border-slate-850 rounded-2xl max-w-lg mx-auto text-xs text-slate-400 leading-relaxed">
                  <span className="font-bold text-violet-400 block mb-1.5 flex items-center justify-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-amber-400" /> AI Tutor Evaluation:</span>
                  {attemptResult.feedback}
                </div>
              </div>
            )}
          </div>

          {/* Weak & Strong topics analysis */}
          {attemptResult && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-900 border border-slate-850 rounded-2xl space-y-3">
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block flex items-center gap-1.5">
                  Weak Areas (Improve here)
                </span>
                {attemptResult.weakAreas.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {attemptResult.weakAreas.map(t => (
                      <span key={t} className="px-2.5 py-1.5 bg-rose-950/20 border border-rose-500/20 text-rose-300 text-xs font-semibold rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-xs text-slate-500 italic block">None! Amazing.</span>
                )}
              </div>

              <div className="p-5 bg-slate-900 border border-slate-850 rounded-2xl space-y-3">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block flex items-center gap-1.5">
                  Strong Areas (Well Done!)
                </span>
                {attemptResult.strongAreas.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {attemptResult.strongAreas.map(t => (
                      <span key={t} className="px-2.5 py-1.5 bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-xs text-slate-500 italic block">Try reviewing your answers to build strong areas.</span>
                )}
              </div>
            </div>
          )}

          {/* Toggle review mistakes */}
          {!reviewMode ? (
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setReviewMode(true)}
                className="px-5 py-3 bg-slate-850 hover:bg-slate-850/80 border border-slate-800 text-slate-200 text-xs font-bold font-display rounded-2xl"
              >
                Review Step-by-Step Mistakes
              </button>
              <button
                onClick={onBack}
                className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold font-display rounded-2xl shadow-lg shadow-violet-500/20"
              >
                Back to Dashboard
              </button>
            </div>
          ) : (
            // REVIEW QUESTIONS WITH MISTAKE EXPLANATION
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display px-2">Detailed Question Review</h3>
              <div className="space-y-4">
                {paper.questions.map((q, idx) => {
                  const userAns = answers[q.id];
                  const isCorrect = userAns === q.answer;

                  return (
                    <div key={q.id} className="p-5 bg-slate-900 border border-slate-850 rounded-2xl space-y-3">
                      <div className="flex justify-between items-start gap-2">
                        <p className="text-xs font-semibold text-slate-200">
                          {idx + 1}. {q.question}
                        </p>
                        <span className={`px-1.5 py-0.5 text-[9px] font-bold rounded ${
                          isCorrect ? 'bg-emerald-950 text-emerald-400' : 'bg-rose-950 text-rose-400'
                        }`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                        <div className={`p-2 rounded bg-slate-950 border ${
                          isCorrect ? 'border-emerald-500/20 text-emerald-450' : 'border-rose-500/20 text-rose-300'
                        }`}>
                          <span className="font-bold block text-[9px] uppercase tracking-wider text-slate-500 mb-0.5">Your Response</span>
                          {userAns || '(No Answer Selected)'}
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-emerald-500/20 text-emerald-300">
                          <span className="font-bold block text-[9px] uppercase tracking-wider text-emerald-400 mb-0.5">Correct Answer</span>
                          {q.answer}
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-400 leading-relaxed border-t border-slate-850 pt-2.5 italic">
                        <strong className="text-slate-350 font-normal not-italic">AI Teacher: </strong>
                        {q.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center pt-4">
                <button
                  onClick={onBack}
                  className="px-6 py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-display font-bold text-xs shadow-md shadow-violet-500/20"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
export { MockPaperTest };

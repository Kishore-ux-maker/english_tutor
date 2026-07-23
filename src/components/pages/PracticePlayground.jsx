import React, { useState } from 'react';
import { dbService } from '../../lib/db';
import { topics } from '../../data/topics';
import { 
  ArrowLeft, 
  HelpCircle, 
  CheckCircle, 
  Sparkles,
  RefreshCw,
  Play,
  Award
} from 'lucide-react';

export default function PracticePlayground({ onBack }) {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]?.id || '');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Beginner');
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setQuestions([]);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setFinished(false);

    try {
      const generated = await dbService.generateAIQuestions(selectedTopic, selectedDifficulty);
      setQuestions(generated);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === questions[currentIdx].answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const currentQuestion = questions[currentIdx];
  const activeTopicObj = topics.find(t => t.id === selectedTopic);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 flex-1 flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-slate-200 transition-all border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block font-display">Practice Mode</span>
          <h2 className="text-xl font-display font-extrabold text-slate-100">AI Practice Playground</h2>
        </div>
      </div>

      {questions.length === 0 ? (
        // CONFIGURATION STAGE
        <div className="glass-panel border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-md font-display font-semibold text-slate-150 flex items-center gap-2">
              <Sparkles className="w-4.5 h-4.5 text-amber-400" /> Unlimited AI Question Generator
            </h3>
            <p className="text-xs text-slate-400">Select your parameters, and the tutor AI will assemble a customized quiz package immediately.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Topic selector */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-display">Target Topic</label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-350 focus:outline-none focus:border-violet-500 font-semibold"
              >
                {topics.map(t => (
                  <option key={t.id} value={t.id}>{t.title} ({t.category})</option>
                ))}
              </select>
            </div>

            {/* Difficulty selector */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-display">Difficulty Level</label>
              <div className="grid grid-cols-4 gap-2">
                {['Beginner', 'Intermediate', 'Advanced', 'PYQ'].map(diff => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`py-2 px-1 rounded-xl text-[10px] font-bold font-display border transition-all ${
                      selectedDifficulty === diff
                        ? 'bg-violet-600 border-violet-500 text-white'
                        : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800 text-slate-400'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="px-6 py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-display font-bold text-xs transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Generating Questions...
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" /> Start Practice Set
                </>
              )}
            </button>
          </div>
        </div>
      ) : finished ? (
        // SCORES STAGE
        <div className="glass-panel border border-slate-800 rounded-3xl p-6 md:p-8 text-center flex flex-col items-center justify-center gap-6">
          <div className="p-4 bg-emerald-950/40 rounded-full border border-emerald-500/15">
            <Award className="w-10 h-10 text-emerald-400" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-display font-bold text-slate-100">Practice Completed!</h3>
            <p className="text-xs text-slate-400">Great job polishing your fundamentals on {activeTopicObj?.title}.</p>
          </div>

          <div className="bg-slate-900 border border-slate-850 rounded-2xl px-8 py-4 flex gap-8">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Accuracy</span>
              <span className="text-xl font-display font-extrabold text-slate-100">{Math.round((score / questions.length) * 100)}%</span>
            </div>
            <div className="border-l border-slate-800" />
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Score</span>
              <span className="text-xl font-display font-extrabold text-slate-100">{score}/{questions.length}</span>
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <button
              onClick={() => setQuestions([])}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold font-display rounded-xl"
            >
              Configure New Set
            </button>
            <button
              onClick={handleGenerate}
              className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold font-display rounded-xl shadow-md shadow-violet-500/25"
            >
              Solve Same Type Again
            </button>
          </div>
        </div>
      ) : (
        // QUIZ PLAYING STAGE
        <div className="glass-panel border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="flex justify-between items-center border-b border-slate-850 pb-4">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-display">
              AI Set • Question {currentIdx + 1} of {questions.length}
            </span>
            <span className="px-2 py-0.5 bg-violet-950 text-violet-400 border border-violet-500/20 text-[9px] font-bold rounded uppercase tracking-wider">
              {selectedDifficulty}
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
              const isSelected = selectedOption === option;
              const isCorrectAns = option === currentQuestion.answer;
              
              let optionStyle = "border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-350";
              if (isAnswered) {
                if (isCorrectAns) {
                  optionStyle = "border-emerald-500 text-emerald-300 bg-emerald-950/20";
                } else if (isSelected) {
                  optionStyle = "border-rose-500 text-rose-300 bg-rose-950/20";
                } else {
                  optionStyle = "border-slate-850 bg-slate-900/20 text-slate-500 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 border rounded-2xl text-xs md:text-sm font-semibold transition-all flex items-center justify-between ${optionStyle}`}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrectAns && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className={`p-5 rounded-2xl border text-xs leading-relaxed space-y-2 ${
              selectedOption === currentQuestion.answer
                ? 'bg-emerald-950/15 border-emerald-500/20 text-slate-300'
                : 'bg-rose-950/15 border-rose-500/20 text-slate-350'
            }`}>
              <span className="font-extrabold text-sm block font-display">
                {selectedOption === currentQuestion.answer 
                  ? '🎉 Correct! Excellent logic.' 
                  : "Good attempt. Let's understand it again."
                }
              </span>
              <p className="text-xs text-slate-400 italic">
                <strong className="text-slate-300 font-normal not-italic">Teacher's Explanation:</strong> {currentQuestion.explanation}
              </p>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold font-display transition-all"
                >
                  {currentIdx + 1 < questions.length ? 'Next Question' : 'View Results'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
export { PracticePlayground };

import React, { useState } from 'react';
import { dbService } from '../../lib/db';
import CatPrepositions from '../animations/CatPrepositions';
import TenseTimeline from '../animations/TenseTimeline';
import SentenceBuilder from '../animations/SentenceBuilder';
import { 
  ArrowLeft, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  Award,
  ChevronRight,
  Info,
  CheckCircle,
  PlayCircle
} from 'lucide-react';

export default function TutorClassroom({ topic, onBack }) {
  const [step, setStep] = useState('explanation'); // explanation, animation, practice, summary
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongAnswersList, setWrongAnswersList] = useState([]);
  
  const totalQuestions = topic.questions.length;
  const currentQuestion = topic.questions[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === currentQuestion.answer;
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      setWrongAnswersList(prev => [...prev, {
        question: currentQuestion.question,
        selected: option,
        correct: currentQuestion.answer,
        explanation: currentQuestion.explanation
      }]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Finished all questions - transition to Summary
      setStep('summary');
      dbService.updateTopicProgress(topic.id, topic.category, correctCount + (selectedOption === currentQuestion.answer ? 1 : 0), totalQuestions);
    }
  };

  // Render the visual animation widget dynamically
  const renderAnimationWidget = () => {
    const type = topic.explanation.animationType;
    if (type === 'catPrepositions') return <CatPrepositions />;
    if (type === 'tenseTimeline') return <TenseTimeline />;
    return <SentenceBuilder />; // Default/sentence builder
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 flex-1 flex flex-col gap-6">
      
      {/* Back & Breadcrumb header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-slate-200 transition-all border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block font-display">{topic.category}</span>
          <h2 className="text-xl font-display font-extrabold text-slate-100">{topic.title}</h2>
        </div>
      </div>

      {/* Classroom Progress Tabs */}
      <div className="flex border-b border-slate-850 gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setStep('explanation')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold font-display transition-all ${
            step === 'explanation'
              ? 'bg-violet-600 text-white'
              : 'bg-slate-900/40 text-slate-450 hover:bg-slate-800/40'
          }`}
        >
          1. Core Concept
        </button>
        <button
          onClick={() => setStep('animation')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold font-display transition-all ${
            step === 'animation'
              ? 'bg-violet-600 text-white'
              : 'bg-slate-900/40 text-slate-450 hover:bg-slate-800/40'
          }`}
        >
          2. Visual Playground
        </button>
        <button
          onClick={() => setStep('practice')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold font-display transition-all ${
            step === 'practice'
              ? 'bg-violet-600 text-white'
              : 'bg-slate-900/40 text-slate-450 hover:bg-slate-800/40'
          }`}
        >
          3. Topic Practice
        </button>
        {correctCount > 0 && (
          <button
            onClick={() => setStep('summary')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-display transition-all ${
              step === 'summary'
                ? 'bg-violet-600 text-white'
                : 'bg-slate-900/40 text-slate-450 hover:bg-slate-800/40'
            }`}
          >
            4. Review Summary
          </button>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        
        {/* STEP 1: EXPLANATION */}
        {step === 'explanation' && (
          <div className="space-y-6">
            {/* Simple Meaning */}
            <div className="glass-panel border border-slate-800 rounded-3xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-violet-400 uppercase tracking-widest font-display">
                <BookOpen className="w-4 h-4" /> The Simple Meaning
              </div>
              <p className="text-sm md:text-base text-slate-350 leading-relaxed font-display">
                {topic.explanation.meaning}
              </p>
            </div>

            {/* Real Life Examples */}
            <div className="glass-panel border border-slate-800 rounded-3xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest font-display">
                <Sparkles className="w-4 h-4" /> Real-Life Scenarios
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topic.explanation.realLifeExamples.map((ex, idx) => (
                  <div key={idx} className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Example {idx + 1}</span>
                    <p className="text-sm font-semibold text-slate-200 font-display">"{ex.text}"</p>
                    <p className="text-xs text-slate-400 italic">
                      <strong className="text-slate-300 font-normal not-italic">Teacher Breakdown:</strong> {ex.analysis}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Concepts List */}
            {topic.explanation.keyConcepts && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-display px-2">Key Rules to Keep in Mind</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {topic.explanation.keyConcepts.map((concept, idx) => (
                    <div key={idx} className="p-5 bg-slate-900/40 border border-slate-850 rounded-2xl space-y-2">
                      <h4 className="text-xs font-extrabold text-slate-300 font-display flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-violet-400" /> {concept.name}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{concept.description}</p>
                      <p className="text-[11px] text-amber-300 font-semibold mt-1">Example: {concept.example}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nav button to visual play */}
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setStep('animation')}
                className="px-5 py-3 bg-violet-600 hover:bg-violet-500 rounded-2xl text-white text-xs font-bold font-display transition-all flex items-center gap-2 shadow-md shadow-violet-500/20"
              >
                Go to Visual Playground <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: ANIMATION */}
        {step === 'animation' && (
          <div className="space-y-6">
            <div className="p-4 bg-violet-950/20 border border-violet-500/10 rounded-2xl text-xs text-slate-300 flex items-start gap-2.5">
              <PlayCircle className="w-5 h-5 text-violet-400 shrink-0" />
              <div>
                <strong className="text-white block font-display">Why visual practice?</strong>
                Seeing structures changes the way your brain processes language. Interact with the widgets below to get a concrete feel for {topic.title.toLowerCase()}.
              </div>
            </div>
            
            {renderAnimationWidget()}

            {/* Nav button to practice */}
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setStep('practice')}
                className="px-5 py-3 bg-violet-600 hover:bg-violet-500 rounded-2xl text-white text-xs font-bold font-display transition-all flex items-center gap-2 shadow-md shadow-violet-500/20"
              >
                Start Practice Quizzes <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: PRACTICE */}
        {step === 'practice' && (
          <div className="space-y-6">
            
            {/* Question card */}
            <div className="glass-panel border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
              
              {/* Question metadata header */}
              <div className="flex justify-between items-center border-b border-slate-850 pb-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-display">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
                <span className={`px-2 py-0.5 text-[9px] font-bold rounded uppercase tracking-wider ${
                  currentQuestion.difficulty === 'Beginner' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/20' :
                  currentQuestion.difficulty === 'Intermediate' ? 'bg-amber-950 text-amber-400 border border-amber-500/20' :
                  currentQuestion.difficulty === 'Advanced' ? 'bg-rose-950 text-rose-400 border border-rose-500/20' :
                  'bg-violet-950 text-violet-400 border border-violet-500/20'
                }`}>
                  {currentQuestion.difficulty} Level
                </span>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 block flex items-center gap-1"><HelpCircle className="w-3.5 h-3.5 text-violet-400" /> Challenge:</span>
                <p className="text-base md:text-lg font-display font-medium text-slate-100 leading-relaxed select-all">
                  {currentQuestion.question}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === option;
                  const isCorrectAns = option === currentQuestion.answer;
                  
                  let optionStyle = "border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-300";
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
                      className={`w-full text-left p-4 border rounded-2xl text-sm font-semibold transition-all flex items-center justify-between ${optionStyle}`}
                    >
                      <span>{option}</span>
                      {isAnswered && isCorrectAns && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanations */}
              {isAnswered && (
                <div className={`p-5 rounded-2xl border text-xs leading-relaxed space-y-2.5 ${
                  selectedOption === currentQuestion.answer
                    ? 'bg-emerald-950/15 border-emerald-500/20 text-slate-300'
                    : 'bg-rose-950/15 border-rose-500/20 text-slate-350'
                }`}>
                  <span className="font-extrabold text-sm block font-display">
                    {selectedOption === currentQuestion.answer 
                      ? '🎉 Spot on! Beautifully answered.' 
                      : "Good attempt. Let's understand it again."
                    }
                  </span>
                  <p className="text-xs text-slate-400 italic">
                    <strong className="text-slate-300 font-normal not-italic">Teacher's Explanation:</strong> {currentQuestion.explanation}
                  </p>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold font-display transition-all flex items-center gap-1.5"
                    >
                      {currentQuestionIndex + 1 < totalQuestions ? 'Next Question' : 'View Summary'} <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* STEP 4: SUMMARY */}
        {step === 'summary' && (
          <div className="space-y-6">
            
            {/* Scorecard panel */}
            <div className="glass-panel border border-slate-800 rounded-3xl p-6 md:p-8 text-center flex flex-col items-center justify-center gap-5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="p-4 bg-emerald-950/40 rounded-full border border-emerald-500/15">
                <Award className="w-10 h-10 text-emerald-400" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl font-display font-extrabold text-slate-100">Congratulations!</h3>
                <p className="text-sm text-slate-400">You have successfully studied <strong>{topic.title}</strong>.</p>
              </div>

              {/* Progress metric */}
              <div className="bg-slate-900 border border-slate-850 rounded-2xl px-6 py-4 flex gap-8">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Accuracy</span>
                  <span className="text-xl font-display font-extrabold text-slate-100">{Math.round((correctCount / totalQuestions) * 100)}%</span>
                </div>
                <div className="border-l border-slate-800" />
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Solved</span>
                  <span className="text-xl font-display font-extrabold text-slate-100">{correctCount}/{totalQuestions}</span>
                </div>
              </div>

              <p className="text-xs text-slate-450 italic max-w-md">
                Your progress is saved. Solving and understanding questions consistently builds a solid foundation for exams!
              </p>
            </div>

            {/* Review Mistakes section */}
            {wrongAnswersList.length > 0 && (
              <div className="space-y-3.5">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-display px-2">Review Areas of Improvement</h3>
                <div className="space-y-3">
                  {wrongAnswersList.map((item, idx) => (
                    <div key={idx} className="p-5 bg-slate-900/60 border border-slate-850 rounded-2xl space-y-3">
                      <p className="text-xs font-semibold text-slate-200">{item.question}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded bg-rose-950/20 border border-rose-500/10 text-rose-300">
                          <span className="font-bold block text-[9px] uppercase tracking-wider text-rose-400">Your Answer</span>
                          {item.selected}
                        </div>
                        <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/10 text-emerald-300">
                          <span className="font-bold block text-[9px] uppercase tracking-wider text-emerald-400">Correct Answer</span>
                          {item.correct}
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-400 leading-relaxed border-t border-slate-850 pt-2 italic">
                        <strong className="text-slate-350 font-normal not-italic">Why? </strong>
                        {item.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Return action button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={onBack}
                className="px-6 py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-display font-bold text-sm transition-all shadow-lg shadow-violet-500/25"
              >
                Back to Dashboard
              </button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
export { TutorClassroom };

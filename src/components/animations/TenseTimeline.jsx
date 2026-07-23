import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TenseTimeline() {
  const [time, setTime] = useState('present'); // past, present, future
  const [aspect, setAspect] = useState('simple'); // simple, continuous, perfect, perfect_continuous

  const times = [
    { id: 'past', label: 'PAST' },
    { id: 'present', label: 'PRESENT' },
    { id: 'future', label: 'FUTURE' }
  ];

  const aspects = [
    { id: 'simple', label: 'Simple / Indefinite', desc: 'Used for habits, general facts, or completed single actions.' },
    { id: 'continuous', label: 'Continuous', desc: 'Used for ongoing actions happening at a specific time.' },
    { id: 'perfect', label: 'Perfect', desc: 'Used for actions completed prior to a point of reference.' },
    { id: 'perfect_continuous', label: 'Perfect Continuous', desc: 'Used for ongoing actions that happen over a duration of time.' }
  ];

  // Dynamic sentence examples
  const examples = {
    past: {
      simple: { sentence: "I wrote an email yesterday.", formula: "Subject + V2 + Object", timelineDesc: "Happened at a single point in the past." },
      continuous: { sentence: "I was writing an email when you called.", formula: "Subject + was/were + V-ing + Object", timelineDesc: "Was ongoing in the past when another action occurred." },
      perfect: { sentence: "I had written the email before the meeting started.", formula: "Subject + had + V3 + Object", timelineDesc: "Completed in the past before another past action." },
      perfect_continuous: { sentence: "I had been writing emails for two hours before the server crashed.", formula: "Subject + had been + V-ing + Object", timelineDesc: "Ongoing past action over a duration before a past limit." }
    },
    present: {
      simple: { sentence: "I write emails daily.", formula: "Subject + V1(s/es) + Object", timelineDesc: "Regular habit, routine, or general fact." },
      continuous: { sentence: "I am writing an email right now.", formula: "Subject + is/am/are + V-ing + Object", timelineDesc: "Happening exactly now in the present moment." },
      perfect: { sentence: "I have written the email already.", formula: "Subject + has/have + V3 + Object", timelineDesc: "Completed just now, with an effect on the present." },
      perfect_continuous: { sentence: "I have been writing emails since 9 AM.", formula: "Subject + has/have been + V-ing + Object", timelineDesc: "Started in the past, continuing in the present, with a duration." }
    },
    future: {
      simple: { sentence: "I will write the email tomorrow.", formula: "Subject + will + V1 + Object", timelineDesc: "Action that will occur at some point in the future." },
      continuous: { sentence: "I will be writing emails during the conference.", formula: "Subject + will be + V-ing + Object", timelineDesc: "Action that will be ongoing at a specific future time." },
      perfect: { sentence: "I will have written the email by Monday.", formula: "Subject + will have + V3 + Object", timelineDesc: "Will be completed before a specific deadline in the future." },
      perfect_continuous: { sentence: "I will have been writing emails for five hours by the time I log off.", formula: "Subject + will have been + V-ing + Object", timelineDesc: "Ongoing future action measured as a duration up to a future point." }
    }
  };

  const current = examples[time][aspect];

  // Helper to place indicator dot on timeline path
  const getDotPosition = () => {
    if (time === 'past') {
      if (aspect === 'perfect') return '20%';
      if (aspect === 'perfect_continuous') return '25%';
      return '35%';
    }
    if (time === 'present') {
      return '50%';
    }
    if (time === 'future') {
      if (aspect === 'perfect') return '75%';
      return '80%';
    }
    return '50%';
  };

  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col items-center gap-6 shadow-xl max-w-4xl mx-auto my-4 border border-slate-700">
      <h3 className="text-xl font-display font-semibold text-slate-100 self-start">Tense Timeline Explorer</h3>
      
      {/* Visual Timeline Panel */}
      <div className="w-full bg-slate-900/60 rounded-xl p-6 border border-slate-800 flex flex-col items-center justify-center relative min-h-[160px]">
        {/* Timeline Path Line */}
        <div className="w-full h-1 bg-slate-700 rounded-full relative flex items-center justify-between px-10">
          
          {/* Past Marker */}
          <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full ${time === 'past' ? 'bg-violet-500 scale-125' : 'bg-slate-500'} transition-all`} />
            <span className="text-[10px] text-slate-400 font-semibold mt-2 font-display">PAST</span>
          </div>

          {/* Present Marker (Now) */}
          <div className="flex flex-col items-center">
            <div className={`w-4 h-4 rounded-full ${time === 'present' ? 'bg-amber-400 ring-4 ring-amber-400/20 scale-125' : 'bg-slate-500'} transition-all`} />
            <span className="text-[10px] text-amber-300 font-bold mt-2 font-display">NOW</span>
          </div>

          {/* Future Marker */}
          <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full ${time === 'future' ? 'bg-emerald-400 scale-125' : 'bg-slate-500'} transition-all`} />
            <span className="text-[10px] text-slate-400 font-semibold mt-2 font-display">FUTURE</span>
          </div>

          {/* Interactive Action Indicator on Timeline */}
          <motion.div
            layoutId="timeline-indicator"
            animate={{ left: getDotPosition() }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="absolute -translate-y-0.5"
          >
            {aspect.includes('continuous') ? (
              // Continuous/glowing pulse
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-violet-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-violet-500"></span>
              </div>
            ) : (
              // Standard single point event
              <div className="w-4 h-4 rounded-full bg-violet-500 border-2 border-white drop-shadow-md" />
            )}
          </motion.div>
        </div>

        {/* Timeline Description */}
        <p className="text-xs text-slate-400 italic mt-8 text-center min-h-[16px]">
          {current.timelineDesc}
        </p>
      </div>

      {/* Selectors */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Time Selector */}
        <div className="flex flex-col bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
          <label className="text-xs font-bold text-slate-400 mb-2 font-display uppercase tracking-wider">Time</label>
          <div className="flex gap-2">
            {times.map(t => (
              <button
                key={t.id}
                onClick={() => setTime(t.id)}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold font-display transition-all ${
                  time === t.id
                    ? 'bg-violet-600 text-white shadow-md'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Aspect Selector */}
        <div className="flex flex-col bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
          <label className="text-xs font-bold text-slate-400 mb-2 font-display uppercase tracking-wider">Aspect / State</label>
          <div className="grid grid-cols-2 gap-2">
            {aspects.map(a => (
              <button
                key={a.id}
                onClick={() => setAspect(a.id)}
                className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold font-display transition-all leading-tight ${
                  aspect === a.id
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tense Details Card */}
      <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${time}-${aspect}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
              <h4 className="text-md font-display font-bold text-amber-400 capitalize">
                {time} {aspect.replace('_', ' ')} Tense
              </h4>
              <div className="bg-slate-800 text-slate-300 px-3 py-1 rounded-md text-xs font-mono font-semibold border border-slate-700 select-all">
                {current.formula}
              </div>
            </div>
            
            <p className="text-sm text-slate-400 mb-4">{aspects.find(a => a.id === aspect).desc}</p>
            
            <div className="bg-violet-950/40 border border-violet-900/50 rounded-lg p-3">
              <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block mb-1">Example Scenario</span>
              <p className="text-slate-200 font-medium text-sm md:text-base font-display">
                "{current.sentence}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

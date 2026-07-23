import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CatPrepositions() {
  const [selected, setSelected] = useState('on');

  const prepositions = [
    { id: 'on', label: 'ON', sentence: 'The cat is sitting ON the chair.', description: 'Shows touch contact with a surface.' },
    { id: 'under', label: 'UNDER', sentence: 'The cat is resting UNDER the chair.', description: 'Directly below something.' },
    { id: 'behind', label: 'BEHIND', sentence: 'The cat is hiding BEHIND the chair.', description: 'At the back of an object, out of sight.' },
    { id: 'in_front_of', label: 'IN FRONT OF', sentence: 'The cat is standing IN FRONT OF the chair.', description: 'Facing the front part of something.' },
    { id: 'next_to', label: 'NEXT TO', sentence: 'The cat is sitting NEXT TO the chair.', description: 'Beside or at the side of.' },
  ];

  // Cat coordinates based on selected preposition
  const positions = {
    on: { x: 0, y: -72, scale: 1, zIndex: 10, opacity: 1 },
    under: { x: 0, y: 76, scale: 0.9, zIndex: 5, opacity: 1 },
    behind: { x: -45, y: -30, scale: 0.85, zIndex: 1, opacity: 0.75 },
    in_front_of: { x: 30, y: 100, scale: 1.1, zIndex: 20, opacity: 1 },
    next_to: { x: 95, y: 40, scale: 1, zIndex: 10, opacity: 1 },
  };

  const currentPreposition = prepositions.find(p => p.id === selected);

  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8 shadow-xl max-w-4xl mx-auto my-4 border border-slate-700">
      
      {/* 3D-Like SVG Arena */}
      <div className="w-full md:w-1/2 h-64 bg-slate-900/60 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-800">
        
        {/* Room Floor lines for perspective */}
        <div className="absolute bottom-0 w-full h-24 bg-slate-800/40 border-t border-slate-800" />
        
        {/* The Interactive Arena Wrapper */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          
          {/* BACKGROUND ELEMENTS (when behind chair, cat is behind this but in front of background) */}
          
          {/* THE CHAIR (Static SVG) */}
          <div className="absolute z-10 w-32 h-32 flex items-center justify-center select-none pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
              {/* Backrest */}
              <rect x="35" y="15" width="30" height="35" rx="4" fill="#a78bfa" opacity="0.9" />
              <rect x="40" y="20" width="20" height="25" rx="2" fill="#7c3aed" />
              {/* Seat */}
              <rect x="25" y="46" width="50" height="8" rx="2" fill="#fcd34d" />
              <rect x="27" y="47" width="46" height="4" rx="1" fill="#fbbf24" />
              {/* Legs */}
              <line x1="30" y1="54" x2="25" y2="85" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
              <line x1="70" y1="54" x2="75" y2="85" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
              <line x1="38" y1="54" x2="35" y2="80" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
              <line x1="62" y1="54" x2="65" y2="80" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          {/* THE ANIMATED CAT (SVG inside Framer Motion) */}
          <motion.div
            animate={positions[selected]}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="absolute w-16 h-16 pointer-events-none"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
              {/* Tail */}
              <motion.path
                d="M75,60 C85,60 85,30 75,25 C70,22 68,35 73,42"
                stroke="#f97316"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                style={{ originX: '75px', originY: '60px' }}
              />
              {/* Body */}
              <ellipse cx="50" cy="60" rx="22" ry="16" fill="#f97316" />
              <ellipse cx="50" cy="60" rx="16" ry="11" fill="#ea580c" />
              {/* Head */}
              <circle cx="38" cy="42" r="14" fill="#f97316" />
              {/* Ears */}
              <polygon points="26,34 32,18 40,30" fill="#f97316" />
              <polygon points="29,32 33,22 38,29" fill="#f43f5e" />
              <polygon points="38,30 46,18 50,34" fill="#f97316" />
              <polygon points="40,29 45,22 47,32" fill="#f43f5e" />
              {/* Face Details */}
              {/* Eyes */}
              <circle cx="32" cy="39" r="2.5" fill="#000" />
              <circle cx="42" cy="39" r="2.5" fill="#000" />
              <circle cx="33" cy="38" r="0.8" fill="#fff" />
              <circle cx="43" cy="38" r="0.8" fill="#fff" />
              {/* Nose */}
              <polygon points="36,44 38,44 37,46" fill="#f43f5e" />
              {/* Whiskers */}
              <line x1="22" y1="44" x2="14" y2="43" stroke="#fff" strokeWidth="1" />
              <line x1="22" y1="46" x2="13" y2="47" stroke="#fff" strokeWidth="1" />
              <line x1="52" y1="44" x2="60" y2="43" stroke="#fff" strokeWidth="1" />
              <line x1="52" y1="46" x2="61" y2="47" stroke="#fff" strokeWidth="1" />
              {/* Paws */}
              <ellipse cx="36" cy="74" rx="5" ry="4" fill="#ea580c" />
              <ellipse cx="48" cy="74" rx="5" ry="4" fill="#ea580c" />
            </svg>
          </motion.div>
          
        </div>
      </div>

      {/* Control Panel */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-xl font-display font-semibold text-slate-100 mb-1">Preposition Visualizer</h3>
        <p className="text-sm text-slate-400 mb-4">Click below to see the spatial relationship changes.</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {prepositions.map(prep => (
            <button
              key={prep.id}
              onClick={() => setSelected(prep.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-display transition-all ${
                selected === prep.id
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-500/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {prep.label}
            </button>
          ))}
        </div>

        {/* Dynamic Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 min-h-[96px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-amber-400 font-semibold text-md font-display mb-1">
                {currentPreposition.sentence}
              </p>
              <p className="text-xs text-slate-400">
                <span className="font-bold text-slate-300">Why? </span> 
                {currentPreposition.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
    </div>
  );
}

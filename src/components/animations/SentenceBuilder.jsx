import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PRESETS = [
  {
    id: 1,
    title: "Simple Sentence Structure",
    correctSequence: ["The small dog", "barked loudly", "at the mailman"],
    blocks: [
      { id: "b1", text: "at the mailman", type: "Prepositional Phrase", color: "border-emerald-500 text-emerald-400 bg-emerald-950/20" },
      { id: "b2", text: "The small dog", type: "Subject (Noun Phrase)", color: "border-violet-500 text-violet-400 bg-violet-950/20" },
      { id: "b3", text: "barked loudly", type: "Verb + Adverb", color: "border-amber-500 text-amber-400 bg-amber-950/20" }
    ],
    analysis: {
      "The small dog": "Subject: Tells us who or what is performing the action. 'Dog' is the noun, 'small' is the descriptive adjective.",
      "barked loudly": "Verb & Modifier: 'barked' is the action engine, while the adverb 'loudly' details *how* the action was performed.",
      "at the mailman": "Prepositional Phrase: 'at' is the preposition, and 'the mailman' is the object, showing the target direction of the barking."
    }
  },
  {
    id: 2,
    title: "Exam Level Sentence (Inversion)",
    correctSequence: ["Not only did Rohan", "study hard", "but he also passed", "with honors"],
    blocks: [
      { id: "b2_1", text: "but he also passed", type: "Coordinating Clause", color: "border-indigo-500 text-indigo-400 bg-indigo-950/20" },
      { id: "b2_2", text: "with honors", type: "Prepositional Modifier", color: "border-emerald-500 text-emerald-400 bg-emerald-950/20" },
      { id: "b2_3", text: "Not only did Rohan", type: "Inverted Subject Clause", color: "border-violet-500 text-violet-400 bg-violet-950/20" },
      { id: "b2_4", text: "study hard", type: "Infinitive Action", color: "border-amber-500 text-amber-400 bg-amber-950/20" }
    ],
    analysis: {
      "Not only did Rohan": "Inverted Subject: Competitive exams love this! Starting with 'Not only' forces the auxiliary verb 'did' before the subject 'Rohan'.",
      "study hard": "Main Action: Bare infinitive verb 'study' modified by the adverb 'hard'.",
      "but he also passed": "Correlative Match: 'Not only' is paired with 'but... also' to link the two positive achievements.",
      "with honors": "Prepositional phrase modifying the verb 'passed', explaining the degree of success."
    }
  }
];

export default function SentenceBuilder() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);

  const preset = PRESETS[activePresetIndex];

  // Scramble the blocks on active preset change
  const handleBlockClick = (block) => {
    if (selectedBlocks.some(b => b.id === block.id)) {
      // Remove block if clicked again
      const updated = selectedBlocks.filter(b => b.id !== block.id);
      setSelectedBlocks(updated);
      setIsCorrect(null);
    } else {
      // Add block
      const updated = [...selectedBlocks, block];
      setSelectedBlocks(updated);
      
      // If all blocks selected, validate order
      if (updated.length === preset.blocks.length) {
        const textSequence = updated.map(b => b.text);
        const correct = textSequence.every((val, i) => val === preset.correctSequence[i]);
        setIsCorrect(correct);
      } else {
        setIsCorrect(null);
      }
    }
  };

  const handleReset = () => {
    setSelectedBlocks([]);
    setIsCorrect(null);
  };

  const handleNextPreset = () => {
    setActivePresetIndex((activePresetIndex + 1) % PRESETS.length);
    setSelectedBlocks([]);
    setIsCorrect(null);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col gap-6 shadow-xl max-w-4xl mx-auto my-4 border border-slate-700">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-display font-semibold text-slate-100">Interactive Sentence Builder</h3>
          <p className="text-xs text-slate-400 mt-0.5">Click the word blocks in the correct order to construct a grammatical sentence.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold font-display"
          >
            Reset
          </button>
          <button 
            onClick={handleNextPreset}
            className="px-3 py-1.5 rounded-lg bg-violet-600/30 hover:bg-violet-600/40 text-violet-300 text-xs font-semibold font-display border border-violet-500/20"
          >
            Switch Example
          </button>
        </div>
      </div>

      <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 text-center min-h-[96px] flex flex-col justify-center">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-3">Your Sentence Arena</span>
        {selectedBlocks.length === 0 ? (
          <span className="text-sm text-slate-500 italic">Select blocks from below to start building...</span>
        ) : (
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {selectedBlocks.map((block, idx) => (
              <motion.div
                key={block.id}
                layoutId={`arena-block-${block.id}`}
                onClick={() => handleBlockClick(block)}
                className={`px-4 py-2 border rounded-xl text-sm font-semibold cursor-pointer ${block.color} shadow-sm border-dashed`}
              >
                {block.text}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Available Blocks */}
      <div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-3">Available Word Blocks</span>
        <div className="flex flex-wrap gap-3 justify-center">
          {preset.blocks.map(block => {
            const isSelected = selectedBlocks.some(b => b.id === block.id);
            return (
              <motion.button
                key={block.id}
                onClick={() => handleBlockClick(block)}
                disabled={isSelected}
                className={`px-4 py-3 border rounded-xl text-sm font-semibold transition-all ${
                  isSelected 
                    ? 'opacity-30 border-slate-800 bg-slate-950/20 text-slate-600 cursor-not-allowed'
                    : `${block.color} hover:scale-105 shadow-md cursor-pointer`
                }`}
              >
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-wider block opacity-70 mb-0.5">{block.type}</span>
                  <span>{block.text}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Results and explanations */}
      <AnimatePresence>
        {isCorrect !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`border rounded-xl p-5 ${
              isCorrect
                ? 'bg-emerald-950/20 border-emerald-500/30'
                : 'bg-rose-950/20 border-rose-500/30'
            }`}
          >
            {isCorrect ? (
              <div>
                <h4 className="text-emerald-400 font-display font-bold text-md mb-2">🎉 Perfectly Structured Sentence!</h4>
                <p className="text-xs text-slate-300 mb-4">Let's dissect this sentence structure to understand how the components fit together:</p>
                
                <div className="space-y-3.5">
                  {selectedBlocks.map(block => (
                    <div key={block.id} className="flex flex-col md:flex-row gap-1 md:gap-4 items-start text-xs border-l-2 border-slate-700 pl-3">
                      <span className="font-semibold text-slate-200 font-display min-w-[140px]">{block.text}:</span>
                      <span className="text-slate-400">{preset.analysis[block.text]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h4 className="text-amber-400 font-display font-bold text-md mb-2">Good attempt! Let's understand it again.</h4>
                <p className="text-sm text-slate-300">
                  The order you chose is not grammatically correct. Try putting the Subject first, followed by the Action (verb), and then the Modifier or Object! Click a block in the arena to remove it and try another combination.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Upload, 
  FileText, 
  CheckCircle, 
  Loader2, 
  Sparkles, 
  Layers, 
  Database,
  Search,
  BookOpen
} from 'lucide-react';

export default function AdminPanel({ onBack }) {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [extractedJSON, setExtractedJSON] = useState(null);

  const steps = [
    { label: "Parsing coaching PDF & extracting text contents...", icon: FileText },
    { label: "Comparing embeddings with existing database to remove duplicates...", icon: Search },
    { label: "Classifying questions by syllabus topics & difficulty levels...", icon: Layers },
    { label: "Converting extracted fields into optimized structured JSON schemas...", icon: Sparkles },
    { label: "Injecting questions into Supabase PostgreSQL tables...", icon: Database }
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setExtractedJSON(null);
    }
  };

  const handleStartProcess = () => {
    if (!file) return;
    setProcessing(true);
    setCurrentStep(0);
    
    // Simulate pipeline steps with intervals
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev + 1 < steps.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setProcessing(false);
          // Generate optimized mock JSON payload output
          setExtractedJSON({
            questions_added: 3,
            duplicates_removed: 2,
            target_schema_sample: [
              {
                topic: "subjectVerbAgreement",
                difficulty: "Advanced",
                question: "Neither the supervisor nor the staff members was informed about the change.",
                options: ["supervisor", "nor the staff", "was informed", "No error"],
                answer: "was informed",
                explanation: "With 'neither... nor', the verb agrees with the closer subject. 'staff members' is plural, so it should take the plural verb 'were'.",
                frequency_score: 5
              },
              {
                topic: "tenses",
                difficulty: "Intermediate",
                question: "She is working here since last three years.",
                options: ["is working", "since", "last three", "No error"],
                answer: "is working",
                explanation: "For an action that began in the past and is still ongoing with a duration, use Present Perfect Continuous: 'has been working'."
              }
            ],
            optimized_supabase_bytes: "1,048 bytes"
          });
          return prev;
        }
      });
    }, 1500);
  };

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
          <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block font-display">System Portal</span>
          <h2 className="text-xl font-display font-extrabold text-slate-100">Coaching Material Optimizer</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Upload Module */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-md font-display font-semibold text-slate-100 flex items-center gap-2">
                <Upload className="w-4.5 h-4.5 text-violet-400" /> Upload Material File
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Upload mock papers, test PDFs, or coaching booklets. The system automatically performs extraction and removes duplicates before saving.
              </p>
            </div>

            {/* Drag and drop mock box */}
            <div className="border-2 border-dashed border-slate-800 hover:border-violet-500/40 rounded-2xl p-8 text-center bg-slate-950/20 hover:bg-slate-900/10 transition-all cursor-pointer relative">
              <input
                type="file"
                accept=".pdf,.txt,.docx"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                disabled={processing}
              />
              <div className="flex flex-col items-center gap-3">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-slate-400">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-350 block">
                    {file ? file.name : "Choose a file or drag it here"}
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-1">Supports PDF, TXT, DOCX up to 10MB</span>
                </div>
              </div>
            </div>

            {file && !processing && !extractedJSON && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleStartProcess}
                  className="px-5 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-display font-bold text-xs transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
                >
                  Optimize & Inject <Sparkles className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Processing workflow indicator */}
            {processing && (
              <div className="p-5 bg-slate-900/60 border border-slate-850 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-violet-500 animate-spin" /> Optimization Pipeline Active
                  </span>
                  <span className="text-[10px] text-violet-400 font-semibold font-mono">{Math.round(((currentStep + 0.5) / steps.length) * 100)}%</span>
                </div>
                
                {/* Visual Pipeline Bar */}
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-violet-500 transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  />
                </div>

                <div className="space-y-3 pt-2">
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    const isActive = currentStep === idx;
                    const isDone = currentStep > idx;

                    return (
                      <div 
                        key={idx} 
                        className={`flex items-center gap-3 text-xs transition-all ${
                          isActive ? 'text-violet-400 font-semibold scale-[1.01] translate-x-1' :
                          isDone ? 'text-slate-400 opacity-80' : 'text-slate-600 opacity-40'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg border ${
                          isActive ? 'bg-violet-950/20 border-violet-500/20 text-violet-400' :
                          isDone ? 'bg-emerald-950/10 border-emerald-500/10 text-emerald-400' :
                          'bg-slate-950 border-slate-900 text-slate-500'
                        }`}>
                          {isDone ? <CheckCircle className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                        </div>
                        <span className="leading-tight">{step.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Extracted JSON Schema display */}
            {extractedJSON && (
              <div className="p-5 bg-slate-900 border border-slate-850 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest font-display">
                  <CheckCircle className="w-4 h-4" /> Optimization Finished!
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-300">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                    <span className="text-[10px] text-slate-500 block">Questions Processed</span>
                    <strong className="text-sm text-slate-100">{extractedJSON.questions_added} new added</strong>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                    <span className="text-[10px] text-slate-500 block">Duplicates Deleted</span>
                    <strong className="text-sm text-amber-400">{extractedJSON.duplicates_removed} matches</strong>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block">Extracted JSON Schema Sample</label>
                  <pre className="w-full max-h-48 overflow-y-auto p-4 bg-slate-950 border border-slate-850 rounded-xl text-[10px] text-slate-450 font-mono leading-relaxed select-all">
                    {JSON.stringify(extractedJSON.target_schema_sample, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Optimization details */}
        <div className="glass-panel border border-slate-800 rounded-3xl p-5 md:p-6 space-y-5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-850 pb-2">Storage Protocol</h3>
          
          <div className="space-y-4 text-xs text-slate-400 leading-relaxed">
            <div className="space-y-1.5">
              <span className="font-extrabold text-slate-200 block font-display">Why we don't store PDFs:</span>
              <p>Supabase free tier has a 500MB database limit and strict bandwidth constraints. PDFs consume huge binary storage and require expensive parsing at runtime.</p>
            </div>
            
            <div className="space-y-1.5">
              <span className="font-extrabold text-slate-200 block font-display">Optimization Pipeline:</span>
              <p>Our pipeline parses materials into lightweight key-value structures, extracts vector embeddings to weed out identical/redundant practice items, and stores them in optimized JSONB fields.</p>
            </div>

            <div className="p-3 bg-violet-950/20 border border-violet-500/10 rounded-xl flex items-start gap-2 text-[11px] text-violet-300">
              <BookOpen className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Deduplication active:</strong> Vector similarity check flags questions with &gt;90% similarity, preventing database pollution.
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
export { AdminPanel };

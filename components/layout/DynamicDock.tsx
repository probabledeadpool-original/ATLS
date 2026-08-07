"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ArrowDownRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type DockState = 'idle' | 'command' | 'thinking' | 'insight';

export function DynamicDock() {
  const [state, setState] = useState<DockState>('idle');
  const [query, setQuery] = useState('');

  const handleAsk = () => {
    if (!query.trim()) return;
    setState('thinking');
    setTimeout(() => setState('insight'), 2500);
  };

  const handleClose = () => {
    setState('idle');
    setQuery('');
  };

  const [insights, setInsights] = useState([
    "Business healthy today",
    "Revenue forecast updated",
    "Two datasets require refresh"
  ]);
  const [insightIdx, setInsightIdx] = useState(0);

  useEffect(() => {
    if (state !== 'idle') return;
    const interval = setInterval(() => {
      setInsightIdx((prev) => (prev + 1) % insights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [state, insights.length]);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      <motion.div
        layout
        initial={{ borderRadius: 40 }}
        animate={{
          borderRadius: 40,
          width: state === 'idle' ? 340 : state === 'command' || state === 'thinking' ? 480 : 640,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 1 }}
        className={cn(
          "relative overflow-hidden group flex flex-col text-foreground",
          "backdrop-blur-[24px] bg-black/[0.08] dark:bg-black/[0.2]",
          "border border-white/20 dark:border-white/10",
          "shadow-[0_24px_48px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.2)]",
          state === 'idle' ? "cursor-pointer hover:bg-black/[0.12] dark:hover:bg-black/[0.25] transition-colors duration-500" : ""
        )}
        onClick={() => {
          if (state === 'idle') setState('command');
        }}
      >
        {/* Etched Glass Noise */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-0" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Dynamic Glow / Lighting */}
        <motion.div 
          layout
          className={cn(
            "absolute inset-0 pointer-events-none transition-opacity duration-1000 rounded-[40px] z-0",
            state === 'thinking' ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 60%)'
          }}
          animate={state === 'thinking' ? {
            background: [
              'radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.2), transparent 50%)',
              'radial-gradient(circle at 100% 50%, rgba(59, 130, 246, 0.2), transparent 50%)',
              'radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.2), transparent 50%)'
            ]
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 w-full flex flex-col">
          <AnimatePresence mode="popLayout" initial={false}>
            {state === 'idle' && (
              <motion.div
                key="idle"
                layout
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)', scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center gap-3 w-full h-[64px]"
              >
                <Sparkles className="w-4 h-4 text-foreground/50 group-hover:text-foreground/80 transition-colors duration-500" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={insightIdx}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="font-medium text-[14px] tracking-wide text-foreground/80 group-hover:text-foreground transition-colors"
                  >
                    {insights[insightIdx]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            )}

            {(state === 'command' || state === 'thinking') && (
              <motion.div
                key="command"
                layout
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)', scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="px-5 py-4 w-full flex flex-col justify-center min-h-[64px]"
              >
                <div className="flex items-center gap-4">
                  <Sparkles className={cn("w-5 h-5 shrink-0", state === 'thinking' ? "text-blue-500" : "text-foreground/50")} />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                    placeholder="Ask Atlas anything..."
                    disabled={state === 'thinking'}
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-foreground/40 font-medium text-[15px] disabled:opacity-70 h-8"
                    autoFocus
                  />
                  {state === 'command' && (
                    <button onClick={(e) => { e.stopPropagation(); handleClose(); }} className="w-8 h-8 shrink-0 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {state === 'thinking' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pl-9 overflow-hidden"
                  >
                    <div className="pt-2">
                      <span className="text-[13px] text-blue-600 dark:text-blue-400 font-medium">Analyzing portfolio variance...</span>
                    </div>
                  </motion.div>
                )}
                
                {state === 'command' && !query && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pl-9 overflow-hidden"
                  >
                    <div className="pt-3 flex flex-wrap gap-2">
                      {["Forecast Q4", "Why did revenue drop?", "Compare branches"].map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setQuery(suggestion);
                            handleAsk();
                          }}
                          className="px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-[12px] font-medium text-foreground/70 hover:text-foreground"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {state === 'insight' && (
              <motion.div
                key="insight"
                layout
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.4 }}
                className="p-6 w-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-foreground/50 uppercase tracking-widest font-bold text-[9px]">
                    <span className="text-foreground">Revenue</span>
                    <ArrowRight className="w-3 h-3" />
                    <span>South Branch</span>
                  </div>
                  <button onClick={handleClose} className="w-7 h-7 flex items-center justify-center bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-foreground/60 hover:text-foreground transition-colors rounded-full">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-foreground/50 mb-1 font-bold">Variance</div>
                      <div className="font-mono text-4xl text-rose-600 dark:text-rose-400 flex items-center gap-2">
                        -14.2% <ArrowDownRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-sm">
                      <div className="text-[9px] uppercase tracking-widest text-foreground/50 mb-1 font-bold">Corporate</div>
                      <div className="font-mono text-xl text-foreground">-8.4%</div>
                    </div>
                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-sm">
                      <div className="text-[9px] uppercase tracking-widest text-foreground/50 mb-1 font-bold">Retail</div>
                      <div className="font-mono text-xl text-foreground">-5.8%</div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-black/5 dark:border-white/10">
                    <div className="text-[9px] uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 font-bold">Recommendation</div>
                    <p className="text-[13px] text-foreground/90 leading-relaxed">
                      Delayed renewals in the Logistics sector account for 60% of the drop. AI has queued 14 priority follow-ups for the South Branch Director.
                    </p>
                    <div className="mt-5 flex gap-2">
                       <button onClick={handleClose} className="px-4 py-2 bg-foreground text-background text-[9px] uppercase tracking-widest font-bold rounded-lg hover:opacity-80 transition-opacity">
                         Approve Actions
                       </button>
                       <button className="px-4 py-2 bg-black/5 dark:bg-white/5 text-foreground text-[9px] uppercase tracking-widest font-bold rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                         View Details
                       </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

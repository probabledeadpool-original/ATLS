'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Activity } from 'lucide-react';

export function BusinessHealth() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-card/50 backdrop-blur-md px-6 py-8 border border-white/5 dark:border-white/10 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col h-full justify-between hover:bg-card hover:border-white/10 transition-colors duration-300"
    >
      <div className="absolute top-0 right-0 p-6 opacity-5">
        <Activity className="w-48 h-48 -mr-12 -mt-12" />
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        <div>
          <div className="h-px w-full bg-white/10 dark:bg-white/20 mb-3" />
          <h2 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Business Health
          </h2>
        </div>
        
        <div className="flex items-start gap-3">
          <span className="font-mono text-[120px] tracking-tighter text-foreground leading-none -mt-4">94</span>
          <div className="flex flex-col pt-3">
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
              <ArrowUpRight className="w-4 h-4" />
              +6
            </span>
            <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider font-medium">This Month</span>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-8 border-t border-white/5 dark:border-white/10 flex items-center justify-between relative z-10">
        <div>
          <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mb-1">AI Confidence</div>
          <div className="text-foreground font-mono text-xl">98.4%</div>
        </div>
        
        <button className="text-[11px] uppercase tracking-wider font-semibold text-foreground hover:text-muted-foreground transition-colors bg-white/5 dark:bg-white/10 px-3 py-1.5 rounded-full border border-white/5">
          View Detail
        </button>
      </div>
    </motion.div>
  );
}

'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function BusinessHealth() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-card p-8 border border-border rounded-md shadow-sm relative overflow-hidden flex flex-col h-full justify-between"
    >
      <div className="relative z-10">
        <h2 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-8">Business Health</h2>
        
        <div className="flex items-start gap-4 mb-8">
          <span className="font-mono text-7xl tracking-tighter text-foreground leading-none">94</span>
          <div className="flex flex-col pt-1">
            <span className="text-sm font-bold text-foreground flex items-center gap-0.5">
              <ArrowUpRight className="w-4 h-4" />
              +6
            </span>
            <span className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-widest">this month</span>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-border flex items-center justify-between">
        <div>
          <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-1">AI Confidence</div>
          <div className="text-foreground font-mono text-lg">98%</div>
        </div>
        
        <button className="text-[10px] uppercase tracking-widest font-bold text-foreground hover:text-muted-foreground transition-colors">
          View Detail &rarr;
        </button>
      </div>
    </motion.div>
  );
}

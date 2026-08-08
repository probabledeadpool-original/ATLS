'use client';

import { BusinessHealth } from './BusinessHealth';
import { MetricCard } from './MetricCard';
import { RevenueChart } from './RevenueChart';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function Overview() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Top Row */}
      <div className="col-span-12 lg:col-span-4 flex flex-col">
        <BusinessHealth />
      </div>

      <div className="col-span-12 lg:col-span-8 flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-full">
          <MetricCard 
            title="Revenue" 
            value="₹42.8M" 
            trend={12.4} 
            subtitle="vs Q2"
            delay={0.1}
            className="h-full"
          />
          <MetricCard 
            title="Retention" 
            value="94.2%" 
            trend={-0.8} 
            subtitle="vs Q2"
            delay={0.2}
            className="h-full"
          />
          <MetricCard 
            title="Policies" 
            value="14,821" 
            trend={8.1} 
            subtitle="vs Q2"
            delay={0.3}
            className="h-full"
          />
          <MetricCard 
            title="Open Claims" 
            value="342" 
            trend={-5.4} 
            subtitle="vs Q2"
            delay={0.4}
            className="h-full"
          />
        </div>
      </div>

      {/* Main Row */}
      <div className="col-span-12 lg:col-span-8">
        <RevenueChart delay={0.2} />
      </div>

      {/* Intelligence Row */}
      <div className="col-span-12 lg:col-span-4 flex flex-col">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card/50 backdrop-blur-md border border-white/5 dark:border-white/10 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-6 flex-1 flex flex-col justify-between hover:bg-card hover:border-white/10 transition-colors duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">AI Strategic Brief</h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-foreground text-[15px] font-medium leading-relaxed">
                Commission realization is delayed by an average of 14 days from top carriers.
              </p>
              
              <div className="space-y-4 pt-5 border-t border-white/5 dark:border-white/10">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 font-semibold">Impact</div>
                  <div className="font-mono text-foreground text-sm">₹4.2M Locked</div>
                </div>
                
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 font-semibold">Recommendation</div>
                  <div className="text-[13px] text-muted-foreground font-medium leading-relaxed">
                    Automatically deploy structured follow-ups to Top 3 carriers via Finance integration.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-6 py-2.5 bg-foreground hover:bg-foreground/90 text-background text-[11px] font-semibold uppercase tracking-wider transition-colors rounded-xl">
            Deploy Workflow
          </button>
        </motion.div>
      </div>
    </div>
  );
}

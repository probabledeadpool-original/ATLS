'use client';

import { BusinessHealth } from './BusinessHealth';
import { MetricCard } from './MetricCard';
import { RevenueChart } from './RevenueChart';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function Overview() {
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Top Row */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
        <BusinessHealth />
      </div>

      <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
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
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card border border-border rounded-md shadow-sm p-8 flex-1"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">AI Strategic Brief</h3>
          </div>
          
          <div className="space-y-6">
            <p className="text-foreground text-lg font-medium leading-tight">
              Commission realization is delayed by an average of 14 days from top carriers.
            </p>
            
            <div className="space-y-4 pt-6 border-t border-border">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">Impact</div>
                <div className="font-mono text-foreground">₹4.2M Locked</div>
              </div>
              
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">Recommendation</div>
                <div className="text-[13px] text-muted-foreground font-medium leading-relaxed">
                  Automatically deploy structured follow-ups to Top 3 carriers via Finance integration.
                </div>
              </div>
            </div>
            
            <button className="w-full py-2.5 bg-secondary hover:bg-secondary-hover text-foreground text-[10px] font-bold uppercase tracking-widest transition-colors rounded-md mt-4">
              Deploy Workflow
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

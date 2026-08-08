'use client';

import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from '@/lib/utils';

const data = [
  { month: 'Jan', revenue: 420, target: 400 },
  { month: 'Feb', revenue: 450, target: 410 },
  { month: 'Mar', revenue: 480, target: 420 },
  { month: 'Apr', revenue: 460, target: 430 },
  { month: 'May', revenue: 510, target: 440 },
  { month: 'Jun', revenue: 580, target: 450 },
  { month: 'Jul', revenue: 600, target: 460 },
  { month: 'Aug', revenue: 590, target: 470 },
  { month: 'Sep', revenue: 650, target: 480 },
];

export function RevenueChart({ delay = 0, className }: { delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "bg-card/50 backdrop-blur-md p-6 border border-white/5 dark:border-white/10 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col h-full hover:bg-card hover:border-white/10 transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/5 dark:border-white/10">
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Revenue Forecast</h2>
          <div className="font-mono text-4xl tracking-tight text-foreground">₹650M</div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Actual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 border border-foreground rounded-full" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Target</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 0, right: 0, left: -24, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--foreground)" stopOpacity={0.08}/>
                <stop offset="95%" stopColor="var(--foreground)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="2 4" vertical={false} stroke="currentColor" className="opacity-10" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'currentColor', fontWeight: 500, opacity: 0.5 }} 
              dy={16}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'currentColor', fontWeight: 500, opacity: 0.5 }}
              tickFormatter={(val) => `₹${val}M`}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-card/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl rounded-xl">
                      <p className="text-[11px] font-semibold text-muted-foreground mb-3 uppercase tracking-wider">{label}</p>
                      <div className="space-y-3">
                        <p className="text-foreground text-sm flex items-center justify-between gap-6">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Actual</span>
                          <span className="font-mono font-medium">₹{payload[0].value}M</span>
                        </p>
                        <p className="text-muted-foreground text-sm flex items-center justify-between gap-6">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Target</span>
                          <span className="font-mono font-medium">₹{payload[1].value}M</span>
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area 
              type="monotone" 
              dataKey="target" 
              stroke="currentColor" 
              strokeOpacity={0.3}
              strokeWidth={1}
              fill="none" 
              strokeDasharray="4 4"
            />
            <Area 
              type="step" 
              dataKey="revenue" 
              stroke="var(--foreground)" 
              strokeWidth={1.5}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

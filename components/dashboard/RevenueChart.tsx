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

export function RevenueChart({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="bg-card p-8 border border-border rounded-md shadow-sm flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Revenue Forecast</h2>
          <div className="font-mono text-4xl tracking-tight text-foreground">₹650M</div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#111111]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Actual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 border border-[#111111]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Target</span>
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
            <CartesianGrid strokeDasharray="1" vertical={false} stroke="#F4F4F5" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#888888', fontWeight: 700 }} 
              dy={16}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#888888', fontWeight: 700 }}
              tickFormatter={(val) => `₹${val}M`}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#111111] border border-[#333333] p-4 shadow-xl rounded-md">
                      <p className="text-[10px] font-bold text-muted-foreground mb-3 uppercase tracking-widest">{label}</p>
                      <div className="space-y-2">
                        <p className="text-[#FFFFFF] text-sm flex items-center justify-between gap-6">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Actual</span>
                          <span className="font-mono">₹{payload[0].value}M</span>
                        </p>
                        <p className="text-muted-foreground text-sm flex items-center justify-between gap-6">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Target</span>
                          <span className="font-mono">₹{payload[1].value}M</span>
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
              stroke="#CCCCCC" 
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

'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  trend?: number;
  subtitle?: string;
  delay?: number;
  icon?: ReactNode;
  className?: string;
}

export function MetricCard({ title, value, trend, subtitle, delay = 0, className }: MetricCardProps) {
  const isPositive = trend && trend > 0;
  const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("bg-card p-6 border border-border rounded-md shadow-sm flex flex-col justify-between", className)}
    >
      <div className="mb-8">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{title}</h3>
      </div>
      
      <div>
        <div className="font-mono text-3xl tracking-tight text-foreground mb-4">{value}</div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          {trend !== undefined && (
            <div className={cn(
              "text-[10px] font-bold tracking-wider flex items-center gap-1",
              isPositive ? "text-foreground" : "text-muted-foreground"
            )}>
              <TrendIcon className="w-3 h-3" />
              {Math.abs(trend)}%
            </div>
          )}
          {subtitle && (
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-auto">{subtitle}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

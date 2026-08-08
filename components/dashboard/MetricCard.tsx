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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative overflow-hidden bg-card/50 backdrop-blur-md p-5 flex flex-col justify-between",
        "border border-white/5 dark:border-white/10 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)]",
        "hover:bg-card hover:border-white/10 transition-colors duration-300",
        className
      )}
    >
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{title}</h3>
      </div>
      
      <div>
        <div className="font-mono text-4xl tracking-tight text-foreground mb-3">{value}</div>
        
        <div className="flex items-center justify-between pt-3 border-t border-white/5 dark:border-white/10">
          {trend !== undefined && (
            <div className={cn(
              "text-[11px] font-medium tracking-wide flex items-center gap-1",
              isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
            )}>
              <TrendIcon className="w-3 h-3" />
              {Math.abs(trend)}%
            </div>
          )}
          {subtitle && (
            <div className="text-[11px] font-medium tracking-wider text-muted-foreground ml-auto">{subtitle}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

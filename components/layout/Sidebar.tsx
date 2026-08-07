'use client';

import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Compass, 
  Layers, 
  Database, 
  FileText, 
  Settings 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navItems = [
  { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
  { id: 'workspace', icon: Compass, label: 'Workspace' },
  { id: 'studio', icon: Layers, label: 'Studio' },
  { id: 'data', icon: Database, label: 'Data' },
  { id: 'reports', icon: FileText, label: 'Reports' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export function Sidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (id: string) => void }) {
  return (
    <aside className="fixed left-0 top-14 bottom-0 w-[240px] border-r border-border bg-background flex flex-col z-30">
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-[13px] font-medium transition-all relative group",
                isActive 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-card rounded-md border border-border shadow-sm"
                  initial={false}
                  transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-3 w-full">
                <item.icon className={cn("w-4 h-4", isActive ? "text-foreground" : "opacity-70 group-hover:opacity-100 transition-opacity")} />
                {item.label}
              </div>
            </button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-border m-3 mb-4 rounded-lg bg-card border shadow-sm flex flex-col gap-1">
        <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Status</div>
        <div className="flex items-center gap-2 text-[12px] font-medium text-foreground">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          All systems normal
        </div>
      </div>
    </aside>
  );
}

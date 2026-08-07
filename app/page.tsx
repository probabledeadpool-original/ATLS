'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopNav } from '@/components/layout/TopNav';
import { DynamicDock } from '@/components/layout/DynamicDock';
import { Overview } from '@/components/dashboard/Overview';
import { Settings } from '@/components/settings/Settings';
import { motion, AnimatePresence } from 'motion/react';
import { Activity } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-[#EAE8E3]">
      <TopNav />
      <div className="flex flex-1 relative">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 ml-[240px] pb-32">
          <div className="max-w-[1400px] mx-auto p-12">
            
            <header className="mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl font-display font-semibold tracking-tight text-foreground"
              >
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </motion.h1>
            </header>

            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, filter: 'blur(2px)', y: 10 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(2px)', y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Overview />
                </motion.div>
              )}
              {activeTab === 'settings' && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, filter: 'blur(2px)', y: 10 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(2px)', y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Settings />
                </motion.div>
              )}
              {activeTab !== 'overview' && activeTab !== 'settings' && (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0, filter: 'blur(2px)', y: 10 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(2px)', y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center py-40 text-muted-foreground bg-card border border-border rounded-lg shadow-sm"
                >
                  <Activity className="w-8 h-8 mb-4 opacity-30" />
                  <h2 className="text-lg font-medium text-foreground mb-1 text-center">Module in Development</h2>
                  <p className="text-sm max-w-sm text-center">
                    The {activeTab} view is being configured for your workspace.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </main>
      </div>
      <DynamicDock />
    </div>
  );
}

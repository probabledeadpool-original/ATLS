"use client";

import { motion } from "motion/react";
import { ThemeSwitcher } from "@/components/ui/apple-liquid-glass-switcher";

export function Settings() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="mb-10">
        <motion.h1 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-display font-semibold tracking-tight text-foreground mb-2"
        >
          Settings
        </motion.h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-[13px] font-semibold text-foreground uppercase tracking-widest mb-6 border-b border-border pb-2">Appearance</h2>
          
          <div className="flex items-center justify-between p-6 bg-card border border-border rounded-xl shadow-sm">
            <div>
              <h3 className="font-medium text-foreground">Interface Theme</h3>
              <p className="text-[13px] text-muted-foreground mt-1">Select or customize your UI theme.</p>
            </div>
            
            <ThemeSwitcher />
          </div>
        </section>

        <section>
          <h2 className="text-[13px] font-semibold text-foreground uppercase tracking-widest mb-6 border-b border-border pb-2">General</h2>
          
          <div className="space-y-4">
            <div className="p-6 bg-card border border-border rounded-xl shadow-sm space-y-4">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Workspace Name</label>
                  <input type="text" defaultValue="Global Operations" className="w-full bg-secondary border-none rounded-md px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-2 focus:ring-border transition-shadow" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Timezone</label>
                  <select className="w-full bg-secondary border-none rounded-md px-4 py-2.5 text-[13px] font-medium outline-none focus:ring-2 focus:ring-border transition-shadow">
                    <option>UTC (Coordinated Universal Time)</option>
                    <option>EST (Eastern Standard Time)</option>
                    <option>PST (Pacific Standard Time)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

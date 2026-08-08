import { Search, Bell, Command, ChevronDown } from 'lucide-react';

export function TopNav() {
  return (
    <header className="h-14 border-b border-white/5 dark:border-white/10 bg-background/80 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-foreground rounded-[4px] shadow-[0_0_12px_rgba(0,0,0,0.1)]" />
          <span className="font-display font-semibold tracking-tight text-[15px] text-foreground">Atlas</span>
        </div>
        
        <div className="h-4 w-px bg-white/10 dark:bg-white/20" />

        <button className="flex items-center gap-2 text-[13px] font-medium text-foreground/80 hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-white/5">
          Global Operations
          <ChevronDown className="w-3.5 h-3.5 opacity-50" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-foreground transition-colors" />
          <input 
            type="text" 
            placeholder="Search command or data..." 
            className="h-8 w-64 bg-card/50 border border-white/5 dark:border-white/10 rounded-full pl-9 pr-3 text-[13px] font-medium outline-none focus:bg-card focus:border-white/20 transition-all placeholder:text-muted-foreground shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-muted-foreground pointer-events-none opacity-50">
            <Command className="w-3 h-3" />
            <span className="text-[10px] font-semibold tracking-widest uppercase">K</span>
          </div>
        </div>

        <button className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5">
          <Bell className="w-4 h-4" />
        </button>

        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-foreground/80 to-foreground/40 border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.1)] flex items-center justify-center text-background text-[10px] font-bold">
          JD
        </div>
      </div>
    </header>
  );
}

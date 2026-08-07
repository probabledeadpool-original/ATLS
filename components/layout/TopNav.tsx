import { Search, Bell, Settings, Command, ChevronDown } from 'lucide-react';

export function TopNav() {
  return (
    <header className="h-14 border-b border-border bg-card flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-foreground rounded-[4px]" />
          <span className="font-display font-semibold tracking-tight text-lg text-foreground">Atlas</span>
        </div>
        
        <div className="h-4 w-px bg-secondary-hover" />

        <button className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
          Global Operations
          <ChevronDown className="w-3.5 h-3.5 opacity-50" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-foreground transition-colors" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="h-8 w-64 bg-secondary rounded-md pl-9 pr-3 text-[13px] font-medium outline-none focus:bg-card focus:ring-1 focus:ring-border transition-all placeholder:text-muted-foreground"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-muted-foreground pointer-events-none">
            <Command className="w-3 h-3" />
            <span className="text-[10px] font-semibold">K</span>
          </div>
        </div>

        <button className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary">
          <Bell className="w-4 h-4" />
        </button>

        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 border-2 border-card shadow-sm flex items-center justify-center text-white text-[11px] font-bold">
          JD
        </div>
      </div>
    </header>
  );
}

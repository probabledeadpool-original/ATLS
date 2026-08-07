"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "dim";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("atlas-theme") as Theme;
    if (storedTheme && ["light", "dark", "dim"].includes(storedTheme)) {
      setThemeState(storedTheme);
    } else {
      // Default to light for this specific design
      setThemeState("light");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("atlas-theme", newTheme);
  };

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    root.classList.remove("light", "dark", "dim");
    root.classList.add(theme);
    
    // Apply specific color schemes if needed, mostly we will use Tailwind classes like dark:bg-black, dim:bg-[#111111]
  }, [theme, mounted]);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

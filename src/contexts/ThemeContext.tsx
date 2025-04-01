"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// Default values for when the context is used outside of a provider
const defaultThemeContext: ThemeContextType = {
  theme: 'dark',
  toggleTheme: () => {}, // Remove console.warn to avoid spam in logs
  setTheme: () => {} // Remove console.warn to avoid spam in logs
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Once mounted, we can show the UI
  useEffect(() => {
    setMounted(true);
    
    // Check for stored theme preference
    try {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme) {
        setTheme(storedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        // Use light theme if user prefers light mode and no preference is stored
        setTheme('light');
      }
    } catch (error) {
      // Ignore localStorage errors (might happen during SSR)
    }
  }, []);

  // Update document class and localStorage when theme changes
  useEffect(() => {
    if (!mounted) return;

    try {
      document.documentElement.classList.remove('light-theme', 'dark-theme');
      document.documentElement.classList.add(`${theme}-theme`);
      
      localStorage.setItem('theme', theme);
    } catch (error) {
      // Ignore errors during server-side rendering
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Fix hydration issues by only rendering after mounted
  // Server-side rendering will use the default theme (dark)
  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      setTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 
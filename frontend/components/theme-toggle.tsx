'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded border border-slate-800 px-3 py-2 text-sm hover:border-slate-600"
    >
      {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />} {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  );
}

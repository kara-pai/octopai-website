'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Mode = 'human' | 'machine';

interface ThemeContextValue {
  mode: Mode;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: 'human',
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('human');

  const toggle = useCallback(() => {
    setMode((prev) => (prev === 'human' ? 'machine' : 'human'));
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div data-mode={mode}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

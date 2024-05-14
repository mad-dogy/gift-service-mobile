import { ReactNode, useMemo, useState } from 'react';

import { ThemeContext } from './ThemeContext';
import { Theme } from './types';

interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const value = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme
    }),
    [theme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

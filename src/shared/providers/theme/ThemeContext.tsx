import { createContext } from 'react';

import { Theme } from './types';

interface IThemeContext {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({});


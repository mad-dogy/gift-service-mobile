import { useContext, useState } from 'react';

import { Theme, ThemeStyles, themeStyles } from '@/shared/providers/theme';
import { ThemeContext } from '@/shared/providers/theme/ThemeContext';

type ThemeStylesType<T> = T extends object ? T : undefined;

interface IUseTheme<T> {
  themeName: Theme;
  toggleTheme: () => void;
  themeStyles: ThemeStylesType<T>;
  theme: ThemeStyles;
}

export const useTheme = <T>(styles?: (theme: ThemeStyles) => T): IUseTheme<T> => {
  const { setTheme, theme } = useContext(ThemeContext);

  const themeName = theme || Theme.Light;

  const [themeStylesState, setThemeStylesState] = useState<T | undefined>(
    styles?.(themeStyles[themeName])
  );

  const toggle = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    
    setThemeStylesState(styles?.(themeStyles[themeName]) as ThemeStylesType<T>);
    setTheme?.(newTheme);
  };

  const themeStylesValue = (
    __DEV__ ? styles?.(themeStyles[themeName]) : themeStylesState
  ) as ThemeStylesType<T>;

  // otherwise styles hot reload do not work because of immutable styles function
  return {
    themeName: theme || Theme.Light,
    toggleTheme: toggle,
    themeStyles: themeStylesValue,
    theme: themeStyles[theme || Theme.Light]
  };
};

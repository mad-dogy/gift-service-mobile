export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export type ThemeStylesCommon = {
  white: string;
  black: string;
};

export type ThemeStyles = {
  primary: string;
  primaryLight: string;
  primaryText: string;
  primaryHover: string;
  primaryActive: string;
  primaryDisabled: string;
  invertedPrimaryColor: string;

  secondary: string;
  secondaryLight: string;
  secondaryText: string;
  secondaryHover: string;
  secondaryActive: string;
  secondaryDisabled: string;

  background: string;
  backgroundSecondary: string;

  error: string;
  success: string;
  warning: string;
  info: string;

  skeleton: string;
} & ThemeStylesCommon;

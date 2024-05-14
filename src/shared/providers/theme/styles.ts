import { Theme, ThemeStyles, ThemeStylesCommon } from './types';

export const commonStyles: ThemeStylesCommon = {
  white: '#FFF',
  black: '#000'
};

export const themeStyles: Record<Theme, ThemeStyles> = {
  [Theme.Light]: {
    primary: '#63629B',
    primaryLight: '#A2A1D0',
    primaryText: '#A2A1D0',
    primaryHover: '#72719D',
    primaryActive: '#251435',
    primaryDisabled: '#5D617B',
    invertedPrimaryColor: '#FFF',

    secondary: '#DFBFB4',
    secondaryLight: '#FF968F',
    secondaryText: '#251435',
    secondaryHover: '#DE3758',
    secondaryActive: '#BA0D2F',
    secondaryDisabled: '#FF968F',

    background: '#FFF',
    backgroundSecondary: '#F4F6F8',

    error: '#DE3758',
    success: '#20BF55',
    warning: '#FA9F42',
    info: '#5D617B',

    skeleton: '#F2F2F2',
    ...commonStyles
  },
  [Theme.Dark]: {
    primary: '#63629B',
    primaryLight: '#A2A1D0',
    primaryText: '#A2A1D0',
    primaryHover: '#72719D',
    primaryActive: '#251435',
    primaryDisabled: '#5D617B',
    invertedPrimaryColor: '#FFF',

    secondary: '#DFBFB4',
    secondaryLight: '#FF968F',
    secondaryText: '#251435',
    secondaryHover: '#DE3758',
    secondaryActive: '#BA0D2F',
    secondaryDisabled: '#FF968F',

    background: '#FFF',
    backgroundSecondary: '#F4F6F8',

    error: '#DE3758',
    success: '#20BF55',
    warning: '#FA9F42',
    info: '#5D617B',

    skeleton: '#F2F2F2',
    ...commonStyles
  }
};

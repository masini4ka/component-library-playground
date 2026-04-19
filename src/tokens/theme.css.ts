import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    primary: null,
    'primary-foreground': null,
    secondary: null,
    'secondary-foreground': null,
    background: null,
    foreground: null,
    muted: null,
    'muted-foreground': null,
    border: null,
    destructive: null,
    'destructive-foreground': null,
    success: null,
    'success-foreground': null,
    warning: null,
    'warning-foreground': null,
  },
  spacing: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    8: null,
    10: null,
    12: null,
    16: null,
  },
  radius: {
    none: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    full: null,
  },
  font: {
    family: {
      sans: null,
      serif: null,
      mono: null,
    },
    size: {
      xs: null,
      sm: null,
      base: null,
      lg: null,
      xl: null,
      '2xl': null,
      '3xl': null,
    },
    weight: {
      normal: null,
      medium: null,
      semibold: null,
      bold: null,
    },
  },
  shadow: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  transition: {
    fast: null,
    base: null,
    slow: null,
  },
  zIndex: {
    base: null,
    dropdown: null,
    modal: null,
    toast: null,
  },
});

export type ThemeVars = typeof vars;

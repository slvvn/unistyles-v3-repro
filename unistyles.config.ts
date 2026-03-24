import { StyleSheet } from "react-native-unistyles";

const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
} as const;

const COLORS_A = {
  background: "#ffffff",
  foreground: "#000000",
};

const COLORS_B = {
  background: "#000000",
  foreground: "#ffffff",
};

const BASE_THEME = {
  border: {
    widths: {
      sm: 1,
      md: 2,
      lg: 3,
    },
    radius: {
      sm: 4,
      md: 8,
      lg: 12,
      full: 9999,
    },
  },
  spacing: (factor: number) => factor * 4,
};

const THEME_A = {
  ...BASE_THEME,
  colors: COLORS_A,
};

const THEME_B = {
  ...BASE_THEME,
  colors: COLORS_B,
};

type AppThemes = {
  a: typeof THEME_A;
  b: typeof THEME_B;
};

declare module "react-native-unistyles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  }
}

StyleSheet.configure({
  themes: {
    a: THEME_A,
    b: THEME_B,
  },
  breakpoints: { ...BREAKPOINTS },
  settings: {
    initialTheme: "a",
    adaptiveThemes: false,
  },
});

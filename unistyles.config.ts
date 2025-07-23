import { StyleSheet } from "react-native-unistyles";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 2000,
  xxxl: 4000,
} as const;

type AppBreakpoints = typeof breakpoints;

const THEME = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
    background: "#f8f9fa",
    backgroundFocus: "#007bff",
    textDefault: "#212529",
    textInverted: "#f8f9fa",
    borderDefault: "#ced4da",
  },
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

type AppThemes = {
  brand: typeof THEME;
  alternate: typeof THEME;
};

declare module "react-native-unistyles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesThemes extends AppThemes {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  breakpoints,
  themes: {
    brand: THEME,
    alternate: {
      ...THEME,
      colors: {
        ...THEME.colors,
        primary: "red",
      },
    },
  },
  settings: {
    initialTheme: "brand",
    adaptiveThemes: false,
  },
});

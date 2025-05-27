/**
 * Theme-related constants
 */

export const THEME = {
  STORAGE_KEY: "theme",
  MODES: {
    LIGHT: "light",
    DARK: "dark",
  },
} as const;

export const ANIMATION_DURATION = {
  SHORT: 0.3,
  MEDIUM: 0.5,
  LONG: 1.5,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;

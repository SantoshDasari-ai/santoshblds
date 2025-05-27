/**
 * Application-wide constants
 */

// Site information
export const SITE_NAME = "Santosh Dasari";
export const SITE_TITLE = "Santosh Dasari | Biomedical Engineer";
export const SITE_DESCRIPTION =
  "Santosh Dasari's portfolio - Biomedical Engineer specializing in innovative product design, medical devices, and robotics.";
export const SITE_URL = "https://santoshblds.com";

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// Contact Information
export const CONTACT_EMAIL = "santoshdasari.ai@gmail.com";
export const GITHUB_URL = "https://github.com/SantoshDasari-ai";
export const LINKEDIN_URL = "https://linkedin.com/in/santosh-dasari";

// Skills
export const SKILLS = [
  "Mechanical Design",
  "CAD",
  "DFMA",
  "Product Development",
  "Medical Devices",
  "Robotics",
];

// Routes
export const ROUTES = {
  HOME: "/",
  PORTFOLIO: "/portfolio",
  RESUME: "/resume",
  CONTACT: "/contact",
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  THEME: "theme",
  DARK_MODE: "darkMode",
} as const;

// Animation Constants
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

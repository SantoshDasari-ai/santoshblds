/**
 * Application-wide constants
 */

// Site information
export const SITE_NAME = "Santosh Dasari";
export const SITE_TITLE = "Santosh Dasari | Biomedical Engineer";
export const SITE_DESCRIPTION =
  "Santosh Dasari's portfolio - Biomedical Engineer specializing in innovative product design, medical devices, and robotics.";
export const SITE_URL = "https://santoshblds.com";

// Contact information
export const CONTACT_EMAIL = "santosh.d4sari@gmail.com";
export const GITHUB_URL = "https://github.com/SantoshDasari-ai";
export const LINKEDIN_URL = "https://linkedin.com/in/santosh-dasari";

// Skills categories
export const SKILLS = [
  "Mechanical Design",
  "CAD",
  "DFMA",
  "Product Development",
  "Medical Devices",
  "Robotics",
] as const;

// Routes
export const ROUTES = {
  HOME: "/",
  PORTFOLIO: "/portfolio",
  RESUME: "/resume",
} as const;

// Re-export theme constants
export { THEME, ANIMATION_DURATION, BREAKPOINTS } from "./theme";

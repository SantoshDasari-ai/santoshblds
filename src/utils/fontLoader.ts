/**
 * Advanced font loading utility for optimal performance
 */

interface FontConfig {
  family: string;
  weights: number[];
  display: "swap" | "fallback" | "optional";
  preload?: boolean;
}

const FONT_CONFIGS: FontConfig[] = [
  {
    family: "Inter",
    weights: [400, 500, 600, 700],
    display: "swap",
    preload: true,
  },
  {
    family: "DM Sans",
    weights: [400, 500, 600, 700],
    display: "swap",
    preload: false, // Secondary font, load after Inter
  },
];

/**
 * Preloads font files directly from Google Fonts CDN
 */
export const preloadCriticalFonts = (): void => {
  if (typeof document === "undefined") return;

  FONT_CONFIGS.forEach((config) => {
    if (!config.preload) return;

    // Create preload links for critical font weights
    const criticalWeights = config.weights.slice(0, 2); // Only preload first 2 weights

    criticalWeights.forEach((weight) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "font";
      link.type = "font/woff2";
      link.crossOrigin = "anonymous";

      // Generate Google Fonts URL for specific weight
      const fontUrl = generateGoogleFontUrl(config.family, [weight]);
      link.href = fontUrl;

      document.head.appendChild(link);
    });
  });
};

/**
 * Generates optimized Google Fonts URL
 */
const generateGoogleFontUrl = (family: string, weights: number[]): string => {
  const baseUrl = "https://fonts.googleapis.com/css2";
  const familyParam = family.replace(" ", "+");
  const weightsParam = weights.join(";");

  return `${baseUrl}?family=${familyParam}:wght@${weightsParam}&display=swap`;
};

/**
 * Loads fonts asynchronously to prevent render blocking
 */
export const loadFontsAsync = (): Promise<void[]> => {
  if (typeof document === "undefined") {
    return Promise.resolve([]);
  }

  const fontPromises = FONT_CONFIGS.map((config) => {
    return new Promise<void>((resolve) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = generateGoogleFontUrl(config.family, config.weights);

      link.onload = () => resolve();
      link.onerror = () => resolve(); // Don't fail if font doesn't load

      document.head.appendChild(link);
    });
  });

  return Promise.all(fontPromises);
};

/**
 * Applies font-display: swap to all font faces
 */
export const optimizeFontDisplay = (): void => {
  if (typeof document === "undefined") return;

  const style = document.createElement("style");
  style.textContent = `
    /* Ensure all fonts use font-display: swap */
    @font-face {
      font-family: 'Inter';
      font-display: swap;
    }
    
    @font-face {
      font-family: 'DM Sans';
      font-display: swap;
    }
    
    /* Fallback fonts for better performance */
    .font-inter-fallback {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    
    .font-dm-sans-fallback {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
  `;

  document.head.appendChild(style);
};

/**
 * Detects if fonts are loaded and applies them
 */
export const detectFontLoad = (): Promise<boolean> => {
  if (typeof document === "undefined") return Promise.resolve(false);

  // Check if the Font Loading API is available
  if (!("fonts" in document) || !document.fonts) {
    return Promise.resolve(false);
  }

  try {
    return Promise.all([
      document.fonts.load("400 16px Inter"),
      document.fonts.load('400 16px "DM Sans"'),
    ])
      .then(() => true)
      .catch(() => false);
  } catch {
    return Promise.resolve(false);
  }
};

/**
 * Initialize font loading optimizations
 */
export const initializeFontOptimizations = (): void => {
  // Apply font-display optimizations immediately
  optimizeFontDisplay();

  // Preload critical fonts
  preloadCriticalFonts();

  // Load fonts asynchronously
  loadFontsAsync().then(() => {
    console.log("Fonts loaded successfully");
  });

  // Detect when fonts are ready
  detectFontLoad().then((loaded) => {
    if (loaded) {
      document.documentElement.classList.add("fonts-loaded");
    }
  });
};

export default {
  preloadCriticalFonts,
  loadFontsAsync,
  optimizeFontDisplay,
  detectFontLoad,
  initializeFontOptimizations,
};

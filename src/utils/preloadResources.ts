/**
 * Utility for preloading critical resources for better performance
 */

/**
 * Critical assets that should be preloaded on all pages
 */
const CRITICAL_CSS: string[] = [
  // Add critical CSS paths here if needed
];

const CRITICAL_FONTS: string[] = [
  // Add critical font paths here if needed
];

const CRITICAL_IMAGES: string[] = ["/assets/logo.png", "/assets/my-photo.JPG"];

/**
 * Preloads a resource with the specified attributes
 * @param href URL of the resource to preload
 * @param as Resource type
 * @param type Optional MIME type
 * @param crossOrigin Optional crossorigin attribute
 */
const preloadResource = (
  href: string,
  as: string,
  type?: string,
  crossOrigin?: string
): void => {
  if (typeof document === "undefined") return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = as;

  if (type) {
    link.type = type;
  }

  if (crossOrigin) {
    link.crossOrigin = crossOrigin;
  }

  document.head.appendChild(link);
};

/**
 * Preloads critical CSS files
 */
export const preloadCriticalCSS = (): void => {
  CRITICAL_CSS.forEach((href) => {
    preloadResource(href, "style");
  });
};

/**
 * Preloads critical font files
 */
export const preloadCriticalFonts = (): void => {
  CRITICAL_FONTS.forEach((href) => {
    preloadResource(href, "font", undefined, "anonymous");
  });
};

/**
 * Preloads critical image files
 */
export const preloadCriticalImages = (): void => {
  CRITICAL_IMAGES.forEach((href) => {
    preloadResource(href, "image");
  });
};

/**
 * Preloads all critical resources
 */
export const preloadAllCriticalResources = (): void => {
  preloadCriticalCSS();
  preloadCriticalFonts();
  preloadCriticalImages();
};

/**
 * Initializes preloading of critical resources
 * Should be called as early as possible
 */
export const initPreloading = (): void => {
  // For immediate execution
  if (typeof window !== "undefined") {
    // Execute immediately if document is already loaded
    if (document.readyState === "complete") {
      preloadAllCriticalResources();
    } else {
      // Otherwise wait for DOMContentLoaded
      window.addEventListener("DOMContentLoaded", preloadAllCriticalResources);
    }
  }
};

export default {
  preloadCriticalCSS,
  preloadCriticalFonts,
  preloadCriticalImages,
  preloadAllCriticalResources,
  initPreloading,
};

/**
 * Utility for preloading critical resources for better performance
 */

/**
 * Critical assets that should be preloaded on all pages
 */
const CRITICAL_CSS: string[] = [
  // Add critical CSS paths here if needed
];

const CRITICAL_IMAGES: string[] = [
  "/assets/logo.webp", // Only preload logo as it's used immediately
  // Removed my-photo.JPG.webp as it's not used on all pages immediately
];

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

  // Check if resource is already preloaded to avoid duplicates
  const existingPreload = document.querySelector(
    `link[rel="preload"][href="${href}"]`
  );
  if (existingPreload) return;

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
 * Preloads critical images only when they're actually needed
 */
export const preloadCriticalImages = (): void => {
  CRITICAL_IMAGES.forEach((href) => {
    preloadResource(href, "image");
  });
};

/**
 * Conditionally preload images based on current route
 * @param route Current route name
 */
export const preloadRouteSpecificImages = (route: string): void => {
  const routeImages: Record<string, string[]> = {
    home: ["/assets/my-photo.JPG.webp"], // Only preload on home page
    about: ["/assets/my-photo.JPG.webp"],
    // Add other route-specific images as needed
  };

  const images = routeImages[route] || [];
  images.forEach((href) => {
    preloadResource(href, "image");
  });
};

/**
 * Optimizes font loading by ensuring font-display: swap is applied
 */
export const optimizeFontLoading = (): void => {
  if (typeof document === "undefined") return;

  // Add font-display: swap to any dynamically loaded fonts
  const style = document.createElement("style");
  style.textContent = `
    @font-face {
      font-family: 'Inter';
      font-display: swap;
    }
    @font-face {
      font-family: 'DM Sans';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
};

/**
 * Initialize all performance optimizations
 */
export const initializePerformanceOptimizations = (): void => {
  preloadCriticalCSS();
  preloadCriticalImages();
  optimizeFontLoading();
};

/**
 * Preload resources for a specific route
 * @param route Route name to preload resources for
 */
export const preloadRouteResources = (route: string): void => {
  const routeResources: Record<string, string[]> = {
    home: ["/assets/my-photo.JPG.webp"],
    projects: ["/assets/project-thumbnails/"],
    resume: ["/assets/resume.pdf"],
  };

  const resources = routeResources[route] || [];
  resources.forEach((href) => {
    preloadResource(href, "image");
  });
};

export default {
  preloadCriticalCSS,
  preloadCriticalImages,
  preloadRouteSpecificImages,
  optimizeFontLoading,
  initializePerformanceOptimizations,
  preloadRouteResources,
};

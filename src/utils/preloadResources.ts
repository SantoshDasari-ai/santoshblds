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
 * Preload critical resources that are needed immediately
 */
export const preloadCriticalResources = (): void => {
  // Preload critical CSS
  CRITICAL_CSS.forEach((href) => {
    preloadResource(href, "style");
  });

  // Preload critical images with modern format support
  CRITICAL_IMAGES.forEach((href) => {
    // Try to preload AVIF first, then WebP, then fallback
    const supportsAvif = checkAvifSupport();
    const supportsWebp = checkWebpSupport();

    if (href.endsWith(".webp")) {
      if (supportsAvif) {
        const avifHref = href.replace(".webp", ".avif");
        preloadResource(avifHref, "image", "image/avif");
      } else if (supportsWebp) {
        preloadResource(href, "image", "image/webp");
      } else {
        // Fallback to original format
        const originalHref = href.replace(".webp", ".png");
        preloadResource(originalHref, "image");
      }
    } else {
      preloadResource(href, "image");
    }
  });
};

/**
 * Check if browser supports AVIF format
 */
const checkAvifSupport = (): boolean => {
  if (typeof document === "undefined") return false;

  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;

  try {
    return canvas.toDataURL("image/avif").indexOf("data:image/avif") === 0;
  } catch {
    return false;
  }
};

/**
 * Check if browser supports WebP format
 */
const checkWebpSupport = (): boolean => {
  if (typeof document === "undefined") return false;

  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;

  try {
    return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  } catch {
    return false;
  }
};

/**
 * Conditionally preload images based on current route with format optimization
 * @param route Current route name
 */
export const preloadRouteSpecificImages = (route: string): void => {
  const routeImages: Record<string, string[]> = {
    home: ["/assets/my-photo.JPG"], // Use original path, component will handle optimization
    about: ["/assets/my-photo.JPG"],
    // Add other route-specific images as needed
  };

  const images = routeImages[route] || [];
  images.forEach((href) => {
    // Let the OptimizedImage component handle format selection
    // Just preload the optimized WebP version for faster loading
    const webpHref = href.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    preloadResource(webpHref, "image", "image/webp");
  });
};

/**
 * Preload fonts with optimal loading strategy
 */
export const preloadFonts = (): void => {
  const fonts = [
    {
      href: "/cf-fonts/v/inter/5.0.16/latin/wght/normal.woff2",
      type: "font/woff2",
    },
    {
      href: "/cf-fonts/v/dm-sans/5.0.18/latin/wght/normal.woff2",
      type: "font/woff2",
    },
  ];

  fonts.forEach(({ href, type }) => {
    preloadResource(href, "font", type, "anonymous");
  });
};

/**
 * Preload resources for a specific route
 * @param route Route name to preload resources for
 */
export const preloadRouteResources = (route: string): void => {
  const routeResources: Record<string, string[]> = {
    home: ["/assets/my-photo.JPG"],
    projects: ["/assets/project-thumbnails/"],
    resume: ["/assets/resume.pdf"],
  };

  const resources = routeResources[route] || [];
  resources.forEach((href) => {
    if (href.endsWith(".pdf")) {
      preloadResource(href, "document");
    } else {
      preloadResource(href, "image");
    }
  });
};

/**
 * Initialize all critical preloading
 */
export const initializePreloading = (): void => {
  // Preload critical resources immediately
  preloadCriticalResources();

  // Preload fonts
  preloadFonts();

  // Preload route-specific resources based on current path
  const currentRoute = window.location.pathname.split("/")[1] || "home";
  preloadRouteSpecificImages(currentRoute);
};

/**
 * Preload resources with intersection observer for better performance
 */
export const preloadOnIntersection = (
  element: Element,
  resources: string[]
): void => {
  if (!("IntersectionObserver" in window)) {
    // Fallback for browsers without IntersectionObserver
    resources.forEach((href) => preloadResource(href, "image"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resources.forEach((href) => preloadResource(href, "image"));
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
};

export default {
  preloadCriticalCSS: preloadCriticalResources,
  preloadCriticalImages: preloadCriticalResources,
  preloadRouteSpecificImages,
  optimizeFontLoading: preloadFonts,
  initializePerformanceOptimizations: initializePreloading,
  preloadRouteResources,
  preloadOnIntersection,
};

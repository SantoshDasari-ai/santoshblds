/**
 * Image optimization utilities for serving the best format based on browser support
 */

// Cache for format support detection
const formatSupport: {
  avif?: boolean;
  webp?: boolean;
} = {};

/**
 * Check if browser supports AVIF format
 */
export const supportsAvif = async (): Promise<boolean> => {
  if (formatSupport.avif !== undefined) {
    return formatSupport.avif;
  }

  if (typeof window === "undefined") {
    formatSupport.avif = false;
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      formatSupport.avif = false;
      return false;
    }

    // Create a simple test image
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 1, 1);

    const avifDataUrl = canvas.toDataURL("image/avif", 0.5);
    formatSupport.avif = avifDataUrl.startsWith("data:image/avif");
    return formatSupport.avif;
  } catch {
    formatSupport.avif = false;
    return false;
  }
};

/**
 * Check if browser supports WebP format
 */
export const supportsWebp = async (): Promise<boolean> => {
  if (formatSupport.webp !== undefined) {
    return formatSupport.webp;
  }

  if (typeof window === "undefined") {
    formatSupport.webp = false;
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      formatSupport.webp = false;
      return false;
    }

    // Create a simple test image
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 1, 1);

    const webpDataUrl = canvas.toDataURL("image/webp", 0.5);
    formatSupport.webp = webpDataUrl.startsWith("data:image/webp");
    return formatSupport.webp;
  } catch {
    formatSupport.webp = false;
    return false;
  }
};

/**
 * Get the optimal image source based on browser support
 */
export const getOptimalImageSrc = async (
  originalSrc: string
): Promise<string> => {
  const isDev = import.meta.env.DEV;

  // In development, use original images to avoid missing file issues
  if (isDev) {
    return originalSrc;
  }

  // Extract path components
  const lastSlashIndex = originalSrc.lastIndexOf("/");
  const directory =
    lastSlashIndex !== -1 ? originalSrc.substring(0, lastSlashIndex) : "";
  const filename =
    lastSlashIndex !== -1
      ? originalSrc.substring(lastSlashIndex + 1)
      : originalSrc;

  // Get filename without extension
  const lastDotIndex = filename.lastIndexOf(".");
  const basename =
    lastDotIndex !== -1 ? filename.substring(0, lastDotIndex) : filename;

  // Check format support
  const [avifSupported, webpSupported] = await Promise.all([
    supportsAvif(),
    supportsWebp(),
  ]);

  // Return the best supported format
  if (avifSupported) {
    return `${directory}/optimized/${basename}.avif`;
  } else if (webpSupported) {
    return `${directory}/optimized/${basename}.webp`;
  } else {
    // Fallback to optimized original format
    return `${directory}/optimized/${filename}`;
  }
};

/**
 * Generate srcSet for responsive images with optimal formats
 */
export const generateOptimalSrcSet = async (
  originalSrc: string,
  widths: number[] = [320, 640, 960, 1280, 1920]
): Promise<string> => {
  const isDev = import.meta.env.DEV;

  if (isDev) {
    return "";
  }

  // Extract path components
  const lastSlashIndex = originalSrc.lastIndexOf("/");
  const directory =
    lastSlashIndex !== -1 ? originalSrc.substring(0, lastSlashIndex) : "";
  const filename =
    lastSlashIndex !== -1
      ? originalSrc.substring(lastSlashIndex + 1)
      : originalSrc;

  // Get filename without extension
  const lastDotIndex = filename.lastIndexOf(".");
  const basename =
    lastDotIndex !== -1 ? filename.substring(0, lastDotIndex) : filename;

  // Check format support
  const [avifSupported, webpSupported] = await Promise.all([
    supportsAvif(),
    supportsWebp(),
  ]);

  // Determine the best format
  let format = "jpg";
  if (avifSupported) {
    format = "avif";
  } else if (webpSupported) {
    format = "webp";
  }

  // Generate srcSet string
  return widths
    .map(
      (width) =>
        `${directory}/optimized/${basename}-${width}.${format} ${width}w`
    )
    .join(", ");
};

/**
 * Preload image with optimal format
 */
export const preloadOptimalImage = async (
  originalSrc: string
): Promise<void> => {
  if (typeof document === "undefined") return;

  try {
    const optimalSrc = await getOptimalImageSrc(originalSrc);

    // Check if already preloaded
    const existing = document.querySelector(
      `link[rel="preload"][href="${optimalSrc}"]`
    );
    if (existing) return;

    // Create preload link
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = optimalSrc;
    link.as = "image";

    // Set appropriate type
    if (optimalSrc.endsWith(".avif")) {
      link.type = "image/avif";
    } else if (optimalSrc.endsWith(".webp")) {
      link.type = "image/webp";
    }

    document.head.appendChild(link);
  } catch (error) {
    console.warn("Failed to preload optimal image:", error);
  }
};

/**
 * Initialize format support detection
 */
export const initializeImageOptimization = async (): Promise<void> => {
  // Pre-detect format support for faster subsequent calls
  await Promise.all([supportsAvif(), supportsWebp()]);
};

export default {
  supportsAvif,
  supportsWebp,
  getOptimalImageSrc,
  generateOptimalSrcSet,
  preloadOptimalImage,
  initializeImageOptimization,
};

/**
 * Utility functions for image optimization
 */

/**
 * Converts a regular image URL to its WebP equivalent
 * @param src Original image URL
 * @returns WebP version URL
 */
export const getWebPVersion = (src: string): string => {
  const urlParts = src.split(".");
  if (urlParts.length > 1) {
    // Replace the extension with webp
    urlParts[urlParts.length - 1] = "webp";
    return urlParts.join(".");
  }
  return src + ".webp";
};

/**
 * Generates a placeholder style for an image
 * Used for blurred placeholder loading effect
 * @param color Background color for the placeholder
 * @returns CSS style object
 */
export const getPlaceholderStyle = (color = "#f0f0f0") => ({
  backgroundColor: color,
  position: "absolute" as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
});

/**
 * Preloads critical images for faster rendering
 * @param imagePaths Array of image paths to preload
 */
export const preloadCriticalImages = (imagePaths: string[]): void => {
  if (typeof window === "undefined") return;

  imagePaths.forEach((path) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = path;
    document.head.appendChild(link);
  });
};

/**
 * Dynamically creates srcset attribute for responsive images
 * @param basePath Base path of the image (without extension)
 * @param extension Image file extension
 * @param widths Array of widths to generate
 * @returns srcset attribute string
 */
export const generateSrcSet = (
  basePath: string,
  extension: string,
  widths: number[] = [320, 640, 960, 1280, 1920]
): string => {
  const basePathWithoutExt = basePath.replace(
    new RegExp(`\\.${extension}$`),
    ""
  );

  return widths
    .map((width) => `${basePathWithoutExt}-${width}.${extension} ${width}w`)
    .join(", ");
};

/**
 * Determines if a lazy-loading approach should be used based on image position
 * @param element The image element to check
 * @param threshold How far from the viewport the image should start loading (0-1)
 * @returns Boolean indicating if the image should be lazy loaded
 */
export const shouldLazyLoad = (
  element: HTMLElement | null,
  threshold = 0.1
): boolean => {
  if (!element || typeof window === "undefined") return false;

  const rect = element.getBoundingClientRect();
  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );

  // If image is within the threshold of viewport, don't lazy load
  return !(rect.bottom >= 0 && rect.top - viewHeight * threshold <= viewHeight);
};

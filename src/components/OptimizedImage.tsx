import React, { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

/**
 * OptimizedImage component that implements lazy loading, WebP/AVIF support, and responsive images
 * Works with the enhanced image optimization structure from our scripts
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  onClick,
  width,
  height,
  priority = false,
  sizes = "100vw",
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Use development mode to determine whether to use optimized paths
  const isDev = import.meta.env.DEV;

  // Generate optimized path by replacing the original path with the optimized version
  const getOptimizedPath = (originalPath: string, format?: string): string => {
    // In development mode, just use the original path to avoid missing files
    if (isDev) {
      // For development, we'll try to use the format if provided, but fallback to original
      if (format) {
        // If it's a format conversion request, try to find a matching file
        const pathWithoutExt = originalPath.substring(
          0,
          originalPath.lastIndexOf(".")
        );
        const formatPath = `${pathWithoutExt}.${format}`;
        return formatPath;
      }
      return originalPath;
    }

    // Production optimization logic
    // Extract path components
    const lastSlashIndex = originalPath.lastIndexOf("/");
    const directory =
      lastSlashIndex !== -1 ? originalPath.substring(0, lastSlashIndex) : "";
    const filename =
      lastSlashIndex !== -1
        ? originalPath.substring(lastSlashIndex + 1)
        : originalPath;

    // Get the filename without extension and the extension
    const lastDotIndex = filename.lastIndexOf(".");
    const basename =
      lastDotIndex !== -1 ? filename.substring(0, lastDotIndex) : filename;
    const ext = lastDotIndex !== -1 ? filename.substring(lastDotIndex) : "";

    // If format is specified, use that instead of the original extension
    const finalExt = format ? `.${format}` : ext;

    // Construct the path to the optimized version
    return `${directory}/optimized/${basename}${finalExt}`;
  };

  // For development, we'll skip responsive srcSet to simplify things
  const buildResponsiveSrcSet = (basePath: string, format: string): string => {
    if (isDev) return "";

    // Extract path components
    const lastSlashIndex = basePath.lastIndexOf("/");
    const directory =
      lastSlashIndex !== -1 ? basePath.substring(0, lastSlashIndex) : "";
    const filename =
      lastSlashIndex !== -1 ? basePath.substring(lastSlashIndex + 1) : basePath;

    // Get the filename without extension
    const lastDotIndex = filename.lastIndexOf(".");
    const basename =
      lastDotIndex !== -1 ? filename.substring(0, lastDotIndex) : filename;

    // Define the responsive widths
    const widths = [320, 640, 960, 1280, 1920];

    // Build the srcSet string
    return widths
      .map((w) => `${directory}/optimized/${basename}-${w}.${format} ${w}w`)
      .join(", ");
  };

  // Path calculations for different formats
  const srcWebp = getOptimizedPath(src, "webp");
  const srcAvif = getOptimizedPath(src, "avif");
  const srcOptimized = getOptimizedPath(src);

  // Responsive image sets
  const srcSetWebp = buildResponsiveSrcSet(src, "webp");

  // Handle image loading completion
  const handleLoad = () => {
    setLoaded(true);
  };

  // Handle image loading error
  const handleError = () => {
    setError(true);
    console.error(
      `Failed to load image: ${src}. Falling back to original source.`
    );

    // If the optimized image fails, we'll try the original as fallback
    if (src !== srcOptimized && !isDev) {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
    }
  };

  return (
    <div
      className={`image-container ${
        loaded ? "loaded" : "loading"
      } ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!loaded && !error && (
        <div
          className="placeholder"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0",
          }}
        />
      )}

      <picture>
        {/* Only use picture element with sources in production */}
        {!isDev && (
          <>
            {/* AVIF format - Best compression */}
            <source srcSet={srcAvif} type="image/avif" sizes={sizes} />

            {/* WebP format - Good compression, better support */}
            <source
              srcSet={srcSetWebp || srcWebp}
              type="image/webp"
              sizes={sizes}
            />
          </>
        )}

        {/* The img element is always shown */}
        <img
          src={isDev ? src : srcOptimized}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onClick={onClick}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: width ? `${width}px` : "100%",
            height: height ? `${height}px` : "auto",
            objectFit: "cover",
          }}
          width={width}
          height={height}
          fetchPriority={priority ? "high" : "auto"}
          sizes={sizes}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;

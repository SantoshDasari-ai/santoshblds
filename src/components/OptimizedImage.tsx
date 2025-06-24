import React, { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
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

  // Generate optimized path by replacing the original path with the optimized version
  const getOptimizedPath = (originalPath: string, format?: string): string => {
    // Extract path components
    const lastSlashIndex = originalPath.lastIndexOf("/");
    const directory =
      lastSlashIndex !== -1 ? originalPath.substring(0, lastSlashIndex) : "";
    const filename =
      lastSlashIndex !== -1
        ? originalPath.substring(lastSlashIndex + 1)
        : originalPath;

    // The optimization script preserves the full filename including extension
    // So "image.jpg" becomes "image.jpg.webp" not "image.webp"
    if (format) {
      // For format conversions, append the format to the full filename
      return `${directory}/optimized/${filename}.${format}`;
    } else {
      // For the original optimized format, use the full filename as-is
      return `${directory}/optimized/${filename}`;
    }
  };

  // Build responsive srcSet for optimized images
  const buildResponsiveSrcSet = (basePath: string, format: string): string => {
    // Extract path components
    const lastSlashIndex = basePath.lastIndexOf("/");
    const directory =
      lastSlashIndex !== -1 ? basePath.substring(0, lastSlashIndex) : "";
    const filename =
      lastSlashIndex !== -1 ? basePath.substring(lastSlashIndex + 1) : basePath;

    // The optimization script creates responsive files like "image.jpg-320.webp"
    // not "image-320.webp", so we need to preserve the full filename
    const widths = [320, 640, 960, 1280, 1920];

    // Build the srcSet string with the correct naming pattern
    return widths
      .map((w) => `${directory}/optimized/${filename}-${w}.${format} ${w}w`)
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
      `Failed to load optimized image: ${srcOptimized}. Trying original source: ${src}`
    );

    // If the optimized image fails, try the original as fallback
    if (src !== srcOptimized) {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = () => {
        console.error(`Also failed to load original image: ${src}`);
      };
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
        {/* AVIF format - Best compression */}
        <source srcSet={srcAvif} type="image/avif" sizes={sizes} />

        {/* WebP format - Good compression, better support */}
        <source
          srcSet={srcSetWebp || srcWebp}
          type="image/webp"
          sizes={sizes}
        />

        {/* The img element with optimized fallback */}
        <img
          src={srcOptimized}
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

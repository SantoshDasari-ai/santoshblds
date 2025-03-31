import React, { useState, useRef, useEffect } from "react";

interface OptimizedVideoProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
}

/**
 * Optimized video component that replaces GIFs with more efficient video formats
 * Works with the enhanced optimization structure from our scripts
 */
const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  alt,
  className = "",
  onClick,
  width = "100%",
  height = "auto",
  priority = false,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  poster,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Use development mode to determine whether to use optimized paths
  const isDev = import.meta.env.DEV;

  // Generate optimized path by replacing the original path with the optimized version
  const getOptimizedPath = (originalPath: string, format?: string): string => {
    // In development mode, just use the original path or try to find the format if specified
    if (isDev) {
      // For videos in dev mode, if we have a specific format, try using it
      if (format) {
        const pathWithoutExt = originalPath.substring(
          0,
          originalPath.lastIndexOf(".")
        );
        return `${pathWithoutExt}.${format}`;
      }

      // Otherwise just return the original path
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

    // If format is specified, use that instead of the original extension
    const finalExt = format ? `.${format}` : "";

    // For videos, we store them in the main directory, not the optimized subdirectory
    if (format === "mp4" || format === "webm") {
      return `${directory}/${basename}${finalExt}`;
    }

    // For images, use the optimized subdirectory
    return `${directory}/optimized/${basename}${finalExt}`;
  };

  // Get the actual video format sources
  const mp4Src = getOptimizedPath(src, "mp4");
  const webmSrc = getOptimizedPath(src, "webm");
  const gifSrc = src.endsWith(".gif") ? src : getOptimizedPath(src, "gif");
  const posterSrc = poster
    ? getOptimizedPath(poster)
    : getOptimizedPath(src, "webp");

  // Force preload if priority is set
  useEffect(() => {
    if (!isDev && priority && videoRef.current) {
      videoRef.current.preload = "auto";

      try {
        const preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "video";
        preloadLink.href = mp4Src;
        document.head.appendChild(preloadLink);

        return () => {
          document.head.removeChild(preloadLink);
        };
      } catch (err) {
        console.error("Error preloading video:", err);
      }
    }
  }, [priority, mp4Src, isDev]);

  const handleLoadedData = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    console.error(`Failed to load video: ${src}`);
  };

  // In development mode, we'll use a simplified approach
  if (isDev) {
    // In dev, if it's a GIF, use the GIF, otherwise try to use the video
    const isGif = src.toLowerCase().endsWith(".gif");

    if (isGif) {
      return (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          loading={priority ? "eager" : "lazy"}
          onClick={onClick}
          width={typeof width === "number" ? width : undefined}
          height={typeof height === "number" ? height : undefined}
        />
      );
    }

    // For other formats in dev, try using the video element directly
    return (
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${className}`}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={priority ? "auto" : "metadata"}
        onClick={onClick}
        onLoadedData={handleLoadedData}
        onError={handleError}
        width={typeof width === "number" ? width : undefined}
        height={typeof height === "number" ? height : undefined}
        controls={!autoPlay}
      >
        <source src={src} type={`video/${src.split(".").pop()}`} />
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
        />
      </video>
    );
  }

  // Production rendering logic
  return (
    <div
      className={`video-container ${
        loaded ? "loaded" : "loading"
      } ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
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
            backgroundImage: poster ? `url(${posterSrc})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* If video fails, fall back to GIF */}
      {error ? (
        <img
          src={gifSrc}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          loading={priority ? "eager" : "lazy"}
          onClick={onClick}
          width={typeof width === "number" ? width : undefined}
          height={typeof height === "number" ? height : undefined}
        />
      ) : (
        <video
          ref={videoRef}
          className={`w-full h-full object-cover ${className}`}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload={priority ? "auto" : "metadata"}
          poster={posterSrc}
          onClick={onClick}
          onLoadedData={handleLoadedData}
          onError={handleError}
          width={typeof width === "number" ? width : undefined}
          height={typeof height === "number" ? height : undefined}
        >
          <source src={mp4Src} type="video/mp4" />
          <source src={webmSrc} type="video/webm" />
          {/* Fallback to GIF if video formats are not supported */}
          <img
            src={gifSrc}
            alt={alt}
            className={`w-full h-full object-cover ${className}`}
            loading={priority ? "eager" : "lazy"}
          />
        </video>
      )}
    </div>
  );
};

export default OptimizedVideo;

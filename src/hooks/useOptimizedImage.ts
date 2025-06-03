import { useState, useEffect, useRef } from "react";
import { getWebPVersion } from "../utils/imageUtils";

interface UseOptimizedImageOptions {
  priority?: boolean;
  threshold?: number;
  placeholder?: string;
}

interface UseOptimizedImageResult {
  src: string;
  webpSrc: string;
  isLoaded: boolean;
  hasError: boolean;
  ref: React.RefObject<HTMLImageElement>;
  handleLoad: () => void;
  handleError: () => void;
}

/**
 * Custom hook for optimized image loading with WebP support,
 * lazy loading, and error handling
 */
const useOptimizedImage = (
  originalSrc: string,
  options: UseOptimizedImageOptions = {}
): UseOptimizedImageResult => {
  const { priority = false, threshold = 0.1, placeholder = "" } = options;

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imageRef = useRef<HTMLImageElement>(null);

  // Convert to WebP
  const webpSrc = getWebPVersion(originalSrc);

  // Handle intersection observer for lazy loading
  useEffect(() => {
    // If priority is true, we don't need to observe
    if (priority) {
      setShouldLoad(true);
      return;
    }

    // Check if intersection observer is supported
    if (!("IntersectionObserver" in window)) {
      // Fallback for browsers that don't support IntersectionObserver
      setShouldLoad(true);
      return;
    }

    const currentImageRef = imageRef.current;

    if (!currentImageRef) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // When image is in viewport
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          // Stop observing once it's in view
          observer.unobserve(entries[0].target as HTMLImageElement);
        }
      },
      {
        rootMargin: `${threshold * 100}% 0px ${threshold * 100}% 0px`,
        threshold: 0,
      }
    );

    // Start observing
    observer.observe(currentImageRef);

    // Clean up
    return () => {
      observer.unobserve(currentImageRef);
    };
  }, [priority, threshold]);

  // Handle successful image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image loading error
  const handleError = () => {
    setHasError(true);
  };

  return {
    src: shouldLoad ? originalSrc : placeholder,
    webpSrc: shouldLoad ? webpSrc : placeholder,
    isLoaded,
    hasError,
    ref: imageRef,
    handleLoad,
    handleError,
  };
};

export default useOptimizedImage;

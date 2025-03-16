import { useState, useEffect, useCallback } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Custom hook for tracking scroll position
 * @param throttleMs - Throttle time in milliseconds
 * @returns Current scroll position {x, y}
 */
export function useScrollPosition(throttleMs = 100): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  const getScrollPosition = useCallback(
    (): ScrollPosition => ({
      x: window.scrollX,
      y: window.scrollY,
    }),
    []
  );

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleScroll = () => {
      if (timeoutId === null) {
        timeoutId = window.setTimeout(() => {
          setScrollPosition(getScrollPosition());
          timeoutId = null;
        }, throttleMs);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set initial position
    setScrollPosition(getScrollPosition());

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [getScrollPosition, throttleMs]);

  return scrollPosition;
}

/**
 * Custom hook to determine if user has scrolled past a certain point
 * @param threshold - Scroll threshold in pixels
 * @returns Boolean indicating if scroll position is past threshold
 */
export function useScrolledPast(threshold: number): boolean {
  const { y } = useScrollPosition();
  return y > threshold;
}

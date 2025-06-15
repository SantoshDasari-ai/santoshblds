import React, { Suspense } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

// Create a lazy loader for heavy animation features
const loadHeavyFeatures = () =>
  import("framer-motion").then((res) => res.domMax);

interface LazyAnimationWrapperProps {
  children: React.ReactNode;
  useHeavyAnimations?: boolean;
  fallback?: React.ReactNode;
}

/**
 * LazyAnimationWrapper - Optimizes animation loading by using LazyMotion
 * and only loading heavy animation features when needed
 */
export const LazyAnimationWrapper: React.FC<LazyAnimationWrapperProps> = ({
  children,
  useHeavyAnimations = false,
  fallback = null,
}) => {
  if (useHeavyAnimations) {
    return (
      <Suspense fallback={fallback}>
        <LazyMotion features={loadHeavyFeatures} strict>
          {children}
        </LazyMotion>
      </Suspense>
    );
  }

  // Use lightweight animations by default
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
};

// Export optimized motion components
export { m as motion };

// Re-export commonly used animation utilities
export {
  AnimatePresence,
  useAnimation,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

export default LazyAnimationWrapper;

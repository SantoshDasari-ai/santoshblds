import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollIndicatorProps {
  color?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  color = "#3b82f6",
}) => {
  const [showScrollHint, setShowScrollHint] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Progress bar indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{ scaleX, backgroundColor: color }}
      />

      {/* Scroll down hint */}
      {showScrollHint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white px-6 py-3 rounded-full text-base font-medium flex items-center gap-3 z-50 shadow-lg"
        >
          <svg
            className="w-5 h-5 animate-pulse"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Scroll to explore</span>
        </motion.div>
      )}
    </>
  );
};

export default ScrollIndicator;

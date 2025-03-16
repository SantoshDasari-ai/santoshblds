import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { safeAddEventListener } from "../utils/dom";

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

  // Hide scroll hint after 4 seconds or when user scrolls
  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(false), 4000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollHint(false);
        clearTimeout(timer);
      }
    };

    const cleanup = safeAddEventListener(window, "scroll", handleScroll, {
      passive: true,
    });

    return () => {
      clearTimeout(timer);
      cleanup();
    };
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
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 z-50 shadow-lg"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: "loop",
            }}
          >
            <ChevronDown size={18} className="text-primary" />
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      )}
    </>
  );
};

export default ScrollIndicator;

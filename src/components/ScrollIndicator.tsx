import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useScrolledPast } from "../hooks/useScrollPosition";

interface ScrollIndicatorProps {
  threshold?: number;
  className?: string;
}

/**
 * Scroll indicator that appears when user hasn't scrolled past threshold
 */
const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  threshold = 100,
  className = "",
}) => {
  const hasScrolled = useScrolledPast(threshold);

  if (hasScrolled) return null;

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1 }}
      onClick={scrollToContent}
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 z-50 shadow-lg hover:bg-white/90 transition-all duration-300 ${className}`}
      aria-label="Scroll to content"
    >
      <span>Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "loop" }}
      >
        <ChevronDown size={16} />
      </motion.div>
    </motion.button>
  );
};

export default ScrollIndicator;

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

interface DarkModeToggleProps {
  className?: string;
}

/**
 * Dark mode toggle component with animation
 */
const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = "" }) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${className}`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;

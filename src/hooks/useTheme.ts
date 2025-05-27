import { useState, useEffect } from "react";
import { THEME } from "../constants/theme";

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove(THEME.MODES.DARK);
      localStorage.setItem(THEME.STORAGE_KEY, THEME.MODES.LIGHT);
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add(THEME.MODES.DARK);
      localStorage.setItem(THEME.STORAGE_KEY, THEME.MODES.DARK);
      setIsDarkMode(true);
    }
  };

  // Initialize dark mode based on user preference, defaulting to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME.STORAGE_KEY);

    // Only use dark mode if explicitly set in localStorage
    if (savedTheme === THEME.MODES.DARK) {
      document.documentElement.classList.add(THEME.MODES.DARK);
      setIsDarkMode(true);
    } else {
      // Default to light mode
      document.documentElement.classList.remove(THEME.MODES.DARK);
      setIsDarkMode(false);
      // If no theme is set yet, save light as the default
      if (!savedTheme) {
        localStorage.setItem(THEME.STORAGE_KEY, THEME.MODES.LIGHT);
      }
    }
  }, []);

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

import { useState, useEffect } from "react";
import { STORAGE_KEYS } from "../constants";
import { useIsDarkMode } from "./useMediaQuery";

/**
 * Custom hook for managing dark mode
 * @returns [isDarkMode, toggleDarkMode, setDarkMode]
 */
export function useDarkMode(): [boolean, () => void, (value: boolean) => void] {
  const prefersDarkMode = useIsDarkMode();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
    return savedMode !== null ? savedMode === "true" : prefersDarkMode;
  });

  // Update the document class when dark mode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, isDarkMode.toString());
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Set dark mode to a specific value
  const setDarkMode = (value: boolean) => {
    setIsDarkMode(value);
  };

  return [isDarkMode, toggleDarkMode, setDarkMode];
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize dark mode based on user preference, defaulting to light mode
const initializeDarkMode = () => {
  const savedTheme = localStorage.getItem("theme");

  // Only use dark mode if explicitly set in localStorage
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    // Default to light mode
    document.documentElement.classList.remove("dark");
    // If no theme is set yet, save light as the default
    if (!savedTheme) {
      localStorage.setItem("theme", "light");
    }
  }
};

// Call the function to set initial theme
initializeDarkMode();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

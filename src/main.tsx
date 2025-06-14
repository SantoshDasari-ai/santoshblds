import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import {
  initializePerformanceOptimizations,
  preloadRouteSpecificImages,
} from "./utils/preloadResources";
import { initializePerformanceMonitoring } from "./utils/performanceMonitor";

console.log("Starting application...");

// Initialize performance optimizations
initializePerformanceOptimizations();

// Initialize font optimizations (but don't preload fonts to avoid warnings)
// initializeFontOptimizations(); // Commented out to prevent font preload warnings

// Initialize performance monitoring
const performanceMonitor = initializePerformanceMonitoring();

// Preload route-specific images based on current path
const currentPath = window.location.pathname;
const route = currentPath === "/" ? "home" : currentPath.slice(1);
preloadRouteSpecificImages(route);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Log performance metrics after app loads
setTimeout(() => {
  if (performanceMonitor) {
    performanceMonitor.logMetrics();
  }
}, 2000);

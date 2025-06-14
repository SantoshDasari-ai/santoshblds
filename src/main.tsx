import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { initializePerformanceOptimizations } from "./utils/preloadResources";
import { initializeFontOptimizations } from "./utils/fontLoader";
import { initializePerformanceMonitoring } from "./utils/performanceMonitor";

console.log("Starting application...");

// Initialize performance optimizations early
initializePerformanceOptimizations();
initializeFontOptimizations();

// Initialize performance monitoring
const performanceMonitor = initializePerformanceMonitoring();

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }

  console.log("Found root element, mounting React application...");

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );

  console.log("React application mounted successfully");

  // Log performance score after initial render
  setTimeout(() => {
    const score = performanceMonitor.getPerformanceScore();
    console.log(`🎯 Performance Score: ${score}/100`);
  }, 2000);
} catch (error) {
  console.error("Error rendering React application:", error);
}

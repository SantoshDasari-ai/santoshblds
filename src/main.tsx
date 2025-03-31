import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

console.log("Starting application...");

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
} catch (error) {
  console.error("Error rendering React application:", error);
}

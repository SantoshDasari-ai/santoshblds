/**
 * Critical CSS utility for performance optimization
 */

/**
 * Critical CSS that should be inlined in the HTML head
 * This includes above-the-fold styles and essential layout
 */
export const CRITICAL_CSS = `
  /* Critical base styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #1f2937;
    background-color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Critical layout styles */
  #root {
    min-height: 100vh;
  }

  /* Font loading optimization */
  .fonts-loading {
    visibility: hidden;
  }

  .fonts-loaded .fonts-loading {
    visibility: visible;
  }

  /* Critical button styles */
  button {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
  }

  /* Critical link styles */
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  /* Critical image styles */
  img {
    border-style: none;
    max-width: 100%;
    height: auto;
  }

  /* Critical utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Critical loading state */
  .loading-skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

/**
 * Injects critical CSS into the document head
 */
export const injectCriticalCSS = (): void => {
  if (typeof document === "undefined") return;

  const style = document.createElement("style");
  style.textContent = CRITICAL_CSS;
  style.setAttribute("data-critical", "true");

  // Insert at the beginning of head for highest priority
  const firstChild = document.head.firstChild;
  if (firstChild) {
    document.head.insertBefore(style, firstChild);
  } else {
    document.head.appendChild(style);
  }
};

/**
 * Removes critical CSS after main stylesheet loads
 */
export const removeCriticalCSS = (): void => {
  if (typeof document === "undefined") return;

  const criticalStyles = document.querySelectorAll(
    'style[data-critical="true"]'
  );
  criticalStyles.forEach((style) => {
    style.remove();
  });
};

/**
 * Preloads non-critical CSS
 */
export const preloadNonCriticalCSS = (href: string): void => {
  if (typeof document === "undefined") return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "style";
  link.href = href;
  link.onload = () => {
    link.rel = "stylesheet";
  };

  document.head.appendChild(link);
};

/**
 * Initialize critical CSS optimizations
 */
export const initializeCriticalCSS = (): void => {
  // Inject critical CSS immediately
  injectCriticalCSS();

  // Remove critical CSS after main stylesheet loads
  window.addEventListener("load", () => {
    setTimeout(removeCriticalCSS, 1000);
  });
};

export default {
  CRITICAL_CSS,
  injectCriticalCSS,
  removeCriticalCSS,
  preloadNonCriticalCSS,
  initializeCriticalCSS,
};

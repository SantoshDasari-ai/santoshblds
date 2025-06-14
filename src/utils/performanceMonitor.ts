/**
 * Performance monitoring utility
 */

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  domContentLoaded?: number;
  loadComplete?: number;
  fontLoadTime?: number;
}

// Extended performance entry interfaces
interface PerformanceEntryWithProcessing extends PerformanceEntry {
  processingStart?: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

/**
 * Measures and logs performance metrics
 */
export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};
  private observer?: PerformanceObserver;

  constructor() {
    this.initializeObservers();
    this.measureBasicMetrics();
  }

  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
      return;
    }

    try {
      // Observe paint metrics
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case "paint": {
              if (entry.name === "first-contentful-paint") {
                this.metrics.fcp = entry.startTime;
              }
              break;
            }
            case "largest-contentful-paint": {
              this.metrics.lcp = entry.startTime;
              break;
            }
            case "first-input": {
              const fidEntry = entry as PerformanceEntryWithProcessing;
              if (fidEntry.processingStart) {
                this.metrics.fid = fidEntry.processingStart - entry.startTime;
              }
              break;
            }
            case "layout-shift": {
              const clsEntry = entry as LayoutShiftEntry;
              if (!clsEntry.hadRecentInput) {
                this.metrics.cls = (this.metrics.cls || 0) + clsEntry.value;
              }
              break;
            }
          }
        }
      });

      // Observe different entry types
      this.observer.observe({
        entryTypes: ["paint", "largest-contentful-paint"],
      });

      // Try to observe other metrics if supported
      try {
        this.observer.observe({ entryTypes: ["first-input"] });
      } catch {
        // First Input Delay not supported
      }

      // Check if layout-shift is supported before observing
      try {
        // Test if layout-shift is supported by checking PerformanceObserver.supportedEntryTypes
        if (
          PerformanceObserver.supportedEntryTypes &&
          PerformanceObserver.supportedEntryTypes.includes("layout-shift")
        ) {
          this.observer.observe({ entryTypes: ["layout-shift"] });
        }
      } catch {
        // Layout Shift not supported
      }
    } catch (error) {
      console.warn("Performance Observer not fully supported:", error);
    }
  }

  /**
   * Measure basic performance metrics
   */
  private measureBasicMetrics(): void {
    if (typeof window === "undefined") return;

    // Measure TTFB
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      this.metrics.ttfb = timing.responseStart - timing.navigationStart;
    }

    // Measure DOM content loaded and load complete
    document.addEventListener("DOMContentLoaded", () => {
      if (window.performance && window.performance.timing) {
        this.metrics.domContentLoaded =
          window.performance.timing.domContentLoadedEventEnd -
          window.performance.timing.navigationStart;
      }
    });

    window.addEventListener("load", () => {
      if (window.performance && window.performance.timing) {
        this.metrics.loadComplete =
          window.performance.timing.loadEventEnd -
          window.performance.timing.navigationStart;
      }

      // Measure font load time
      this.measureFontLoadTime();

      // Log all metrics after page load
      setTimeout(() => this.logMetrics(), 1000);
    });
  }

  /**
   * Measure font loading time
   */
  private measureFontLoadTime(): void {
    if (typeof document === "undefined" || !("fonts" in document)) return;

    const startTime = performance.now();

    Promise.all([
      document.fonts.load("400 16px Inter"),
      document.fonts.load('400 16px "DM Sans"'),
    ])
      .then(() => {
        this.metrics.fontLoadTime = performance.now() - startTime;
      })
      .catch(() => {
        // Font loading failed or not supported
      });
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Log performance metrics to console
   */
  public logMetrics(): void {
    console.group("🚀 Performance Metrics");

    if (this.metrics.fcp) {
      console.log(`First Contentful Paint: ${this.metrics.fcp.toFixed(2)}ms`);
    }

    if (this.metrics.lcp) {
      console.log(`Largest Contentful Paint: ${this.metrics.lcp.toFixed(2)}ms`);
    }

    if (this.metrics.fid) {
      console.log(`First Input Delay: ${this.metrics.fid.toFixed(2)}ms`);
    }

    if (this.metrics.cls) {
      console.log(`Cumulative Layout Shift: ${this.metrics.cls.toFixed(4)}`);
    }

    if (this.metrics.ttfb) {
      console.log(`Time to First Byte: ${this.metrics.ttfb.toFixed(2)}ms`);
    }

    if (this.metrics.domContentLoaded) {
      console.log(
        `DOM Content Loaded: ${this.metrics.domContentLoaded.toFixed(2)}ms`
      );
    }

    if (this.metrics.loadComplete) {
      console.log(`Load Complete: ${this.metrics.loadComplete.toFixed(2)}ms`);
    }

    if (this.metrics.fontLoadTime) {
      console.log(`Font Load Time: ${this.metrics.fontLoadTime.toFixed(2)}ms`);
    }

    console.groupEnd();
  }

  /**
   * Get performance score based on metrics
   */
  public getPerformanceScore(): number {
    let score = 100;

    // Deduct points based on metrics
    if (this.metrics.fcp && this.metrics.fcp > 1800) score -= 10;
    if (this.metrics.lcp && this.metrics.lcp > 2500) score -= 15;
    if (this.metrics.fid && this.metrics.fid > 100) score -= 10;
    if (this.metrics.cls && this.metrics.cls > 0.1) score -= 15;
    if (this.metrics.ttfb && this.metrics.ttfb > 600) score -= 10;

    return Math.max(0, score);
  }

  /**
   * Cleanup observers
   */
  public cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

/**
 * Global performance monitor instance
 */
let performanceMonitor: PerformanceMonitor | null = null;

/**
 * Initialize performance monitoring
 */
export const initializePerformanceMonitoring = (): PerformanceMonitor => {
  if (!performanceMonitor) {
    performanceMonitor = new PerformanceMonitor();
  }
  return performanceMonitor;
};

/**
 * Get the global performance monitor instance
 */
export const getPerformanceMonitor = (): PerformanceMonitor | null => {
  return performanceMonitor;
};

export default {
  PerformanceMonitor,
  initializePerformanceMonitoring,
  getPerformanceMonitor,
};

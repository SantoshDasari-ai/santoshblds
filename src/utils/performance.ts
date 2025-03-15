import { getWindow } from "./dom";

/**
 * Interface for performance metrics
 */
interface PerformanceMetrics {
  timeToFirstByte?: number;
  domContentLoaded?: number;
  windowLoaded?: number;
  firstPaint?: number;
  firstContentfulPaint?: number;
}

/**
 * Collects performance metrics from the browser
 * @returns Object containing performance metrics
 */
export function collectPerformanceMetrics(): PerformanceMetrics | null {
  const win = getWindow();
  if (!win || !win.performance) return null;

  const { performance } = win;
  const metrics: PerformanceMetrics = {};

  // Navigation timing metrics
  const navigationTiming = performance.getEntriesByType(
    "navigation"
  )[0] as PerformanceNavigationTiming;
  if (navigationTiming) {
    metrics.timeToFirstByte =
      navigationTiming.responseStart - navigationTiming.requestStart;
    metrics.domContentLoaded =
      navigationTiming.domContentLoadedEventEnd - navigationTiming.fetchStart;
    metrics.windowLoaded =
      navigationTiming.loadEventEnd - navigationTiming.fetchStart;
  }

  // Paint timing metrics
  const paintMetrics = performance.getEntriesByType("paint");
  paintMetrics.forEach((entry) => {
    if (entry.name === "first-paint") {
      metrics.firstPaint = entry.startTime;
    }
    if (entry.name === "first-contentful-paint") {
      metrics.firstContentfulPaint = entry.startTime;
    }
  });

  return metrics;
}

/**
 * Logs performance metrics to the console
 */
export function logPerformanceMetrics(): void {
  const metrics = collectPerformanceMetrics();
  if (!metrics) {
    console.warn("Performance metrics not available");
    return;
  }

  console.group("Performance Metrics");
  Object.entries(metrics).forEach(([key, value]) => {
    console.log(`${key}: ${value?.toFixed(2)}ms`);
  });
  console.groupEnd();
}

/**
 * Measures the execution time of a function
 * @param fn - Function to measure
 * @param fnName - Optional name for the function
 * @returns The result of the function
 */
export function measureExecutionTime<T>(fn: () => T, fnName = "Function"): T {
  const startTime = performance.now();
  const result = fn();
  const endTime = performance.now();

  console.log(
    `${fnName} execution time: ${(endTime - startTime).toFixed(2)}ms`
  );
  return result;
}

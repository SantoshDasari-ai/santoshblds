import React, { ComponentType, useEffect, useRef } from "react";
import { measureExecutionTime } from "../utils/performance";

/**
 * Higher-order component that tracks render performance of a component
 * @param Component - Component to wrap with performance tracking
 * @param options - Configuration options
 * @returns Wrapped component with performance tracking
 */
export function withPerformanceTracking<P extends object>(
  Component: ComponentType<P>,
  options: {
    trackMounts?: boolean;
    trackRenders?: boolean;
    trackUpdates?: boolean;
    componentName?: string;
  } = {}
): React.FC<P> {
  const {
    trackMounts = true,
    trackRenders = true,
    trackUpdates = false,
    componentName = Component.displayName || Component.name || "Component",
  } = options;

  const WrappedComponent: React.FC<P> = (props) => {
    const renderCount = useRef(0);
    const mountTime = useRef(0);

    useEffect(() => {
      if (trackMounts) {
        mountTime.current = performance.now();
        console.log(`[Performance] ${componentName} mounted`);
      }

      return () => {
        if (trackMounts) {
          const unmountTime = performance.now();
          const timeOnScreen = unmountTime - mountTime.current;
          console.log(
            `[Performance] ${componentName} unmounted after ${timeOnScreen.toFixed(
              2
            )}ms`
          );
        }
      };
    }, []);

    useEffect(() => {
      if (trackUpdates && renderCount.current > 0) {
        console.log(
          `[Performance] ${componentName} updated (render #${renderCount.current})`
        );
      }
    });

    renderCount.current += 1;

    if (trackRenders) {
      return measureExecutionTime(
        () => <Component {...props} />,
        `${componentName} render #${renderCount.current}`
      );
    }

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withPerformanceTracking(${componentName})`;
  return WrappedComponent;
}

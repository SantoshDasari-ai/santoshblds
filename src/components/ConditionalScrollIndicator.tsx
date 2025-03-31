import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ScrollIndicator from "./ScrollIndicator";
import { ROUTES } from "../constants/routes";

/**
 * Component that conditionally renders the ScrollIndicator based on the current route
 * and whether the page content is long enough to require scrolling
 */
const ConditionalScrollIndicator: React.FC = () => {
  const location = useLocation();
  const [shouldShowIndicator, setShouldShowIndicator] = useState(false);

  useEffect(() => {
    // Check if the current page needs a scroll indicator
    const checkIfScrollNeeded = () => {
      // Don't show on the home page
      if (location.pathname === ROUTES.HOME) {
        setShouldShowIndicator(false);
        return;
      }

      // Check if the page content is taller than the viewport
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const isScrollable = documentHeight > viewportHeight + 100; // Add a buffer of 100px

      setShouldShowIndicator(isScrollable);
    };

    // Run the check initially and on window resize
    checkIfScrollNeeded();
    window.addEventListener("resize", checkIfScrollNeeded);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfScrollNeeded);
    };
  }, [location.pathname]);

  if (!shouldShowIndicator) {
    return null;
  }

  return <ScrollIndicator />;
};

export default ConditionalScrollIndicator;

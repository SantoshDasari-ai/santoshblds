/**
 * Service worker registration and management utilities
 */

/**
 * Registers the service worker
 * @returns A promise that resolves when registration is complete
 */
export const registerServiceWorker =
  async (): Promise<ServiceWorkerRegistration | null> => {
    if ("serviceWorker" in navigator && import.meta.env.PROD) {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js");
        console.log(
          "Service Worker registered successfully:",
          registration.scope
        );
        return registration;
      } catch (error) {
        console.error("Service Worker registration failed:", error);
        return null;
      }
    }
    return null;
  };

/**
 * Checks if the service worker is currently active
 * @returns A promise that resolves to true if active, false otherwise
 */
export const isServiceWorkerActive = async (): Promise<boolean> => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      return !!registration.active;
    } catch (error) {
      console.error("Error checking service worker status:", error);
      return false;
    }
  }
  return false;
};

/**
 * Unregisters service workers - useful for debugging
 * @returns A promise that resolves when unregistration is complete
 */
export const unregisterServiceWorkers = async (): Promise<boolean> => {
  if ("serviceWorker" in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
      }
      return true;
    } catch (error) {
      console.error("Error unregistering service workers:", error);
      return false;
    }
  }
  return false;
};

/**
 * Updates the service worker
 * @returns A promise that resolves when update check is complete
 */
export const updateServiceWorker = async (): Promise<boolean> => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.update();
      return true;
    } catch (error) {
      console.error("Error updating service worker:", error);
      return false;
    }
  }
  return false;
};

/**
 * Checks if the page is controlled by a service worker
 * @returns Boolean indicating if page is controlled
 */
export const isPageControlled = (): boolean => {
  return !!navigator.serviceWorker && !!navigator.serviceWorker.controller;
};

/**
 * Initialize service worker registration
 */
export const initServiceWorker = (): void => {
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      registerServiceWorker();
    });
  }
};

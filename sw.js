// Service Worker for santoshblds.com
const CACHE_NAME = "santoshblds-cache-v1";

// Assets to cache immediately on install
const PRECACHE_ASSETS = ["/", "/index.html", "/assets/logo.png"];

// Install event - precaches key assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Helper function to determine if a request is for an image
const isImageRequest = (request) => {
  const url = new URL(request.url);
  return (
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".jpeg") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".gif") ||
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".svg")
  );
};

// Helper function to determine if a request is for a font
const isFontRequest = (request) => {
  const url = new URL(request.url);
  return (
    url.pathname.endsWith(".woff2") ||
    url.pathname.endsWith(".woff") ||
    url.pathname.endsWith(".ttf") ||
    url.pathname.endsWith(".otf")
  );
};

// Helper function to determine if a request is for a static asset
const isStaticAssetRequest = (request) => {
  const url = new URL(request.url);
  return (
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css") ||
    url.pathname.startsWith("/assets/")
  );
};

// Fetch event - network first for HTML, stale-while-revalidate for assets, cache-first for images
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Skip non-GET requests
  if (request.method !== "GET") return;

  // Skip cross-origin requests
  if (new URL(request.url).origin !== location.origin) return;

  // HTML pages - network first, fallback to cache
  if (request.headers.get("Accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache the latest version
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Fallback to cached homepage if specific page not found
            return caches.match("/");
          });
        })
    );
    return;
  }

  // Images - cache first, then network
  if (isImageRequest(request)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          // Update cache in the background
          fetch(request)
            .then((response) => {
              if (response.ok) {
                caches
                  .open(CACHE_NAME)
                  .then((cache) => cache.put(request, response));
              }
            })
            .catch(() => {});
          return cachedResponse;
        }

        // If not in cache, fetch from network and cache
        return fetch(request).then((response) => {
          if (!response.ok) {
            return response;
          }

          const clonedResponse = response.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(request, clonedResponse));
          return response;
        });
      })
    );
    return;
  }

  // Static assets (JS, CSS) - stale-while-revalidate
  if (isStaticAssetRequest(request) || isFontRequest(request)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        // Use cached version if available, and fetch updated version in background
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, networkResponse.clone());
            });
            return networkResponse;
          })
          .catch(() => {
            // If fetch fails, still return cached response if available
            return cachedResponse;
          });

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Default strategy - network first with cache fallback
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cache successful responses
        if (response.ok) {
          const clonedResponse = response.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(request, clonedResponse));
        }
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

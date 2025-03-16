/**
 * Safely access the document object with SSR compatibility
 * @returns document object or null if not available
 */
export function getDocument(): Document | null {
  if (typeof document !== "undefined") {
    return document;
  }
  return null;
}

/**
 * Safely access the window object with SSR compatibility
 * @returns window object or null if not available
 */
export function getWindow(): (Window & typeof globalThis) | null {
  if (typeof window !== "undefined") {
    return window;
  }
  return null;
}

/**
 * Safely add an event listener with SSR compatibility
 * @param target - Target element or window/document
 * @param eventType - Event type to listen for
 * @param callback - Event handler function
 * @param options - Event listener options
 * @returns Cleanup function to remove the event listener
 */
export function safeAddEventListener<K extends keyof WindowEventMap>(
  target: Window | Document | HTMLElement | null,
  eventType: K,
  callback: (event: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): () => void {
  if (!target) return () => {};

  target.addEventListener(eventType, callback as EventListener, options);
  return () => {
    target.removeEventListener(eventType, callback as EventListener, options);
  };
}

/**
 * Safely get an element by ID with type casting
 * @param id - Element ID
 * @returns Element or null if not found
 */
export function getElementById<T extends HTMLElement = HTMLElement>(
  id: string
): T | null {
  const doc = getDocument();
  return doc ? (doc.getElementById(id) as T | null) : null;
}

/**
 * Safely get elements by class name with type casting
 * @param className - Class name to search for
 * @param parent - Parent element to search within (defaults to document)
 * @returns Array of matching elements
 */
export function getElementsByClassName<T extends HTMLElement = HTMLElement>(
  className: string,
  parent?: HTMLElement
): T[] {
  const doc = getDocument();
  if (!doc) return [];

  const elements = parent
    ? parent.getElementsByClassName(className)
    : doc.getElementsByClassName(className);

  return Array.from(elements) as T[];
}

// Smooth scrolling implementation using event delegation with secure options
document.addEventListener(
  "click",
  (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const target = link.getAttribute("href");
    if (target?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  },
  { passive: true }
);

// Toggle section visibility with event delegation and secure options
document.addEventListener(
  "click",
  (e) => {
    const header = e.target.closest("h2");
    if (!header) return;

    const section = header.nextElementSibling;
    if (section) {
      section.classList.toggle("collapsed");

      if (section.classList.contains("collapsed")) {
        section.classList.add("fade-out");
        section.classList.remove("fade-in");
      } else {
        section.classList.add("fade-in");
        section.classList.remove("fade-out");
      }
    }
  },
  { passive: true }
);

// Add loading state for external links with security checks
document.addEventListener(
  "click",
  (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (href && !href.startsWith("#") && !href.startsWith("javascript:")) {
      // Validate URL before adding loading state
      try {
        new URL(href); // This will throw if the URL is invalid
        link.classList.add("loading");
      } catch (e) {
        console.warn("Invalid URL detected:", href);
        e.preventDefault();
        return;
      }
    }
  },
  { passive: false }
);

// Secure scroll-to-top functionality
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Show/hide scroll-to-top button based on scroll position with throttling
let scrollTimeout;
window.addEventListener(
  "scroll",
  () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
      const scrollButton = document.getElementById("scroll-top");
      if (scrollButton) {
        scrollButton.style.display = window.scrollY > 300 ? "block" : "none";
      }
    });
  },
  { passive: true }
);

// Smooth scrolling implementation using event delegation
document.addEventListener("click", (e) => {
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
});

// Toggle section visibility with event delegation
document.addEventListener("click", (e) => {
  const header = e.target.closest("h2");
  if (!header) return;

  const section = header.nextElementSibling;
  if (section) {
    section.classList.toggle("collapsed");

    // Optional: Add animation classes
    if (section.classList.contains("collapsed")) {
      section.classList.add("fade-out");
      section.classList.remove("fade-in");
    } else {
      section.classList.add("fade-in");
      section.classList.remove("fade-out");
    }
  }
});

// Add loading state for external links
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;

  const href = link.getAttribute("href");
  if (href && !href.startsWith("#") && !href.startsWith("javascript:")) {
    link.classList.add("loading");
  }
});

// Optional: Add scroll-to-top functionality
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Show/hide scroll-to-top button based on scroll position
window.addEventListener("scroll", () => {
  const scrollButton = document.getElementById("scroll-top");
  if (scrollButton) {
    scrollButton.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

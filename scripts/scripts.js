// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Toggle visibility of sections
document.querySelectorAll("h2").forEach((header) => {
  header.addEventListener("click", () => {
    const section = header.nextElementSibling;
    section.classList.toggle("collapsed");
  });
});
// Add smooth scrolling for all links
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function () {
    const target = this.getAttribute("href");
    if (target.startsWith("#")) {
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }
  });
});

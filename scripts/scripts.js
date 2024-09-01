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

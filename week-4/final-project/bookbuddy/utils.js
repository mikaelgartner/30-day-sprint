// utils.js
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("backToTop");
  if (backToTopButton) {
    backToTopButton.addEventListener("click", scrollToTop);

    window.addEventListener("scroll", () => {
      backToTopButton.style.display = window.scrollY > 50 ? "inline-flex" : "none";
    });
  }
});
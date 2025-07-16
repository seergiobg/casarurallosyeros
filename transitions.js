// transitions.js

window.addEventListener("DOMContentLoaded", () => {
  // Forzar el reflow para aplicar la transición
  requestAnimationFrame(() => {
    document.body.classList.add("page-enter");
  });
});
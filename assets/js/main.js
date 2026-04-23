const navToggle = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("isOpen");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

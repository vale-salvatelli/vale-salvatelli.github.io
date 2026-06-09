/* ── Footer year ─────────────────────────────────────────────────────────── */
document.getElementById("year").textContent = new Date().getFullYear();

/* ── Mobile navigation toggle ────────────────────────────────────────────── */
const toggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("is-open");
});

/* Close mobile nav when a link is clicked */
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  });
});

// Ouvre/ferme la navigation sur mobile
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute(
        "aria-expanded",
        nav.classList.contains("open") ? "true" : "false"
      );
    });
  }

  // Petite animation d’apparition des cartes sur les pages Galerie/Information
  const cards = document.querySelectorAll(".card, .info-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.animate(
            [
              { opacity: 0, transform: "translateY(8px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 350, easing: "ease-out", fill: "forwards" }
          );
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  cards.forEach((el) => observer.observe(el));
});
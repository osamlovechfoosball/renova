document.documentElement.classList.add("js");

const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const navLinks = document.querySelectorAll("[data-site-nav] a");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const heroSection = document.querySelector(".hero");
const revealTargets = document.querySelectorAll(
  ".section-heading, .service-card, .audience-card, .project-card, .process-intro, .process-list li, .proof-grid article, .about-layout > *, .contact-copy, .contact-form"
);

function closeNavigation() {
  document.body.classList.remove("nav-open");
  siteNav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";

  document.body.classList.toggle("nav-open", !isOpen);
  siteNav?.classList.toggle("is-open", !isOpen);
  navToggle.setAttribute("aria-expanded", String(!isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavigation();
  }
});

function updateStickyContact() {
  const threshold = heroSection
    ? heroSection.offsetTop + heroSection.offsetHeight * 0.72
    : 320;

  document.body.classList.toggle("show-sticky-contact", window.scrollY > threshold);
}

window.addEventListener("scroll", updateStickyContact, { passive: true });
window.addEventListener("resize", updateStickyContact);
updateStickyContact();

function setupScrollReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal-on-scroll");
    target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px 10% 0px",
    }
  );

  revealTargets.forEach((target) => observer.observe(target));
}

setupScrollReveal();

contactForm?.addEventListener("submit", (event) => {
  if (window.location.protocol !== "file:") {
    return;
  }

  event.preventDefault();

  if (formNote) {
    formNote.textContent = document.documentElement.lang === "en"
      ? "The form is ready for web hosting. Connect it to a form endpoint or Netlify Forms for real submissions."
      : "Формата е готова за уеб хостинг. За реално изпращане я свържете към form endpoint или Netlify Forms.";
    formNote.classList.add("is-success");
  }
});

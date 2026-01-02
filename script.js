const toggle = document.getElementById("theme-toggle");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");

// Dark/Light mode toggle
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Add navbar shadow on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Fade-in sections on scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-up-visible");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => section.classList.add("fade-up"));
sections.forEach(section => observer.observe(section));
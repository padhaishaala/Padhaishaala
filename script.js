window.addEventListener('load', () => {

  /* ===== H1 RESPONSIVE SIZE ===== */
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.style.fontSize = "6vw";
  }

  /* ===== SELECT ELEMENTS ===== */
  const fadeElements = document.querySelectorAll('.fade-in');
  const revealElements = document.querySelectorAll('.reveal');

  /* ===== SCROLL ANIMATION ===== */
  function handleScroll() {
    const windowHeight = window.innerHeight;

    // FADE-IN
    fadeElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add('show');
      }
    });

    // REVEAL
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);

  /* RUN ON LOAD ALSO (so top elements appear) */
  handleScroll();

  /* ===== DARK MODE TOGGLE ===== */
  const toggleBtn = document.getElementById("theme-toggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

});

const waitlistBtn = document.querySelector(".waitlist button");

if (waitlistBtn) {
  waitlistBtn.addEventListener("click", () => {
    document.querySelector(".waitlist-note").innerText = "You're on the waitlist 🚀";
  });
}

function joinWaitlist() {
  document.querySelector(".waitlist-note").innerText = "You're on the waitlist 🚀";
}
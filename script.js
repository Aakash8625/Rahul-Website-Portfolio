// Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('✅ Service Worker registered:', reg.scope))
      .catch(err => console.error('❌ Service Worker failed:', err));
  });
}

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.innerHTML = document.body.classList.contains('dark')
      ? '<i class=\"fas fa-sun\"></i> Light Mode'
      : '<i class=\"fas fa-moon\"></i> Dark Mode';
  });
});

// Typing Animation
const words = ["an AI Engineer", "a Web Developer", "a PWA Creator"];
let i = 0, j = 0, currentWord = '', isDeleting = false;

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
    }

    document.getElementById("typed").textContent = currentWord;

    if (j === words[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 80 : 150);
  }
}
document.addEventListener("DOMContentLoaded", type);

// Particles
tsParticles.load("particles-js", {
  fullScreen: false,
  particles: {
    number: { value: 40 },
    color: { value: "#4a90e2" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 1 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" }
    }
  }
});
// navbar
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdown = dropdownToggle.parentElement;

    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      dropdown.classList.toggle("open");

      // Close other dropdowns (optional for multiple dropdowns)
      document.querySelectorAll(".dropdown").forEach((el) => {
        if (el !== dropdown) el.classList.remove("open");
      });
    });

    // Optional: click outside to close
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  });
// navbar end

console.log("✅ JS file loaded");

function speak(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }
}

// Voice on hover
document.querySelectorAll(".masonry-item").forEach(item => {
  item.addEventListener("mouseenter", () => {
    const tagline = item.getAttribute("data-voice");
    speak(tagline);
  });
});
// end marker 
const endMarker = document.getElementById("endMarker");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      endMarker.classList.add("visible");
      // Use innerHTML instead of textContent
      endMarker.innerHTML = "🌸 ~ You’ve reached the end ~ 🌸";

      const utterance = new SpeechSynthesisUtterance("You have reached the end");
      speechSynthesis.speak(utterance);
    }
  });
});

observer.observe(endMarker);

document.addEventListener("DOMContentLoaded", () => {
  const popObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target.querySelector('img[data-src]');
        if (img) {
          img.src = img.getAttribute('data-src'); // lazy load
          img.removeAttribute('data-src');
        }
        entry.target.classList.add('visible'); // triggers pop-in
        popObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.masonry-item').forEach(el => {
    popObserver.observe(el);
  });
});






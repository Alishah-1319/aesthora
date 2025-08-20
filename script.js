AOS.init({
    duration: 1200,
    once: true
  });
  
  // Optional tilt effect
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.transform = `perspective(600px) rotateX(${-(y - rect.height / 2) / 20}deg) rotateY(${(x - rect.width / 2) / 20}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
    });
  });
  

  
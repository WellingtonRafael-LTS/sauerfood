export function initEssenciaObserver() {
  const essenciaSection = document.querySelector('.essencia-section');
  if (!essenciaSection) {
    return;
  }

  const observerOptions = {
    root: null,
    threshold: 0.35,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(essenciaSection);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEssenciaObserver);
} else {
  initEssenciaObserver();
}

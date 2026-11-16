export function initEssenciaObserver() {
  const essenciaSection = document.querySelector('.essencia-section');
  const triggerButton = document.querySelector('.essencia-actions .btn');
  if (!essenciaSection || !triggerButton) {
    return;
  }

  const observerOptions = {
    root: null,
    threshold: 1.0,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        essenciaSection.classList.add('animate');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(triggerButton);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEssenciaObserver);
} else {
  initEssenciaObserver();
}

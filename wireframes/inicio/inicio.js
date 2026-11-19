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

export function initSpotlightCards() {
  const cards = document.querySelectorAll('.experiencia-card');
  if (!cards.length) {
    return;
  }

  cards.forEach((card) => {
    let rafId = null;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    card.addEventListener('mouseleave', () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });
}

function initPage() {
  initEssenciaObserver();
  initSpotlightCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}

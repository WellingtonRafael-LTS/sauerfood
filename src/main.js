import './styles/global.css';
import { renderHeader } from './components/header/Header.js';
import { renderWhatsAppButton } from './components/whatsapp-button/WhatsAppButton.js';
import { renderFooter } from './components/footer/Footer.js';
import { initI18n } from './i18n/index.js';

function mountGlobalComponents() {
  const headerRoot = document.getElementById('header-root');
  renderHeader(headerRoot);

  const footerRoot = document.getElementById('footer-root');
  if (footerRoot) {
    renderFooter(footerRoot);
  }

  renderWhatsAppButton();
  initI18n();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountGlobalComponents);
} else {
  mountGlobalComponents();
}

function initGoldCards() {
    const cards = document.querySelectorAll(".gold-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;

                const shine = document.createElement("div");
                shine.classList.add("gold-shine");

                card.appendChild(shine);

                shine.addEventListener("animationend", () => {
                    shine.remove();
                }, { once: true });

                shine.classList.add("animate");

                observer.unobserve(card);
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGoldCards);
} else {
    initGoldCards();
}
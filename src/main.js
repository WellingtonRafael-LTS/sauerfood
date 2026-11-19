import './styles/global.css';
import { renderHeader } from './components/header/Header.js';
import { renderWhatsAppButton } from './components/whatsapp-button/WhatsAppButton.js';
import { renderFooter } from './components/footer/Footer.js';

function mountGlobalComponents() {
  const headerRoot = document.getElementById('header-root');
  renderHeader(headerRoot);

  const footerRoot = document.getElementById('footer-root');
  if (footerRoot) {
    renderFooter(footerRoot);
  }

  renderWhatsAppButton();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountGlobalComponents);
} else {
  mountGlobalComponents();
}

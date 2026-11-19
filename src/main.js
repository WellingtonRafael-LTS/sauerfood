import './styles/global.css';
import { renderHeader } from './components/header/Header.js';
import { renderWhatsAppButton } from './components/whatsapp-button/WhatsAppButton.js';

function mountGlobalComponents() {
  const headerRoot = document.getElementById('header-root');
  renderHeader(headerRoot);
  renderWhatsAppButton();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountGlobalComponents);
} else {
  mountGlobalComponents();
}

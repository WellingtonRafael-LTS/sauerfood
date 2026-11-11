import { renderHeader } from './components/header/Header.js';

function mountHeader() {
  const headerRoot = document.getElementById('header-root');
  renderHeader(headerRoot);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountHeader);
} else {
  mountHeader();
}


import './Header.css';
import { getCurrentLanguage, setLanguage } from '../../i18n/index.js';

const NAV_LINKS = [
  { id: 'inicio', label: 'Início', href: '/wireframes/inicio/index.html', i18nKey: 'nav.inicio' },
  { id: 'servicos', label: 'Serviços', href: '/wireframes/servicos/index.html', i18nKey: 'nav.servicos' },
  { id: 'eventos', label: 'Eventos', href: '/wireframes/eventos/index.html', i18nKey: 'nav.eventos' },
  { id: 'cardapio', label: 'Cardápio', href: '/wireframes/cardapio/index.html', i18nKey: 'nav.cardapio' },
  { id: 'sobre', label: 'Sobre', href: '/wireframes/sobre/index.html', i18nKey: 'nav.sobre' },
  { id: 'contato', label: 'Contato', href: '/wireframes/contato/index.html', i18nKey: 'nav.contato' },
];

const LANGUAGES = ['pt', 'es', 'en'];

function getActivePage() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('/servicos')) return 'servicos';
  if (path.includes('/eventos')) return 'eventos';
  if (path.includes('/cardapio')) return 'cardapio';
  if (path.includes('/sobre')) return 'sobre';
  if (path.includes('/contato')) return 'contato';
  if (path.includes('/inicio') || path === '/' || path.endsWith('/index.html')) return 'inicio';
  return 'inicio';
}

export function renderHeader(container) {
  if (!container) return;

  const activePage = getActivePage();
  let activeLang = getCurrentLanguage();
  let isMobileOpen = false;

  const navItemsMarkup = NAV_LINKS.map((link) => {
    const isActive = activePage === link.id;
    const activeClass = isActive ? ' class="active"' : '';
    const ariaCurrent = isActive ? ' aria-current="page"' : '';
    return `<li class="header-menu-item"><a href="${link.href}"${activeClass}${ariaCurrent} data-i18n="${link.i18nKey}">${link.label}</a></li>`;
  }).join('');

  const langItemsMarkup = LANGUAGES.map((lang) => {
    const isActive = activeLang === lang;
    const activeClass = isActive ? ' active' : '';
    const ariaCurrent = isActive ? ' aria-current="true"' : '';
    return `<a href="#${lang}" data-lang="${lang}" class="lang-link${activeClass}"${ariaCurrent} aria-label="Mudar idioma para ${lang.toUpperCase()}">${lang.toUpperCase()}</a>`;
  }).join('');

  container.innerHTML = `
    <header class="site-header">
      <div class="header-container">
        <a href="/wireframes/inicio/index.html" class="header-logo" aria-label="Sauer Food - Ir para a página inicial">
          <img src="/img/brand/logo-sauer.png" alt="Logomarca Sauer Food" />
        </a>

        <button type="button" class="mobile-menu-button" aria-expanded="false" aria-label="Abrir menu de navegação" aria-controls="main-navbar">
          <span class="hamburger-line" aria-hidden="true"></span>
          <span class="hamburger-line" aria-hidden="true"></span>
          <span class="hamburger-line" aria-hidden="true"></span>
        </button>

        <nav id="main-navbar" class="header-navbar" aria-label="Navegação principal">
          <ul class="header-menu">
            ${navItemsMarkup}
          </ul>

          <div class="language-selector" role="group" aria-label="Seletor de idioma">
            ${langItemsMarkup}
          </div>
        </nav>
      </div>
    </header>
  `;

  const header = container.querySelector('.site-header');
  const logoLink = container.querySelector('.header-logo');
  const menuButton = container.querySelector('.mobile-menu-button');
  const navbar = container.querySelector('#main-navbar');
  const navLinks = container.querySelectorAll('.header-menu-item a');
  const langLinks = container.querySelectorAll('.lang-link');

  const updateScrolled = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };

  const setMobileMenu = (open) => {
    isMobileOpen = open;
    menuButton.classList.toggle('open', open);
    navbar.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute(
      'aria-label',
      open ? 'Fechar menu de navegação' : 'Abrir menu de navegação',
    );
    document.body.style.overflow = open ? 'hidden' : '';
  };

  updateScrolled();
  window.addEventListener('scroll', updateScrolled, { passive: true });

  menuButton.addEventListener('click', () => {
    setMobileMenu(!isMobileOpen);
  });

  logoLink.addEventListener('click', () => {
    setMobileMenu(false);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMobileMenu(false);
    });
  });

  function syncActiveLanguage(lang) {
    activeLang = lang;
    langLinks.forEach((item) => {
      const isCurrent = item.dataset.lang === activeLang;
      item.classList.toggle('active', isCurrent);
      if (isCurrent) {
        item.setAttribute('aria-current', 'true');
      } else {
        item.removeAttribute('aria-current');
      }
    });
  }

  langLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const selectedLang = link.dataset.lang;
      if (!selectedLang) return;
      setLanguage(selectedLang);
      setMobileMenu(false);
    });
  });

  window.addEventListener('languageChanged', (event) => {
    if (event.detail && event.detail.lang) {
      syncActiveLanguage(event.detail.lang);
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMobileOpen) {
      setMobileMenu(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMobileOpen) {
      setMobileMenu(false);
    }
  });
}


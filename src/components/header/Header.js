import './Header.css';

const NAV_LINKS = [
  { id: 'inicio', label: 'Início', href: '/wireframes/inicio/index.html' },
  { id: 'servicos', label: 'Serviços', href: '/wireframes/servicos/index.html' },
  { id: 'eventos', label: 'Eventos', href: '/wireframes/eventos/index.html' },
  { id: 'cardapio', label: 'Cardápio', href: '/wireframes/cardapio/index.html' },
  { id: 'sobre', label: 'Sobre', href: '/wireframes/sobre/index.html' },
  { id: 'contato', label: 'Contato', href: '/wireframes/contato/index.html' },
];

const LANGUAGES = ['pt', 'es', 'en'];

function getActivePage() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('/servicos')) return 'servicos';
  if (path.includes('/eventos')) return 'eventos';
  if (path.includes('/cardapio')) return 'cardapio';
  if (path.includes('/sobre')) return 'sobre';
  if (path.includes('/contato')) return 'contato';
  return 'inicio';
}

export function renderHeader(container) {
  if (!container) return;

  const activePage = getActivePage();
  let activeLang = 'pt';
  let isMobileOpen = false;

  const navItemsMarkup = NAV_LINKS.map((link) => {
    const isActive = activePage === link.id;
    const activeClass = isActive ? ' class="active"' : '';
    const ariaCurrent = isActive ? ' aria-current="page"' : '';
    return `<li class="header-menu-item"><a href="${link.href}"${activeClass}${ariaCurrent}>${link.label}</a></li>`;
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
          <img src="/img/logo_sem_fundo_256_256px.png.png" alt="Logomarca Sauer Food" />
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

  langLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const selectedLang = link.dataset.lang;
      if (!selectedLang) return;
      activeLang = selectedLang;

      langLinks.forEach((item) => {
        const isCurrent = item.dataset.lang === activeLang;
        item.classList.toggle('active', isCurrent);
        if (isCurrent) {
          item.setAttribute('aria-current', 'true');
        } else {
          item.removeAttribute('aria-current');
        }
      });

      setMobileMenu(false);
    });
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


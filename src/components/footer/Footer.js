import './Footer.css';
import { getTranslation } from '../../i18n/index.js';

function getLegalContent() {
  return {
    privacidade: {
      title: getTranslation('footer.privacyModalTitle'),
      html: `
        <p>${getTranslation('footer.privacyModalText1')}</p>
        <p>${getTranslation('footer.privacyModalText2')}</p>
        <p>${getTranslation('footer.privacyModalText3')}</p>
      `,
    },
    termos: {
      title: getTranslation('footer.termsModalTitle'),
      html: `
        <p>${getTranslation('footer.termsModalText1')}</p>
        <p>${getTranslation('footer.termsModalText2')}</p>
        <p>${getTranslation('footer.termsModalText3')}</p>
      `,
    },
  };
}

function setupLegalModal(footerElement) {
  const modal = footerElement.querySelector('#legal-modal');
  const title = footerElement.querySelector('#legal-modal-title');
  const body = footerElement.querySelector('#legal-modal-body');
  const closeBtn = footerElement.querySelector('.legal-modal-close');
  const buttons = footerElement.querySelectorAll('.legal-link-btn');

  if (!modal || !title || !body || !closeBtn || !buttons.length) {
    return;
  }

  function openModal(type) {
    const legalContent = getLegalContent();
    const data = legalContent[type];
    if (!data) return;
    title.textContent = data.title;
    body.innerHTML = data.html;
    modal.showModal();
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-modal-target');
      openModal(type);
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (!isInDialog) {
      modal.close();
    }
  });
}

export function renderFooter(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h3>SAUER FOOD</h3>
            <p data-i18n="footer.description">Gastronomia de alta performance. Sabor, excelência e experiências criadas para transformar o seu evento.</p>
          </div>
          <div class="footer-col">
            <h3 data-i18n="footer.navTitle">NAVEGAÇÃO</h3>
            <ul>
              <li><a href="/wireframes/inicio/index.html" data-i18n="nav.inicio">Início</a></li>
              <li><a href="/wireframes/servicos/index.html" data-i18n="nav.servicos">Serviços</a></li>
              <li><a href="/wireframes/eventos/index.html" data-i18n="nav.eventos">Eventos</a></li>
              <li><a href="/wireframes/cardapio/index.html" data-i18n="nav.cardapio">Cardápio</a></li>
              <li><a href="/wireframes/sobre/index.html" data-i18n="nav.sobre">Sobre</a></li>
              <li><a href="/wireframes/contato/index.html" data-i18n="nav.contato">Contato</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3 data-i18n="footer.contactTitle">CONTATO</h3>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+554598225170">+55 45 9822-5170</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:contato@sauerfood.com">contato@sauerfood.com</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span data-i18n="footer.city">Foz do Iguaçu, Paraná</span>
              </li>
            </ul>
          </div>
          <div class="footer-col footer-col-action">
            <h3 data-i18n="footer.socialTitle">SOCIAL</h3>
            <div class="social-icons">
              <a href="https://www.instagram.com/sauerfoodfoz" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Sauer Food">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://wa.me/554598225170?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20evento%20com%20a%20Sauer%20Food." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Sauer Food" data-i18n-whatsapp="whatsapp.ctaMessage">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
            <a href="/wireframes/contato/index.html" class="btn btn-gold" data-i18n="footer.btnBudget">Solicitar Orçamento &rarr;</a>
          </div>
        </div>
        <hr>
        <div class="footer-bottom">
          <div class="copyright">
            <p data-i18n="footer.copyright">&copy; 2026 Sauer Food. Todos os direitos reservados.</p>
          </div>
          <div class="footer-credit-box">
            <a href="https://github.com/WellingtonRafael-LTS/sauerfood" target="_blank" rel="noopener noreferrer" class="footer-credit" data-i18n="footer.academicCredit">Projeto Integrador &bull; UniAmérica 2026</a>
          </div>
          <div class="legal-links">
            <button type="button" class="legal-link-btn" data-modal-target="privacidade" data-i18n="footer.privacy">Política de Privacidade</button>
            <span class="legal-divider" aria-hidden="true">&bull;</span>
            <button type="button" class="legal-link-btn" data-modal-target="termos" data-i18n="footer.terms">Termos de Uso</button>
          </div>
        </div>
      </div>
    </div>

    <dialog id="legal-modal" class="legal-modal">
      <div class="legal-modal-card">
        <header class="legal-modal-header">
          <h3 id="legal-modal-title" class="legal-modal-title">Política de Privacidade</h3>
          <button type="button" class="legal-modal-close" aria-label="Fechar janela">&times;</button>
        </header>
        <div id="legal-modal-body" class="legal-modal-body"></div>
      </div>
    </dialog>
  `;

  setupLegalModal(container);
}

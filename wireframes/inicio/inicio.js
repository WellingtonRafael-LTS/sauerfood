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
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

export function initLegalModal() {
  const modal = document.getElementById('legal-modal');
  const title = document.getElementById('legal-modal-title');
  const body = document.getElementById('legal-modal-body');
  const closeBtn = document.querySelector('.legal-modal-close');
  const buttons = document.querySelectorAll('.legal-link-btn');

  if (!modal || !title || !body || !closeBtn || !buttons.length) {
    return;
  }

  const legalContent = {
    privacidade: {
      title: 'Política de Privacidade',
      html: `
        <p>A Sauer Food valoriza a privacidade e a segurança dos dados de seus clientes e parceiros. Esta política resume como tratamos informações em nossas interações digitais.</p>
        <p><strong>Coleta de Dados:</strong> As informações fornecidas em nossos formulários e canais de contato (como nome, telefone, data e preferências de evento) são utilizadas estritamente para a elaboração de orçamentos personalizados e atendimento via WhatsApp.</p>
        <p><strong>Uso e Proteção:</strong> Não compartilhamos seus dados com terceiros para fins publicitários. Mantemos práticas seguras para garantir a integridade das suas informações.</p>
      `,
    },
    termos: {
      title: 'Termos de Uso',
      html: `
        <p>Bem-vindo ao site institucional da Sauer Food. Ao navegar por esta plataforma, você concorda com as seguintes diretrizes:</p>
        <p><strong>Serviços e Propostas:</strong> As informações e imagens apresentadas possuem caráter de demonstração de serviços gastronômicos e experiências para eventos. Orçamentos finais estão sujeitos à disponibilidade de datas e confirmação formal.</p>
        <p><strong>Propriedade Intelectual:</strong> Marcas, logotipos, fotografias e textos presentes neste site são de titularidade da Sauer Food ou devidamente autorizados para uso institucional.</p>
      `,
    },
  };

  function openModal(type) {
    const data = legalContent[type];
    if (!data) {
      return;
    }
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

function initPage() {
  initEssenciaObserver();
  initSpotlightCards();
  initLegalModal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}

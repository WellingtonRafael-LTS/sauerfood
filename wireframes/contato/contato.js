export function initContatoForm() {
  const form = document.getElementById('whatsapp-budget-form');
  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome')?.value.trim() || '';
    const tipo = document.getElementById('tipo')?.value || '';
    const data = document.getElementById('data')?.value || '';
    const local = document.getElementById('local')?.value.trim() || '';
    const convidados = document.getElementById('convidados')?.value || '';
    const servicosSelecionados = Array.from(document.querySelectorAll('input[name="servicos"]:checked'))
      .map((checkbox) => checkbox.value);
    const observacoes = document.getElementById('observacoes')?.value.trim() || '';

    const partes = [
      'Olá, Sauer Food! Gostaria de solicitar um orçamento.',
      nome ? `Nome/Empresa: ${nome}` : '',
      `Tipo de evento: ${tipo}`,
      data ? `Data prevista: ${data}` : '',
      local ? `Local: ${local}` : '',
      convidados ? `Convidados: ${convidados}` : '',
      servicosSelecionados.length > 0 ? `Serviços: ${servicosSelecionados.join(', ')}` : '',
      observacoes ? `Observações: ${observacoes}` : '',
    ].filter(Boolean);

    const url = `https://wa.me/554598225170?text=${encodeURIComponent(partes.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

function initPage() {
  initContatoForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}

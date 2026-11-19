# Especificacao da Pagina — Inicio

- Responsavel: Wellington Rafael Pereira dos Santos - Product Owner
- Arquivo HTML: index.html
- Estilos exclusivos: inicio.css
- Script exclusivo: inicio.js
- Ponto de entrada global: src/main.js

## 1. Visao Geral
A pagina Inicial e o ponto central de apresentacao da Sauer Food e a principal porta de entrada do visitante. Seu objetivo e transmitir autoridade gastronomica, requinte e sofisticacao em eventos de medio e grande porte, conduzindo a navegacao ate o cardapio e convertendo o contato prioritariamente para o WhatsApp e solicitacao de orcamento.

## 2. Arquitetura e Componentizacao
- Header: montado dinamicamente em #header-root via src/components/header/Header.js com deteccao automatica de pagina ativa, efeito de blur e fundo translucido no scroll, menu responsivo mobile e seletor de idiomas.
- Footer: montado dinamicamente em #footer-root via src/components/footer/Footer.js, contendo links de navegacao, contato, redes sociais, modais integrados de Politica de Privacidade e Termos de Uso e creditos academicos.
- Botao Flutuante do WhatsApp: renderizado via src/components/whatsapp-button/WhatsAppButton.js com efeito de pulso continuo e redirecionamento dinamico para o wa.me.
- Internacionalizacao: suporte completo aos idiomas Portugues, Espanhol e Ingles gerenciado por src/i18n/index.js, com persistencia em localStorage, atualizacao sem recarregar a pagina, traducao do document.title, acessibilidade em aria-label e adaptacao das mensagens do WhatsApp.

## 3. Estrutura de Secoes da Pagina
1. Hero:
   - Apresentacao editorial de alto impacto com imagem de corte nobre, tipografia Cormorant Garamond com destaque dourado, tagline e botoes de acao para Solicitar Orcamento e Explorar Cardapios.
2. Essencia Sauer Food:
   - Secao institucional com efeito suave de animacao ativado por IntersectionObserver em inicio.js, apresentando o proposito e o compromisso gastronomico com acao de descoberta.
3. Servicos de Assinatura:
   - Finger Food: apresentacao clara voltada a recepcoes volantes e coqueteis sofisticados com chamada para a pagina de servicos.
   - Festival de Churrasco: secao com fundo escuro, cortes nobres ao vivo no fogo de chao e parrilla com chamada detalhada.
   - Coffee Break: formato corporativo e social para congressos, treinamentos e intervalos executivos.
4. Experiencia sob Medida:
   - Grade de tres pilares estruturais: Menu Assinado, Equipe de Elite e Logistica Impecavel.
   - Efeito interativo de spotlight com calculo de coordenadas CSS otimizado via requestAnimationFrame em inicio.js.
5. Depoimentos e Reconhecimento:
   - Testemunhos editoriais de clientes e empresas parceiras atestando pontualidade, atendimento e qualidade gastronomica.
6. CTA Final - Reserva & Orcamento:
   - Chamada conclusiva de fechamento com senso de exclusividade de agenda, contendo botao para a pagina de Contato e botao direto para atendimento no WhatsApp com mensagem localizada.

## 4. Recursos Tecnicos e Desempenho
- Otimizacao com requestAnimationFrame para evitar reflows no calculo do mousemove dos cards.
- IntersectionObserver para disparar animacoes apenas quando os elementos entram na viewport do usuario.
- Semantica HTML5 e atributos ARIA em todos os elementos de navegacao e acoes interativas.
- Conformidade estrita com o linter do projeto e Vite build sem advertencias.

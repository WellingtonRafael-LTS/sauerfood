# Backlog e Registro de Alteracoes — Sauer Food

Regra: registrar de forma sucinta toda alteracao feita no projeto (data, arquivos e resumo).

---

## Historico de Alteracoes

### 17/11/2026 — Redesign Editorial da Secao Coffee Break
- Arquivos: `wireframes/inicio/index.html`, `wireframes/inicio/inicio.css`, `BACKLOG.md`.
- Resumo:
  - Reestruturado o Coffee Break no padrao editorial de alto luxo com fundo claro (--off-white) e imagem a esquerda, consolidando o ritmo de alternancia (zig-zag) com Finger Food e Churrasco.
  - Adicionada tagline "Corporativo & Social", titulo em Cormorant Garamond com destaque italico, divisor dourado linear e lead sensorial.
  - Alinhado o container de texto com justify-self: center e configurado o zoom frontal suave na imagem delimitado ao hover do box .coffe.

### 17/11/2026 — Redesign Editorial em Alternancia da Secao Festival de Churrasco
- Arquivos: `wireframes/inicio/index.html`, `wireframes/inicio/inicio.css`, `BACKLOG.md`.
- Resumo:
  - Implementado layout editorial em alternancia (zig-zag): texto posicionado a esquerda e fotografia de churrasco sangrada encostada a margem direita da tela.
  - Alinhada a hierarquia visual ao padrao de luxo do site: inclusao da tagline oficial "Festival & Brasa Viva", titulo em Cormorant Garamond com destaque italico dourado, divisor linear e paragrafo lead de impacto.
  - Aplicado fundo preto refinado (--preto: #0d0d0d) com degradê termico ambar sutil e botao de acao estilizado com borda e brilho dourado (.btn-service-churrasco).
  - Configurado efeito de zoom frontal suave (scale 1.08) com elevacao de camada delimitado ao hover da caixa do churrasco (.body-churrasco .churrasco:hover).

### 17/11/2026 — Delimitacao do Gatilho de Zoom para o Box Finger Food
- Arquivos: `wireframes/inicio/inicio.css`, `BACKLOG.md`.
- Resumo:
  - Ajustado o gatilho de hover do zoom da imagem (.body-finger .finger-food:hover .finger-food-imagem img): o efeito agora e ativado exclusivamente dentro dos limites do box .finger-food (altura e largura do container de conteudo e imagem), sem disparar nos espacos de padding superior e inferior da secao.

### 16/11/2026 — Gradiente Lateral Grafite e Zoom Frontal na Imagem de Finger Food
- Arquivos: `wireframes/inicio/inicio.css`, `BACKLOG.md`.
- Resumo:
  - Adicionado degradê grafite suave com linear-gradient da margem direita em direcao ao centro na secao `.body-finger`, proporcionando contraste e eliminando o fundo monocromatico claro.
  - Implementado efeito de expansao pura para frente (scale 1.08 com transform-origin central) e elevacao de camada (z-index) no hover da imagem, gerando profundidade sem deslocamento lateral.

### 16/11/2026 — Refinamento de Copywriting na Secao Finger Food
- Arquivos: `wireframes/inicio/index.html`, `BACKLOG.md`.
- Resumo:
  - Atualizada a tagline da secao para `Eventos & Recepções`.
  - Reestruturado o titulo principal para `Finger Food & Celebração`, eliminando o termo generico "Gourmet".
  - Refinado o texto editorial com foco em grandiosas experiencias gastronomicas para ocasioes especiais e celebracoes.

### 16/11/2026 — Refinamento Editorial e Tipografico da Secao Finger Food
- Arquivos: `wireframes/inicio/index.html`, `wireframes/inicio/inicio.css`, `BACKLOG.md`.
- Resumo:
  - Alinhada a tipografia da secao Finger Food ao padrao de design editorial do Hero e da secao Essencia.
  - Adicionada a tagline oficial com linha guia dourada (`Cardápio Volante`).
  - Reestruturado o titulo em Cormorant Garamond com destaque italico (`Finger Food Gourmet`) e divisor dourado sutil.
  - Criado paragrafo lead de destaque com tipografia editorial e ajustada a hierarquia do corpo de texto e transicoes do botao de acao.

### 16/11/2026 — Ajuste Proporcional do Finger Food e Nova Fotografia
- Arquivos: `public/img/finger_food_mesa.jpg`, `wireframes/inicio/index.html`, `wireframes/inicio/inicio.css`, `.agents/GEMINI.md`, `BACKLOG.md`.
- Resumo:
  - Substituida a imagem anterior de Finger Food pela nova fotografia real da mesa gourmet de Finger Food (`/img/finger_food_mesa.jpg`).
  - Ajustado o espacamento da secao `.body-finger` adicionando respiro vertical (`padding: 80px 0`) com o fundo claro (`--off-white`), evitando que a imagem se estenda desproporcionalmente de cima a baixo.
  - A imagem foi mantida encostada na margem esquerda da tela, com cantos retos (sem borda arredondada), altura controlada de 480px e sombra sutil.

### 16/11/2026 — Intensificacao do Fade Termico Dourado Atras do Chef e Remocao da Chama
- Arquivos: `wireframes/inicio/index.html`, `wireframes/inicio/inicio.css`, `BACKLOG.md`.
- Resumo:
  - Removido experimento de marca d'agua de chama no fundo da secao Essencia, mantendo layout limpo e direto.
  - Intensificado o glow/fade dourado ambiente diretamente atras da moldura da foto do Chef (.portrait-ambient-glow com expansao para -28%, opacidade aumentada para 32%, blur de 48px e animacao @keyframes portraitGlowPulse).
  - Alinhado degradê radial da secao para 75% 42% no quadrante do Chef, destacando a fotografia autoral.

### 16/11/2026 — Padronizacao de Formato de Commit sem Escopo
- Arquivos: `.agents/GEMINI.md`, `BACKLOG.md`.
- Resumo:
  - Atualizada a regra 5 do projeto no contexto do agente (.agents/GEMINI.md versao 3.3) definindo sugestoes de mensagens de commit estritamente sem escopo entre parenteses (ex.: `feat: ...`, `fix: ...`).

### 16/11/2026 — Sincronizacao do Gatilho da Citacao com Visibilidade Total do Botao de Acao
- Arquivos: `wireframes/inicio/inicio.js`, `BACKLOG.md`.
- Resumo:
  - Ajustado o alvo do IntersectionObserver no modulo `wireframes/inicio/inicio.js`: o observador agora monitora o botao de acao (.essencia-actions .btn) com threshold 1.0 (100% visivel na tela).
  - Garante que mesmo em rolagem lenta a animacao da linha e do texto da citacao so dispare quando todo o bloco da secao Essencia, incluindo o botao inferior, estiver visivel no campo de visao do usuario.

### 13/11/2026 — Gatilho de Animacao com IntersectionObserver na Secao Essencia
- Arquivos: `wireframes/inicio/inicio.js`, `wireframes/inicio/index.html`, `wireframes/inicio/inicio.css`, `BACKLOG.md`.
- Resumo:
  - Criado modulo JavaScript `wireframes/inicio/inicio.js` implementando `IntersectionObserver` na secao `.essencia-section`.
  - Configurado estado inicial oculto dos elementos da citacao (.quote-line com transform scaleY(0) e opacity 0; .quote-body com clip-path e translacao negativa).
  - A animacao de emergencia da linha e do texto passa a ser engatilhada exclusivamente quando a secao entra no campo de visao do usuario via adicao da classe `.animate`.
  - O observador e desconectado apos o disparo unico, garantindo que o texto e a linha permaneçam fixos e visiveis sem recalculos adicionais.

### 12/11/2026 — Padronizacao de Assinatura do Chef Alisson Sauer e Efeito de Emergencia na Linha
- Arquivos: `wireframes/inicio/index.html`, `wireframes/inicio/inicio.css`, `BACKLOG.md`.
- Resumo:
  - Adicionada tipografia de assinatura "Alisson Sauer" em Cormorant Garamond italico dourado no badge do retrato e na citacao oficial, substituindo o texto generico SAUER FOOD.
  - Implementado comportamento interativo no badge do retrato: a funcao "CHEF DA SAUER FOOD" surge em transicao fluida ao passar o mouse sobre o frame da imagem.
  - Adicionadas aspas tipograficas a citacao e refinada a animacao @keyframes quoteEmergingFromLine, fazendo o texto emergir diretamente da linha vertical dourada com deslocamento horizontal e abertura por mascara de recorte.

### 12/11/2026 — Refinamento Editorial da Secao Essencia e Animacao da Citacao
- Arquivos: `wireframes/inicio/index.html`, `wireframes/inicio/inicio.css`, `BACKLOG.md`.
- Resumo:
  - Eliminados dados artificiais e imprecisos da secao (removido bloco de estatisticas nao confirmadas pelo cliente e simplificado o badge do retrato para "CHEF DA SAUER FOOD").
  - Adicionado fundo atmosferico profundo com gradiente grafite aquecido (#121316 a #17181c), sutil overlay com malha radial e marca d'agua monumental "SAUER".
  - Reestruturada a tipografia do lead editorial com frase de destaque com alto contraste seguida pelo texto detalhado.
  - Implementada a animacao Gold Line Wipe Reveal na citacao oficial: crescimento vertical da linha guia dourada (@keyframes quoteLineGrow) sincronizado com abertura suave horizontal do texto (@keyframes quoteWipeReveal com clip-path).
  - Incluida regra de acessibilidade em prefers-reduced-motion para neutralizar a animacao da citacao quando solicitado pelo usuario.

### 12/11/2026 — Redesign Editorial da Secao Essencia com Retrato do Chef
- Arquivos: `wireframes/inicio/index.html`, `wireframes/inicio/inicio.css`, `BACKLOG.md`.
- Resumo:
  - Substituida a colagem de placeholders por uma composicao editorial de alto padrao destacando a fotografia vertical do Chef (/img/chef.jpeg).
  - Adicionada moldura geometrica dourada reativa, badge em glassmorphism translucido ("Chef & Fundador") e glow ambiente sutil.
  - Reestruturado o lado esquerdo com tipografia integrada ao Hero (Cormorant Garamond com destaque italico dourado), manifesto sensorial, metricas de prestigio minimalistas conectadas por divisor em ouro escovado e citacao com aspas decorativas.
  - Totalmente responsivo com adaptacao fluida para tablets e dispositivos moveis.

### 12/11/2026 — Sincronizacao Git e Correcao de Import em Eventos
- Arquivos: `wireframes/eventos/eventos.css`, `BACKLOG.md`.
- Resumo:
  - Sincronizadas as alteracoes remotas da branch `feature/inicio` com rebase limpo.
  - Removido import orfao `@import '../wireframe.css'` em `wireframes/eventos/eventos.css` que quebrava o build apos o commit do colega.
  - Validado lint e build com 0 erros.

### 12/11/2026 — Efeito de Zoom Suave no Fundo do Hero (Ken Burns)
- Arquivos: `wireframes/inicio/inicio.css`, `BACKLOG.md`.
- Resumo:
  - Isolada a imagem de fundo e os gradientes do Hero no pseudo-elemento `.hero::before` com `overflow: hidden` na secao principal.
  - Implementada a animacao @keyframes heroZoom (20s, ease-in-out, alternate infinite de scale(1) ate scale(1.08)), afetando exclusivamente a imagem sem alterar textos, botoes ou a estrutura da pagina.
  - Preservada acessibilidade em prefers-reduced-motion e compatibilidade responsiva no mobile.

### 12/11/2026 — Correcao de Especificidade na Tipografia da Tagline
- Arquivos: `src/styles/typography.css`, `wireframes/inicio/inicio.css`, `wireframes/inicio/index.html`, `BACKLOG.md`.
- Resumo:
  - Blindada a especificidade do seletor `.tagline .linename` na camada global de tipografia, garantindo a aplicacao correta da cor dourada (--dourado) e espacamento de letras de 4px.
  - Substituido seletor generico `.hero p` por `.hero-description` no `inicio.css` para eliminar vazamento de escopo (style leakage) sobre a tagline.
  - Atualizada a imagem de fundo do Hero para `/img/churrasco_3.jpg` em desktop e mobile.

### 12/11/2026 — Restauracao e Centralizacao dos Estilos de Servicos
- Arquivos: `src/styles/sections.css`, `.agents/GEMINI.md`, `BACKLOG.md`.
- Resumo:
  - Adicionadas as regras de layout dos 3 servicos oficiais (.finger-food, .churrasco, .coffe e suas respectivas imagens e textos) em `src/styles/sections.css`, restaurando a apresentacao visual compartilhada entre a pagina Inicio e a pagina Servicos.
  - Atualizado `.agents/GEMINI.md` para versao 3.2 adicionando a regra obrigatoria de sugestao de mensagem de commit (Conventional Commits) ao final de cada alteracao.

### 12/11/2026 — Refatoracao Arquitetural do inicio.css e Expansao da Camada Global
- Arquivos: `src/styles/typography.css`, `src/styles/buttons.css`, `src/styles/sections.css`, `src/styles/global.css`, `wireframes/inicio/inicio.css`, `wireframes/inicio/index.html`, `BACKLOG.md`.
- Resumo:
  - Extraidos mais de 230 linhas de estilos repetitivos e globais do `inicio.css` para a camada central em `src/styles/`.
  - Criado `src/styles/sections.css` com regras compartilhadas de servicos (.body-finger, .body-churrasco, .body-coffe), testemunho e bloco de CTA final.
  - Adicionada classe utilitaria reutilizavel `.btn-service` em `buttons.css` substituindo classes especificas isoladas.
  - Centralizada a regra de tipografia `.destaque` em `typography.css`.
  - `inicio.css` reduzido significativamente, focando exclusivamente na estrutura do Hero, Essencia e secoes exclusivas do inicio.

### 12/11/2026 — Redesign da Secao Essencia e Correcao de Imports CSS
- Arquivos: `wireframes/inicio/index.html`, `wireframes/inicio/inicio.css`, `wireframes/servicos/servicos.css`, `wireframes/sobre/sobre.css`, `BACKLOG.md`.
- Resumo:
  - Redesenhada a secao de Essencia Sauer Food na pagina Inicio: novo layout em grid com cards refinados de estatisticas (12+ anos e 500+ eventos), bloco de citacao institucional e mosaico de fotos responsivo.
  - Corrigidos os imports de CSS nas paginas `servicos` e `sobre` para apontar para `src/styles/global.css`, eliminando o erro de arquivo inexistente `wireframe.css` que quebrava o carregamento.
  - Removido link orfao para `wireframe.css` no cabecalho de `wireframes/inicio/index.html`.
  - Registrada a padronizacao previa dos diretorios de CSS realizada pela equipe.

### 11/11/2026 — Instalacao e Validacao do Vite 8
- Arquivos: `wireframes/wireframe.css`, `BACKLOG.md`.
- Resumo:
  - Instaladas as dependencias declaradas no `package-lock.json`, incluindo Vite 8.3.3.
  - Corrigidos os caminhos das importacoes dos estilos compartilhados, que impediam o build multipagina.
  - Validado o projeto com build de producao e lint.

### 11/11/2026 — Modularizacao Profissional de CSS por Camadas e Paginas
- Arquivos: `src/styles/variables.css`, `src/styles/reset.css`, `src/styles/typography.css`, `src/styles/buttons.css`, `src/styles/footer-whatsapp.css`, `src/styles/global.css`, `src/main.js`, `wireframes/wireframe.css`, `wireframes/*/index.html`, `wireframes/*/*.css`, `.agents/GEMINI.md`, `BACKLOG.md` (removido `src/style.css`).
- Resumo:
  - Eliminado o arquivo monolitico de 1055 linhas `src/style.css`.
  - Criada camada de estilos globais em `src/styles/` com tokens e componentes compartilhados.
  - Isolados estilos de cada pagina em sua respectiva pasta (`wireframes/<pagina>/<pagina>.css`), eliminando riscos de merge conflict no Git entre os membros da equipe.
  - Atualizadas as ligacoes HTML para os novos arquivos de estilo e validado o build e lint sem erros.

### 11/11/2026 — Ajuste do .gitignore e Limpeza de Pastas Orfas
- Arquivos: `.gitignore`, `BACKLOG.md`.
- Resumo:
  - Adicionadas regras para ignorar arquivos de IA (.agents/, GEMINI.md) e pastas de IDE/editor (.idea/, .vscode/).
  - Removidas pastas orfas e temporarias (dist, img com arquivo zerado e config).
  - Preparado o stage do Git na branch rafael/incio para versionamento limpo.

### 11/11/2026 — Migracao para Componentes em JS Puro e Redirecionador na Raiz (Opcao A)
- Arquivos: `package.json`, `vite.config.js`, `eslint.config.js`, `index.html`, `src/main.js`, `src/components/header/Header.js`, `wireframes/*/index.html`, `.agents/GEMINI.md`, `README.md`, `BACKLOG.md` (removidos `src/App.jsx`, `src/main.jsx` e `src/components/header/Header.jsx`).
- Resumo:
  - Removido o React e suas dependencias do projeto para adequar a stack ao prazo e ao dominio da equipe, mantendo a componentizacao via JavaScript puro modular (`renderHeader` em `src/components/header/Header.js` carregado por `src/main.js`).
  - Criado `index.html` minimo na raiz atuando apenas como redirecionador automatico para `/wireframes/inicio/index.html`.
  - Atualizados os links de Inicio e a importacao de `/src/main.js` em todas as 6 paginas da pasta `wireframes/`.
  - Documentado o novo padrao oficial de stack em `.agents/GEMINI.md` (v3.0) e `README.md`.

### 11/11/2026 — Restauracao da Home Completa e Conteudo Proprio das Paginas
- Arquivos: `index.html`, `wireframes/inicio/index.html`, `wireframes/servicos/index.html`, `wireframes/eventos/index.html`, `wireframes/cardapio/index.html`, `wireframes/sobre/index.html`, `wireframes/contato/index.html`, `.agents/GEMINI.md`, `BACKLOG.md`.
- Resumo:
  - Restaurada a estrutura completa da pagina Inicio (`index.html` e `wireframes/inicio/index.html`) com todas as secoes originais (Hero, Essencia, Finger Food, Churrasco, Coffee Break, Diferenciais, Jornada do Sabor, Galeria, Depoimentos, CTA final e Rodape).
  - Estruturado conteudo proprio e independente para cada pagina (`servicos`, `eventos`, `cardapio`, `sobre` e `contato`), com envio dinamico do formulario de contato para o WhatsApp.
  - Adicionada em `.agents/GEMINI.md` a regra de pedir autorizacao detalhada antes de editar arquivos.

### 11/11/2026 — Navegacao Multipagina, WhatsApp Minimalista e Auditoria de Docs
- Arquivos: `.agents/GEMINI.md`, `BACKLOG.md`, `README.md`, `vite.config.js`, `index.html`, `src/style.css`, `src/components/header/Header.jsx`, `src/components/header/Header.css`, `wireframes/**/index.html`, `wireframes/**/README.md`.
- Resumo:
  - Convertida a navegacao de ancoras de pagina unica para multipagina real: cada item da navbar abre sua pagina HTML correspondente na janela atual, mantendo o `Header` ativo em todas elas.
  - Separado o conteudo de cada pagina (`inicio`, `servicos`, `eventos`, `cardapio`, `sobre`, `contato`) em seus respectivos arquivos HTML.
  - Simplificado o botao flutuante do WhatsApp no canto inferior direito para exibir apenas o icone oficial com efeito de pulso e hover.
  - Removidos todos os comentarios de codigo/marcacao e todos os emojis dos arquivos do projeto.
  - Enxugado o `.agents/GEMINI.md` com a regra de nao ler `README.md` das pastas de `wireframes/` sem necessidade.

### 10/11/2026 — Efeito nos Idiomas, Pasta Wireframes e Botao WhatsApp
- Arquivos: `src/components/header/Header.css`, `index.html`, `src/style.css`, `wireframes/`, `BACKLOG.md`.
- Resumo:
  - Adicionada barra dourada inferior no hover e estado ativo de `PT`, `ES` e `EN`.
  - Criada a estrutura `wireframes/` para as 6 paginas do site.
  - Implementado botao flutuante do WhatsApp com link `wa.me`.

### 10/11/2026 — Redesign do Hero e Navbar Transparente no Topo
- Arquivos: `src/components/header/Header.css`, `src/style.css`.
- Resumo:
  - Navbar transparente no topo com transicao suave para fundo escuro ao rolar.
  - Hero com gradiente direcional sobre `/img/carne.png` e tipografia `Cormorant Garamond` italico.

### 10/11/2026 — Auditoria Inicial e Correcao de Build/Lint
- Arquivos: `index.html`, `src/main.jsx`, `src/components/header/Header.jsx`, `src/style.css`, `public/img/*`.
- Resumo:
  - Criado `src/style.css` global, corrigidos erros de ESLint no `Header` e renomeadas imagens sem espacos (`imagem-1.png` a `imagem-5.png`).

---

## Quadro de Tarefas

### Concluido
- [x] Setup JavaScript Modular (Vanilla JS) + Vite + ESLint sem erros
- [x] Arquitetura de CSS modularizada (camada global em `src/styles/` e CSS isolado por pagina em `wireframes/`)
- [x] Componente `Header.js` responsivo com transicao de scroll e barra nos idiomas
- [x] Redirecionador leve na raiz (`/index.html`) apontando para `/wireframes/inicio/index.html`
- [x] Arquitetura multipagina funcional entre Inicio, Servicos, Eventos, Cardapio, Sobre e Contato
- [x] Botao flutuante do WhatsApp (somente icone) em todas as paginas
- [x] Padronizacao Clean Code (zero comentarios no codigo e zero emojis nos documentos)
- [x] Configuracao do `.gitignore` para blindagem de IA e IDEs

### Em Aberto (Equipe)
- [ ] Evoluir o conteudo interno de cada pagina em `wireframes/<pagina>/index.html` e seus respectivos `.css` conforme divisao do Trello
- [ ] Implementar a calculadora de orcamento na pagina `cardapio` apos recebimento da tabela do cliente

### Pendente (Cliente)
- [ ] Tabela de precos e regras da calculadora de orcamento
- [ ] Fotos reais de eventos, pratos e equipe
- [ ] Confirmacao de numeros institucionais, telefone WhatsApp Business e e-mail
- [ ] Autorizacao de uso de marca de empresas atendidas e parceiros

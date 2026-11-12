# Backlog e Registro de Alteracoes — Sauer Food

Regra: registrar de forma sucinta toda alteracao feita no projeto (data, arquivos e resumo).

---

## Historico de Alteracoes

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

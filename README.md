# Sauer Food — Site Institucional (PIE 2026-2)

Site institucional multipagina da Sauer Food (Foz do Iguacu, PR), desenvolvido com HTML5, CSS3, JavaScript modular (Vanilla JS) e Vite como Projeto Integrador de Extensao do Centro Universitario Descomplica Uniamerica.

## Tecnologias

- JavaScript Modular (ES Modules / Vanilla JS para componentes reutilizaveis)
- Vite 8
- HTML5 e CSS3 (identidade visual preta, dourada e off-white)
- ESLint

## Estrutura de entrada

- `index.html` (raiz): redirecionador leve para `/wireframes/inicio/index.html`.
- `wireframes/*/index.html`: paginas independentes do site (`inicio`, `servicos`, `eventos`, `cardapio`, `sobre`, `contato`).
- `src/components/header/Header.js`: componente reutilizavel da barra de navegacao montado por `src/main.js` em todas as paginas.

## Como executar

```bash
npm install
npm run dev
```

## Scripts disponiveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera a versao de producao na pasta `dist/`
- `npm run lint` — executa a verificacao estatica de codigo com ESLint
- `npm run preview` — visualiza o build de producao localmente

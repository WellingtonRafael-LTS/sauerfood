import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        inicio: 'wireframes/inicio/index.html',
        servicos: 'wireframes/servicos/index.html',
        eventos: 'wireframes/eventos/index.html',
        cardapio: 'wireframes/cardapio/index.html',
        sobre: 'wireframes/sobre/index.html',
        contato: 'wireframes/contato/index.html',
      },
    },
  },
});

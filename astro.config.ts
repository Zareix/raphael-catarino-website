import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://raphael-catarino.fr',

  prefetch: {
    prefetchAll: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        path: 'fr',
        codes: ['fr', 'fr-FR'],
      },
      {
        path: 'en',
        codes: ['en', 'en-US'],
      },
    ],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          fr: 'fr-FR',
        },
      },
    }),
    react(),
  ],

  redirects: {
    '/s/github': 'https://github.com/Zareix',
    '/s/instagram': 'https://www.instagram.com/raphaelgc',
    '/s/linkedin':
      'https://www.linkedin.com/in/rapha%C3%ABl-gon%C3%A7alves-catarino/',
    '/s/bento': 'https://bento.me/raphael-catarino',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://raphael-catarino.fr',
  prefetch: {
    prefetchAll: true,
  },
  image: {
    domains: ['cdn.jsdelivr.net'],
  },
  integrations: [
    tailwind(),
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
    db(),
  ],
  output: 'hybrid',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  redirects: {
    '/s/github': 'https://github.com/Zareix',
    '/s/instagram': 'https://www.instagram.com/raphaelgc',
    '/s/linkedin':
      'https://www.linkedin.com/in/rapha%C3%ABl-gon%C3%A7alves-catarino/',
    '/s/bento': 'https://bento.me/raphael-catarino',
  },
  vite: {
    build: {
      minify: false,
    },
  },
});

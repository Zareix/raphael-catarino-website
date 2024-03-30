import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import qwikdev from '@qwikdev/astro';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://raphael-catarino.fr',
  prefetch: {
    prefetchAll: true,
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
  ],
  output: 'hybrid',
  adapter: cloudflare({
    mode: 'advanced',
    runtime: {
      mode: 'local',
      type: 'pages',
    },
    imageService: 'compile',
  }),
  redirects: {
    '/s/github': 'https://github.com/Zareix',
    '/s/instagram': 'https://www.instagram.com/raphaelgc',
    '/s/linkedin':
      'https://www.linkedin.com/in/rapha%C3%ABl-gon%C3%A7alves-catarino/',
    '/s/bento': 'https://bento.me/raphael-catarino',
  },
});

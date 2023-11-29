import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

import svelte from '@astrojs/svelte';

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
    svelte(),
  ],
  output: 'hybrid',
  adapter: cloudflare({
    mode: 'advanced',
  }),
  image: {
    service: {
      entrypoint: './src/lib/image-service.ts',
    },
  },
});

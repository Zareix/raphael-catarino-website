import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://raphael-catarino.fr',
  integrations: [
    tailwind(),
    prefetch({
      selector: "a[href^='/']",
    }),
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
  experimental: {
    assets: true,
  },
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

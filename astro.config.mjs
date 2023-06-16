import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://raphael-catarino.fr',
  integrations: [tailwind(), prefetch({
    selector: "a[href^='/']"
  }), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        fr: 'fr-FR'
      }
    }
  }), react()],
  experimental: {
    assets: true
  }
});
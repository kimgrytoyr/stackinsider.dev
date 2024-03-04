import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://kim.grytoyrio',
  integrations: [mdx(), sitemap(), tailwind()],
  server: {
    host: '0.0.0.0'
  }
});
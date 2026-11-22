import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const site = (env.PUBLIC_SITE_URL || 'https://matematikozeldersal.com').replace(/\/$/, '');

export default defineConfig({
  site,
  output: 'static',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/tesekkurler') && !page.includes('/404'),
      serialize(item) {
        if (item.url !== `${site}/`) {
          item.url = item.url.replace(/\/$/, '');
        }
        return item;
      },
    }),
  ],
});

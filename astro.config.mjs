import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://example.com',
  integrations: [vue()],
  devToolbar: { enabled: false },
  vite: { ssr: { noExternal: ['dayjs'] } },
  output: 'static',
});

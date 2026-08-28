import { defineConfig } from 'astro/config';
import lotus from '@prosefly/astro-theme-lotus';

export default defineConfig({
  site: 'https://acuy123-off.github.io/acuy-mugen/',
  base: '/acuy-mugen/',
  integrations: [lotus()]
});
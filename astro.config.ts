import { defineConfig } from 'astro/config';
import lotus from '@prosefly/astro-theme-lotus';

export default defineConfig({
  site: 'https://acuy123-off.github.io',
  base: '/mugen-guide/',
  integrations: [lotus()]
});
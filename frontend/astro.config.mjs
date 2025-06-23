import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    host: '0.0.0.0',
    port: 3001
  },
  vite: {
    define: {
      'process.env.DIRECTUS_URL': JSON.stringify(process.env.DIRECTUS_URL || 'http://localhost:8055')
    }
  }
});

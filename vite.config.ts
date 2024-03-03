import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(
      'https://frontend-test-assignment-api.abz.agency/api/v1'
    ),
    __PROJECT__: JSON.stringify('frontend'),
  },
});

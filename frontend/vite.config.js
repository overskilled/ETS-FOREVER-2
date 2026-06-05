import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: false },
  ssr: {
    // These packages ship ESM that needs to be bundled (not externalised)
    // for Vite's Node SSR build to resolve them correctly.
    noExternal: ['react-helmet-async', 'framer-motion'],
  },
});

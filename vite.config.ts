import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '/',
    publicDir: 'public',
    plugins: [react()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
    },
    resolve: {
      alias: { '@': path.resolve(__dirname, '.') }
    },
    build: {
      outDir: 'dist',
      target: 'es2020',
      // Warn if any chunk exceeds 500KB
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          // Split vendor libraries into separate cached chunks
          manualChunks: {
            'react-vendor':  ['react', 'react-dom'],
            'router':        ['react-router-dom'],
            'framer-motion': ['framer-motion'],
            'lucide':        ['lucide-react'],
          },
        },
      },
      // Enable minification
      minify: 'esbuild',
      cssMinify: true,
    },
    server: {
      port: 9999,
      host: '0.0.0.0',
    },
  };
});

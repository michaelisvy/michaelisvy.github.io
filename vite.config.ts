import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        // Specify the MIME type for JavaScript files
        format: 'esm',
        // Add the content type header for JavaScript files
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
      },
    },
  }
})

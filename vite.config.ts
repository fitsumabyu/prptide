import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // Use Babel instead of SWC
      babel: {
        plugins: [],
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
      }
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Disable using native modules in rollup
    rollupOptions: {
      external: [],
    },
    // Use terser for minification instead of esbuild
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
}));

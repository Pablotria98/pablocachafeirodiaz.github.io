import { defineConfig } from 'vite'
import mdx from "@mdx-js/rollup";
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: '/pablocachafeirodiaz.github.io/',
  plugins: [
    mdx(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Allows for clean imports like @/components/...
    },
  },
  css: {
    preprocessorOptions: {
      // optional: for using SCSS or adding global styles
    },
  },
  server: {
    port: 3000,
    open: true, // Opens browser on dev start
  },
});

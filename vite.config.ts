import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Determina se estamos em ambiente de produu00e7u00e3o ou desenvolvimento
  const isProduction = mode === 'production';
  
  return {
    // Use base path apenas em produu00e7u00e3o (GitHub Pages), mantenha '/' para desenvolvimento local
    base: isProduction ? "/mayssa/" : "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Garante que os caminhos relativos funcionem corretamente
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
    }
  };
});

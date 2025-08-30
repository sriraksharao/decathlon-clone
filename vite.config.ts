import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  base: "/",   // 👈 make sure this is "/"
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

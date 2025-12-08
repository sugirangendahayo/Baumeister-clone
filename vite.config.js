import { defineConfig, resolveConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolveConfig(__dirname, "index.html"),
        contact: resolveConfig(__dirname, "contact.html"),
        privacy: resolveConfig(__dirname, "privacy.html"),
      },
    },
  },
});

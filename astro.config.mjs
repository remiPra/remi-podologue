// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    icon({
      include: {
        "mdi": ["*"], // Material Design Icons - très complète
        "heroicons": ["*"], // Heroicons - moderne et populaire
        "tabler": ["*"] // Tabler Icons - médicales incluses
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
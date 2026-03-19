// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://estebant96.github.io",
  base: "/ajolotech",
  vite: {
    plugins: [tailwindcss()],
  },
});

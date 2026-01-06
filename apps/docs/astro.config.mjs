// apps/docs/astro.config.mjs
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    icon({
      include: {
        lucide: ["*"] 
      }
    })
  ],
  devToolbar: {
    enabled: false
  }
});
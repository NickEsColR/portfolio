// @ts-check
import { defineConfig, envField } from "astro/config";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sanity from "@sanity/astro";

const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      useCdn: false,
    }),
  ],
});
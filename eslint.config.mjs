import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Add custom rules here
    },
  },
  {
    // Ignore files handled by Biome
    ignores: ["dist/", "node_modules/", ".astro/"],
  },
];

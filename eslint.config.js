import eslintPluginAstro from 'eslint-plugin-astro';


const ignores = [
  "*.css",
  "dist",
  "esm/*",
  "public/*",
  "tests/*",
  "scripts/*",
  "*.config.js",
  "node_modules",
  "coverage",
  "build",
]

const eslintConfig = [
  ...eslintPluginAstro.configs.recommended,
  {
    ignores,
  }
]

export default eslintConfig
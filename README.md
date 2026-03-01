# Portfolio

Personal portfolio website for **Nicolas Colmenares — AI Engineer**, built with Astro and powered by Sanity CMS.

**Live site:** [portfolio-nickescolr.netlify.app](https://portfolio-nickescolr.netlify.app/)

## About

A fast, statically-generated portfolio featuring a two-column layout with a fixed profile sidebar and scrollable content sections for experience, projects, education, certificates, and skills. All content is managed through Sanity CMS and the site ships with full internationalization support (English & Spanish).

### Key Features

- **Headless CMS** — Content (bio, experience, projects, education, certificates, skills) is fetched from [Sanity](https://www.sanity.io/) at build time.
- **i18n** — English (default) and Spanish locales with route-based switching (`/` and `/es/`).
- **Dark / Light mode** — Class-based theme toggle with `localStorage` persistence.
- **Design tokens** — Custom light & dark color palettes defined through Tailwind CSS v4 `@theme` and OKLCH colors.
- **Type-safe** — Strict TypeScript throughout, with dedicated interfaces for every CMS content type.
- **Code quality** — ESLint, Prettier, Husky pre-commit hooks, lint-staged, and Commitlint (Conventional Commits).

## Tech Stack

| Category | Technology |
| :--- | :--- |
| Framework | [Astro 5](https://astro.build/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| CMS | [Sanity](https://www.sanity.io/) (via `@sanity/astro`) |
| Icons | [Astro Icon](https://github.com/natemoo-re/astro-icon) + [Lucide](https://lucide.dev/) |
| Hosting | [Netlify](https://www.netlify.com/) |

## Project Structure

```text
src/
├── components/
│   ├── landing/      # Page sections (ProfileCard, Experience, Projects, …)
│   └── ui/           # Shared UI components (Header, Footer, ThemeToggle)
├── i18n/             # Translation dictionary & locale helpers
├── icons/            # SVG icon sets (general, logos, ui)
├── interfaces/       # TypeScript interfaces for CMS content types
├── layouts/          # Astro layouts
├── lib/sanity/       # Sanity client helpers (image URL builder, formatters)
├── pages/            # Route pages (en → /, es → /es/)
└── styles/           # Global CSS & design tokens
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v24+
- [pnpm](https://pnpm.io/)

### Environment Variables

Create a `.env` file based on the example:

```env
SANITY_PROJECT_ID=<your-sanity-project-id>
SANITY_DATASET=<your-sanity-dataset>
```

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev          # Start dev server at localhost:4321
```

## Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Start the development server at `localhost:4321` |
| `pnpm build` | Type-check and build for production (`./dist/`) |
| `pnpm preview` | Preview the production build locally |
| `pnpm check` | Run Astro type checking |
| `pnpm lint` | Lint the codebase with ESLint |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm format` | Format files with Prettier |

## Deployment

The site is deployed to **Netlify** with the following build configuration (see `netlify.toml`):

- **Build command:** `astro build`
- **Publish directory:** `dist/`
- **Node version:** 24

Pushes that only touch non-source files (`.agents/`, `.github/`, `.husky/`, `.vscode/`) are automatically skipped via the Netlify ignore command.

## License

This project is licensed under the [MIT License](./LICENSE).

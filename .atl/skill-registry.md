# Skill Registry

## Project Skills

| Skill | Description | Trigger |
|-------|-------------|---------|
| `astro` | Astro framework patterns, architecture, and best practices | Working with Astro components, pages, or config |
| `tailwind-4` | Tailwind CSS 4 patterns, cn() utility, theming rules | Styling with Tailwind CSS |

## User Skills

Scanned from: `~/.config/opencode/skills/`

- `sdd-*` family (Spec-Driven Development workflow)
- `go-testing` (Go testing patterns)
- `dockerized-workflow` (Docker-based development)
- `skill-creator` (Creating new AI skills)
- `judgment-day` (Adversarial review protocol)

## Conventions

### Package Manager
- **pnpm** — used exclusively (see `.github/copilot-instructions.md`)

### Project Architecture
- Pages as orchestrators (zero direct HTML)
- UI components in `src/components/ui/`
- Icons centralized in `src/icons/[category]/`
- SSG > SSR > SCR rendering priority

### Code Quality
- ESLint + Prettier configured
- Husky pre-commit hooks
- Commitlint conventional commits

### Typing
- Strict TypeScript (`astro/tsconfigs/strict`)
- Interface props mandatory for all components
- No `any` allowed
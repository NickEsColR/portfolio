---
name: astro
description: >
  Skill for using Astro projects. Includes CLI commands, project structure, core config options, and adapters.
  Trigger: When working with Astro components, pages, or config.
license: Apache-2.0
metadata:
  author: ColRuDev
  version: "1.0"
---

## When to Use

- Working with Astro components
- Creating or modifying Astro pages
- Configuring Astro settings and adapters

## Critical Patterns

### Architecture & Structure

- **Page Orchestration**: Pages MUST be orchestrators. Zero direct HTML in pages. All UI MUST be encapsulated in components.
- **Rendering Hierarchy**: Follow the priority: SSG (Static) -> SSR (Server) -> SCR (Client).
- **Astro-First**: Use Astro's native capabilities first. Frameworks (React, Vue, Svelte) are a last resort.
- **Naming**: Components in `PascalCase`, folders in `kebab-case`. Generic UI components belong in `src/components/ui`.

### Asset & Content Management

- **Asset Management**: SVGs must be centralized in `src/icons/[category]`. NO inlined SVGs in components.
- **Images**: Always use the `<Image />` component from `astro:assets` for optimization.

### Development Standards

- **Hydration**: Prefer `client:visible` or `client:idle` over `client:load` to optimize TTI.
- **Typing**: Mandatory Interface Props for all components. Use of `any` is forbidden.
- **Frontmatter**: Limit frontmatter to 30 lines. Move complex logic or data fetching to `src/lib`.
- **Dependencies**: Prioritize CSS and Vanilla JS before introducing framework-specific libraries.

## Code Examples

### Page Orchestration

**❌ Wrong**

```astro
---
// src/pages/index.astro
const data = await fetch(...)
---
<html>
  <body>
    <h1>Welcome</h1>
    <div class="card">
      <p>{data.description}</p>
    </div>
  </body>
</html>
```

**✅ Correct**

```astro
---
// src/pages/index.astro
import Hero from '../components/Hero.astro';
import FeatureList from '../components/FeatureList.astro';
const data = await fetch(...)
---
<Layout>
  <Hero title="Welcome" description={data.description} />
  <FeatureList items={data.features} />
</Layout>
```

### Image Implementation

**❌ Wrong**

```astro
<img src="/images/profile.jpg" alt="Profile" />
```

**✅ Correct**

```astro
---
import { Image } from 'astro:assets';
import profilePic from '../assets/profile.jpg';
---
<Image src={profilePic} alt="Profile" width={400} height={400} />
```

## Commands

```bash
npx astro dev    # Start development server
npx astro build  # Build the project for production
npx astro check  # Run type-check and linting
npx astro add    # Add an integration (e.g., tailwind, react)
npx astro sync   # Sync types for content collections
```

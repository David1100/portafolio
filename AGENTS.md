# AGENTS.md - Project Guidelines for AI Agents

## Project Overview

- **Project**: Personal portfolio website
- **Framework**: Astro 5.x with Tailwind CSS 4.x
- **Language**: TypeScript (strict mode)
- **Purpose**: Developer portfolio showcasing projects and contact info

---

## Build & Development Commands

### Development
```bash
npm run dev        # Start dev server at http://localhost:4321
```

### Build & Preview
```bash
npm run build      # Build for production to dist/
npm run preview    # Preview production build locally
```

### Astro CLI
```bash
npm run astro      # Run astro CLI commands
```

### Running a Single File/Test
This project currently has **no test framework** configured. There are no unit or e2e tests.

---

## Code Style Guidelines

### General Principles
- Use **2 spaces** for indentation in Astro/HTML/JSX templates
- Use **prettier** formatting (Astro includes it by default)
- Keep components **small and focused** - one component per file
- Place components in `src/components/`, layouts in `src/layouts/`, pages in `src/pages/`

### Astro Files (.astro)
- Frontmatter (YAML) section at top with `---` delimiters
- Import statements in frontmatter
- Template uses semantic HTML with Tailwind classes
- Avoid inline styles - use Tailwind utility classes
- Use `.webp` format for images in `public/` folder

### TypeScript
- `tsconfig.json` extends `astro/tsconfigs/strict`
- Enable strict mode for all new code
- Define interfaces for component props in frontmatter
- Example:
  ```astro
  ---
  interface Props {
    title: string;
    subtitle?: string;
  }
  const { title, subtitle = "" } = Astro.props;
  ---
  ```

### Tailwind CSS v4
- Uses `@import "tailwindcss"` and `@theme` for custom colors
- Custom colors defined in `src/styles/global.css`:
  - `--color-primary`: #101F22
  - `--color-secondary`: #234248
  - `--color-text`: #85B0B9
  - `--color-accent`: #13C8EC
- Use semantic class names and Tailwind utilities
- Use responsive prefixes: `lg:`, `md:`, `sm:`

### Naming Conventions
- **Components**: PascalCase (`Header.astro`, `Projects.astro`)
- **Files**: lowercase with dashes (`global.css`, `index.astro`)
- **Classes**: Tailwind utilities - no custom CSS classes needed
- **Images**: descriptive, lowercase with dashes (`logo_david.webp`)

### Imports & Paths
- Component imports: `import Header from "../components/Header.astro"`
- Style imports: `import "../styles/global.css"` in layout frontmatter
- Public assets: use absolute path from `/` (e.g., `/icons/github.svg`)
- Use relative paths for local files (`../components/`)

### Error Handling
- Astro components don't use try/catch in templates
- Validate props with TypeScript interfaces
- Ensure all external links have `target="_blank"` with `rel="noopener noreferrer"` for security

### Image Handling
- Store images in `public/` folder for direct access
- Prefer `.webp` format for better performance
- Always include `alt` attribute for accessibility
- Use explicit dimensions where possible

### Accessibility
- Use semantic HTML elements (`<header>`, `<main>`, `<nav>`, `<a>`)
- Include `alt` text for all images
- Ensure sufficient color contrast (text is #fff on dark background)
- Add `rel="noopener noreferrer"` to external links

---

## Project Structure

```
portfolio/
├── public/               # Static assets (images, icons, favicon)
│   ├── icons/           # SVG icons (linkedin, github, whatsapp, etc.)
│   └── projects/        # Project screenshots
├── src/
│   ├── components/      # Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages (index.astro)
│   ├── styles/          # Global CSS with Tailwind
│   └── assets/          # Imported assets (SVG backgrounds)
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies and scripts
```

---

## Important Notes

1. **No tests exist** - Add Vitest or Playwright if testing is needed
2. **No linting configured** - Consider adding ESLint with Astro integration
3. **Tailwind v4** - Uses `@import` syntax, not `@tailwind` directives
4. **Images in public/** - Use `/path` not `../public/path` in templates
5. **Dark theme** - Portfolio uses dark background (#101F22) with light text

---

## Common Patterns

### Linking External Sites
```astro
<a href="https://github.com/user" target="_blank" rel="noopener noreferrer">
  <img src="/icons/github.svg" alt="GitHub">
</a>
```

### Responsive Navigation
```astro
<nav class="gap-3 hidden lg:flex">
  <!-- desktop nav -->
</nav>
```

### Custom Colors in Tailwind
```css
@theme {
  --color-secondary: var(--color-secondary);
}
```
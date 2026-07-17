# Minecraft-GPT Website

Promotional landing page for [Minecraft-GPT](https://github.com/TravnikovDev/minecraft-gpt) — an open-source Minecraft bot powered by GPT that accepts natural-language commands through in-game chat (building, mining, combat, farming, and more).

**Live site:** https://travnikovdev.github.io/minecraft-gpt-website/

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router) with static export (`output: 'export'`)
- [React 18](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com) (via `@tailwindcss/postcss`)
- TypeScript 5
- [react-icons](https://react-icons.github.io/react-icons/) for social/feature icons
- Deployed as a fully static site to **GitHub Pages** via GitHub Actions

## Getting Started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server runs with Turbopack (`next dev --turbopack`).

### Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server (Turbopack, hot reload) |
| `npm run build` | Build the static site into `out/` |
| `npm start` | Serve the production build (rarely needed — the site is static) |
| `npm run lint` | Run ESLint (`eslint-config-next`) |

## Project Structure

```
├── src/app/
│   ├── layout.tsx      # Root layout: Geist fonts, SEO/OpenGraph/Twitter metadata
│   ├── page.tsx        # The entire landing page (single client component)
│   ├── globals.css     # Tailwind import, Minecraft color palette, custom utilities
│   └── favicon.ico
├── public/images/      # Backgrounds, avatars, video thumbnails
├── .github/workflows/  # GitHub Pages deployment
├── next.config.ts      # Static export config (output: 'export', trailingSlash)
└── out/                # Build output (git-ignored)
```

### The Landing Page (`src/app/page.tsx`)

The whole site is one client component (`MinecraftBotLanding`) composed of these sections, in order:

1. **Navigation** — anchor links to `#features`, `#videos`, `#about`, and GitHub
2. **Hero** — headline, GitHub CTA, and social media links (YouTube, TikTok, Instagram, X/Twitter)
3. **Features** (`#features`) — horizontally scrolling cards: building, mining, combat, natural-language commands, adaptive learning
4. **Videos** (`#videos`) — horizontally scrolling vertical (9:16, Shorts-style) video cards with thumbnails from `public/images/`
5. **About the Project** — feature list and technology stack of the bot itself (TypeScript, Bun.js, Mineflayer, OpenAI)
6. **Social Media** — follow cards for each platform
7. **About the Developer** (`#about`) — Roman Travnikov bio
8. **Testimonials** — early tester feedback cards
9. **Footer** — Mojang/Microsoft disclaimer

### Styling

The Minecraft look comes from a few custom pieces in [globals.css](src/app/globals.css):

- **Color palette** as CSS variables (`--minecraft-grass: #5d7c15`, `--minecraft-gold: #e7a83b`, `--minecraft-water: #3babe7`, etc.). Section markup currently uses the hex values directly in Tailwind arbitrary values (e.g. `bg-[#232B2B]`).
- **`.minecraft-button`** — beveled, press-down button effect using inset box shadows
- **`.pixel-border`** — hard black double-outline mimicking Minecraft UI panels
- **`.pixelated`** — `image-rendering: pixelated` for blocky avatars
- **`.hide-scrollbar` / `.scrollbar-hide`** — invisible scrollbars for the horizontal card rails
- **`.video-card`** — responsive width for the vertical video cards
- The `VT323` pixel font is referenced in `font-family` (with monospace fallback); Geist Sans/Mono are loaded via `next/font` in the layout

Some of these styles are duplicated in a `<style>` block inside `page.tsx` (via `react-helmet`) — if you change `.minecraft-button` or `.pixel-border`, check both places.

## Deployment

Every push to `main` deploys to GitHub Pages automatically. There are two workflows in `.github/workflows/`:

- **`deploy.yml`** ("Deploy to GitHub Pages") — installs deps, runs `npm run build`, adds `.nojekyll`, uploads `out/` and deploys
- **`nextjs.yml`** ("Deploy Next.js site to Pages") — GitHub's standard Next.js Pages template doing essentially the same thing

> **Note:** Both workflows trigger on the same push and share the `pages` concurrency group, so they queue behind each other and deploy twice. They produce equivalent output, but you may want to delete one of them.

Deployment-relevant configuration in [next.config.ts](next.config.ts):

- `output: 'export'` — pure static HTML export, no server required
- `images.unoptimized: true` — required for `next/image`-free static export on Pages
- `trailingSlash: true` — every route exports as `directory/index.html`, which plays nicely with Pages routing
- `basePath` / `assetPrefix` are currently empty for both dev and production

You can also trigger a deploy manually from the repository's **Actions** tab (`workflow_dispatch`).

## Content To-Dos

A few placeholders remain in `page.tsx`:

- The nav's GitHub link points to `https://github.com/your-username/minecraft-bot` (the hero and about-section buttons point to the real repo)
- The "View All Videos" button links to `#`
- Video cards are static thumbnails with fake durations — they don't link to actual videos yet
- The GitHub contribution graph in the developer section is decorative, not real data

## License / Disclaimer

This project is not affiliated with Mojang or Microsoft. Minecraft is a trademark of Mojang Synergies AB.

© Roman Travnikov

# Chandan Padal Portfolio

Interactive DevOps and multi-cloud engineering portfolio built with React, TypeScript, and Vite.

This site is designed as an operations-first experience with dashboard-style UI, animated sections, and deep-dive cloud architecture blueprints for AWS, Azure, and Google Cloud.

## Live Site

- Production: https://chandan-itz-me.github.io/portfolio/

## Highlights

- Animated portfolio landing with smooth section navigation
- JARVIS-style boot experience
- Infrastructure Explorer tiles for AWS, Azure, and Google Cloud
- Dedicated cloud blueprint pages:
	- /infrastructure/aws
	- /infrastructure/azure
	- /infrastructure/gcp
- Interactive architecture and topology diagrams with component inspectors
- Deployment pipeline visualization with staged animations
- Security, observability, and architecture decision sections
- Responsive layout for desktop and mobile
- Accessible interactions (focus states, reduced motion support)

## Tech Stack

- React 19
- TypeScript
- Vite 8
- React Router
- Framer Motion
- CSS Modules + CSS variables
- react-helmet-async
- Lucide React

## Scripts

- npm run dev: Start local development server
- npm run build: Type-check and build production assets
- npm run preview: Preview production build locally
- npm run lint: Run lint checks (oxlint)
- npm run deploy: Deploy dist to GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

Open the app at:

- http://localhost:5173/portfolio/

## Build and Preview

```bash
npm run build
npm run preview
```

## Deployment

GitHub Pages deployment is configured via:

- homepage in package.json
- predeploy script
- deploy script using gh-pages

Deploy command:

```bash
npm run deploy
```

## Project Docs

- src/docs/PROJECT.md: Project-level implementation notes
- src/docs/ARCHITECTURE.md: Architecture and structural guidance

## License

MIT
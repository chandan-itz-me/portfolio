# Portfolio Architecture

## Overview

This project is a React + TypeScript single-page application built with Vite and structured around route-driven feature modules.

The architecture combines:

- A shared application shell (layout, providers, global styles)
- Route-level page modules
- Feature component clusters
- Static typed data sources
- Reusable hooks for motion, navigation, and interaction state

## Layered Design

### 1. Application Layer

Responsibility: app bootstrap, providers, routing, and global boundaries.

Primary modules:

- src/main.tsx
- src/app/App.tsx
- src/app/providers.tsx
- src/app/router.tsx

Notes:

- Browser router uses basename from Vite base path.
- Route-level suspense fallback is used for lazily loaded pages.
- Infrastructure provider routes include explicit pages for AWS, Azure, and GCP.

### 2. Layout Layer

Responsibility: persistent shell and cross-route UI behavior.

Primary modules:

- src/layouts/MainLayout.tsx
- src/components/layout/*
- src/components/ScrollToTop/*

Notes:

- Navigation, command palette entry points, and scroll progress live in the shell.
- Hash-based in-page navigation is coordinated at layout level.

### 3. Page Layer

Responsibility: route composition and page-level content orchestration.

Examples:

- Home and section pages under src/pages/*
- Cloud provider blueprints under src/pages/CloudProvider/*

Cloud routes:

- /infrastructure/aws
- /infrastructure/azure
- /infrastructure/gcp

### 4. Feature Component Layer

Responsibility: reusable domain UI and local interaction logic.

Examples:

- Dashboard, projects, timeline, contact, and infrastructure explorer components
- Cloud blueprint submodules (diagram, topology, pipeline, security, observability)

### 5. Data and Configuration Layer

Responsibility: typed static content and config consumed by UI.

Primary folders:

- src/data
- src/config
- src/types

Notes:

- Page copy, project metadata, and skill/career data are centralized and typed.

## Route Architecture

Router behavior in src/app/router.tsx:

- Index route renders home.
- Project detail route is lazy-loaded.
- Infrastructure index redirects to home infrastructure section hash.
- Provider routes render dedicated blueprint pages.
- Unknown provider route redirects to infrastructure section.

This keeps provider deep links stable while preserving SPA section navigation behavior.

## Cloud Blueprint Module Pattern

Each cloud blueprint follows the same module composition pattern:

- Route page container with metadata, section wrappers, and side navigation
- Interactive architecture and network topology diagrams
- IaC workflow, deployment pipeline, defense-in-depth, observability, decisions, and repository CTA sections
- Local hook modules for active-section tracking and reveal-on-view behavior
- CSS module theme tokens for cloud-specific visual identity

Shared benefits:

- Consistent IA and user flow across providers
- Independent cloud branding and service mapping
- Isolated feature evolution per provider without breaking other pages

## Rendering and Data Flow

High-level flow:

1. main.tsx bootstraps provider tree and router.
2. Router resolves route and renders MainLayout.
3. Layout renders page outlet and shared shell elements.
4. Route page composes feature sections.
5. Sections consume typed data/config and local interaction state.

Interaction flow examples:

- Infrastructure tile click -> route navigation to provider blueprint
- Side-nav click -> hash navigation within current blueprint
- Diagram node click -> local inspector state update

## Styling and Motion System

- Global CSS variables and resets in src/styles
- Feature-level CSS Modules for scoped styles
- Framer Motion for section entrance/stagger effects
- Reduced-motion safeguards via media queries and conservative idle animation strategy

## Non-Functional Design Principles

- Type safety first (TypeScript strict configuration)
- Predictable route behavior and robust fallback handling
- Accessibility-aware interactions (focus states, aria attributes, reduced motion)
- Modular growth via feature folders
- Minimal coupling between provider-specific blueprint modules
# Project Structure Guide

## Current Source Tree

```
src
|
|- animations/
|- app/
|- assets/
|- components/
|- config/
|- constants/
|- contexts/
|- data/
|- docs/
|- hooks/
|- layouts/
|- pages/
|- styles/
|- types/
|- main.tsx
|- vite-env.d.ts
```

## Folder Responsibilities

### app

App bootstrap and composition.

Contains:

- App root composition
- providers setup
- router configuration

### animations

Reusable animation presets and motion helpers.

Examples:

- fade variants
- stagger/container patterns
- page transition primitives

### assets

Static visual assets used by UI modules.

### components

Reusable feature components grouped by domain.

Examples:

- boot experience
- dashboard widgets
- infrastructure explorer
- project grid
- shared/common UI primitives

### config

Application configuration maps and section metadata.

### constants

Global constants for animation, display, and app behavior.

### contexts

React context providers and context contracts.

### data

Typed static data used across pages.

Examples:

- projects
- skills
- career timeline
- certifications
- infrastructure descriptors

### docs

Internal project documentation.

### hooks

Reusable custom hooks.

Examples:

- boot sequencing
- command palette behavior
- smooth scroll and route/hash scroll handling
- theme handling

### layouts

Persistent layout shells and route outlet containers.

### pages

Route-level page modules.

Includes:

- primary site sections (home, projects, experience, etc.)
- provider blueprint pages under pages/CloudProvider

### styles

Global style foundation.

Includes:

- CSS variable tokens
- global reset/base styles
- shared animation styles

### types

Shared TypeScript types/interfaces used across data and components.

## Cloud Provider Blueprint Structure

Each cloud provider page follows a consistent module pattern under pages/CloudProvider:

- Provider route entry file
- Blueprint page container
- nodeSpecs with typed diagram/decision content
- Interactive diagrams (architecture and topology)
- IaC, pipeline, security, observability, decisions, and repository sections
- Local hooks and provider-specific CSS module

This pattern is implemented for:

- AWS
- Azure
- GCP

## Routing Summary

Configured in app/router.tsx.

Primary infrastructure routes:

- /infrastructure/aws
- /infrastructure/azure
- /infrastructure/gcp

Fallback behavior:

- /infrastructure redirects to home infrastructure anchor
- /infrastructure/:provider unknown values redirect to the infrastructure section

## Naming and Organization Conventions

- Keep feature modules colocated with their CSS module and local utilities.
- Use typed static content from data or feature-level typed spec files.
- Prefer small, composable components over large monolithic files.
- Keep route pages focused on composition; push local logic down to feature components and hooks.

## Coding Conventions

- TypeScript strict mode
- Functional React components
- CSS Modules for scoped styles
- Accessibility-first interactions
- Reduced-motion support for animated UI
- Clear separation of route composition, visual components, and content data
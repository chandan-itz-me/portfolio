# Project Structure

```
src
│
├── app
│
├── assets
│   ├── fonts
│   ├── icons
│   ├── images
│   └── logos
│
├── components
│   ├── common
│   ├── dashboard
│   ├── hero
│   ├── layout
│   ├── charts
│   ├── globe
│   ├── projects
│   ├── terminal
│   ├── timeline
│   └── ui
│
├── config
│
├── constants
│
├── contexts
│
├── data
│
├── hooks
│
├── layouts
│
├── pages
│
├── services
│
├── shared
│   ├── components
│   ├── hooks
│   ├── types
│   └── utils
│
├── styles
│
├── types
│
├── utils
│
├── App.tsx
└── main.tsx
```

---

# Folder Responsibilities

## app

Application bootstrap.

Contains routing, providers and application configuration.

---

## assets

Static resources.

- Fonts
- Images
- Icons
- Logos

---

## components

Reusable UI components.

Components should have a single responsibility.

Example

```
Hero/

Hero.tsx

Hero.module.css

index.ts
```

---

## data

Static application data.

Examples

- projects
- skills
- certifications
- metrics

---

## layouts

Application layouts.

Example

- MainLayout

---

## pages

Top-level pages rendered by React Router.

---

## shared

Reusable utilities shared across the application.

---

## styles

Global styling.

- CSS Variables
- Typography
- Animations
- Global resets

---

# Coding Standards

- TypeScript Strict Mode
- Functional Components
- CSS Modules
- Mobile First
- Accessibility First
- No duplicated logic
- One responsibility per component
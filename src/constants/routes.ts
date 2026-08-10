/**
 * Route path constants that align with actual router configuration.
 * Keep this in sync with src/app/router.tsx.
 */
export const ROUTES = {
    home: "/",
    about: "/#about",
    experience: "/#experience",
    projects: "/#projects",
    projectDetails: (slug: string) => `/projects/${slug}`,
    infrastructure: "/#infrastructure",
    infrastructureProvider: (provider: "aws" | "azure" | "gcp") => `/infrastructure/${provider}`,
    professional: "/#professional",
    contact: "/#contact",
} as const;
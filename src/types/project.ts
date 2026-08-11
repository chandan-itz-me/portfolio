export interface Project {
    id: number;
    slug: string;
    title: string;
    logoPath?: string;
    logoPaths?: readonly string[];
    logoAlt?: string;
    client: string;
    domain: string;
    provider: string;
    status: string;
    category: string;
    summary: string;
    description: string;
    infrastructureArchitecture: string;
    application: string;
    blueprintRoute?: string;
    cloudProviders: readonly ("aws" | "azure" | "gcp")[];
    technologies: readonly string[];
    impact: readonly string[];
}

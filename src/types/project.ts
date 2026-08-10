export interface Project {
    id: number;
    slug: string;
    title: string;
    client: string;
    domain: string;
    provider: string;
    status: string;
    category: string;
    summary: string;
    description: string;
    cloudProviders: readonly ("aws" | "azure" | "gcp")[];
    technologies: readonly string[];
    impact: readonly string[];
}

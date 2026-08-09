export interface Project {
    id: number;
    title: string;
    client: string;
    provider: string;
    summary: string;
    technologies: readonly string[];
    impact: readonly string[];
}

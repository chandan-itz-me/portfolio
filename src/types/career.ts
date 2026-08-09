export interface CareerEntry {
    id: number;
    company: string;
    role: string;
    duration: string;
    location: string;
    summary: string;
    clients: readonly string[];
    technologies: readonly string[];
    highlights: readonly string[];
}

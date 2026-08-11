interface InfrastructureService {
    id: string;
    name: string;
    category: string;
    level: string;
    description: string;
    projects: string[];
    experience: string[];
}

export interface InfrastructureData {
    aws: InfrastructureService[];
    azure: InfrastructureService[];
    gcp: InfrastructureService[];
}
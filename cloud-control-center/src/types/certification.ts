export type CertificationStatus =
    | "In Progress"
    | "Planned"
    | "Future";

export interface Certification {
    id: string;
    title: string;
    provider: string;
    status: CertificationStatus;
    targetYear: string;
}
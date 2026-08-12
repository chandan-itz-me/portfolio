export interface Certification {
    id: string;
    title: string;
    provider: string;
    issued: string;
    validUntil?: string;
    logo: string;
    credentialUrl: string;
}
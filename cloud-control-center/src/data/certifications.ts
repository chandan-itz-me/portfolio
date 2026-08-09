import type { Certification } from "@/types/certification";

export const certifications: Certification[] = [
    {
        id: "gcp-ace",
        title: "Associate Cloud Engineer",
        provider: "Google Cloud",
        issued: "Jan 2026",
        validUntil: "Jan 2029",
    },

    {
        id: "harness-chaos",
        title: "Certified Chaos Engineering Developer",
        provider: "Harness",
        issued: "Apr 2026",
    },

    {
        id: "harness-iac",
        title: "Certified Infrastructure as Code Management Developer",
        provider: "Harness",
        issued: "Mar 2026",
    },

    {
        id: "api-security-architect",
        title: "API Security Architect",
        provider: "API Academy",
        issued: "Apr 2023",
    },

    {
        id: "gravitee-api",
        title: "Event-native API Management Professional Certificate",
        provider: "Gravitee",
        issued: "Apr 2023",
    },
];
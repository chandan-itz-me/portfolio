import type { Certification } from "@/types/certification";

export const certifications: Certification[] = [
    {
        id: "gcp-ace",
        title: "Associate Cloud Engineer",
        provider: "Google Cloud",
        issued: "Jan 2026",
        validUntil: "Jan 2029",
        logo: "Google Cloud Certified Associate Cloud Engineer.png",
        credentialUrl: "https://www.credly.com/badges/a74ffbb2-5f52-4f0c-a02a-cb17a3c21937/public_url",
    },

    {
        id: "harness-chaos",
        title: "Certified Chaos Engineering Developer",
        provider: "Harness",
        issued: "Apr 2026",
        logo: "Harness Certified Chaos Engineering Developer.png",
        credentialUrl: "https://www.credly.com/badges/1b7bed29-4bc8-463e-a6d9-75ab3121b40e/public_url",
    },

    {
        id: "harness-iac",
        title: "Certified Infrastructure as Code Management Developer",
        provider: "Harness",
        issued: "Mar 2026",
        logo: "Harness Certified Infrastructure as Code Management Developer.png",
        credentialUrl: "https://www.credly.com/badges/78be294d-213f-48bb-ba09-85c975186809/public_url",
    },

    {
        id: "api-security-architect",
        title: "API Security Architect",
        provider: "API Academy",
        issued: "Apr 2023",
        logo: "API Academy Certified API Security Architect.png",
        credentialUrl: "http://www.apiacademy.co",
    },

    {
        id: "gravitee-api",
        title: "Event-native API Management Professional Certificate",
        provider: "Gravitee",
        issued: "Apr 2023",
        logo: "Gravitee Certified Event-native API Management Professional Certificate.png",
        credentialUrl: "https://www.credential.net/8f77dd2b-3deb-4166-8381-d966315cffa7#acc.dYMFoBXn",
    },
];
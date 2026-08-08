import type { Certification } from "@/types/certification";

export const certifications: Certification[] = [
    {
        id: "aws-developer",
        title: "AWS Certified Developer – Associate",
        provider: "Amazon Web Services",
        status: "In Progress",
        targetYear: "2026",
    },

    {
        id: "az104",
        title: "Microsoft Azure Administrator (AZ-104)",
        provider: "Microsoft",
        status: "Planned",
        targetYear: "2026",
    },

    {
        id: "terraform",
        title: "HashiCorp Terraform Associate",
        provider: "HashiCorp",
        status: "Planned",
        targetYear: "2026",
    },

    {
        id: "cka",
        title: "Certified Kubernetes Administrator",
        provider: "CNCF",
        status: "Future",
        targetYear: "2027",
    },
];
import type { Project } from "@/types/project";

export const projects = [
    {
        id: 1,

        title: "PSA BDP",

        client: "PSA BDP",

        provider: "AWS",

        summary:
            "Enterprise logistics cloud platform supporting infrastructure automation, CI/CD, monitoring, and production workloads.",

        technologies: [
            "AWS",
            "Terraform",
            "Docker",
            "Jenkins",
            "CloudWatch",
            "CodePipeline",
        ],

        impact: [
            "Infrastructure as Code",
            "CI/CD Automation",
            "Production Monitoring",
        ],
    },

    {
        id: 2,

        title: "DFDS",

        client: "DFDS",

        provider: "Azure",

        summary:
            "Cloud platform modernization using Azure infrastructure and deployment automation.",

        technologies: [
            "Azure",
            "Terraform",
            "Azure DevOps",
            "App Services",
        ],

        impact: [
            "Platform Engineering",
            "Infrastructure Automation",
            "Deployment Optimization",
        ],
    },

    {
        id: 3,

        title: "Edge World Logistics",

        client: "Edge World Logistics",

        provider: "Azure",

        summary:
            "Cloud infrastructure management and operational support for enterprise logistics workloads.",

        technologies: [
            "Azure",
            "Azure DevOps",
            "Terraform",
        ],

        impact: [
            "Cloud Operations",
            "CI/CD",
            "Monitoring",
        ],
    },

    {
        id: 4,

        title: "Hybrid Cloud Disaster Recovery Strategy",

        client: "Internal Initiative",

        provider: "AWS + Azure",

        summary:
            "Designed and implemented a scalable disaster recovery strategy spanning AWS and Azure to protect business-critical production workloads.",

        technologies: [
            "AWS",
            "Azure",
            "Terraform",
            "CloudWatch",
            "Azure Monitor",
        ],

        impact: [
            "99.9% availability achieved",
            "Recovery Time Objective (RTO) reduced by 40%",
            "Business Continuity",
        ],
    },

    {
        id: 5,

        title: "Cloud Cost & Performance Optimization",

        client: "Internal Initiative",

        provider: "Multi-Cloud",

        summary:
            "Right-sized cloud resources, tuned auto-scaling policies, and optimized database indexing to cut costs and improve application responsiveness.",

        technologies: [
            "AWS",
            "Azure",
            "Auto Scaling",
            "Serverless",
            "SQL Server",
        ],

        impact: [
            "~20% reduction in cloud infrastructure costs",
            "~30% reduction in query execution time",
            "Client-recognized cost optimization",
        ],
    },
] as const satisfies readonly Project[];
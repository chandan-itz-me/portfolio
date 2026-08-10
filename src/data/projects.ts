import type { Project } from "@/types/project";

export const projects = [
    {
        id: 1,
        slug: "psa-bdp-platform-modernization",

        title: "PSA BDP",

        client: "PSA BDP",

        domain: "Global Logistics",

        provider: "AWS",

        status: "Production",

        category: "Enterprise Delivery",

        summary:
            "Enterprise logistics cloud platform supporting infrastructure automation, CI/CD, monitoring, and production workloads.",

        description:
            "Delivered a resilient AWS platform with reusable IaC modules, observable deployment pipelines, and operational controls aligned to enterprise release standards.",

        cloudProviders: ["aws"],

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
        slug: "dfds-cloud-modernization",

        title: "DFDS",

        client: "DFDS",

        domain: "Shipping & Supply Chain",

        provider: "Azure",

        status: "Live",

        category: "Platform Transformation",

        summary:
            "Cloud platform modernization using Azure infrastructure and deployment automation.",

        description:
            "Modernized service hosting and release governance by establishing Azure-native platform foundations, standardized deployments, and operational observability.",

        cloudProviders: ["azure"],

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
        slug: "edge-world-logistics-operations",

        title: "Edge World Logistics",

        client: "Edge World Logistics",

        domain: "Logistics Operations",

        provider: "Azure",

        status: "Ongoing",

        category: "Cloud Operations",

        summary:
            "Cloud infrastructure management and operational support for enterprise logistics workloads.",

        description:
            "Improved reliability and release confidence through operational runbooks, infrastructure automation, and deployment guardrails for logistics-facing systems.",

        cloudProviders: ["azure"],

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
        slug: "hybrid-cloud-dr-strategy",

        title: "Hybrid Cloud Disaster Recovery Strategy",

        client: "Internal Initiative",

        domain: "Business Continuity",

        provider: "AWS + Azure",

        status: "Completed",

        category: "Resilience Engineering",

        summary:
            "Designed and implemented a scalable disaster recovery strategy spanning AWS and Azure to protect business-critical production workloads.",

        description:
            "Defined cross-cloud failover architecture, recovery testing flows, and infrastructure automation standards that reduced recovery risk for mission-critical services.",

        cloudProviders: ["aws", "azure"],

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
        slug: "cloud-cost-performance-optimization",

        title: "Cloud Cost & Performance Optimization",

        client: "Internal Initiative",

        domain: "FinOps & Performance",

        provider: "Multi-Cloud",

        status: "Continuous",

        category: "Optimization Program",

        summary:
            "Right-sized cloud resources, tuned auto-scaling policies, and optimized database indexing to cut costs and improve application responsiveness.",

        description:
            "Introduced a repeatable optimization framework combining usage analytics, rightsizing actions, and performance baselining across cloud workloads.",

        cloudProviders: ["aws", "azure", "gcp"],

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
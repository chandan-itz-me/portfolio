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
] as const;
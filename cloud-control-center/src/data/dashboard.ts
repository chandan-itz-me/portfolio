export const dashboard = {
    summary: [
        {
            label: "Experience",
            value: "6+",
            suffix: "Years",
            status: null,
        },
        {
            label: "Clients",
            value: "8",
            suffix: null,
            status: null,
        },
        {
            label: "Certifications",
            value: "5",
            suffix: null,
            status: null,
        },
        {
            label: "Status",
            value: "Operational",
            suffix: null,
            status: "Healthy",
        },
    ],

    metrics: [
        {
            label: "Production Availability",
            value: 99.9,
            suffix: "%",
        },
        {
            label: "CI/CD Pipelines Built",
            value: 150,
            suffix: "+",
        },
        {
            label: "Cloud Resources Managed",
            value: 300,
            suffix: "+",
        },
        {
            label: "Tools & Technologies",
            value: 30,
            suffix: "+",
        },
    ],

    health: [
        {
            name: "AWS",
            value: 98,
        },
        {
            name: "Azure",
            value: 95,
        },
        {
            name: "Terraform",
            value: 100,
        },
        {
            name: "CI/CD",
            value: 97,
        },
        {
            name: "Monitoring",
            value: 99,
        },
    ],

    cloudProviders: [
        {
            provider: "AWS",
            services: 30,
            status: "Healthy",
        },
        {
            provider: "Azure",
            services: 50,
            status: "Healthy",
        },
        {
            provider: "Google Cloud",
            services: 10,
            status: "Learning",
        },
    ],

    activity: [
        {
            title: "Migration of Production Applications to AWS",
            category: "Cloud Migration",
        },
        {
            title: "Azure Disaster Recovery Implementation",
            category: "Business Continuity",
        },
        {
            title: "Infrastructure Vulnerability Assessment",
            category: "Security",
        },
        {
            title: "Terraform Module Standardization",
            category: "Infrastructure as Code",
        },
        {
            title: "Multi-Stage CI/CD Pipeline Optimization",
            category: "DevOps",
        },
    ],
} as const;
export type InfrastructureService = {
    id: string;
    name: string;
    category: string;
    level: string;
    description: string;
    projects: readonly string[];
    experience: readonly string[];
};

export const infrastructure = {
    aws: [
        {
            id: "ec2",
            name: "EC2",
            category: "Compute",
            level: "Advanced",
            description:
                "Provisioning and managing Linux virtual machines for enterprise production workloads.",
            projects: [
                "PSA BDP",
                "StayinFront",
            ],
            experience: [
                "Linux Administration",
                "Auto Scaling",
                "Terraform",
                "CloudWatch",
                "Load Balancers",
            ],
        },

        {
            id: "ecs",
            name: "ECS",
            category: "Containers",
            level: "Advanced",
            description:
                "Container orchestration for production workloads.",
            projects: [
                "PSA BDP",
            ],
            experience: [
                "Docker",
                "Task Definitions",
                "Deployments",
            ],
        },

        {
            id: "cloudwatch",
            name: "CloudWatch",
            category: "Monitoring",
            level: "Advanced",
            description:
                "Monitoring, logging and operational observability.",
            projects: [
                "PSA BDP",
            ],
            experience: [
                "Metrics",
                "Logs",
                "Dashboards",
                "Alarms",
            ],
        },
    ],

    azure: [
        {
            id: "app-service",
            name: "App Service",
            category: "Hosting",
            level: "Advanced",
            description:
                "Hosting enterprise web applications.",
            projects: [
                "DFDS",
                "Edge World Logistics",
            ],
            experience: [
                "Deployment Slots",
                "Scaling",
                "Diagnostics",
            ],
        },

        {
            id: "azure-devops",
            name: "Azure DevOps",
            category: "CI/CD",
            level: "Advanced",
            description:
                "Continuous Integration and Deployment platform.",
            projects: [
                "DFDS",
            ],
            experience: [
                "Pipelines",
                "Releases",
                "Repositories",
            ],
        },
    ],

    gcp: [
        {
            id: "cloud-run",
            name: "Cloud Run",
            category: "Containers",
            level: "Intermediate",
            description:
                "Serverless container platform.",
            projects: [],
            experience: [
                "Container Deployments",
            ],
        },
    ],
} as const;
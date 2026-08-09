import type { InfrastructureData } from "@/types/infrastructure";

export const infrastructure: InfrastructureData = {
    aws: [
        {
            id: "ec2",
            name: "EC2",
            category: "Compute",
            level: "Advanced",
            description:
                "Provisioning and managing Linux virtual machines for enterprise production workloads.",
            projects: ["PSA BDP", "Mondelez International", "PepsiCo", "Kellogg's"],
            experience: ["Linux Administration", "Auto Scaling", "Terraform", "CloudWatch"],
        },
        {
            id: "vpc",
            name: "VPC",
            category: "Networking",
            level: "Advanced",
            description:
                "Designing isolated network environments, subnets, and routing for secure production workloads.",
            projects: ["PSA BDP", "Mondelez International"],
            experience: ["Subnetting", "Security Groups", "Route Tables", "Terraform"],
        },
        {
            id: "iam",
            name: "IAM",
            category: "Security",
            level: "Advanced",
            description:
                "Administering identity, access governance, and least-privilege policies across AWS accounts.",
            projects: ["PepsiCo", "PSA BDP"],
            experience: ["SAML SSO", "Access Governance", "Policy Design"],
        },
        {
            id: "s3",
            name: "S3",
            category: "Storage",
            level: "Advanced",
            description:
                "Managing object storage for application data, backups, and static assets.",
            projects: ["PSA BDP"],
            experience: ["Lifecycle Policies", "Versioning", "Access Policies"],
        },
        {
            id: "rds",
            name: "RDS",
            category: "Database",
            level: "Intermediate",
            description:
                "Provisioning and maintaining managed relational databases for production applications.",
            projects: ["PSA BDP"],
            experience: ["Backups", "Performance Tuning"],
        },
        {
            id: "ecs",
            name: "ECS",
            category: "Containers",
            level: "Advanced",
            description:
                "Container orchestration for scalable, highly available production workloads.",
            projects: ["PSA BDP"],
            experience: ["Docker", "Task Definitions", "Service Deployments"],
        },
        {
            id: "eks",
            name: "EKS",
            category: "Containers",
            level: "Intermediate",
            description:
                "Managed Kubernetes for containerized application deployments.",
            projects: ["PSA BDP"],
            experience: ["Kubernetes Fundamentals", "Docker"],
        },
        {
            id: "cloudformation",
            name: "CloudFormation",
            category: "Infrastructure as Code",
            level: "Advanced",
            description:
                "Automating consistent, repeatable AWS infrastructure deployments via IaC templates.",
            projects: ["PSA BDP"],
            experience: ["Stack Management", "Change Sets", "Reusable Templates"],
        },
        {
            id: "cloudwatch",
            name: "CloudWatch",
            category: "Monitoring",
            level: "Advanced",
            description:
                "Monitoring, logging, and operational observability for production environments.",
            projects: ["PSA BDP", "Mondelez International"],
            experience: ["Metrics", "Logs", "Dashboards", "Alarms"],
        },
        {
            id: "route53",
            name: "Route 53",
            category: "Networking",
            level: "Intermediate",
            description:
                "Managing DNS routing and domain resolution for production applications.",
            projects: ["PSA BDP"],
            experience: ["DNS Records", "Health Checks"],
        },
        {
            id: "alb",
            name: "Elastic Load Balancer (ALB)",
            category: "Networking",
            level: "Advanced",
            description:
                "Distributing traffic across scalable, highly available application tiers.",
            projects: ["PSA BDP"],
            experience: ["Target Groups", "Health Checks", "SSL Termination"],
        },
        {
            id: "asg",
            name: "Auto Scaling Groups",
            category: "Compute",
            level: "Advanced",
            description:
                "Automatically scaling compute capacity to match production demand.",
            projects: ["PSA BDP"],
            experience: ["Scaling Policies", "Launch Templates"],
        },
    ],

    azure: [
        {
            id: "virtual-machines",
            name: "Virtual Machines",
            category: "Compute",
            level: "Advanced",
            description:
                "Provisioning and managing Windows and Linux VMs for enterprise production workloads.",
            projects: ["DFDS", "Edge World Logistics"],
            experience: ["Terraform", "ARM Templates", "Scaling", "Patching"],
        },
        {
            id: "virtual-networks",
            name: "Virtual Networks",
            category: "Networking",
            level: "Advanced",
            description:
                "Designing secure, segmented network topologies across Azure subscriptions.",
            projects: ["DFDS"],
            experience: ["Subnetting", "NSGs", "Peering"],
        },
        {
            id: "app-service",
            name: "App Services",
            category: "Hosting",
            level: "Advanced",
            description:
                "Hosting and scaling enterprise web applications with managed deployment slots.",
            projects: ["DFDS", "Edge World Logistics"],
            experience: ["Deployment Slots", "Scaling", "Diagnostics"],
        },
        {
            id: "function-apps",
            name: "Function Apps",
            category: "Serverless",
            level: "Intermediate",
            description:
                "Building serverless workloads to reduce operational overhead and cost.",
            projects: ["DFDS"],
            experience: ["Event Triggers", "Serverless Architecture"],
        },
        {
            id: "storage-accounts",
            name: "Storage Accounts",
            category: "Storage",
            level: "Advanced",
            description:
                "Managing blob, file, and table storage for application and backup data.",
            projects: ["DFDS", "Edge World Logistics"],
            experience: ["Lifecycle Management", "Access Tiers"],
        },
        {
            id: "azure-sql",
            name: "Azure SQL",
            category: "Database",
            level: "Intermediate",
            description:
                "Administering managed SQL databases for production applications.",
            projects: ["DFDS"],
            experience: ["Performance Tuning", "Backups"],
        },
        {
            id: "azure-postgresql",
            name: "Azure PostgreSQL",
            category: "Database",
            level: "Intermediate",
            description:
                "Managing PostgreSQL workloads on Azure's managed database service.",
            projects: ["DFDS"],
            experience: ["Provisioning", "Backups"],
        },
        {
            id: "acr",
            name: "Azure Container Registry",
            category: "Containers",
            level: "Advanced",
            description:
                "Storing and managing container images for CI/CD-driven deployments.",
            projects: ["DFDS"],
            experience: ["Image Management", "CI/CD Integration"],
        },
        {
            id: "key-vault",
            name: "Key Vault",
            category: "Security",
            level: "Advanced",
            description:
                "Centralizing secrets, certificates, and key management across environments.",
            projects: ["DFDS", "Edge World Logistics"],
            experience: ["Secrets Management", "Access Policies"],
        },
        {
            id: "managed-identity",
            name: "Managed Identity",
            category: "Security",
            level: "Advanced",
            description:
                "Securing service-to-service authentication without managing credentials.",
            projects: ["DFDS"],
            experience: ["RBAC", "Credential-free Auth"],
        },
        {
            id: "api-management",
            name: "API Management",
            category: "Integration",
            level: "Intermediate",
            description:
                "Publishing, securing, and governing APIs for enterprise consumption.",
            projects: ["DFDS"],
            experience: ["API Gateways", "Policies"],
        },
        {
            id: "azure-monitor",
            name: "Azure Monitor",
            category: "Monitoring",
            level: "Advanced",
            description:
                "Centralized monitoring, dashboards, and alerting across cloud infrastructure.",
            projects: ["DFDS", "Edge World Logistics"],
            experience: ["Dashboards", "Alerting", "Azure Managed Grafana"],
        },
        {
            id: "log-analytics",
            name: "Log Analytics",
            category: "Monitoring",
            level: "Advanced",
            description:
                "Centralized log aggregation and querying for faster incident diagnosis.",
            projects: ["DFDS", "Edge World Logistics"],
            experience: ["KQL Queries", "Log Aggregation"],
        },
        {
            id: "application-insights",
            name: "Application Insights",
            category: "Monitoring",
            level: "Advanced",
            description:
                "Application performance monitoring for faster issue detection and resolution.",
            projects: ["DFDS", "Edge World Logistics"],
            experience: ["APM", "Root Cause Analysis"],
        },
    ],

    gcp: [
        {
            id: "compute-engine",
            name: "Compute Engine",
            category: "Compute",
            level: "Intermediate",
            description:
                "Provisioning and managing virtual machines on Google Cloud.",
            projects: [],
            experience: ["VM Provisioning", "Networking Fundamentals"],
        },
        {
            id: "cloud-run",
            name: "Cloud Run",
            category: "Containers",
            level: "Intermediate",
            description:
                "Serverless container platform for scalable application deployments.",
            projects: [],
            experience: ["Container Deployments"],
        },
        {
            id: "cloud-storage",
            name: "Cloud Storage",
            category: "Storage",
            level: "Intermediate",
            description:
                "Object storage for application data and static assets.",
            projects: [],
            experience: ["Bucket Management", "Access Policies"],
        },
    ],
}

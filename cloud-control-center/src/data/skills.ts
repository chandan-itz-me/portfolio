import type { SkillCategory } from "@/types/skills";

export const skills: SkillCategory[] = [
    {
        title: "Cloud Platforms",
        skills: [
            { name: "Amazon Web Services (AWS)", level: "Advanced" },
            { name: "Microsoft Azure", level: "Advanced" },
            { name: "Google Cloud Platform (GCP)", level: "Intermediate" },
            { name: "Oracle Cloud Infrastructure (OCI)", level: "Intermediate" },
        ],
    },

    {
        title: "Core Azure Services",
        skills: [
            { name: "Virtual Machines", level: "Advanced" },
            { name: "Virtual Networks", level: "Advanced" },
            { name: "App Services", level: "Advanced" },
            { name: "Function Apps", level: "Intermediate" },
            { name: "Storage Accounts", level: "Advanced" },
            { name: "Azure SQL", level: "Intermediate" },
            { name: "Azure PostgreSQL", level: "Intermediate" },
            { name: "Azure Container Registry (ACR)", level: "Advanced" },
            { name: "Key Vault", level: "Advanced" },
            { name: "Managed Identity", level: "Advanced" },
            { name: "API Management", level: "Intermediate" },
            { name: "Azure Monitor", level: "Advanced" },
            { name: "Log Analytics", level: "Advanced" },
            { name: "Application Insights", level: "Advanced" },
        ],
    },

    {
        title: "Core AWS Services",
        skills: [
            { name: "EC2", level: "Advanced" },
            { name: "VPC", level: "Advanced" },
            { name: "IAM", level: "Advanced" },
            { name: "S3", level: "Advanced" },
            { name: "RDS", level: "Intermediate" },
            { name: "ECS", level: "Advanced" },
            { name: "EKS", level: "Intermediate" },
            { name: "CloudFormation", level: "Advanced" },
            { name: "CloudWatch", level: "Advanced" },
            { name: "ECR", level: "Intermediate" },
            { name: "Route 53", level: "Intermediate" },
            { name: "Elastic Load Balancer (ALB)", level: "Advanced" },
            { name: "Auto Scaling Groups", level: "Advanced" },
        ],
    },

    {
        title: "Infrastructure as Code",
        skills: [
            { name: "Terraform", level: "Advanced" },
            { name: "AWS CloudFormation", level: "Advanced" },
            { name: "ARM Templates", level: "Advanced" },
        ],
    },

    {
        title: "Containers & Orchestration",
        skills: [
            { name: "Docker", level: "Advanced" },
            { name: "Amazon ECS", level: "Advanced" },
            { name: "Amazon EKS", level: "Intermediate" },
        ],
    },

    {
        title: "CI/CD & DevOps",
        skills: [
            { name: "Azure DevOps", level: "Advanced" },
            { name: "Azure Pipelines", level: "Advanced" },
            { name: "Azure Repos", level: "Advanced" },
            { name: "Jenkins", level: "Intermediate" },
            { name: "Git", level: "Advanced" },
            { name: "AWS CodePipeline", level: "Advanced" },
        ],
    },

    {
        title: "Monitoring & Observability",
        skills: [
            { name: "Azure Monitor", level: "Advanced" },
            { name: "Log Analytics", level: "Advanced" },
            { name: "Application Insights", level: "Advanced" },
            { name: "AWS CloudWatch", level: "Advanced" },
            { name: "Grafana", level: "Intermediate" },
            { name: "Zabbix", level: "Intermediate" },
        ],
    },

    {
        title: "Programming & Scripting",
        skills: [
            { name: "Python", level: "Intermediate" },
            { name: "Bash / Shell", level: "Advanced" },
            { name: "PowerShell", level: "Intermediate" },
            { name: "Go", level: "Intermediate" },
            { name: "Java", level: "Intermediate" },
            { name: "YAML", level: "Advanced" },
            { name: "JSON", level: "Advanced" },
            { name: "HCL", level: "Advanced" },
        ],
    },

    {
        title: "Databases",
        skills: [
            { name: "Microsoft SQL Server", level: "Advanced" },
            { name: "MySQL", level: "Intermediate" },
            { name: "MariaDB", level: "Intermediate" },
        ],
    },

    {
        title: "Security & Identity",
        skills: [
            { name: "IAM", level: "Advanced" },
            { name: "Managed Identity", level: "Advanced" },
            { name: "SAML", level: "Advanced" },
            { name: "SSO", level: "Advanced" },
            { name: "Auth0", level: "Intermediate" },
            { name: "JWT", level: "Intermediate" },
            { name: "SSL/TLS", level: "Intermediate" },
            { name: "WAF", level: "Intermediate" },
        ],
    },

    {
        title: "Operating Systems",
        skills: [
            { name: "Linux", level: "Advanced" },
            { name: "Windows Server", level: "Advanced" },
        ],
    },

    {
        title: "Collaboration & Design",
        skills: [
            { name: "Jira", level: "Advanced" },
            { name: "Serviceaide", level: "Intermediate" },
            { name: "CloudSkew", level: "Advanced" },
            { name: "Draw.io", level: "Advanced" },
            { name: "Miro", level: "Intermediate" },
        ],
    },
];

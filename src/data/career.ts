import type { CareerEntry } from "@/types/career";

export const career = [
    {
        id: 1,

        company: "Cozentus Technologies",

        role: "DevOps Engineer",

        duration: "May 2022 – Present",

        location: "Bhubaneswar, India",

        summary:
            "Delivering enterprise cloud platforms across Azure and AWS with Infrastructure as Code, CI/CD automation, observability, and platform engineering for global logistics clients.",

        clients: [
            "DFDS",
            "PSA BDP",
            "Edge World Logistics",
        ],

        technologies: [
            "Azure",
            "AWS",
            "Terraform",
            "ARM Templates",
            "CloudFormation",
            "Azure DevOps",
            "Docker",
            "Amazon ECS",
            "CloudWatch",
            "Azure Monitor",
            "Python",
            "Bash",
        ],

        highlights: [
            "Designed, provisioned, and managed 200+ Azure resources across 30+ subscriptions using Terraform and ARM Templates",
            "Automated provisioning of 100+ AWS resources across 10+ accounts using Terraform and CloudFormation",
            "Built and maintained 150+ CI/CD pipelines across Azure DevOps and AWS CodePipeline",
            "Reduced infrastructure provisioning time by 60% through reusable Terraform modules and standardized deployments",
            "Reduced manual operational effort by 40% through Python, Bash, and PowerShell automation",
            "Delivered mission-critical production environments with 99.9% availability through proactive monitoring and incident management",
        ],
    },

    {
        id: 2,

        company: "Paul Mason Consulting Retail Services",

        role: "Support Analyst",

        duration: "Oct 2021 – May 2022",

        location: "Bhubaneswar, India",

        summary:
            "Managed enterprise infrastructure operations, production support, and monitoring across Oracle Cloud Infrastructure and on-premises retail environments.",

        clients: [
            "Primark",
            "WHSmith",
        ],

        technologies: [
            "Oracle Cloud Infrastructure",
            "Zabbix",
            "SQL",
            "Windows Server",
            "Linux",
        ],

        highlights: [
            "Provided 24×7 production support for business-critical retail applications, participating in on-call rotations",
            "Managed infrastructure monitoring and alerting using Zabbix, tracking server health, storage, and application availability",
            "Diagnosed and resolved network, server, OS, and application issues across distributed retail store environments",
            "Investigated production incidents, performed root cause analysis, and restored services within SLA targets",
        ],
    },

    {
        id: 3,

        company: "StayinFront India Pvt. Ltd.",

        role: "System Analyst",

        duration: "Dec 2019 – Oct 2021",

        location: "Bhubaneswar, India",

        summary:
            "Provided L3 production support for AWS-based enterprise environments, enterprise authentication, and cloud operations for global consumer goods clients.",

        clients: [
            "Mondelez International",
            "PepsiCo",
            "Kellogg's",
        ],

        technologies: [
            "AWS",
            "IAM",
            "SAML",
            "SSO",
            "SQL Server",
            "IIS",
            "Bash",
        ],

        highlights: [
            "Provided L3 production support for AWS Production, QA, and Development environments",
            "Configured and maintained SAML-based Single Sign-On (SSO) integrations for secure enterprise authentication",
            "Automated operational health checks and monitoring activities using scripting, reducing manual intervention",
            "Executed SQL queries, batch scripts, and release activities supporting application deployment and production operations",
            "Investigated production incidents, carried out root cause analysis, and restored services within SLA targets",
        ],
    },
] as const satisfies readonly CareerEntry[];
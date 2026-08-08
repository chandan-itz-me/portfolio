export const career = [
    {
        id: 1,

        company: "Cozentus Technologies",

        role: "DevOps Engineer",

        duration: "May 2022 – Present",

        location: "Bhubaneswar, India",

        summary:
            "Delivering enterprise cloud platforms across Azure and AWS with Infrastructure as Code, CI/CD automation, observability, and platform engineering.",

        technologies: [
            "Azure",
            "AWS",
            "Terraform",
            "Azure DevOps",
            "Docker",
            "CloudWatch",
            "CloudFormation",
            "ECS",
            "EKS",
            "Python",
            "Bash",
        ],

        highlights: [
                "Managed 200+ Azure resources across 30+ subscriptions",
                "Built and maintained 100+ CI/CD pipelines",
                "Reduced infrastructure provisioning time by 60%",
                "Delivered mission-critical environments with 99.9% availability",
            ],
    },

    {
        id: 2,

        company: "Paul Mason Consulting",

        role: "Support Analyst",

        duration: "Oct 2021 – May 2022",

        location: "Bhubaneswar, India",

        summary:
            "Managed enterprise infrastructure operations, production support, SQL troubleshooting, and monitoring across Oracle Cloud Infrastructure and on-premises environments.",

        technologies: [
            "OCI",
            "SQL",
            "Windows",
            "Linux",
            "Zabbix",
        ],

        highlights: [
            "Provided 24×7 production support",
            "Managed infrastructure monitoring using Zabbix",
            "Performed SQL troubleshooting and RCA",
            "Maintained SLA-driven enterprise operations",
        ],
    },

    {
        id: 3,

        company: "StayinFront India Pvt. Ltd.",

        role: "System Analyst",

        duration: "Dec 2019 – Oct 2021",

        location: "Bhubaneswar, India",

        summary:
            "Supported AWS production environments, enterprise authentication, deployments, and cloud operations for global enterprise customers.",

        technologies: [
            "AWS",
            "IAM",
            "SSO",
            "SAML",
            "IIS",
            "SQL Server",
        ],

        highlights: [
            "Supported AWS production environments",
            "Implemented SAML-based SSO integrations",
            "Managed IAM and enterprise access",
            "Automated operational health checks",
        ],
    },
] as const;
import type { Project } from "@/types/project";

export const projects = [
    {
        id: 1,
        slug: "psa-bdp-platform-modernization",
        title: "PSA BDP",
        logoPath: "project-logos/PSA BDP.png",
        logoPaths: ["project-logos/PSA BDP.png"],
        logoAlt: "PSA BDP logo",
        client: "PSA BDP",
        domain: "Global Logistics",
        provider: "AWS",
        status: "Production",
        category: "Enterprise Delivery",
        summary:
            "Modern cloud platform supporting global freight applications.",
        description:
            "Delivered a resilient AWS landing zone with reusable infrastructure modules, monitored delivery pipelines, and secured production operations for logistics teams.",
        infrastructureArchitecture:
            "Multi-account AWS architecture with VPC segmentation, shared services, observability, and deployment guardrails.",
        application:
            "Freight workflow and shipment visibility applications used by regional operations and support teams.",
        cloudProviders: ["aws"],

        technologies: ["AWS", "Terraform", "Jenkins", "Docker", "CloudWatch"],
        impact: ["IaC standardization", "Faster releases", "Higher platform stability"],
    },
    {
        id: 2,
        slug: "dfds-cloud-modernization",
        title: "DFDS",
        logoPath: "project-logos/DFDS.png",
        logoPaths: ["project-logos/DFDS.png"],
        logoAlt: "DFDS logo",
        client: "DFDS",
        domain: "Shipping & Supply Chain",
        provider: "Azure",
        status: "Live",
        category: "Platform Transformation",
        summary:
            "Azure modernization for shipping and supply chain services.",
        description:
            "Built Azure-native platform foundations, governed deployments, and improved reliability through observability and release automation.",
        infrastructureArchitecture:
            "Hub-spoke Azure networking, shared CI/CD agents, App Services, and central monitoring workspaces.",
        application:
            "Logistics integration services and internal operational dashboards powering shipment lifecycle tracking.",
        cloudProviders: ["azure"],
        technologies: ["Azure", "Terraform", "Azure DevOps", "App Services"],
        impact: ["Release standardization", "Reduced deployment effort", "Improved uptime"],
    },
    {
        id: 3,
        slug: "edge-world-logistics-operations",
        title: "Edge World Logistics",
        logoPath: "project-logos/EWL.png",
        logoPaths: ["project-logos/EWL.png"],
        logoAlt: "Edge World Logistics logo",
        client: "Edge World Logistics",
        domain: "Logistics Operations",
        provider: "Azure",
        status: "Ongoing",
        category: "Cloud Operations",
        summary:
            "Cloud operations support for logistics platforms and deployments.",
        description:
            "Strengthened day-2 cloud operations through runbooks, alert tuning, infra automation, and deployment governance across multiple services.",
        infrastructureArchitecture:
            "Azure subscriptions with policy controls, centralized monitoring, and workload isolation by environment.",
        application:
            "Operational services supporting consignment processing, shipment updates, and partner integrations.",
        cloudProviders: ["azure"],
        technologies: ["Azure", "Azure DevOps", "Terraform", "Monitor"],
        impact: ["Operational resilience", "Faster incident recovery", "Deployment consistency"],
    },
    {
        id: 4,
        slug: "ag-barr-cloud-modernization",
        title: "AG Barr",
        logoPath: "project-logos/AG Barr.png",
        logoPaths: ["project-logos/AG Barr.png"],
        logoAlt: "AG Barr logo",
        client: "AG Barr",
        domain: "Consumer Goods",
        provider: "Azure",
        status: "Live",
        category: "Enterprise Delivery",
        summary: "Platform modernization for consumer products workloads.",
        description:
            "Enabled modern deployment pipelines and stronger observability for core business applications running in Azure.",
        infrastructureArchitecture:
            "Azure hub-spoke setup with managed identity access, segmented workloads, and centralized monitoring.",
        application:
            "Internal line-of-business applications supporting operations, reporting, and partner collaboration.",
        cloudProviders: ["azure"],
        technologies: ["Azure", "Terraform", "Azure DevOps", "Key Vault"],
        impact: ["Improved deployment confidence", "Higher delivery velocity", "Operational visibility"],
    },
    {
        id: 5,
        slug: "aptos-retail-cloud-platform",
        title: "Aptos",
        logoPath: "project-logos/aptos.png",
        logoPaths: ["project-logos/aptos.png"],
        logoAlt: "Aptos logo",
        client: "Aptos",
        domain: "Retail Technology",
        provider: "AWS",
        status: "Production",
        category: "Platform Engineering",
        summary: "Retail cloud platform enablement and automation.",
        description:
            "Delivered automation and environment standardization for retail applications requiring reliable releases and strong governance.",
        infrastructureArchitecture:
            "Multi-environment AWS architecture with reusable Terraform modules and centralized observability.",
        application:
            "Retail platform services and integration workloads for commerce and store operations.",
        cloudProviders: ["aws"],
        technologies: ["AWS", "Terraform", "GitHub Actions", "CloudWatch"],
        impact: ["Reduced manual operations", "Faster release cycles", "Consistent environments"],
    },
    {
        id: 6,
        slug: "bridgenet-network-cloud-services",
        title: "BridgeNet",
        logoPath: "project-logos/BridgeNet.png",
        logoPaths: ["project-logos/BridgeNet.png"],
        logoAlt: "BridgeNet logo",
        client: "BridgeNet",
        domain: "Network & Connectivity",
        provider: "Azure",
        status: "Live",
        category: "Cloud Operations",
        summary: "Cloud operations and release automation for network services.",
        description:
            "Implemented stable delivery pipelines, environment controls, and service observability for customer-facing network workloads.",
        infrastructureArchitecture:
            "Azure workload isolation with policy enforcement, monitoring dashboards, and controlled deployment gates.",
        application:
            "Portal and service APIs used to manage connectivity operations and enterprise customer provisioning.",
        cloudProviders: ["azure"],
        technologies: ["Azure", "Terraform", "Azure DevOps", "Application Insights"],
        impact: ["Improved reliability", "Standardized releases", "Better operational insights"],
    },
    {
        id: 7,
        slug: "kelloggs-data-platform-delivery",
        title: "Kellogs",
        logoPath: "project-logos/Kelloggs.png",
        logoPaths: ["project-logos/Kelloggs.png"],
        logoAlt: "Kelloggs logo",
        client: "Kelloggs",
        domain: "Food & Beverage",
        provider: "AWS",
        status: "Live",
        category: "Data Platform",
        summary: "Cloud delivery support for enterprise data and reporting workflows.",
        description:
            "Enabled secure, automated deployment patterns for data-centric workloads and reporting services in cloud environments.",
        infrastructureArchitecture:
            "AWS data workload architecture with controlled access, pipeline orchestration, and monitoring baselines.",
        application:
            "Data integration and reporting applications supporting supply chain and business analytics.",
        cloudProviders: ["aws"],
        technologies: ["AWS", "Terraform", "CodePipeline", "CloudWatch"],
        impact: ["Reliable data releases", "Reduced deployment risk", "Governed operations"],
    },
    {
        id: 8,
        slug: "moldelez-enterprise-cloud-ops",
        title: "Mondelez",
        logoPath: "project-logos/Moldelez.png",
        logoPaths: ["project-logos/Moldelez.png"],
        logoAlt: "Moldelez logo",
        client: "Moldelez",
        domain: "Consumer Packaged Goods",
        provider: "Azure",
        status: "Ongoing",
        category: "Enterprise Operations",
        summary: "Enterprise cloud operations and deployment governance.",
        description:
            "Improved cloud service reliability by introducing monitoring standards, deployment controls, and environment guardrails.",
        infrastructureArchitecture:
            "Azure subscription model with shared platform services, policy controls, and standardized networking.",
        application:
            "Enterprise planning and operational applications integrated with internal business systems.",
        cloudProviders: ["azure"],
        technologies: ["Azure", "Azure DevOps", "Terraform", "Log Analytics"],
        impact: ["Operational consistency", "Reduced incidents", "Stronger governance"],
    },
    {
        id: 9,
        slug: "pepsico-cloud-modernization",
        title: "Pepsico",
        logoPath: "project-logos/pepsico.png",
        logoPaths: ["project-logos/pepsico.png"],
        logoAlt: "PepsiCo logo",
        client: "PepsiCo",
        domain: "Food & Beverage",
        provider: "AWS",
        status: "Production",
        category: "Modernization",
        summary: "Cloud modernization for critical enterprise services.",
        description:
            "Accelerated modernization goals by automating infrastructure provisioning, release flows, and system monitoring practices.",
        infrastructureArchitecture:
            "AWS-based architecture with modular infrastructure code, secured networking, and proactive monitoring.",
        application:
            "Business-critical applications supporting operations, planning, and enterprise workflow integrations.",
        cloudProviders: ["aws"],
        technologies: ["AWS", "Terraform", "Jenkins", "CloudWatch"],
        impact: ["Modernized delivery model", "Faster deployments", "Lower operational overhead"],
    },
    {
        id: 10,
        slug: "primark-omnichannel-platform",
        title: "Primark",
        logoPath: "project-logos/PRIMARK.png",
        logoPaths: ["project-logos/PRIMARK.png"],
        logoAlt: "Primark logo",
        client: "Primark",
        domain: "Retail",
        provider: "Azure",
        status: "Live",
        category: "Retail Platform",
        summary: "Cloud enablement for omnichannel retail experiences.",
        description:
            "Built stable environment and release foundations to support retail applications with predictable deployments and observability.",
        infrastructureArchitecture:
            "Azure architecture with segmented environments, secure secrets management, and release pipelines.",
        application:
            "Retail support applications integrating planning, store operations, and digital experiences.",
        cloudProviders: ["azure"],
        technologies: ["Azure", "Terraform", "Azure DevOps", "App Services"],
        impact: ["Consistent releases", "Improved uptime", "Stronger retail operations"],
    },
    {
        id: 11,
        slug: "superdry-cloud-delivery",
        title: "Superdry",
        logoPath: "project-logos/SUPERDRY.png",
        logoPaths: ["project-logos/SUPERDRY.png"],
        logoAlt: "Superdry logo",
        client: "Superdry",
        domain: "Fashion Retail",
        provider: "AWS + Azure",
        status: "Active",
        category: "Hybrid Cloud Delivery",
        summary: "Hybrid cloud delivery and environment management.",
        description:
            "Supported hybrid-cloud workloads with standardized deployments, visibility improvements, and cloud operations playbooks.",
        infrastructureArchitecture:
            "Hybrid architecture across AWS and Azure with shared governance and observability standards.",
        application:
            "Retail and operational applications used across merchandising, store support, and internal teams.",
        cloudProviders: ["aws", "azure"],
        technologies: ["AWS", "Azure", "Terraform", "Prometheus"],
        impact: ["Cross-cloud consistency", "Faster recovery", "Operational maturity"],
    },
    {
        id: 12,
        slug: "whsmith-platform-operations",
        title: "WHSmith",
        logoPath: "project-logos/WHSmith.png",
        logoPaths: ["project-logos/WHSmith.png"],
        logoAlt: "WHSmith logo",
        client: "WHSmith",
        domain: "Retail Operations",
        provider: "Azure",
        status: "Live",
        category: "Operations Enablement",
        summary: "Cloud platform operations and release enablement.",
        description:
            "Established repeatable infrastructure and deployment standards to support stable operation of core retail systems.",
        infrastructureArchitecture:
            "Azure platform services with standardized CI/CD, policy-driven controls, and observability pipelines.",
        application:
            "Operational and business applications supporting inventory, reporting, and enterprise process workflows.",
        cloudProviders: ["azure"],
        technologies: ["Azure", "Terraform", "Azure DevOps", "Monitor"],
        impact: ["Improved operational throughput", "Lower release risk", "Higher platform predictability"],
    },
] as const satisfies readonly Project[];
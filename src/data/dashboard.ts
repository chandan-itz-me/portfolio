export const dashboard = {
    /* ===== KPI STRIP: Portfolio-focused metrics ===== */
    kpis: {
        uptime: {
            label: "Uptime",
            value: 99.95,
            suffix: "%",
            target: 99.9,
            status: "success",
        },
        deploymentFrequency: {
            label: "Deployment Frequency",
            value: 13,
            suffix: "deploys/mo",
            trend: "↑ Healthy velocity",
            status: "success",
        },
        mttr: {
            label: "MTTR",
            value: 42,
            suffix: "min",
            trend: "↓ 77% improvement YoY",
            status: "success",
        },
        changeFailureRate: {
            label: "Change Failure Rate",
            value: 3.8,
            suffix: "%",
            trend: "↓ Excellent stability",
            status: "success",
        },
    },

    /* ===== MULTICLOUD PANELS ===== */
    multicloud: {
        costByProvider: [
            { provider: "AWS", percentage: 50, trend: "Stable" },
            { provider: "Azure", percentage: 37, trend: "Optimized" },
            { provider: "Google Cloud", percentage: 13, trend: "Growing" },
        ],
        
        resourceDistribution: [
            { provider: "AWS", compute: 45, storage: 28, network: 18 },
            { provider: "Azure", compute: 38, storage: 32, network: 22 },
            { provider: "Google Cloud", compute: 25, storage: 18, network: 15 },
        ],
        
        regionLatency: [
            { region: "us-east", aws: 12, azure: 18, gcp: 15 },
            { region: "eu-west", aws: 28, azure: 14, gcp: 22 },
            { region: "ap-south", aws: 42, azure: 48, gcp: 38 },
        ],
        
        cloudServices: [
            { service: "EKS/AKS/GKE", status: "healthy" },
            { service: "RDS/Cosmos/Cloud SQL", status: "healthy" },
            { service: "Lambda/Functions/Cloud Run", status: "healthy" },
            { service: "API Gateway", status: "healthy" },
            { service: "Load Balancing", status: "warning" },
        ],
    },

    /* ===== DORA METRICS (DevOps Research & Assessment) ===== */
    dora: {
        deploymentFrequency: [
            { day: "Jan", deploys: 10 },
            { day: "Feb", deploys: 14 },
            { day: "Mar", deploys: 11 },
            { day: "Apr", deploys: 16 },
            { day: "May", deploys: 12 },
            { day: "Jun", deploys: 15 },
            { day: "Jul", deploys: 13 },
            { day: "Aug", deploys: 17 },
            { day: "Sep", deploys: 14 },
            { day: "Oct", deploys: 11 },
            { day: "Nov", deploys: 16 },
            { day: "Dec", deploys: 13 },
        ],
        
        changeFailureRate: [
            { week: "Jan", rate: 8.5 },
            { week: "Feb", rate: 7.9 },
            { week: "Mar", rate: 8.2 },
            { week: "Apr", rate: 6.8 },
            { week: "May", rate: 7.1 },
            { week: "Jun", rate: 5.6 },
            { week: "Jul", rate: 5.9 },
            { week: "Aug", rate: 4.7 },
            { week: "Sep", rate: 5.2 },
            { week: "Oct", rate: 4.1 },
            { week: "Nov", rate: 4.5 },
            { week: "Dec", rate: 3.8 },
        ],
        
        leadTimeForChanges: [
            { sprint: "Jan", hours: 52 },
            { sprint: "Feb", hours: 48 },
            { sprint: "Mar", hours: 45 },
            { sprint: "Apr", hours: 42 },
            { sprint: "May", hours: 40 },
            { sprint: "Jun", hours: 36 },
            { sprint: "Jul", hours: 32 },
            { sprint: "Aug", hours: 28 },
            { sprint: "Sep", hours: 26 },
            { sprint: "Oct", hours: 23 },
            { sprint: "Nov", hours: 22 },
            { sprint: "Dec", hours: 20 },
        ],

        pipelineStages: [
            { stage: "Dev", pass: 3200, fail: 180 },
            { stage: "Test", pass: 1850, fail: 95 },
            { stage: "Prod", pass: 1400, fail: 18 },
        ],

        meanTimeToRecovery: [
            { month: "Jan", minutes: 195 },
            { month: "Feb", minutes: 180 },
            { month: "Mar", minutes: 165 },
            { month: "Apr", minutes: 155 },
            { month: "May", minutes: 140 },
            { month: "Jun", minutes: 125 },
            { month: "Jul", minutes: 110 },
            { month: "Aug", minutes: 95 },
            { month: "Sep", minutes: 85 },
            { month: "Oct", minutes: 65 },
            { month: "Nov", minutes: 52 },
            { month: "Dec", minutes: 42 },
        ],
    },

    /* ===== INCIDENT MANAGEMENT ===== */
    incidents: {
        status: [
            { label: "Resolved", value: 298, color: "var(--color-status-success)" },
            { label: "Active", value: 3, color: "var(--color-status-warning)" },
            { label: "Escalated (Sev1)", value: 1, color: "var(--color-status-critical)" },
            { label: "Pending", value: 5, color: "var(--color-status-info)" },
        ],
        
        bySeverity: [
            { date: "Jan", sev1: 2, sev2: 8, sev3: 12 },
            { date: "Feb", sev1: 2, sev2: 7, sev3: 11 },
            { date: "Mar", sev1: 1, sev2: 6, sev3: 10 },
            { date: "Apr", sev1: 1, sev2: 5, sev3: 9 },
            { date: "May", sev1: 1, sev2: 4, sev3: 8 },
            { date: "Jun", sev1: 0, sev2: 3, sev3: 7 },
            { date: "Jul", sev1: 0, sev2: 3, sev3: 6 },
            { date: "Aug", sev1: 0, sev2: 2, sev3: 5 },
            { date: "Sep", sev1: 0, sev2: 2, sev3: 4 },
            { date: "Oct", sev1: 0, sev2: 1, sev3: 3 },
            { date: "Nov", sev1: 0, sev2: 1, sev3: 2 },
            { date: "Dec", sev1: 0, sev2: 0, sev3: 2 },
        ],
    },

    /* ===== RECENT ACTIVITY ===== */

    /* ===== RECENT ACTIVITY ===== */
    activity: [
        {
            title: "AWS Cost Optimization Initiative",
            category: "Cost Management",
        },
        {
            title: "Multi-Region Failover Testing",
            category: "Disaster Recovery",
        },
        {
            title: "Kubernetes Cluster Migration (AKS)",
            category: "Cloud Operations",
        },
        {
            title: "CI/CD Pipeline Modernization",
            category: "DevOps",
        },
        {
            title: "Cloud Security Audit & Compliance",
            category: "Security",
        },
    ],
} as const;
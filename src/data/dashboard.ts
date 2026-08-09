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

    devops: {
        kpis: [
            {
                label: "Open Incidents",
                value: 22,
                suffix: "",
                color: "var(--color-warning)",
            },
            {
                label: "Avg Response Time",
                value: 5.9,
                suffix: "s",
                color: "#a855f7",
            },
            {
                label: "Mean Time To Recover",
                value: 22,
                suffix: "days",
                color: "var(--color-secondary)",
            },
        ],

        sprintVelocity: [
            {
                quarter: "Q1",
                planned: 520,
                commitment: 640,
                delivered: 980,
            },
            {
                quarter: "Q2",
                planned: 300,
                commitment: 420,
                delivered: 380,
            },
            {
                quarter: "Q3",
                planned: 180,
                commitment: 260,
                delivered: 460,
            },
            {
                quarter: "Q4",
                planned: 820,
                commitment: 560,
                delivered: 900,
            },
        ],

        incidentsPerDay: [
            { day: "Sun", value: 6 },
            { day: "Mon", value: 3 },
            { day: "Tue", value: 9 },
            { day: "Wed", value: 5 },
            { day: "Thu", value: 10 },
            { day: "Fri", value: 11 },
            { day: "Sat", value: 12 },
        ],

        errorRate: [
            { service: "Inventory Service", value: 20 },
            { service: "Store Front", value: 22 },
            { service: "Order Service", value: 41 },
        ],

        requestsToday: [
            { time: "12:00 PM", errors: 22 },
            { time: "06:00 PM", errors: 14 },
            { time: "08:00 PM", errors: 38 },
            { time: "06:00 AM", errors: 32 },
        ],

        incidentStatus: [
            {
                label: "Resolved",
                value: 25,
                color: "var(--color-warning)",
            },
            {
                label: "New",
                value: 20,
                color: "#a855f7",
            },
            {
                label: "Active",
                value: 25,
                color: "var(--color-secondary)",
            },
            {
                label: "Closed",
                value: 30,
                color: "var(--color-danger)",
            },
        ],
        incidentsTotal: 550,

        testCoverage: [
            {
                suite: "Terraform Modules",
                passed: 34,
                notRun: 4,
                failed: 2,
                blocked: 1,
                notApplicable: 3,
            },
            {
                suite: "CI/CD Pipelines",
                passed: 28,
                notRun: 3,
                failed: 1,
                blocked: 2,
                notApplicable: 2,
            },
            {
                suite: "API Services",
                passed: 22,
                notRun: 2,
                failed: 3,
                blocked: 1,
                notApplicable: 4,
            },
            {
                suite: "E2E Tests",
                passed: 18,
                notRun: 2,
                failed: 1,
                blocked: 1,
                notApplicable: 2,
            },
        ],
    },

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
export const dashboard = {
    overview: {
        projects: 6,
        experience: "5+ Years",
        infrastructure: 42,
        status: "Operational",
    },

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
            services: 18,
            status: "Healthy",
        },
        {
            provider: "Azure",
            services: 14,
            status: "Healthy",
        },
        {
            provider: "Google Cloud",
            services: 6,
            status: "Learning",
        },
    ],

    activity: [
        {
            time: "11:42",
            title: "Terraform modules updated",
        },
        {
            time: "11:18",
            title: "Azure DevOps pipeline completed",
        },
        {
            time: "10:51",
            title: "CloudWatch dashboard configured",
        },
        {
            time: "09:37",
            title: "Infrastructure documentation updated",
        },
        {
            time: "08:54",
            title: "Portfolio deployment completed",
        },
    ],
} as const;
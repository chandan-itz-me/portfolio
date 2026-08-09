export interface Command {
    id: string;
    label: string;
    description: string;
    path: string;
    group: string;
    keywords?: string[];
}

export const commands: Command[] = [
    {
        id: "dashboard",
        label: "Dashboard",
        description: "System overview",
        path: "/",
        group: "Navigate",
    },
    {
        id: "experience",
        label: "Experience",
        description: "Career timeline",
        path: "/experience",
        group: "Navigate",
    },
    {
        id: "projects",
        label: "Projects",
        description: "Project portfolio",
        path: "/projects",
        group: "Navigate",
    },
    {
        id: "infrastructure",
        label: "Infrastructure",
        description: "Cloud services",
        path: "/infrastructure",
        group: "Navigate",
    },
    {
        id: "professional",
        label: "Professional",
        description: "Skills & certifications",
        path: "/professional",
        group: "Navigate",
    },
    {
        id: "terminal",
        label: "Terminal",
        description: "Interactive CLI",
        path: "/terminal",
        group: "Navigate",
    },
    {
        id: "contact",
        label: "Contact",
        description: "Reach me",
        path: "/contact",
        group: "Navigate",
    },
];
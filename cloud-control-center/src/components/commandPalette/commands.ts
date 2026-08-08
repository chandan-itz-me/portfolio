export interface Command {
    id: string;
    label: string;
    description: string;
    path: string;
}

export const commands: Command[] = [
    {
        id: "dashboard",
        label: "Dashboard",
        description: "System overview",
        path: "/",
    },
    {
        id: "experience",
        label: "Experience",
        description: "Career timeline",
        path: "/experience",
    },
    {
        id: "projects",
        label: "Projects",
        description: "Project portfolio",
        path: "/projects",
    },
    {
        id: "infrastructure",
        label: "Infrastructure",
        description: "Cloud services",
        path: "/infrastructure",
    },
    {
        id: "professional",
        label: "Professional",
        description: "Skills & certifications",
        path: "/professional",
    },
    {
        id: "terminal",
        label: "Terminal",
        description: "Interactive CLI",
        path: "/terminal",
    },
    {
        id: "contact",
        label: "Contact",
        description: "Reach me",
        path: "/contact",
    },
];
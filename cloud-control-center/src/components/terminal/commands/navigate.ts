const routes: Record<string, string> = {
    dashboard: "/",
    experience: "/experience",
    projects: "/projects",
    infrastructure: "/infrastructure",
    professional: "/professional",
    contact: "/contact",
    terminal: "/terminal",
};

export function resolveRoute(command: string) {
    const parts = command
        .trim()
        .toLowerCase()
        .split(" ");

    if (parts.length !== 2) {
        return null;
    }

    const [action, page] = parts;

    if (
        action !== "goto" &&
        action !== "open"
    ) {
        return null;
    }

    return routes[page] ?? null;
}
import { projects } from "@/data/projects";
import type { Command } from "../commands";

/** Surfaces each project as a jump-to-Projects-page command. */
export function getProjectCommands(): Command[] {
    return projects.map((project) => ({
        id: `project-${project.id}`,
        label: project.title,
        description: project.summary,
        path: `/projects/${project.slug}`,
        group: "Projects",
        keywords: [...project.technologies, project.provider, project.client],
    }));
}

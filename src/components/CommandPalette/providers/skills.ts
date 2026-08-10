import { skills } from "@/data/skills";
import type { Command } from "../commands";

/** Flattens every skill category into individually searchable entries. */
export function getSkillCommands(): Command[] {
    return skills.flatMap((category) =>
        category.skills.map((skill) => ({
            id: `skill-${category.title}-${skill.name}`,
            label: skill.name,
            description: `${category.title} · ${skill.level}`,
            path: "/#professional",
            group: "Skills",
            keywords: [category.title, skill.level],
        }))
    );
}

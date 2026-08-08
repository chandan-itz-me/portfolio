import { skills } from "@/data/skills";

export default skills.flatMap((category) => [
    category.title,
    ...category.skills.map(
        (skill) => `  • ${skill.name}`
    ),
    "",
]);
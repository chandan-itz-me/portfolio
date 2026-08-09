export interface Skill {
    name: string;
    level: "Advanced" | "Intermediate" | "Learning";
    projects?: string[];
    experience?: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}
import { projects } from "@/data/projects";

import ProjectCard from "../ProjectCard";

import styles from "./ProjectGrid.module.css";

export default function ProjectGrid() {
    return (
        <section className={styles.grid}>
            {projects.map((project) => (
                <ProjectCard
                key={project.id}
                title={project.title}
                provider={project.provider}
                summary={project.summary}
                technologies={project.technologies}
                impact={project.impact}
            />
            ))}
        </section>
    );
}
import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import { staggerContainer } from "@/animations/stagger";
import { fadeUp } from "@/constants/animations";

import ProjectCard from "../ProjectCard";

import styles from "./ProjectGrid.module.css";

export default function ProjectGrid() {
    return (
        <motion.section
            className={styles.grid}
            variants={staggerContainer as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    variants={fadeUp as any}
                >
                    <ProjectCard
                        index={index + 1}
                        slug={project.slug}
                        title={project.title}
                        client={project.client}
                        domain={project.domain}
                        provider={project.provider}
                        status={project.status}
                        category={project.category}
                        cloudProviders={project.cloudProviders}
                        summary={project.summary}
                        technologies={project.technologies}
                        impact={project.impact}
                    />
                </motion.div>
            ))}
        </motion.section>
    );
}
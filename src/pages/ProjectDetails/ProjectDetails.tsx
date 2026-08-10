import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Page from "@/components/layout/Page";
import { projects } from "@/data/projects";
import { fadeUp } from "@/constants/animations";

import styles from "./ProjectDetails.module.css";

export default function ProjectDetails() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    return (
        <Page>
            <motion.section
                className={styles.section}
                variants={fadeUp as any}
                initial="hidden"
                animate="visible"
            >
                <Link to="/#projects" className={styles.backLink}>
                    Back to projects
                </Link>

                <header className={styles.header}>
                    <p className={styles.kicker}>{project.category}</p>
                    <h1>{project.title}</h1>
                    <p className={styles.summary}>{project.description}</p>
                </header>

                <div className={styles.metaGrid}>
                    <article>
                        <h2>Client</h2>
                        <p>{project.client}</p>
                    </article>

                    <article>
                        <h2>Domain</h2>
                        <p>{project.domain}</p>
                    </article>

                    <article>
                        <h2>Status</h2>
                        <p>{project.status}</p>
                    </article>

                    <article>
                        <h2>Cloud Scope</h2>
                        <p>{project.provider}</p>
                    </article>
                </div>

                <section className={styles.card}>
                    <h2>Technology Stack</h2>
                    <div className={styles.badgeGrid}>
                        {project.technologies.map((technology) => (
                            <span key={technology} className={styles.badge}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </section>

                <section className={styles.card}>
                    <h2>Delivery Highlights</h2>
                    <ul className={styles.impactList}>
                        {project.impact.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.placeholder}>
                    <h2>Project Blueprint Placeholder</h2>
                    <p>
                        This page is prepared for future expansion with architecture
                        diagrams, deployment flow, automation modules, and operational
                        retrospectives.
                    </p>
                </section>
            </motion.section>
        </Page>
    );
}

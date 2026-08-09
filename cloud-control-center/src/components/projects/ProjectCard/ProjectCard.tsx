import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
    title: string;
    provider: string;
    summary: string;
    technologies: readonly string[];
    impact: readonly string[];
};

export default function ProjectCard({
    title,
    provider,
    summary,
    technologies,
    impact,
}: ProjectCardProps) {
    return (
        <article className={styles.card}>
            <span className={styles.provider}>
                {provider}
            </span>

            <h2>{title}</h2>

            <p className={styles.summary}>
                {summary}
            </p>

            <div className={styles.section}>
                <h3>Technologies</h3>

                <div className={styles.techGrid}>
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className={styles.badge}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h3>Business Impact</h3>

                <div className={styles.impact}>
                    {impact.map((item) => (
                        <div
                            key={item}
                            className={styles.impactItem}
                        >
                            <span>✓</span>

                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
import { Link } from "react-router-dom";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
    index: number;
    slug: string;
    title: string;
    client: string;
    domain: string;
    provider: string;
    status: string;
    category: string;
    cloudProviders: readonly ("aws" | "azure" | "gcp")[];
    summary: string;
    technologies: readonly string[];
    impact: readonly string[];
};

const providerLabels: Record<"aws" | "azure" | "gcp", string> = {
    aws: "AWS",
    azure: "Azure",
    gcp: "Google Cloud",
};

export default function ProjectCard({
    index,
    slug,
    title,
    client,
    domain,
    provider,
    status,
    category,
    cloudProviders,
    summary,
    technologies,
    impact,
}: ProjectCardProps) {
    return (
        <article className={styles.card}>
            <Link
                to={`/projects/${slug}`}
                className={styles.cardLink}
                aria-label={`View project details for ${title}`}
            >
                <div className={styles.headerRow}>
                    <span className={styles.provider}>{provider}</span>
                    <span className={styles.index}>#{String(index).padStart(2, "0")}</span>
                </div>

                <h2>{title}</h2>

                <div className={styles.metaRow}>
                    <span className={styles.metaBadge}>{client}</span>
                    <span className={styles.metaBadge}>{domain}</span>
                    <span className={styles.metaBadge}>{status}</span>
                    <span className={styles.metaBadge}>{category}</span>
                </div>

                <p className={styles.summary}>
                    {summary}
                </p>

                <div className={styles.section}>
                    <h3>Cloud Providers</h3>
                    <div className={styles.cloudGrid}>
                        {cloudProviders.map((cloudProvider) => (
                            <span
                                key={cloudProvider}
                                className={`${styles.cloudBadge} ${styles[cloudProvider]}`}
                            >
                                {providerLabels[cloudProvider]}
                            </span>
                        ))}
                    </div>
                </div>

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
                                <span>+</span>

                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <span className={styles.exploreLink}>
                    Explore delivery details
                </span>
            </Link>
        </article>
    );
}
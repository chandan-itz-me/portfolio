import styles from "./ServiceDetails.module.css";

type Props = {
    title: string;

    description: string;

    projects: readonly string[];

    experience: readonly string[];

    level: string;
};

export default function ServiceDetails({
    title,
    description,
    projects,
    experience,
    level,
}: Props) {
    return (
        <aside className={styles.panel}>
            <h2>{title}</h2>

            <p>{description}</p>

            <div className={styles.section}>
                <h3>Projects</h3>

                <ul>
                    {projects.map((project) => (
                        <li key={project}>
                            ✓ {project}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.section}>
                <h3>Hands-on Experience</h3>

                <ul>
                    {experience.map((item) => (
                        <li key={item}>
                            • {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.section}>
                <h3>Experience Level</h3>

                <span className={styles.level}>
                    {level}
                </span>
            </div>
        </aside>
    );
}
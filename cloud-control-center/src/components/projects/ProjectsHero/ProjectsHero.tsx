import styles from "./ProjectsHero.module.css";

export default function ProjectsHero() {
    return (
        <section className={styles.hero}>
            <p className={styles.badge}>
                ENTERPRISE DELIVERY
            </p>

            <h1 className={styles.title}>
                Projects
            </h1>

            <p className={styles.description}>
                Enterprise cloud platforms delivered across AWS and Azure,
                focusing on Infrastructure as Code, CI/CD automation,
                platform engineering, observability, and production
                operations.
            </p>
        </section>
    );
}
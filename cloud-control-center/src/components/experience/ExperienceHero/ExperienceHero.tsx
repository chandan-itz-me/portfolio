import styles from "./ExperienceHero.module.css";

export default function ExperienceHero() {
    return (
        <section className={styles.hero}>
            <p className={styles.badge}>
                CAREER JOURNEY
            </p>

            <h1 className={styles.title}>
                Experience
            </h1>

            <p className={styles.description}>
                A journey through enterprise cloud engineering,
                platform automation, DevOps practices, and
                production operations across AWS, Azure,
                and multi-cloud environments.
            </p>
        </section>
    );
}
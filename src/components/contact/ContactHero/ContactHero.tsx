import styles from "./ContactHero.module.css";

export default function ContactHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.badgeRow}>
                <p className={styles.badge}>GET IN TOUCH</p>

                <span className={styles.status}>
                    <span className={styles.statusDot} aria-hidden="true" />
                    Available for opportunities
                </span>
            </div>

            <h1 className={styles.title}>
                Contact
            </h1>

            <p className={styles.description}>
                Open to DevOps, platform engineering, and cloud
                infrastructure roles. The fastest way to reach me
                is email — I usually reply within a day.
            </p>
        </section>
    );
}

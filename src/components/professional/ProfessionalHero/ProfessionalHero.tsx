import styles from "./ProfessionalHero.module.css";

export default function ProfessionalHero() {
    return (
        <section className={styles.hero}>
            <span className={styles.badge}>
                PROFESSIONAL PROFILE
            </span>

            <h1 className={styles.title}>
                Engineering Capabilities
            </h1>

            <p className={styles.description}>
                A consolidated view of my technical expertise,
                enterprise certifications, and continuous learning
                journey across cloud platforms, automation,
                infrastructure, and platform engineering.
            </p>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.value}>5+</span>
                    <span className={styles.label}>
                        Years Experience
                    </span>
                </div>

                <div className={styles.stat}>
                    <span className={styles.value}>20+</span>
                    <span className={styles.label}>
                        Enterprise Technologies
                    </span>
                </div>

                <div className={styles.stat}>
                    <span className={styles.value}>4</span>
                    <span className={styles.label}>
                        Major Cloud Platforms
                    </span>
                </div>

                <div className={styles.stat}>
                    <span className={styles.value}>75+</span>
                    <span className={styles.label}>
                        Tools &amp; Services
                    </span>
                </div>
            </div>
        </section>
    );
}
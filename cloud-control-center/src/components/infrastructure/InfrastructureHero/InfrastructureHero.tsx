import styles from "./InfrastructureHero.module.css";

export default function InfrastructureHero() {
    return (
        <section className={styles.hero}>
            <p className={styles.badge}>
                PLATFORM CAPABILITIES
            </p>

            <h1 className={styles.title}>
                Infrastructure Explorer
            </h1>

            <p className={styles.description}>
                Explore cloud platforms, services, and technologies used
                across enterprise environments and production workloads.
            </p>
        </section>
    );
}
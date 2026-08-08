import { dashboard } from "@/data/dashboard";

import styles from "./CloudStatus.module.css";

export default function CloudStatus() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                Cloud Providers
            </h2>

            <div className={styles.card}>
                {dashboard.cloudProviders.map(
                    (provider) => (
                        <article
                            key={provider.provider}
                            className={styles.provider}
                        >
                            <div className={styles.left}>
                                <span
                                    className={`${styles.dot} ${
                                        provider.status ===
                                        "Healthy"
                                            ? styles.healthy
                                            : styles.learning
                                    }`}
                                />

                                <div>
                                    <h3>
                                        {
                                            provider.provider
                                        }
                                    </h3>

                                    <p>
                                        {
                                            provider.services
                                        }{" "}
                                        Services
                                    </p>
                                </div>
                            </div>

                            <span
                                className={
                                    styles.status
                                }
                            >
                                {provider.status}
                            </span>
                        </article>
                    )
                )}
            </div>
        </section>
    );
}
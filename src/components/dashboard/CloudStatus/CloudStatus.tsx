import { dashboard } from "@/data/dashboard";

import styles from "./CloudStatus.module.css";

export default function CloudStatus() {
    const { costByProvider } = dashboard.multicloud;

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                Cloud Provider Distribution
            </h2>

            <div className={styles.card}>
                {costByProvider.map((provider) => (
                    <article
                        key={provider.provider}
                        className={styles.provider}
                    >
                        <div className={styles.left}>
                            <div className={styles.providerName}>
                                <h3>{provider.provider}</h3>
                                <p>{provider.percentage}% Resource Allocation</p>
                            </div>
                        </div>

                        <div className={styles.trend}>
                            <span className={styles.trendValue}>
                                {provider.trend}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
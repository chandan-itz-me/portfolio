import { dashboard } from "@/data/dashboard";

import styles from "./InfrastructureHealth.module.css";

export default function InfrastructureHealth() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                Infrastructure Health
            </h2>

            <div className={styles.card}>
                {dashboard.health.map((item) => (
                    <div
                        key={item.name}
                        className={styles.metric}
                    >
                        <div className={styles.top}>
                            <span>{item.name}</span>

                            <span>{item.value}%</span>
                        </div>

                        <div className={styles.progress}>
                            <div
                                className={styles.fill}
                                style={{
                                    width: `${item.value}%`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
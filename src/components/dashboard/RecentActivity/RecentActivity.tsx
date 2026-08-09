import { dashboard } from "@/data/dashboard";

import styles from "./RecentActivity.module.css";

export default function RecentActivity() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                Recent Activity
            </h2>

            <div className={styles.card}>
                {dashboard.activity.map((activity) => (
                    <article
                        key={`${activity.category}-${activity.title}`}
                        className={styles.item}
                    >
                        <div className={styles.category}>
                            {activity.category}
                        </div>

                        <div className={styles.content}>
                            <span className={styles.icon}>
                                ✓
                            </span>

                            <span>
                                {activity.title}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
import MetricCard from "./MetricCard";
import { metrics } from "./metrics";

import styles from "./MetricCard.module.css";

export default function MetricsGrid() {
    return (
        <section className={styles.grid}>
            {metrics.map((metric) => (
                <MetricCard
                    key={metric.label}
                    {...metric}
                />
            ))}
        </section>
    );
}
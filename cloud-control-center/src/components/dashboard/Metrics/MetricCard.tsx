import styles from "./MetricCard.module.css";
import AnimatedCounter from "@/components/ui/AnimatedCounter/AnimatedCounter";

type MetricCardProps = {
    value: number;
    suffix: string;
    label: string;
};

export default function MetricCard({
    value,
    suffix,
    label,
}: MetricCardProps) {
    return (
        <article className={styles.card}>
<h2 className={styles.value}>
    <AnimatedCounter
        end={value}
        suffix={suffix}
        decimals={value % 1 !== 0 ? 1 : 0}
    />
</h2>

            <p>{label}</p>
        </article>
    );
}
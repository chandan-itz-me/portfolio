import styles from "./ChartTooltip.module.css";

interface TooltipProps {
    active?: boolean;
    payload?: Array<{
        name: string;
        value: number | string;
        color: string;
    }>;
    label?: string;
}

export default function ChartTooltip({
    active,
    payload,
    label,
}: TooltipProps) {
    if (!active || !payload || payload.length === 0) {
        return null;
    }

    return (
        <div className={styles.tooltip}>
            {label && <div className={styles.label}>{label}</div>}
            <div className={styles.items}>
                {payload.map((entry, index) => (
                    <div key={index} className={styles.item}>
                        <span
                            className={styles.dot}
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className={styles.name}>{entry.name}:</span>
                        <span
                            className={styles.value}
                            style={{ color: entry.color }}
                        >
                            {entry.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

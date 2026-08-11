import { useEffect, useState } from "react";
import styles from "./LinuxProgressBar.module.css";

type LinuxProgressBarProps = {
    active: boolean;
    label?: string;
};

/**
 * Linux-style terminal progress bar
 * Displays like: [████████░░░░░░░░] 50% - Loading system...
 */
export default function LinuxProgressBar({ active, label = "Loading system" }: LinuxProgressBarProps) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        if (!active) {
            setPercentage(0);
            return;
        }

        const startTime = Date.now();
        const duration = 2500;

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setPercentage(Math.floor(progress * 100));

            if (progress >= 1) {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [active]);

    if (!active) return null;

    // Calculate bar visualization
    const barWidth = 30;
    const filledBlocks = Math.floor((percentage / 100) * barWidth);
    const emptyBlocks = barWidth - filledBlocks;
    const barContent = "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);

    return (
        <div className={styles.progressLine}>
            <span className={styles.bracket}>[</span>
            <span className={styles.bar}>{barContent}</span>
            <span className={styles.bracket}>]</span>
            <span className={styles.percentage}>{String(percentage).padStart(3, " ")}%</span>
            <span className={styles.label}>- {label}...</span>
        </div>
    );
}

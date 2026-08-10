import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "./HudCore.module.css";

type HudCoreProps = {
    loading?: boolean;
};

/**
 * Loading bar animation at the bottom of the terminal.
 * Displays a horizontal progress bar that animates from 0-100%.
 */
export default function HudCore({ loading = false }: HudCoreProps) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        if (!loading) {
            setPercentage(0);
            return;
        }

        // Animate from 0 to 100 over 2.5 seconds
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
    }, [loading]);

    return (
        <div className={styles.loadingBar} aria-hidden="true">
            <motion.div
                className={styles.barFill}
                initial={{ width: "0%" }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.1 }}
            />
            <motion.div
                className={styles.percentage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {String(percentage).padStart(2, "0")}%
            </motion.div>
        </div>
    );
}

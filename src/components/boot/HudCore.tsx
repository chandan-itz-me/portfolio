import { motion } from "framer-motion";

import styles from "./HudCore.module.css";

type HudCoreProps = {
    ready: boolean;
};

const TICKS = Array.from({ length: 36 });

/**
 * Central holographic emblem for the boot sequence — concentric
 * rings drawing themselves in, a rotating radar sweep, and a pulsing
 * glow behind the "CC" mark. Pure SVG + CSS so it stays smooth even
 * on low-power devices; nothing here is driven by rAF.
 */
export default function HudCore({ ready }: HudCoreProps) {
    return (
        <div
            className={`${styles.core} ${ready ? styles.ready : ""}`}
            aria-hidden="true"
        >
            <div className={styles.glow} />

            <div className={styles.sweepClip}>
                <div className={styles.sweep} />
            </div>

            <svg viewBox="0 0 200 200" className={styles.svg}>
                <g className={styles.tickRing}>
                    {TICKS.map((_, index) => (
                        <rect
                            key={index}
                            x="99.25"
                            y="6"
                            width="1.5"
                            height={index % 3 === 0 ? "9" : "4"}
                            fill="var(--color-text-muted)"
                            opacity={index % 3 === 0 ? 0.6 : 0.3}
                            transform={`rotate(${(360 / TICKS.length) * index} 100 100)`}
                        />
                    ))}
                </g>

                <motion.circle
                    cx="100"
                    cy="100"
                    r="88"
                    fill="none"
                    stroke="var(--color-secondary)"
                    strokeWidth="1"
                    strokeDasharray="553"
                    initial={{ strokeDashoffset: 553, opacity: 0 }}
                    animate={{ strokeDashoffset: 0, opacity: 0.55 }}
                    transition={{ duration: 1.3, ease: "easeInOut" }}
                />

                <g className={styles.rotateSlow}>
                    <motion.circle
                        cx="100"
                        cy="100"
                        r="70"
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="1.5"
                        strokeDasharray="7 7"
                        initial={{ strokeDashoffset: 440, opacity: 0 }}
                        animate={{ strokeDashoffset: 0, opacity: 0.85 }}
                        transition={{ duration: 1.1, delay: 0.25, ease: "easeInOut" }}
                    />
                </g>

                <motion.circle
                    cx="100"
                    cy="100"
                    r="46"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1"
                    initial={{ opacity: 0, r: 20 }}
                    animate={{ opacity: 0.35, r: 46 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                />
            </svg>

            <motion.div
                className={styles.mark}
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                CC
            </motion.div>
        </div>
    );
}

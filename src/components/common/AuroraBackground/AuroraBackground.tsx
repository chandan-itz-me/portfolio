import styles from "./AuroraBackground.module.css";

/**
 * Fixed, decorative ambient backdrop — aurora glow + a faint
 * infrastructure-style grid. Mounted once in MainLayout so every
 * page shares the same atmosphere without each section having to
 * reimplement it. Purely visual: aria-hidden and pointer-events: none.
 */
export default function AuroraBackground() {
    return (
        <div
            className={styles.wrapper}
            aria-hidden="true"
        >
            <div className={styles.grid} />

            <div className={`${styles.blob} ${styles.blobOne}`} />

            <div className={`${styles.blob} ${styles.blobTwo}`} />

            <div className={styles.vignette} />
        </div>
    );
}

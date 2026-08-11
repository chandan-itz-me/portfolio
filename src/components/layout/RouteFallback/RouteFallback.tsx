import styles from "./RouteFallback.module.css";

// Shown briefly while a lazy-loaded route chunk downloads. Kept tiny
// and dependency-free (no framer-motion) since it needs to render
// before any of the heavier per-page bundles have arrived.
export default function RouteFallback() {
    return (
        <div className={styles.wrapper} role="status" aria-label="Loading page">
            <span className={styles.ring} />
            <p className={styles.message}>Loading cloud blueprint...</p>
        </div>
    );
}

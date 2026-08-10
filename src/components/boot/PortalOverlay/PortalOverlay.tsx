import styles from "./PortalOverlay.module.css";

/**
 * Empty overlay — used only for background effects in terminal boot.
 */
export default function PortalOverlay() {
    return <div className={styles.overlay} aria-hidden="true" />;
}

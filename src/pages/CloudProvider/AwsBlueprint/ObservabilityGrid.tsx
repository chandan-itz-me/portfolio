import styles from "./AwsBlueprintPage.module.css";

export default function ObservabilityGrid() {
    return (
        <>
            <div className={`${styles.grid} ${styles.grid3}`}>
                <div className={styles.card}><span className={styles.tag}>Metrics</span><h3>Infrastructure &amp; service health</h3><p>CPU, memory, storage, latency, throughput, error rates, and connection counts across every layer.</p></div>
                <div className={styles.card}><span className={styles.tag}>Logs</span><h3>Centralized &amp; structured</h3><p>Application and infrastructure logs aggregated for troubleshooting and investigation.</p></div>
                <div className={styles.card}><span className={styles.tag}>Traces</span><h3>Distributed requests</h3><p>Trace requests across services to isolate latency and dependency issues.</p></div>
            </div>

            <div className={styles.signalRow}>
                <span className={styles.signal}>Latency</span>
                <span className={styles.signal}>Traffic</span>
                <span className={styles.signal}>Errors</span>
                <span className={styles.signal}>Saturation</span>
            </div>
        </>
    );
}

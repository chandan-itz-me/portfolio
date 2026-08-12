import styles from "./GcpBlueprintPage.module.css";

export default function ObservabilityGrid() {
    return (
        <>
            <div className={`${styles.grid} ${styles.grid3}`}>
                <div className={styles.card}><span className={styles.tag}>Metrics</span><h3>Cloud Monitoring dashboards</h3><p>CPU, memory, storage, latency, throughput, and error-rate telemetry across every layer.</p></div>
                <div className={styles.card}><span className={styles.tag}>Logs</span><h3>Cloud Logging workspace</h3><p>Centralized application and infrastructure logs for troubleshooting, compliance, and investigations.</p></div>
                <div className={styles.card}><span className={styles.tag}>Traces</span><h3>Cloud Trace and Profiler</h3><p>Distributed transaction traces across services to isolate latency and dependency bottlenecks.</p></div>
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



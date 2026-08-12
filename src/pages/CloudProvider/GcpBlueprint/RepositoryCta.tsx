import styles from "./GcpBlueprintPage.module.css";

export default function RepositoryCta() {
    return (
        <div className={styles.ctaPanel}>
            <div>
                <div className={styles.eyebrow}>GCP IaC Repository</div>
                <h2>Explore the GCP Implementation</h2>
                <p>github.com/chandan-itz-me/gcp-iac</p>
            </div>
            <a href="https://github.com/chandan-itz-me/gcp-iac" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
                View Repository ↗
            </a>
        </div>
    );
}




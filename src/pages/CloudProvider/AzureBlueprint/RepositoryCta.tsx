import styles from "./AzureBlueprintPage.module.css";

export default function RepositoryCta() {
    return (
        <div className={styles.ctaPanel}>
            <div>
                <div className={styles.eyebrow}>Azure IaC Repository</div>
                <h2>Explore the Azure Implementation</h2>
                <p>github.com/chandan-itz-me/azure-iac</p>
            </div>
            <a href="https://github.com/chandan-itz-me/azure-iac" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
                View Repository ↗
            </a>
        </div>
    );
}


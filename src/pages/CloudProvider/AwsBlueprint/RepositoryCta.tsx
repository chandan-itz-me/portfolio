import styles from "./AwsBlueprintPage.module.css";

export default function RepositoryCta() {
    return (
        <div className={styles.ctaPanel}>
            <div>
                <div className={styles.eyebrow}>AWS IaC Repository</div>
                <h2>Explore the Terraform Implementation</h2>
                <p>github.com/chandan-itz-me/aws-iac</p>
            </div>
            <a href="https://github.com/chandan-itz-me/aws-iac" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
                View Repository ↗
            </a>
        </div>
    );
}

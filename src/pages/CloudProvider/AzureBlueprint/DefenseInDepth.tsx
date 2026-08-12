import styles from "./AzureBlueprintPage.module.css";

export default function DefenseInDepth() {
    return (
        <div className={styles.defense}>
            <div className={`${styles.ring} ${styles.watch}`}>
                <div className={styles.rk}>◎ Detection &amp; Governance - Azure Monitor · Defender for Cloud · Microsoft Sentinel · Azure Policy</div>
            </div>
            <div className={styles.ring}><div className={styles.rk}>Outer - Edge</div><h3>Front Door WAF · DDoS Protection · Application Gateway</h3><p>Protects internet-facing workloads and controls application ingress.</p></div>
            <div className={styles.ringRow1}><div className={styles.rk}>Network</div><h3>Private Subnets · NSGs · UDRs</h3><p>Reduces exposure and defines explicit communication boundaries.</p></div>
            <div className={styles.ringRow2}><div className={styles.rk}>Identity</div><h3>Microsoft Entra ID · Managed Identity · Least Privilege RBAC</h3><p>Limits access according to workload and operational need.</p></div>
            <div className={styles.ringRow3}><div className={styles.rk}>Inner - Data</div><h3>Key Vault · CMK Encryption · Secret Rotation</h3><p>Protects sensitive data and credentials through their lifecycle.</p></div>
        </div>
    );
}


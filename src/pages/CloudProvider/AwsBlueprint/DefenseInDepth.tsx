import styles from "./AwsBlueprintPage.module.css";

export default function DefenseInDepth() {
    return (
        <div className={styles.defense}>
            <div className={`${styles.ring} ${styles.watch}`}>
                <div className={styles.rk}>◎ Detection &amp; Governance - CloudTrail · GuardDuty · Security Hub · Config</div>
            </div>
            <div className={styles.ring}><div className={styles.rk}>Outer - Edge</div><h3>WAF · Shield · CloudFront</h3><p>Protects internet-facing workloads and controls application ingress.</p></div>
            <div className={styles.ringRow1}><div className={styles.rk}>Network</div><h3>Private Subnets · Security Groups · NACLs</h3><p>Reduces exposure and defines explicit communication boundaries.</p></div>
            <div className={styles.ringRow2}><div className={styles.rk}>Identity</div><h3>IAM Roles · Federation · Least Privilege</h3><p>Limits access according to workload and operational need.</p></div>
            <div className={styles.ringRow3}><div className={styles.rk}>Inner - Data</div><h3>KMS · Encryption · Secrets Manager</h3><p>Protects sensitive data and credentials through their lifecycle.</p></div>
        </div>
    );
}

import styles from "./GcpBlueprintPage.module.css";

export default function DefenseInDepth() {
    return (
        <div className={styles.defense}>
            <div className={`${styles.ring} ${styles.watch}`}>
                <div className={styles.rk}>◎ Detection &amp; Governance - Cloud Monitoring · Security Command Center · Chronicle · Organization Policy</div>
            </div>
            <div className={styles.ring}><div className={styles.rk}>Outer - Edge</div><h3>Cloud Armor WAF · Cloud CDN · Global HTTPS Load Balancer</h3><p>Protects internet-facing workloads and controls application ingress.</p></div>
            <div className={styles.ringRow1}><div className={styles.rk}>Network</div><h3>Private Subnets · VPC Firewall Rules · Cloud NAT</h3><p>Reduces exposure and defines explicit communication boundaries.</p></div>
            <div className={styles.ringRow2}><div className={styles.rk}>Identity</div><h3>Cloud IAM · Workload Identity · Least Privilege RBAC</h3><p>Limits access according to workload and operational need.</p></div>
            <div className={styles.ringRow3}><div className={styles.rk}>Inner - Data</div><h3>Cloud KMS · CMEK Encryption · Secret Manager Rotation</h3><p>Protects sensitive data and credentials through their lifecycle.</p></div>
        </div>
    );
}




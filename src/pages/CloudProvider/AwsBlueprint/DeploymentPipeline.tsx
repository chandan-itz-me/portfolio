import styles from "./AwsBlueprintPage.module.css";

export default function DeploymentPipeline() {
    return (
        <>
            <div className={styles.pipeline}>
                <div className={styles.plNode}><h4>SOURCE</h4><ul><li>Feature branch</li><li>Pull request</li></ul></div>
                <div className={styles.plArrow}>→</div>
                <div className={styles.plNode}><h4>VALIDATE</h4><ul><li>Tests</li><li>Static analysis</li><li>Dependency checks</li></ul></div>
                <div className={styles.plArrow}>→</div>
                <div className={styles.plNode}><h4>BUILD</h4><ul><li>Versioned artifact</li></ul></div>
                <div className={styles.plArrow}>→</div>
                <div className={styles.plNode}><h4>INFRASTRUCTURE</h4><ul><li>Terraform plan</li><li>Policy checks</li><li>Approval</li></ul></div>
                <div className={styles.plArrow}>→</div>
                <div className={styles.plNode}><h4>DEPLOY</h4><ul><li>Development</li><li>Test</li><li>Production</li></ul></div>
                <div className={styles.plArrow}>→</div>
                <div className={styles.plNode}><h4>VERIFY</h4><ul><li>Health checks</li><li>Monitoring</li></ul></div>
            </div>

            <div className={styles.strategyRow}>
                <span className={styles.signal}>Rolling</span>
                <span className={styles.signal}>Blue / Green</span>
                <span className={styles.signal}>Canary</span>
                <span className={styles.signal}>Progressive Delivery</span>
            </div>
        </>
    );
}

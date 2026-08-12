import styles from "./AzureBlueprintPage.module.css";

export default function TerraformWorkflow() {
    return (
        <div className={styles.split}>
            <div>
                <div className={styles.codeBlock}>
                    <span className={styles.dir}>azure-iac/</span>
                    <br />
                    |- <span className={styles.dir}>modules/</span>
                    <br />
                    |  |- <span className={styles.mod}>networking/</span>
                    <br />
                    |  |- <span className={styles.mod}>security/</span>
                    <br />
                    |  |- <span className={styles.mod}>compute/</span>
                    <br />
                    |  |- <span className={styles.mod}>ingress/</span>
                    <br />
                    |  |- <span className={styles.mod}>storage/</span>
                    <br />
                    |  |- <span className={styles.mod}>database/</span>
                    <br />
                    |  '- <span className={styles.mod}>monitoring/</span>
                    <br />
                    |
                    <br />
                    |- <span className={styles.dir}>environments/</span>
                    <br />
                    |  |- <span className={styles.mod}>dev/</span>
                    <br />
                    |  |- <span className={styles.mod}>test/</span>
                    <br />
                    |  '- <span className={styles.mod}>prod/</span>
                    <br />
                    |
                    <br />
                    |- <span className={styles.dir}>policies/</span>
                    <br />
                    |  '- <span className={styles.mod}>azure-policy/</span>
                    <br />
                    |
                    <br />
                    '- README.md
                </div>
                <p className={styles.codeNote}>Repository structure evolves as the module library expands.</p>
            </div>

            <div className={styles.stepper}>
                <div className={styles.step}><div className={styles.stepNum}>01</div><div className={styles.stepBody}><h3>Author</h3><p>Create a feature branch and implement module or environment changes.</p></div></div>
                <div className={styles.step}><div className={styles.stepNum}>02</div><div className={styles.stepBody}><h3>Validate</h3><p>Run formatting, validation, linting, and policy checks.</p><code>terraform fmt · terraform validate · tflint · az policy state list</code></div></div>
                <div className={styles.step}><div className={styles.stepNum}>03</div><div className={styles.stepBody}><h3>Plan</h3><p>Generate an execution plan to make infrastructure changes visible before deployment.</p></div></div>
                <div className={styles.step}><div className={styles.stepNum}>04</div><div className={styles.stepBody}><h3>Review</h3><p>Review proposed changes through pull requests and environment-specific approvals.</p></div></div>
                <div className={styles.step}><div className={styles.stepNum}>05</div><div className={styles.stepBody}><h3>Deploy</h3><p>Apply approved changes using controlled execution and protected state backends.</p></div></div>
                <div className={styles.step}><div className={styles.stepNum}>06</div><div className={styles.stepBody}><h3>Verify</h3><p>Validate resource health, connectivity, and monitoring signals post-deploy.</p></div></div>
            </div>
        </div>
    );
}


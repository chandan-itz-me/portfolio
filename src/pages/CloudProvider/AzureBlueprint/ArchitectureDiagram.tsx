import { useState } from "react";

import { architectureNodeRows, nodeSpecs } from "./nodeSpecs";

import styles from "./AzureBlueprintPage.module.css";

export default function ArchitectureDiagram() {
    const [activeNodeId, setActiveNodeId] = useState<keyof typeof nodeSpecs | null>(null);
    const activeSpec = activeNodeId ? nodeSpecs[activeNodeId] : null;

    return (
        <div className={styles.diagramWrap}>
            <div className={`${styles.blueprintPanel} ${styles.regFrame}`}>
                <span className={styles.rfTr} />
                <span className={styles.rfBl} />

                <div className={styles.figLabel}>SYS / 3-TIER-REF · v1</div>

                <div className={styles.railLayout}>
                    <div className={styles.rail}>
                        <div className={styles.railItem}>IDENTITY &amp; ACCESS - SPANS ALL TIERS</div>
                        <div className={`${styles.railItem} ${styles.ops}`}>OPERATIONS - SPANS ALL TIERS</div>
                    </div>

                    <div className={styles.tiers}>
                        <div className={styles.tier}>
                            <div className={styles.tierLabel}><b>01 - Edge &amp; Presentation</b> · DNS, Front Door, WAF, Ingress</div>
                            <div className={styles.nodeRow}>
                                {architectureNodeRows.edge.map((node) => (
                                    <button
                                        key={node.id}
                                        type="button"
                                        className={`${styles.node} ${activeNodeId === node.id ? styles.nodeActive : ""}`}
                                        onClick={() => setActiveNodeId(node.id)}
                                    >
                                        {node.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.connector} aria-hidden="true">
                            <div className={styles.connectorLine} />
                            <div className={styles.packet} />
                            <div className={styles.packet} />
                            <div className={styles.packet} />
                        </div>

                        <div className={styles.tier}>
                            <div className={styles.tierLabel}><b>02 - Application</b> · AKS workloads, services &amp; workers</div>
                            <div className={styles.nodeRow}>
                                {architectureNodeRows.app.map((node) => (
                                    <button
                                        key={node.id}
                                        type="button"
                                        className={`${styles.node} ${activeNodeId === node.id ? styles.nodeActive : ""}`}
                                        onClick={() => setActiveNodeId(node.id)}
                                    >
                                        {node.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.connector} aria-hidden="true">
                            <div className={styles.connectorLine} />
                            <div className={styles.packet} />
                            <div className={styles.packet} />
                            <div className={styles.packet} />
                        </div>

                        <div className={styles.tier}>
                            <div className={styles.tierLabel}><b>03 - Data</b> · Relational, cache, object storage</div>
                            <div className={styles.nodeRow}>
                                {architectureNodeRows.data.map((node) => (
                                    <button
                                        key={node.id}
                                        type="button"
                                        className={`${styles.node} ${activeNodeId === node.id ? styles.nodeActive : ""}`}
                                        onClick={() => setActiveNodeId(node.id)}
                                    >
                                        {node.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <aside className={styles.specPanel} aria-live="polite">
                <div className={styles.specKicker}>Component Inspector</div>
                <div className={styles.specTitle}>{activeSpec?.title ?? "Select a component"}</div>
                <div className={styles.specDesc}>
                    {activeSpec?.description ?? "Click any node in the diagram to see its role in the request path, from edge ingress down to persistent storage."}
                </div>
            </aside>
        </div>
    );
}


import { useState } from "react";

import { nodeSpecs } from "./nodeSpecs";

import styles from "./GcpBlueprintPage.module.css";

export default function NetworkTopologyDiagram() {
    const [activeNodeId, setActiveNodeId] = useState<keyof typeof nodeSpecs | null>(null);
    const activeSpec = activeNodeId ? nodeSpecs[activeNodeId] : null;

    return (
        <div className={styles.diagramWrap}>
            <div className={styles.topologyWrap}>
                <div className={styles.topoFlowTop}>
                    <div className={styles.topoIconLabel}>User</div>
                    <div className={styles.topoConnectorV} />
                    <button
                        type="button"
                        className={`${styles.node} ${activeNodeId === "publicip" ? styles.nodeActive : ""}`}
                        onClick={() => setActiveNodeId("publicip")}
                    >
                        Global LB + Cloud CDN
                    </button>
                </div>

                <div className={styles.vpcBox}>
                    <span className={styles.vpcTag}>VPC · 10.40.0.0/16</span>
                    <span className={styles.regionTag}>Region · us-central1</span>

                    <div className={styles.tierBand}>
                        <div className={styles.tierHead}>
                            <span className={styles.tt}>01 - Web Tier · Public Subnets</span>
                            <span className={styles.rtb}>public-route</span>
                        </div>
                        <div className={styles.tierShared}>
                            <button
                                type="button"
                                className={`${styles.node} ${activeNodeId === "appgwweb" ? styles.nodeActive : ""}`}
                                onClick={() => setActiveNodeId("appgwweb")}
                            >
                                Global HTTPS Load Balancer
                            </button>
                        </div>
                        <div className={styles.subnetGrid}>
                            <div className={`${styles.subnetCell} ${styles.web}`}>
                                <span className={styles.cidrTag}>10.40.0.0/20 · Zone A</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "vmssweb" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("vmssweb")}
                                >
                                    MIG / GKE Nodes
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "natgw" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("natgw")}
                                >
                                    NAT Gateway
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "bastion" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("bastion")}
                                >
                                    IAP Bastion
                                </button>
                            </div>

                            <div className={`${styles.subnetCell} ${styles.web}`}>
                                <span className={styles.cidrTag}>10.40.16.0/20 · Zone B</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "vmssweb" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("vmssweb")}
                                >
                                    MIG / GKE Nodes
                                </button>
                            </div>
                        </div>
                        <div className={styles.miniNote}><b>web-firewall</b> - accepts inbound only from Cloud CDN and Global HTTPS Load Balancer on approved app ports.</div>
                    </div>

                    <div className={`${styles.connector} ${styles.centered}`} aria-hidden="true">
                        <div className={styles.connectorLine} />
                        <div className={styles.packet} />
                        <div className={styles.packet} />
                        <div className={styles.packet} />
                    </div>

                    <div className={styles.tierBand}>
                        <div className={styles.tierHead}>
                            <span className={styles.tt}>02 - Application Tier · Private Subnets</span>
                            <span className={styles.rtb}>private-route</span>
                        </div>
                        <div className={styles.tierShared}>
                            <button
                                type="button"
                                className={`${styles.node} ${activeNodeId === "ilbapp" ? styles.nodeActive : ""}`}
                                onClick={() => setActiveNodeId("ilbapp")}
                            >
                                Internal Load Balancer
                            </button>
                        </div>
                        <div className={styles.subnetGrid}>
                            <div className={styles.subnetCell}>
                                <span className={styles.cidrTag}>10.40.128.0/20 · Zone A</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "aksapp" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("aksapp")}
                                >
                                    GKE / Cloud Run
                                </button>
                            </div>
                            <div className={styles.subnetCell}>
                                <span className={styles.cidrTag}>10.40.144.0/20 · Zone B</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "aksapp" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("aksapp")}
                                >
                                    GKE / Cloud Run
                                </button>
                            </div>
                        </div>
                        <div className={styles.miniNote}><b>app-firewall</b> - accepts inbound only from the internal load balancer and IAP Bastion.</div>
                    </div>

                    <div className={`${styles.connector} ${styles.centered}`} aria-hidden="true">
                        <div className={styles.connectorLine} />
                        <div className={styles.packet} />
                        <div className={styles.packet} />
                        <div className={styles.packet} />
                    </div>

                    <div className={styles.tierBand}>
                        <div className={styles.tierHead}>
                            <span className={styles.tt}>03 - Database Tier · Isolated Subnets</span>
                            <span className={styles.rtb}>no internet route</span>
                        </div>
                        <div className={styles.subnetGrid}>
                            <div className={`${styles.subnetCell} ${styles.db}`}>
                                <span className={styles.cidrTag}>10.40.160.0/20 · Zone A</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "sqlprimary" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("sqlprimary")}
                                >
                                    Cloud SQL (Primary)
                                </button>
                            </div>
                            <div className={`${styles.subnetCell} ${styles.db}`}>
                                <span className={styles.cidrTag}>10.40.176.0/20 · Zone B</span>
                                <span className={styles.staticNode}>Cloud SQL (Regional Standby)</span>
                            </div>
                        </div>
                        <div className={styles.miniNote}><b>data-firewall</b> - accepts inbound only from the app tier. No direct internet route is permitted.</div>
                    </div>
                </div>
            </div>

            <aside className={styles.specPanel} aria-live="polite">
                <div className={styles.specKicker}>Component Inspector</div>
                <div className={styles.specTitle}>{activeSpec?.title ?? "Select a component"}</div>
                <div className={styles.specDesc}>
                    {activeSpec?.description ?? "Click any node to see how it fits into the network path - from global ingress down to isolated data subnets."}
                </div>
            </aside>
        </div>
    );
}




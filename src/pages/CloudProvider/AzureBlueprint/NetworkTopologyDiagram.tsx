import { useState } from "react";

import { nodeSpecs } from "./nodeSpecs";

import styles from "./AzureBlueprintPage.module.css";

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
                        Public IP + Front Door
                    </button>
                </div>

                <div className={styles.vpcBox}>
                    <span className={styles.vpcTag}>VNet · 10.40.0.0/16</span>
                    <span className={styles.regionTag}>Region · East US</span>

                    <div className={styles.tierBand}>
                        <div className={styles.tierHead}>
                            <span className={styles.tt}>01 - Web Tier · Public Subnets</span>
                            <span className={styles.rtb}>public-udr</span>
                        </div>
                        <div className={styles.tierShared}>
                            <button
                                type="button"
                                className={`${styles.node} ${activeNodeId === "appgwweb" ? styles.nodeActive : ""}`}
                                onClick={() => setActiveNodeId("appgwweb")}
                            >
                                Application Gateway
                            </button>
                        </div>
                        <div className={styles.subnetGrid}>
                            <div className={`${styles.subnetCell} ${styles.web}`}>
                                <span className={styles.cidrTag}>10.40.0.0/20 · AZ 1</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "vmssweb" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("vmssweb")}
                                >
                                    VMSS / AKS Nodes
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
                                    Azure Bastion
                                </button>
                            </div>

                            <div className={`${styles.subnetCell} ${styles.web}`}>
                                <span className={styles.cidrTag}>10.40.16.0/20 · AZ 2</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "vmssweb" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("vmssweb")}
                                >
                                    VMSS / AKS Nodes
                                </button>
                            </div>
                        </div>
                        <div className={styles.miniNote}><b>web-nsg</b> - accepts inbound only from Front Door and Application Gateway on approved app ports.</div>
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
                            <span className={styles.rtb}>private-udr</span>
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
                                <span className={styles.cidrTag}>10.40.128.0/20 · AZ 1</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "aksapp" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("aksapp")}
                                >
                                    AKS / App Services
                                </button>
                            </div>
                            <div className={styles.subnetCell}>
                                <span className={styles.cidrTag}>10.40.144.0/20 · AZ 2</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "aksapp" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("aksapp")}
                                >
                                    AKS / App Services
                                </button>
                            </div>
                        </div>
                        <div className={styles.miniNote}><b>app-nsg</b> - accepts inbound only from the internal load balancer and Azure Bastion.</div>
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
                                <span className={styles.cidrTag}>10.40.160.0/20 · AZ 1</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "sqlprimary" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("sqlprimary")}
                                >
                                    Azure SQL (Primary)
                                </button>
                            </div>
                            <div className={`${styles.subnetCell} ${styles.db}`}>
                                <span className={styles.cidrTag}>10.40.176.0/20 · AZ 2</span>
                                <span className={styles.staticNode}>Azure SQL (Zone Standby)</span>
                            </div>
                        </div>
                        <div className={styles.miniNote}><b>data-nsg</b> - accepts inbound only from the app tier. No direct internet route is permitted.</div>
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


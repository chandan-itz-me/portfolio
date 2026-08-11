import { useState } from "react";

import { nodeSpecs } from "./nodeSpecs";

import styles from "./AwsBlueprintPage.module.css";

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
                        className={`${styles.node} ${activeNodeId === "igw" ? styles.nodeActive : ""}`}
                        onClick={() => setActiveNodeId("igw")}
                    >
                        Internet Gateway
                    </button>
                </div>

                <div className={styles.vpcBox}>
                    <span className={styles.vpcTag}>VPC · 10.0.0.0/16</span>
                    <span className={styles.regionTag}>Region · us-east-1</span>

                    <div className={styles.tierBand}>
                        <div className={styles.tierHead}>
                            <span className={styles.tt}>01 - Web Tier · Public Subnets</span>
                            <span className={styles.rtb}>public-rtb</span>
                        </div>
                        <div className={styles.tierShared}>
                            <button
                                type="button"
                                className={`${styles.node} ${activeNodeId === "albweb" ? styles.nodeActive : ""}`}
                                onClick={() => setActiveNodeId("albweb")}
                            >
                                Application Load Balancer
                            </button>
                        </div>
                        <div className={styles.subnetGrid}>
                            <div className={`${styles.subnetCell} ${styles.web}`}>
                                <span className={styles.cidrTag}>10.0.0.0/20 · AZ us-east-1a</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "ec2web" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("ec2web")}
                                >
                                    EC2 (ASG)
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
                                    Bastion Host
                                </button>
                            </div>

                            <div className={`${styles.subnetCell} ${styles.web}`}>
                                <span className={styles.cidrTag}>10.0.16.0/20 · AZ us-east-1b</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "ec2web" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("ec2web")}
                                >
                                    EC2 (ASG)
                                </button>
                            </div>
                        </div>
                        <div className={styles.miniNote}><b>webserver-sg</b> - accepts inbound only from the public ALB, on the app port.</div>
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
                            <span className={styles.rtb}>private-rtb</span>
                        </div>
                        <div className={styles.tierShared}>
                            <button
                                type="button"
                                className={`${styles.node} ${activeNodeId === "alballapp" ? styles.nodeActive : ""}`}
                                onClick={() => setActiveNodeId("alballapp")}
                            >
                                Internal Load Balancer
                            </button>
                        </div>
                        <div className={styles.subnetGrid}>
                            <div className={styles.subnetCell}>
                                <span className={styles.cidrTag}>10.0.128.0/20 · AZ us-east-1a</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "ec2app" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("ec2app")}
                                >
                                    EC2 (ASG)
                                </button>
                            </div>
                            <div className={styles.subnetCell}>
                                <span className={styles.cidrTag}>10.0.144.0/20 · AZ us-east-1b</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "ec2app" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("ec2app")}
                                >
                                    EC2 (ASG)
                                </button>
                            </div>
                        </div>
                        <div className={styles.miniNote}><b>appserver-sg</b> - accepts inbound only from the internal ALB and the bastion host.</div>
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
                                <span className={styles.cidrTag}>10.0.160.0/20 · AZ us-east-1a</span>
                                <button
                                    type="button"
                                    className={`${styles.node} ${styles.small} ${activeNodeId === "rds" ? styles.nodeActive : ""}`}
                                    onClick={() => setActiveNodeId("rds")}
                                >
                                    RDS (Primary)
                                </button>
                            </div>
                            <div className={`${styles.subnetCell} ${styles.db}`}>
                                <span className={styles.cidrTag}>10.0.176.0/20 · AZ us-east-1b</span>
                                <span className={styles.staticNode}>RDS (Multi-AZ Standby)</span>
                            </div>
                        </div>
                        <div className={styles.miniNote}><b>database-sg</b> - accepts inbound only from the app tier. No route to the NAT Gateway or Internet Gateway at all.</div>
                    </div>
                </div>
            </div>

            <aside className={styles.specPanel} aria-live="polite">
                <div className={styles.specKicker}>Component Inspector</div>
                <div className={styles.specTitle}>{activeSpec?.title ?? "Select a component"}</div>
                <div className={styles.specDesc}>
                    {activeSpec?.description ?? "Click any node to see how it fits into the network path - from the internet gateway down to the isolated database subnets."}
                </div>
            </aside>
        </div>
    );
}

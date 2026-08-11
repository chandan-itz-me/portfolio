import { useLayoutEffect, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";

import Page from "@/components/layout/Page";

import ArchitectureDecisions from "./ArchitectureDecisions";
import ArchitectureDiagram from "./ArchitectureDiagram";
import DefenseInDepth from "./DefenseInDepth";
import DeploymentPipeline from "./DeploymentPipeline";
import NetworkTopologyDiagram from "./NetworkTopologyDiagram";
import ObservabilityGrid from "./ObservabilityGrid";
import RepositoryCta from "./RepositoryCta";
import SystemNav from "./SystemNav";
import TerraformWorkflow from "./TerraformWorkflow";
import { sectionIds } from "./nodeSpecs";
import { useActiveSection } from "./useActiveSection";
import { useInView } from "./useInView";

import styles from "./AwsBlueprintPage.module.css";

function RevealBlock({
    children,
}: {
    children: ReactNode;
}) {
    const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.12, once: true });

    return (
        <div ref={ref} className={`${styles.reveal} ${isInView ? styles.in : ""}`}>
            {children}
        </div>
    );
}

export default function AwsBlueprintPage() {
    const activeSection = useActiveSection(sectionIds, 0.4);

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <Page fluid>
            <Helmet>
                <title>AWS Infrastructure Blueprint | Chandan Padal</title>
                <meta
                    name="description"
                    content="AWS Infrastructure Blueprint: three-tier architecture, VPC topology, Terraform workflow, deployment pipeline, defense in depth, and observability patterns."
                />
            </Helmet>

            <div className={styles.page}>
                <div className={styles.gridBg} aria-hidden="true" />
                <SystemNav activeSection={activeSection} sections={sectionIds} />

                <header className={styles.hero} id="overview">
                    <div className={styles.container}>
                        <div className={styles.heroTag}>AWS · REFERENCE ARCHITECTURE</div>
                        <h1>AWS Infrastructure<br />Blueprint</h1>
                        <p className={styles.lede}>A reference architecture for secure, resilient, and observable workloads on AWS - built around Infrastructure as Code, modular design, controlled deployments, and operational visibility.</p>
                        <div className={styles.heroStack}>
                            <span className={styles.chip}>Terraform</span>
                            <span className={styles.chip}>Networking</span>
                            <span className={styles.chip}>Compute</span>
                            <span className={styles.chip}>Security</span>
                            <span className={styles.chip}>CI / CD</span>
                            <span className={styles.chip}>Observability</span>
                        </div>
                        <div className={styles.heroCta}>
                            <a href="#architecture" className={`${styles.btn} ${styles.btnPrimary}`}>Explore Architecture →</a>
                            <a href="#repository" className={`${styles.btn} ${styles.btnGhost}`}>View IaC Repository</a>
                        </div>
                        <div className={styles.heroReadout}>
                            <div><div className={styles.k}>Tiers</div><div className={styles.v}>Edge / App / Data</div></div>
                            <div><div className={styles.k}>IaC Engine</div><div className={styles.v}>Terraform</div></div>
                            <div><div className={styles.k}>Delivery</div><div className={styles.v}>Plan → Review → Apply</div></div>
                            <div><div className={styles.k}>Scope</div><div className={styles.v}>Multi-environment</div></div>
                        </div>
                    </div>
                </header>

                <section className={styles.section} id="architecture">
                    <div className={styles.container}>
                        <RevealBlock>
                            <div className={styles.sectionHead}>
                                <div className={styles.eyebrow}>Fig. 01 - Reference Platform</div>
                                <h2>Architecture Overview</h2>
                                <p>A resilient three-tier architecture that separates responsibilities, isolates failure domains, and lets each layer scale independently. Identity and operations cut across every tier. Select a component to inspect it.</p>
                            </div>
                        </RevealBlock>
                        <RevealBlock>
                            <ArchitectureDiagram />
                        </RevealBlock>
                    </div>
                </section>

                <section className={styles.sectionTopless} id="topology">
                    <div className={styles.container}>
                        <RevealBlock>
                            <div className={styles.sectionHead}>
                                <div className={styles.eyebrow}>Fig. 01b - VPC Network Topology</div>
                                <h2>Multi-AZ Network Layout</h2>
                                <p>The same three tiers, drawn at the network level: subnets, CIDR blocks, route tables, and security-group chaining across two Availability Zones. Select a component to inspect it.</p>
                            </div>
                        </RevealBlock>
                        <RevealBlock>
                            <NetworkTopologyDiagram />
                        </RevealBlock>
                    </div>
                </section>

                <section className={styles.section} id="iac">
                    <div className={styles.container}>
                        <RevealBlock>
                            <div className={styles.sectionHead}>
                                <div className={styles.eyebrow}>Fig. 02 - Infrastructure as Code</div>
                                <h2>Terraform-Driven Infrastructure</h2>
                                <p>Infrastructure is defined as version-controlled code rather than manual cloud configuration - repeatable, reviewable, and free of drift.</p>
                            </div>
                        </RevealBlock>
                        <RevealBlock>
                            <TerraformWorkflow />
                        </RevealBlock>
                    </div>
                </section>

                <section className={styles.section} id="pipeline">
                    <div className={styles.container}>
                        <RevealBlock>
                            <div className={styles.sectionHead}>
                                <div className={styles.eyebrow}>Fig. 03 - Delivery Lifecycle</div>
                                <h2>Deployment Pipeline</h2>
                                <p>Application and infrastructure delivery are separated into controlled stages, each with a clear validation point before the next begins.</p>
                            </div>
                        </RevealBlock>
                        <RevealBlock>
                            <DeploymentPipeline />
                        </RevealBlock>
                    </div>
                </section>

                <section className={styles.section} id="security">
                    <div className={styles.container}>
                        <RevealBlock>
                            <div className={styles.sectionHead}>
                                <div className={styles.eyebrow}>Fig. 04 - Defense in Depth</div>
                                <h2>Security by Design</h2>
                                <p>Controls are layered across the infrastructure lifecycle, not added after deployment. Detection and governance watch every ring.</p>
                            </div>
                        </RevealBlock>
                        <RevealBlock>
                            <DefenseInDepth />
                        </RevealBlock>
                    </div>
                </section>

                <section className={styles.section} id="observability">
                    <div className={styles.container}>
                        <RevealBlock>
                            <div className={styles.sectionHead}>
                                <div className={styles.eyebrow}>Fig. 05 - Measure What You Operate</div>
                                <h2>Observability</h2>
                                <p>Infrastructure telemetry and application behavior, connected - so systems stay measurable, diagnosable, and operationally manageable.</p>
                            </div>
                        </RevealBlock>
                        <RevealBlock>
                            <ObservabilityGrid />
                        </RevealBlock>
                    </div>
                </section>

                <section className={styles.section} id="production">
                    <div className={styles.container}>
                        <RevealBlock>
                            <div className={styles.sectionHead}>
                                <div className={styles.eyebrow}>Fig. 06 - Operating the Platform</div>
                                <h2>AWS in Production</h2>
                                <p>Platform engineering extends beyond provisioning - reliable operations require resilient architecture, controlled delivery, and continuous improvement.</p>
                            </div>
                        </RevealBlock>
                        <RevealBlock>
                            <div className={`${styles.grid} ${styles.grid5}`}>
                                <div className={styles.card}><h3>Resilience</h3><p>Distribute critical workloads across Availability Zones.</p></div>
                                <div className={styles.card}><h3>Scalability</h3><p>Load balancing and autoscaling for stateless workloads.</p></div>
                                <div className={styles.card}><h3>Recovery</h3><p>Backup, restoration, RTO and RPO by workload requirement.</p></div>
                                <div className={styles.card}><h3>Operations</h3><p>Monitoring, alerting, runbooks, and incident response.</p></div>
                                <div className={styles.card}><h3>Delivery</h3><p>Automated, repeatable deployment with minimal manual steps.</p></div>
                            </div>
                        </RevealBlock>
                    </div>
                </section>

                <section className={styles.section} id="decisions">
                    <div className={styles.container}>
                        <RevealBlock>
                            <div className={styles.sectionHead}>
                                <div className={styles.eyebrow}>Fig. 07 - Trade-offs</div>
                                <h2>Architecture Decisions</h2>
                                <p>Every choice balances reliability, security, operational complexity, cost, and delivery speed.</p>
                            </div>
                        </RevealBlock>
                        <RevealBlock>
                            <ArchitectureDecisions />
                        </RevealBlock>
                    </div>
                </section>

                <section className={styles.sectionTopless} id="repository">
                    <div className={styles.container}>
                        <RevealBlock>
                            <RepositoryCta />
                        </RevealBlock>
                    </div>
                </section>

                <footer className={styles.footer}>
                    <p>© 2026 Chandan Padal - Built with React · TypeScript · Vite</p>
                </footer>
            </div>
        </Page>
    );
}

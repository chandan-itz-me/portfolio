import { motion } from "framer-motion";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Card from "@/components/common/Card";
import SectionHeader from "@/components/common/SectionHeader";

import { dashboard } from "@/data/dashboard";

import {
    staggerContainer,
    staggerItem,
} from "@/animations/stagger";

import styles from "./OperationsOverview.module.css";

export default function OperationsOverview() {
    return (
        <section className={styles.section}>
            <SectionHeader
                title="Operations Overview"
                subtitle="Real-time portfolio and platform summary."
            />

            <motion.div
                className={styles.grid}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
            >
                <motion.article variants={staggerItem}>
                    <Card>
                        <span className={styles.label}>
                            Projects
                        </span>

                        <div className={styles.value}>
                            <AnimatedCounter
                                end={
                                    dashboard.overview.projects
                                }
                            />
                        </div>
                    </Card>
                </motion.article>

                <motion.article variants={staggerItem}>
                    <Card>
                        <span className={styles.label}>
                            Experience
                        </span>

                        <div className={styles.value}>
                            {
                                dashboard.overview
                                    .experience
                            }
                        </div>
                    </Card>
                </motion.article>

                <motion.article variants={staggerItem}>
                    <Card>
                        <span className={styles.label}>
                            Infrastructure
                        </span>

                        <div className={styles.value}>
                            <AnimatedCounter
                                end={
                                    dashboard.overview
                                        .infrastructure
                                }
                            />
                        </div>
                    </Card>
                </motion.article>

                <motion.article variants={staggerItem}>
                    <Card>
                        <span className={styles.label}>
                            Status
                        </span>

                        <div
                            className={`${styles.value} ${styles.status}`}
                        >
                            ●{" "}
                            {
                                dashboard.overview
                                    .status
                            }
                        </div>
                    </Card>
                </motion.article>
            </motion.div>
        </section>
    );
}
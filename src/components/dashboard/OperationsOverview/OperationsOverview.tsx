import { motion } from "framer-motion";

import Card from "@/components/common/Card";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

import { dashboard } from "@/data/dashboard";

import {
    staggerContainer,
    staggerItem,
} from "@/animations/stagger";

import styles from "./OperationsOverview.module.css";

export default function OperationsOverview() {
    const { kpis } = dashboard;
    const kpiArray = [
        kpis.uptime,
        kpis.deploymentFrequency,
        kpis.mttr,
        kpis.changeFailureRate,
    ];

    return (
        <section className={styles.section}>
            {/* Main KPIs */}
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
                {kpiArray.map((kpi) => (
                    <motion.article
                        key={kpi.label}
                        variants={staggerItem}
                    >
                        <Card variant="featured">
                            <span className={styles.label}>
                                {kpi.label}
                            </span>

                            <div className={styles.value}>
                                <span className={styles.mainValue}>
                                    <AnimatedCounter
                                        end={kpi.value}
                                        decimals={1}
                                    />
                                    {kpi.suffix}
                                </span>
                                {'target' in kpi && kpi.target && (
                                    <span className={styles.target}>
                                        Target: {kpi.target}
                                        {kpi.suffix}
                                    </span>
                                )}
                                {'trend' in kpi && kpi.trend && (
                                    <span className={styles.trend}>
                                        {kpi.trend}
                                    </span>
                                )}
                            </div>
                        </Card>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}
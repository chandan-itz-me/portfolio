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
    return (
        <section className={styles.section}>
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
                {dashboard.summary.map((item) => (
                    <motion.article
                        key={item.label}
                        variants={staggerItem}
                    >
                        <Card variant="featured">
                            <span className={styles.label}>
                                {item.label}
                            </span>

                            <div
                                className={`${styles.value} ${
                                    item.status
                                        ? styles.status
                                        : ""
                                }`}
                            >
                                {item.status && "● "}

                                {item.value}

                                {item.suffix
                                    ? ` ${item.suffix}`
                                    : ""}
                            </div>
                        </Card>
                    </motion.article>
                ))}
            </motion.div>

            <motion.div
                className={styles.metricsGrid}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
            >
                {dashboard.metrics.map((metric) => (
                    <motion.article
                        key={metric.label}
                        variants={staggerItem}
                    >
                        <Card>
                            <div className={styles.metricValue}>
                                <AnimatedCounter
                                    end={metric.value}
                                    suffix={metric.suffix}
                                    decimals={
                                        metric.value % 1 !== 0
                                            ? 1
                                            : 0
                                    }
                                />
                            </div>

                            <div className={styles.metricLabel}>
                                {metric.label}
                            </div>
                        </Card>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}
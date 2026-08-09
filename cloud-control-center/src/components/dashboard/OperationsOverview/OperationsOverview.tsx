import { motion } from "framer-motion";

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
                {dashboard.summary.map((item) => (
                    <motion.article
                        key={item.label}
                        variants={staggerItem}
                    >
                        <Card>
                            <span className={styles.label}>
                                {item.label.toUpperCase()}
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
        </section>
    );
}
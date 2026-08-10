import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { fadeUp } from "@/constants/animations";
import { staggerContainer } from "@/animations/stagger";

import styles from "./InfrastructureExplorer.module.css";

type CloudCard = {
    key: "aws" | "azure" | "gcp";
    name: string;
    subtitle: string;
    description: string;
};

const cloudCards: readonly CloudCard[] = [
    {
        key: "aws",
        name: "AWS",
        subtitle: "Infrastructure Explorer",
        description:
            "Scalable compute, resilient networking, and delivery automation patterns for enterprise workloads.",
    },
    {
        key: "azure",
        name: "Azure",
        subtitle: "Infrastructure Explorer",
        description:
            "Cloud-native platform foundations, policy-driven governance, and secure workload operations.",
    },
    {
        key: "gcp",
        name: "Google Cloud",
        subtitle: "Infrastructure Explorer",
        description:
            "Container-first architecture, observability patterns, and deployment best practices at scale.",
    },
] as const;

export default function InfrastructureExplorer() {
    return (
        <motion.section
            className={styles.grid}
            variants={staggerContainer as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {cloudCards.map((card) => (
                <motion.article
                    key={card.key}
                    className={`${styles.card} ${styles[card.key]}`}
                    variants={fadeUp as any}
                >
                    <Link
                        to={`/infrastructure/${card.key}`}
                        className={styles.link}
                        aria-label={`Open ${card.name} infrastructure details`}
                    >
                        <p className={styles.cloudIcon}>CLOUD</p>
                        <p className={styles.subtitle}>{card.subtitle}</p>
                        <h3>{card.name}</h3>
                        <p className={styles.description}>{card.description}</p>
                        <span className={styles.cta}>Open cloud blueprint</span>
                    </Link>
                </motion.article>
            ))}
        </motion.section>
    );
}

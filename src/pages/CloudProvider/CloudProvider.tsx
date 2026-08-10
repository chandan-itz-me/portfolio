import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Page from "@/components/layout/Page";
import { fadeUp } from "@/constants/animations";

import styles from "./CloudProvider.module.css";

type Provider = "aws" | "azure" | "gcp";

type ProviderConfig = {
    title: string;
    badge: string;
    summary: string;
};

const providerMap: Record<Provider, ProviderConfig> = {
    aws: {
        title: "AWS Infrastructure Blueprint",
        badge: "AWS",
        summary:
            "Scalable cloud foundations for production-grade applications with automation, security, and observability.",
    },
    azure: {
        title: "Azure Infrastructure Blueprint",
        badge: "Azure",
        summary:
            "Enterprise platform architecture with governance, CI/CD integration, and resilient cloud operations.",
    },
    gcp: {
        title: "Google Cloud Infrastructure Blueprint",
        badge: "Google Cloud",
        summary:
            "Container-oriented architecture and platform reliability patterns optimized for modern workloads.",
    },
};

const focusAreas = [
    "Infrastructure as Code",
    "Terraform",
    "Architecture diagrams",
    "Networking",
    "Security",
    "Deployments",
    "Monitoring",
    "CI/CD",
    "Best practices",
] as const;

export default function CloudProvider() {
    const { provider } = useParams<{ provider: Provider }>();

    if (!provider || !(provider in providerMap)) {
        return <Navigate to="/" replace />;
    }

    const details = providerMap[provider];

    return (
        <Page>
            <motion.section
                className={styles.section}
                variants={fadeUp as any}
                initial="hidden"
                animate="visible"
            >
                <Link to="/#infrastructure" className={styles.backLink}>
                    Back to infrastructure explorer
                </Link>

                <header className={`${styles.header} ${styles[provider]}`}>
                    <p className={styles.badge}>{details.badge}</p>
                    <h1>{details.title}</h1>
                    <p>{details.summary}</p>
                </header>

                <section className={styles.placeholderGrid}>
                    {focusAreas.map((area) => (
                        <article key={area} className={styles.placeholderCard}>
                            <h2>{area}</h2>
                            <p>
                                Placeholder block ready for future implementation,
                                references, and architecture artifacts.
                            </p>
                        </article>
                    ))}
                </section>
            </motion.section>
        </Page>
    );
}

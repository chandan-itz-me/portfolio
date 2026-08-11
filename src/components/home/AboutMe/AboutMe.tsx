import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, GitBranch, Monitor, Server, Shield, Zap } from "lucide-react";

import AnimatedNumber from "@/components/common/AnimatedNumber";

import styles from "./AboutMe.module.css";

const metrics = [
    { value: "5+", label: "Years Experience" },
    { value: "12+", label: "Clients" },
    { value: "30+", label: "Projects Delivered" },
    { value: "300+", label: "Resources Managed" },
] as const;

const focusAreas = [
    { label: "Multi-Cloud Architecture", icon: Cloud, className: "multiCloud" },
    { label: "CI/CD Automation", icon: GitBranch, className: "ciCd" },
    { label: "Security & Compliance", icon: Shield, className: "security" },
    { label: "Monitoring & Alerts", icon: Monitor, className: "monitoring" },
    { label: "Infrastructure as Code", icon: Server, className: "iac" },
    { label: "Performance Optimization", icon: Zap, className: "performance" },
] as const;

const provenImpact = [
    { value: "75%", label: "Faster Deployments" },
    { value: "40%", label: "Cost Reduction" },
    { value: "95%", label: "Fewer Incidents" },
    { value: "20+", label: "Infrastructure Delivered" },
] as const;

export default function AboutMe() {
    const contentRef = useRef<HTMLDivElement>(null);
    const isContentInView = useInView(contentRef, { amount: 0.25 });

    return (
        <section className={styles.about}>
            <div
                ref={contentRef}
                className={styles.content}
            >
                <div className={styles.layout}>
                    <aside className={styles.metricsColumn} aria-label="Professional highlights">
                        {metrics.map((item, index) => {
                            const numericValue = parseInt(item.value.replace('+', ''));
                            return (
                                <motion.article
                                    key={item.label}
                                    className={styles.metricCard}
                                    initial={{ opacity: 0, x: "-110vw" }}
                                    animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-110vw" }}
                                    transition={{
                                        duration: 0.72,
                                        delay: 0.25 + index * 0.2,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                >
                                    <div className={styles.metricValueWrapper}>
                                        <AnimatedNumber value={numericValue} className={styles.metricNumber} />
                                        <span className={styles.metricPlus}>+</span>
                                    </div>
                                    <p className={styles.metricLabel}>{item.label}</p>
                                </motion.article>
                            );
                        })}
                    </aside>

                    <motion.article
                        className={styles.descriptionColumn}
                        initial={{ opacity: 0 }}
                        animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
                    >
                        <p className={styles.titleLead}>
                            <strong>Building reliable cloud platforms through automation.</strong>
                        </p>
                        <p className={styles.description}>
                            I'm a Cloud & DevOps Engineer passionate about designing scalable infrastructure, automating deployments, securing and building platforms that enable development teams to move faster with confidence. My expertise spans AWS, Azure, Infrastructure as Code, CI/CD, containers, and observability.
                        </p>
                        <p className={styles.description}>
                            I enjoy turning complex operational challenges into simple, repeatable solutions whether it's provisioning cloud infrastructure, optimizing delivery pipelines, or improving reliability and performance. My goal is to build systems that are secure, resilient, and easy to maintain, allowing teams to focus on delivering great software.
                        </p>
                    </motion.article>

                    <div className={styles.focusColumn}>
                        {focusAreas.map((area, index) => {
                            const Icon = area.icon;

                            return (
                                <motion.article
                                    key={area.label}
                                    className={styles.focusCard}
                                    initial={{ opacity: 0, x: 72 }}
                                    animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 72 }}
                                    transition={{
                                        duration: 0.42,
                                        delay: 0.3 + index * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <Icon className={`${styles.focusIcon} ${styles[area.className]}`} size={26} />
                                    <h3>{area.label}</h3>
                                </motion.article>
                            );
                        })}
                    </div>

                    <motion.section
                        className={styles.impactSection}
                        aria-label="Proven Impact"
                        initial={{ opacity: 0, y: 56 }}
                        animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
                        transition={{ duration: 0.55, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h3 className={styles.impactTitle}>Proven Impact</h3>
                        <div className={styles.impactGrid}>
                            {provenImpact.map((item) => {
                                const numericValue = parseInt(item.value.replace(/[^\d]/g, ''));
                                const suffix = item.value.replace(/\d/g, '');
                                return (
                                    <article key={item.label} className={styles.impactCard}>
                                        <AnimatedNumber 
                                            value={numericValue} 
                                            suffix={suffix}
                                            className={styles.impactValue}
                                        />
                                        <p className={styles.impactLabel}>{item.label}</p>
                                    </article>
                                );
                            })}
                        </div>
                    </motion.section>
                </div>
            </div>
        </section>
    );
}

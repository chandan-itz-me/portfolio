import { motion } from "framer-motion";
import { Cloud, GitBranch, Monitor, Server, Shield, Zap } from "lucide-react";

import { fadeUp } from "@/constants/animations";
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
    return (
        <section className={styles.about}>
            <motion.div
                className={styles.content}
                variants={fadeUp as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className={styles.layout}>
                    <aside className={styles.metricsColumn} aria-label="Professional highlights">
                        {metrics.map((item) => {
                            const numericValue = parseInt(item.value.replace('+', ''));
                            return (
                                <div key={item.label} className={styles.metricCard}>
                                    <div className={styles.metricValueWrapper}>
                                        <AnimatedNumber value={numericValue} className={styles.metricNumber} />
                                        <span className={styles.metricPlus}>+</span>
                                    </div>
                                    <p className={styles.metricLabel}>{item.label}</p>
                                </div>
                            );
                        })}
                    </aside>

                    <article className={styles.descriptionColumn}>
                        <p className={styles.titleLead}>
                            <strong>Building reliable cloud platforms through automation.</strong>
                        </p>
                        <p className={styles.description}>
                            I'm a Cloud & DevOps Engineer passionate about designing scalable infrastructure, automating deployments, securing and building platforms that enable development teams to move faster with confidence. My expertise spans AWS, Azure, Infrastructure as Code, CI/CD, containers, and observability.
                        </p>
                        <p className={styles.description}>
                            I enjoy turning complex operational challenges into simple, repeatable solutions whether it's provisioning cloud infrastructure, optimizing delivery pipelines, or improving reliability and performance. My goal is to build systems that are secure, resilient, and easy to maintain, allowing teams to focus on delivering great software.
                        </p>
                    </article>

                    <div className={styles.focusColumn}>
                        {focusAreas.map((area) => {
                            const Icon = area.icon;

                            return (
                                <article key={area.label} className={styles.focusCard}>
                                    <Icon className={`${styles.focusIcon} ${styles[area.className]}`} size={26} />
                                    <h3>{area.label}</h3>
                                </article>
                            );
                        })}
                    </div>

                    <section className={styles.impactSection} aria-label="Proven Impact">
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
                    </section>
                </div>
            </motion.div>
        </section>
    );
}

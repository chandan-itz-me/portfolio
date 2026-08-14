import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import styles from "./ExperienceHero.module.css";

export default function ExperienceHero() {
    const heroRef = useRef<HTMLElement>(null);
    const isHeroInView = useInView(heroRef, { amount: 0.1, once: true });

    return (
        <section ref={heroRef} className={styles.hero}>
            <motion.p
                className={styles.badge}
                initial={{ opacity: 0, y: 16 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                CAREER JOURNEY
            </motion.p>

            <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: 42, scale: 0.92 }}
                animate={isHeroInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 42, scale: 0.92 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
                Experience
            </motion.h1>

            <motion.p
                className={styles.description}
                initial={{ opacity: 0, y: 18 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
            >
                A journey through enterprise cloud engineering,
                platform automation, DevOps practices, and
                production operations across AWS, Azure,
                and multi-cloud environments.
            </motion.p>
        </section>
    );
}
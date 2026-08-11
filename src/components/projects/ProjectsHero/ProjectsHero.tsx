import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

import styles from "./ProjectsHero.module.css";

const dissolveIn = {
    hidden: {
        opacity: 0,
        y: 14,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.62,
            ease: "easeOut",
        },
    },
};

export default function ProjectsHero() {
    const heroRef = useRef<HTMLElement>(null);
    const controls = useAnimationControls();
    const isInView = useInView(heroRef, {
        amount: 0.55,
        margin: "0px 0px -12% 0px",
    });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
            return;
        }

        controls.start("hidden");
    }, [controls, isInView]);

    return (
        <motion.section
            ref={heroRef}
            className={styles.hero}
            initial="hidden"
            animate={controls}
        >
            <motion.p className={styles.badge} variants={dissolveIn as any}>
                ENTERPRISE DELIVERY
            </motion.p>

            <motion.h1
                className={styles.title}
                variants={dissolveIn as any}
                transition={{ delay: 0.08 }}
            >
                Projects
            </motion.h1>

            <motion.p
                className={styles.description}
                variants={dissolveIn as any}
                transition={{ delay: 0.18 }}
            >
                Enterprise cloud platforms delivered across AWS and Azure,
                focusing on Infrastructure as Code, CI/CD automation,
                platform engineering, observability, and production
                operations.
            </motion.p>
        </motion.section>
    );
}
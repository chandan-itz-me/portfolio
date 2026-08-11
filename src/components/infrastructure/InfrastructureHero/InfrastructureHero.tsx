import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

import styles from "./InfrastructureHero.module.css";

const titleText = "Infrastructure Explorer";

const titleContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0.08,
        },
    },
};

const letterBuild = {
    hidden: {
        opacity: 0,
        y: 18,
        x: -8,
        rotate: -8,
        filter: "blur(6px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.42,
            ease: "easeOut",
        },
    },
};

const descriptionFade = {
    hidden: {
        opacity: 0,
        y: 8,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.45,
            ease: "easeOut",
        },
    },
};

export default function InfrastructureHero() {
    const heroRef = useRef<HTMLElement>(null);
    const controls = useAnimationControls();
    const isInView = useInView(heroRef, {
        amount: 0.52,
        margin: "0px 0px -10% 0px",
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
            <motion.p className={styles.badge} variants={descriptionFade as any}>
                PLATFORM CAPABILITIES
            </motion.p>

            <motion.h1 className={styles.title} variants={titleContainer as any}>
                {titleText.split("").map((char, index) => (
                    <motion.span
                        key={`${char}-${index}`}
                        className={styles.titleGlyph}
                        variants={letterBuild as any}
                        aria-hidden="true"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}

                <span className={styles.srOnly}>{titleText}</span>
            </motion.h1>

            <motion.p className={styles.description} variants={descriptionFade as any}>
                Explore cloud platforms, services, and technologies used
                across enterprise environments and production workloads.
            </motion.p>
        </motion.section>
    );
}
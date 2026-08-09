import { profile } from "@/config/profile";

import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

import styles from "./DashboardHero.module.css";

export default function DashboardHero() {
    return (
        <motion.section
        className={styles.hero}
        variants={fadeUp as any}
        initial="hidden"
        animate="visible"
        >
            <div>
                <motion.p
    className={styles.badge}
    initial={{
        opacity: 0,
        y: -12,
    }}
    animate={{
        opacity: 1,
        y: 0,
    }}
    transition={{
        delay: 0.2,
    }}
>
                    ● SYSTEM STATUS : OPERATIONAL
                </motion.p>

                <h1 className={styles.title}>
                    Cloud Control Center
                </h1>

                <h2 className={styles.subtitle}>
                    Welcome back, {profile.name}
                </h2>

                <p className={styles.description}>
                    Cloud Platform & DevOps Engineer specializing
                    in AWS, Azure, Terraform, CI/CD automation,
                    observability and platform engineering.
                </p>
            </div>
        </motion.section>
    );
}
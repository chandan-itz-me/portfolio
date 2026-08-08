import { profile } from "@/config/profile";

import styles from "./DashboardHero.module.css";

export default function DashboardHero() {
    return (
        <section className={styles.hero}>
            <div>
                <p className={styles.badge}>
                    ● SYSTEM STATUS : OPERATIONAL
                </p>

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
        </section>
    );
}
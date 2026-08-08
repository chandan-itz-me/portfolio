import { motion } from "framer-motion";

import { fadeUp } from "@/constants/animations";
import { career } from "@/data/career";

import TimelineNode from "../TimelineNode";

import styles from "./CareerTimeline.module.css";

export default function CareerTimeline() {
    return (
        <section className={styles.timeline}>
            {career.map((job, index) => (
                <div
                    key={job.id}
                    className={styles.row}
                >
                    <TimelineNode
                        showLine={index < career.length - 1}
                    />

                    <motion.article
                        className={styles.card}
                        variants={fadeUp as any}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                    >
                        <div className={styles.header}>
                            <div>
                                <h2>{job.company}</h2>

                                <h3>{job.role}</h3>
                            </div>

                            <span className={styles.duration}>
                                {job.duration}
                            </span>
                        </div>

                        <p className={styles.summary}>
                            {job.summary}
                        </p>

                        <div className={styles.techGrid}>
                            {job.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className={styles.badge}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className={styles.highlights}>
                            {job.highlights.map((highlight) => (
                                <div
                                    key={highlight}
                                    className={styles.highlight}
                                >
                                    <span>✓</span>

                                    <p>{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </motion.article>
                </div>
            ))}
        </section>
    );
}
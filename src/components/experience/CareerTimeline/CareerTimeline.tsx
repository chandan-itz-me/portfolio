import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { fadeUp } from "@/constants/animations";
import { career } from "@/data/career";

import styles from "./CareerTimeline.module.css";

export default function CareerTimeline() {
    const timelineRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 70%", "end 30%"],
    });

    const progressScale = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 24,
        mass: 0.4,
    });

    const markerPosition = useTransform(progressScale, [0, 1], ["0%", "100%"]);

    return (
        <section ref={timelineRef} className={styles.timeline}>
            <div className={styles.rail} aria-hidden="true">
                <div className={styles.railTrack} />

                <motion.div
                    className={styles.railProgress}
                    style={{ scaleY: progressScale }}
                />

                <motion.div
                    className={styles.journeyMarker}
                    style={{ top: markerPosition }}
                />
            </div>

            {career.map((job, index) => (
                <div key={job.id} className={styles.row}>
                    <motion.article
                        className={`${styles.card} ${index % 2 === 0 ? styles.left : styles.right}`}
                        variants={fadeUp as any}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.015, y: -5 }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className={styles.header}>
                            <div>
                                <p className={styles.role}>{job.role}</p>
                                <h2>{job.company}</h2>
                            </div>

                            <div className={styles.metaColumn}>
                                <span className={styles.duration}>{job.duration}</span>
                                <span className={styles.location}>{job.location}</span>
                            </div>
                        </div>

                        <p className={styles.summary}>{job.summary}</p>

                        <div className={styles.clients}>
                            {job.clients.map((client) => (
                                <span key={client} className={styles.clientBadge}>
                                    {client}
                                </span>
                            ))}
                        </div>

                        <div className={styles.techGrid}>
                            {job.technologies.map((tech) => (
                                <span key={tech} className={styles.badge}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className={styles.highlights}>
                            {job.highlights.map((highlight) => (
                                <div key={highlight} className={styles.highlight}>
                                    <span>+</span>

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
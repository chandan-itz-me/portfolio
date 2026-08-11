import { useRef, type CSSProperties } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

import { career } from "@/data/career";

import styles from "./CareerTimeline.module.css";

const floatingSkillPositions = [
    [15, 8], [40, 15], [65, 7], [85, 14],
    [15, 31], [40, 38], [65, 30], [85, 37],
    [15, 54], [40, 61], [65, 53], [85, 60],
    [15, 77], [40, 84], [65, 76], [85, 83],
] as const;

type TimelineRowProps = {
    job: (typeof career)[number];
    index: number;
};

function TimelineRow({ job, index }: TimelineRowProps) {
    const rowRef = useRef<HTMLDivElement>(null);
    const isRowInView = useInView(rowRef, { amount: 0.2 });
    const cardHiddenState = {
        opacity: 0,
        x: index % 2 === 0 ? -32 : 32,
        y: 24,
        rotateY: index % 2 === 0 ? -78 : 78,
    };

    return (
        <div ref={rowRef} className={styles.row}>
            <motion.article
                className={`${styles.card} ${index % 2 === 0 ? styles.left : styles.right}`}
                initial={cardHiddenState}
                animate={isRowInView ? { opacity: 1, x: 0, y: 0, rotateY: 0 } : cardHiddenState}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
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

                <div className={styles.highlights}>
                    {job.highlights.map((highlight) => (
                        <div key={highlight} className={styles.highlight}>
                            <span>+</span>

                            <p>{highlight}</p>
                        </div>
                    ))}
                </div>
            </motion.article>

            <motion.aside
                className={`${styles.placeholder} ${index % 2 === 0 ? styles.placeholderRight : styles.placeholderLeft}`}
                aria-label={`${job.company} skills`}
                initial={{ opacity: 0, scale: 0.72 }}
                animate={isRowInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.72 }}
                transition={{ duration: 0.42, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
                {job.technologies.map((technology, technologyIndex) => {
                    const [left, top] = floatingSkillPositions[
                        technologyIndex % floatingSkillPositions.length
                    ];

                    return (
                        <span
                            key={technology}
                            className={styles.badge}
                            style={{
                                "--skill-left": `${left}%`,
                                "--skill-top": `${top}%`,
                                "--float-delay": `${technologyIndex * -0.55}s`,
                            } as CSSProperties}
                        >
                            {technology}
                        </span>
                    );
                })}
            </motion.aside>
        </div>
    );
}

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
                <TimelineRow key={job.id} job={job} index={index} />
            ))}
        </section>
    );
}
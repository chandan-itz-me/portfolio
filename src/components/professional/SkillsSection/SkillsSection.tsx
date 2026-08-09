import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Card from "@/components/common/Card";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { staggerContainer, staggerItem } from "@/animations/stagger";

import { skills } from "@/data/skills";
import type { Skill } from "@/types/skills";

import styles from "./SkillsSection.module.css";

// Levels map to a fill percentage + colour so the bars read as a
// proficiency gauge rather than a plain badge. Kept local to this
// component since no other section needs the mapping.
const LEVEL_CONFIG: Record<Skill["level"], { percent: number; color: string }> = {
    Advanced: { percent: 95, color: "var(--color-success)" },
    Intermediate: { percent: 68, color: "var(--color-secondary)" },
    Learning: { percent: 38, color: "var(--color-accent)" },
};

const ALL_FILTER = "All";

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState<string>(ALL_FILTER);

    const totalSkills = useMemo(
        () => skills.reduce((sum, category) => sum + category.skills.length, 0),
        []
    );

    const advancedCount = useMemo(
        () =>
            skills.reduce(
                (sum, category) =>
                    sum +
                    category.skills.filter((skill) => skill.level === "Advanced")
                        .length,
                0
            ),
        []
    );

    const visibleCategories = useMemo(
        () =>
            activeCategory === ALL_FILTER
                ? skills
                : skills.filter((category) => category.title === activeCategory),
        [activeCategory]
    );

    return (
        <section className={styles.section}>
            <div className={styles.headingRow}>
                <div className={styles.headingCopy}>
                    <span className={styles.eyebrow}>Skill matrix</span>

                    <h2 className={styles.heading}>Technical Capabilities</h2>

                    <p className={styles.description}>
                        Proficiency across cloud platforms, automation, and
                        the tooling that keeps production systems reliable.
                    </p>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>
                            <AnimatedCounter end={skills.length} duration={900} />
                        </span>

                        <span className={styles.statLabel}>Categories</span>
                    </div>

                    <div className={styles.stat}>
                        <span className={styles.statValue}>
                            <AnimatedCounter
                                end={totalSkills}
                                duration={1200}
                                suffix="+"
                            />
                        </span>

                        <span className={styles.statLabel}>Tools &amp; services</span>
                    </div>

                    <div className={styles.stat}>
                        <span className={styles.statValue}>
                            <AnimatedCounter end={advancedCount} duration={1000} />
                        </span>

                        <span className={styles.statLabel}>Advanced mastery</span>
                    </div>
                </div>
            </div>

            <div
                className={styles.filters}
                role="group"
                aria-label="Filter skills by category"
            >
                <button
                    type="button"
                    className={`${styles.filterPill} ${
                        activeCategory === ALL_FILTER ? styles.filterPillActive : ""
                    }`}
                    aria-pressed={activeCategory === ALL_FILTER}
                    onClick={() => setActiveCategory(ALL_FILTER)}
                >
                    {activeCategory === ALL_FILTER && (
                        <motion.span
                            layoutId="skillFilterIndicator"
                            className={styles.filterIndicator}
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                    )}

                    <span className={styles.filterLabel}>All</span>
                </button>

                {skills.map((category) => (
                    <button
                        key={category.title}
                        type="button"
                        className={`${styles.filterPill} ${
                            activeCategory === category.title
                                ? styles.filterPillActive
                                : ""
                        }`}
                        aria-pressed={activeCategory === category.title}
                        onClick={() => setActiveCategory(category.title)}
                    >
                        {activeCategory === category.title && (
                            <motion.span
                                layoutId="skillFilterIndicator"
                                className={styles.filterIndicator}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 32,
                                }}
                            />
                        )}

                        <span className={styles.filterLabel}>{category.title}</span>
                    </button>
                ))}
            </div>

            <motion.div
                className={styles.grid}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <AnimatePresence mode="popLayout">
                    {visibleCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            layout
                            variants={staggerItem}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
                        >
                            <Card className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <h3>{category.title}</h3>

                                    <span className={styles.count}>
                                        {category.skills.length}
                                    </span>
                                </div>

                                <div className={styles.skills}>
                                    {category.skills.map((skill, index) => {
                                        const config = LEVEL_CONFIG[skill.level];

                                        return (
                                            <div
                                                key={skill.name}
                                                className={styles.skill}
                                            >
                                                <div className={styles.skillTop}>
                                                    <span className={styles.skillName}>
                                                        {skill.name}
                                                    </span>

                                                    <span
                                                        className={`${styles.level} ${
                                                            styles[
                                                                skill.level.toLowerCase()
                                                            ]
                                                        }`}
                                                    >
                                                        {skill.level}
                                                    </span>
                                                </div>

                                                <div className={styles.barTrack}>
                                                    <motion.div
                                                        className={styles.barFill}
                                                        initial={{ width: 0 }}
                                                        animate={{
                                                            width: `${config.percent}%`,
                                                        }}
                                                        transition={{
                                                            duration: 0.8,
                                                            ease: "easeOut",
                                                            delay: Math.min(
                                                                index * 0.04,
                                                                0.4
                                                            ),
                                                        }}
                                                        style={{
                                                            background: config.color,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}

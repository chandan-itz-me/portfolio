import { skills } from "@/data/skills";

import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                Technical Capabilities
            </h2>

            <div className={styles.grid}>
                {skills.map((category) => (
                    <article
                        key={category.title}
                        className={styles.card}
                    >
                        <h3>{category.title}</h3>

                        <div className={styles.skills}>
                            {category.skills.map((skill: { name: string; level: "Advanced" | "Intermediate" | "Learning" }) => (
                                <div
                                    key={skill.name}
                                    className={styles.skill}
                                >
                                    <span>{skill.name}</span>

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
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
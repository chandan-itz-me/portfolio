import { useEffect, useState } from "react";

import styles from "./LearningSection.module.css";

const education = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution:
            "Orissa University of Agriculture and Technology, Bhubaneswar",
        duration: "2017 – 2020",
    },
    {
        degree: "Bachelor of Science (Chemistry Honours)",
        institution: "Berhampur University, Koraput",
        duration: "2014 – 2017",
    },
];

const achievements = [
    "Designed and implemented a scalable Disaster Recovery (DR) strategy across hybrid cloud environments (AWS and Azure), achieving 99.9% availability and reducing Recovery Time Objective (RTO) by 40%.",
    "Received client appreciation for reducing cloud infrastructure costs by approximately 20% through resource right-sizing, auto-scaling policies, and serverless architecture adoption.",
    "Improved database performance by optimizing indexing strategies, reducing query execution time by approximately 30%, and enhancing overall application responsiveness.",
];

const interests = [
    "Football",
    "Table Tennis",
    "Chess",
    "Painting",
    "Writing",
    "Cooking",
    "Reading",
    "Travelling",
];

export default function LearningSection() {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    useEffect(() => {
        const closeOnOutsidePointer = (event: PointerEvent) => {
            if (!(event.target as Element).closest(`.${styles.node}`)) {
                setActiveItem(null);
            }
        };

        document.addEventListener("pointerdown", closeOnOutsidePointer);

        return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
    }, []);

    const toggleItem = (itemId: string) => {
        setActiveItem((currentItem) => currentItem === itemId ? null : itemId);
    };

    return (
        <div className={styles.educationLayer}>
            {education.map((item, index) => {
                const itemId = `education-${index}`;
                const isActive = activeItem === itemId;

                return (
                    <div
                        key={item.degree}
                        className={`${styles.node} ${styles[`education${index + 1}`]} ${isActive ? styles.nodeActive : ""}`}
                    >
                        <button
                            className={styles.nodeButton}
                            type="button"
                            aria-expanded={isActive}
                            onClick={() => toggleItem(itemId)}
                        >
                            <span className={styles.nodeKicker}>Education</span>
                            <strong>{index === 0 ? "MCA" : "B.Sc."}</strong>
                        </button>

                        {isActive && (
                            <div className={styles.detailCloud}>
                                <strong>{item.degree}</strong>
                                <span>{item.institution}</span>
                                <small>{item.duration}</small>
                            </div>
                        )}
                    </div>
                );
            })}

            {achievements.map((item, index) => {
                const itemId = `achievement-${index}`;
                const isActive = activeItem === itemId;

                return (
                    <div
                        key={item}
                        className={`${styles.node} ${styles[`achievement${index + 1}`]} ${isActive ? styles.nodeActive : ""}`}
                    >
                        <button
                            className={styles.achievementButton}
                            type="button"
                            aria-expanded={isActive}
                            onClick={() => toggleItem(itemId)}
                        >
                            <span>Impact {index + 1}</span>
                        </button>

                        {isActive && <div className={styles.detailCloud}>{item}</div>}
                    </div>
                );
            })}

            <div className={styles.interestsStrip}>
                <span className={styles.interestsLabel}>Beyond work</span>
                {interests.map((item) => <span key={item}>{item}</span>)}
            </div>
        </div>
    );
}

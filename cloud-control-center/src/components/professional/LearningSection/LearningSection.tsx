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
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                Education & Achievements
            </h2>

            <div className={styles.educationGrid}>
                {education.map((item) => (
                    <article
                        key={item.degree}
                        className={styles.card}
                    >
                        <h3>{item.degree}</h3>

                        <p className={styles.institution}>
                            {item.institution}
                        </p>

                        <span className={styles.duration}>
                            {item.duration}
                        </span>
                    </article>
                ))}
            </div>

            <h3 className={styles.subheading}>
                Key Achievements
            </h3>

            <div className={styles.achievements}>
                {achievements.map((item) => (
                    <div
                        key={item}
                        className={styles.achievementItem}
                    >
                        <span>✓</span>

                        <p>{item}</p>
                    </div>
                ))}
            </div>

            <h3 className={styles.subheading}>
                Beyond Work
            </h3>

            <div className={styles.interests}>
                {interests.map((item) => (
                    <span
                        key={item}
                        className={styles.interestBadge}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </section>
    );
}

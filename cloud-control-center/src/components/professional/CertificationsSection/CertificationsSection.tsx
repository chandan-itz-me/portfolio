import { certifications } from "@/data/certifications";

import styles from "./CertificationsSection.module.css";

const statusClass = {
    "In Progress": styles.progress,
    Planned: styles.planned,
    Future: styles.future,
};

export default function CertificationsSection() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                Certification Roadmap
            </h2>

            <div className={styles.timeline}>
                {certifications.map((cert) => (
                    <article
                        key={cert.id}
                        className={styles.card}
                    >
                        <div className={styles.header}>
                            <h3>{cert.title}</h3>

                            <span
                                className={
                                    statusClass[cert.status]
                                }
                            >
                                {cert.status}
                            </span>
                        </div>

                        <p>{cert.provider}</p>

                        <span className={styles.year}>
                            Target: {cert.targetYear}
                        </span>
                    </article>
                ))}
            </div>
        </section>
    );
}
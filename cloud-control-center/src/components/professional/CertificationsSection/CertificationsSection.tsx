import { certifications } from "@/data/certifications";

import styles from "./CertificationsSection.module.css";

export default function CertificationsSection() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                Certifications
            </h2>

            <div className={styles.timeline}>
                {certifications.map((cert) => (
                    <article
                        key={cert.id}
                        className={styles.card}
                    >
                        <div className={styles.header}>
                            <h3>{cert.title}</h3>

                            <span className={styles.earned}>
                                Earned
                            </span>
                        </div>

                        <p>{cert.provider}</p>

                        <span className={styles.year}>
                            Issued {cert.issued}
                            {cert.validUntil
                                ? ` · Valid until ${cert.validUntil}`
                                : ""}
                        </span>
                    </article>
                ))}
            </div>
        </section>
    );
}
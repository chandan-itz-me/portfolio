import { useEffect, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

import { certifications } from "@/data/certifications";

import styles from "./CertificationsSection.module.css";

export default function CertificationsSection() {
    const [activeCertification, setActiveCertification] = useState<string | null>(null);

    useEffect(() => {
        const closeOnOutsidePointer = (event: PointerEvent) => {
            if (!(event.target as Element).closest(`.${styles.node}`)) {
                setActiveCertification(null);
            }
        };

        document.addEventListener("pointerdown", closeOnOutsidePointer);

        return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
    }, []);

    const handleStagePointer = (event: ReactPointerEvent<HTMLDivElement>) => {
        if (!(event.target as Element).closest(`.${styles.node}`)) {
            setActiveCertification(null);
        }
    };

    return (
        <div className={styles.nodesContainer} onPointerDown={handleStagePointer}>
                    {certifications.map((certification, index) => {
                        const positions = [
                            { x: 50, y: 16 },
                            { x: 12, y: 32 },
                            { x: 25, y: 80 },
                            { x: 74, y: 70 },
                            { x: 78, y: 31 },
                        ];
                        const position = positions[index];
                        const isActive = activeCertification === certification.id;

                        return (
                            <div
                                key={certification.id}
                                className={`${styles.node} ${isActive ? styles.nodeActive : ""}`}
                                style={{ left: `${position.x}%`, top: `${position.y}%` }}
                                onMouseEnter={() => setActiveCertification(certification.id)}
                                onMouseLeave={() => setActiveCertification(null)}
                            >
                                <a
                                    className={styles.logoButton}
                                    href={certification.credentialUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Verify ${certification.title} credential`}
                                    onFocus={() => setActiveCertification(certification.id)}
                                    onBlur={() => setActiveCertification(null)}
                                >
                            <img
                                        className={styles.logo}
                                        src={`${import.meta.env.BASE_URL}certs/${encodeURIComponent(certification.logo)}`}
                                        alt={`${certification.provider} certification logo`}
                                        loading="eager"
                                        decoding="async"
                                        fetchPriority="high"
                            />
                                </a>

                                {isActive && (
                                    <div className={styles.thinkingCloud} role="status">
                                        <span className={styles.cloudTail} aria-hidden="true" />
                                        <div className={styles.cloudHeader}>
                                            <span>{certification.provider}</span>
                                            <span className={styles.earned}>Earned</span>
                                        </div>
                                        <strong>{certification.title}</strong>
                                        <span className={styles.date}>
                                            Issued {certification.issued}
                                            {certification.validUntil ? ` · Valid until ${certification.validUntil}` : ""}
                                        </span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
        </div>
    );
}
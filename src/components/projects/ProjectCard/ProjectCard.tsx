import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
    tileLayoutId: string;
    title: string;
    logoPath?: string;
    logoPaths?: readonly string[];
    logoAlt?: string;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    onSelect: () => void;
};

export default function ProjectCard({
    tileLayoutId,
    title,
    logoPath,
    logoPaths,
    logoAlt,
    onHoverStart,
    onHoverEnd,
    onSelect,
}: ProjectCardProps) {
    const [logoPathIndex, setLogoPathIndex] = useState(0);

    const candidatePaths = useMemo(
        () => (
            logoPaths && logoPaths.length > 0
                ? logoPaths
                : (logoPath ? [logoPath] : [])
        ),
        [logoPath, logoPaths],
    );

    useEffect(() => {
        setLogoPathIndex(0);
    }, [candidatePaths]);

    const activeLogoPath = candidatePaths[logoPathIndex];

    const handleLogoError = () => {
        if (logoPathIndex < candidatePaths.length) {
            setLogoPathIndex((current) => current + 1);
        }
    };

    return (
        <article className={styles.card}>
            <button
                type="button"
                className={styles.cardButton}
                onClick={onSelect}
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                aria-label={`Open project postcard for ${title}`}
            >
                {activeLogoPath ? (
                    <motion.img
                        layoutId={tileLayoutId}
                        src={encodeURI(`${import.meta.env.BASE_URL}${activeLogoPath}`)}
                        alt={logoAlt ?? `${title} logo`}
                        className={styles.tileImage}
                        loading="lazy"
                        onError={handleLogoError}
                    />
                ) : (
                    <div className={styles.tileFallback} aria-hidden="true" />
                )}
            </button>
        </article>
    );
}
import type { ReactNode } from "react";

import styles from "./SectionHeader.module.css";

type Props = {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
    level?: "h1" | "h2" | "h3";
};

export default function SectionHeader({
    title,
    subtitle,
    icon,
    level = "h2",
}: Props) {
    const HeaderTag = level;

    return (
        <header className={styles.header}>
            {icon && <div className={styles.icon}>{icon}</div>}
            
            <div className={styles.content}>
                <HeaderTag className={styles.title}>
                    {title}
                </HeaderTag>

                {subtitle && (
                    <p className={styles.subtitle}>
                        {subtitle}
                    </p>
                )}
            </div>

            <div className={styles.divider} />
        </header>
    );
}
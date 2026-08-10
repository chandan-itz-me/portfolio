import type { ReactNode } from "react";

import styles from "./Card.module.css";

type CardVariant = "standard" | "featured" | "secondary" | "interactive";

type Props = {
    children: ReactNode;
    className?: string;
    variant?: CardVariant;
};

export default function Card({
    children,
    className = "",
    variant = "standard",
}: Props) {
    return (
        <div
            className={`${styles.card} ${styles[variant]} ${className}`}
        >
            {children}
        </div>
    );
}
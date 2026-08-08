import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./NavigationCard.module.css";

type NavigationCardProps = {
    title: string;
    description: string;
    to: string;
};

export default function NavigationCard({
    title,
    description,
    to,
}: NavigationCardProps) {
    return (
        <motion.div
    whileHover={{
        y: -6,
    }}
>
    <NavLink
            to={to}
            className={styles.card}
        >
            <h3>{title}</h3>

            <p>{description}</p>

            <span className={styles.arrow}>
                →
            </span>
        </NavLink>
    </motion.div>
    );
}
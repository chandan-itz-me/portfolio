import styles from "./StatusCard.module.css";
import { motion } from "framer-motion";

type StatusCardProps = {
    title: string;
    status: string;
};

export default function StatusCard({
    title,
    status,
}: StatusCardProps) {
    return (
        <motion.article
        className={styles.card}
        whileHover={{
        y: -6,
        }}
        >
            <span className={styles.dot} />

            <h3>{title}</h3>

            <p>{status}</p>
        </motion.article>
    );
}
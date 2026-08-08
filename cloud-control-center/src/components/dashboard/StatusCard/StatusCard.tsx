import styles from "./StatusCard.module.css";

type StatusCardProps = {
    title: string;
    status: string;
};

export default function StatusCard({
    title,
    status,
}: StatusCardProps) {
    return (
        <article className={styles.card}>
            <span className={styles.dot} />

            <h3>{title}</h3>

            <p>{status}</p>
        </article>
    );
}
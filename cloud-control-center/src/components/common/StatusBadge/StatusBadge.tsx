import styles from "./StatusBadge.module.css";

type Status =
    | "Healthy"
    | "Active"
    | "Ready"
    | "Learning"
    | "Warning"
    | "Offline";

type Props = {
    status: Status;
};

export default function StatusBadge({
    status,
}: Props) {
    return (
        <span
            className={`${styles.badge} ${
                styles[status.toLowerCase()]
            }`}
        >
            {status}
        </span>
    );
}
import styles from "./TerminalHeader.module.css";

export default function TerminalHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.controls}>
                <span className={styles.red} />
                <span className={styles.yellow} />
                <span className={styles.green} />
            </div>

            <div className={styles.title}>
                cloud-control-center
            </div>

            <div className={styles.status}>
                SYSTEM OPERATIONAL
            </div>
        </header>
    );
}
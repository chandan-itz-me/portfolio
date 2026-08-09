import styles from "./TimelineNode.module.css";

type TimelineNodeProps = {
    showLine: boolean;
};

export default function TimelineNode({
    showLine,
}: TimelineNodeProps) {
    return (
        <div className={styles.node}>
            <div className={styles.dot} />

            {showLine && (
                <div className={styles.line} />
            )}
        </div>
    );
}
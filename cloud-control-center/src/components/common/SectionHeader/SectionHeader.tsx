import styles from "./SectionHeader.module.css";

type Props = {
    title: string;
    subtitle?: string;
};

export default function SectionHeader({
    title,
    subtitle,
}: Props) {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>
                {title}
            </h2>

            {subtitle && (
                <p className={styles.subtitle}>
                    {subtitle}
                </p>
            )}
        </header>
    );
}
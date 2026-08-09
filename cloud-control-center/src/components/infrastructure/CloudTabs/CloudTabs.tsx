import styles from "./CloudTabs.module.css";

type CloudProvider = "aws" | "azure" | "gcp";

type Props = {
    selected: CloudProvider;
    onSelect: (provider: CloudProvider) => void;
};

export default function CloudTabs({
    selected,
    onSelect,
}: Props) {
    return (
        <section className={styles.tabs}>
            <button
                className={
                    selected === "aws"
                        ? styles.active
                        : ""
                }
                onClick={() => onSelect("aws")}
            >
                AWS
            </button>

            <button
                className={
                    selected === "azure"
                        ? styles.active
                        : ""
                }
                onClick={() => onSelect("azure")}
            >
                Azure
            </button>

            <button
                className={
                    selected === "gcp"
                        ? styles.active
                        : ""
                }
                onClick={() => onSelect("gcp")}
            >
                Google Cloud
            </button>
        </section>
    );
}
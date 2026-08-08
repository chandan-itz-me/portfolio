import { motion } from "framer-motion";

import styles from "./ProfessionalTabs.module.css";

export type ProfessionalTab =
    | "skills"
    | "certifications"
    | "learning";

type Props = {
    activeTab: ProfessionalTab;
    onChange: (tab: ProfessionalTab) => void;
};

const tabs = [
    {
        id: "skills",
        label: "Skills",
    },
    {
        id: "certifications",
        label: "Certifications",
    },
    {
        id: "learning",
        label: "Roadmap",
    },
] as const;

export default function ProfessionalTabs({
    activeTab,
    onChange,
}: Props) {
    return (
        <div className={styles.wrapper}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={styles.button}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="professional-tab"
                            transition={{
                                type: "spring",
                                stiffness: 420,
                                damping: 34,
                            }}
                            className={styles.active}
                        />
                    )}

                    <span
                        className={
                            activeTab === tab.id
                                ? styles.activeText
                                : ""
                        }
                    >
                        {tab.label}
                    </span>
                </button>
            ))}
        </div>
    );
}
import type { ReactNode } from "react";

import { useTheme } from "@/hooks/useTheme";

import styles from "./ProfessionalWebStage.module.css";

type ProfessionalWebStageProps = {
    children: ReactNode;
};

export default function ProfessionalWebStage({ children }: ProfessionalWebStageProps) {
    const { theme } = useTheme();
    const webAsset = `${import.meta.env.BASE_URL}spiderweb.png`;

    return (
        <div className={styles.stage} data-professional-stage>
            <img
                className={styles.webBackground}
                src={webAsset}
                alt=""
                aria-hidden="true"
                style={{
                    filter:
                        theme === "dark"
                            ? "brightness(0) invert(1) drop-shadow(0 -4px 30px rgba(168, 85, 247, 0.68)) drop-shadow(0 -7px 64px rgba(168, 85, 247, 0.28))"
                            : "brightness(0) invert(1) drop-shadow(0 0 30px rgba(217, 119, 6, 0.9)) drop-shadow(0 0 64px rgba(217, 119, 6, 0.45))",
                }}
            />

            <img
                className={styles.spider}
                data-spider
                src={`${import.meta.env.BASE_URL}spider.png`}
                alt=""
                aria-hidden="true"
            />

            {children}
        </div>
    );
}

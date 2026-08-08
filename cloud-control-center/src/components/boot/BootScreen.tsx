import { useEffect, useState } from "react";

import { profile } from "@/config/profile";

import { bootLogs } from "./bootLogs";
import styles from "./BootScreen.module.css";

type BootScreenProps = {
    onComplete: () => void;
};

export default function BootScreen({
    onComplete,
}: BootScreenProps) {
    const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
    const [showWelcome, setShowWelcome] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        let index = 0;

        const interval = window.setInterval(() => {
            if (index < bootLogs.length) {
                setVisibleLogs((previous) => [
                    ...previous,
                    bootLogs[index],
                ]);

                index++;

                return;
            }

            window.clearInterval(interval);

            setShowWelcome(true);

            window.setTimeout(() => {
                setFadeOut(true);

                window.setTimeout(() => {
                    onComplete();
                }, 700);
            }, 1200);
        }, 350);

        return () => {
            window.clearInterval(interval);
        };
    }, [onComplete]);

    return (
        <main
            className={`${styles.boot} ${
                fadeOut ? styles.fadeOut : ""
            }`}
        >
            <div className={styles.window}>
                <h1 className={styles.title}>
                    Cloud Control Center
                </h1>

                <div className={styles.logs}>
                    {visibleLogs.map((log) => (
                        <p
                            key={log}
                            className={styles.log}
                        >
                            {log}
                        </p>
                    ))}

                    {showWelcome && (
                        <div className={styles.welcome}>
                            <p>Welcome back,</p>

                            <h2>{profile.name}</h2>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { profile } from "@/config/profile";

import HudCore from "./HudCore";
import PortalOverlay from "./PortalOverlay";
import { bootLogs } from "./bootLogs";
import styles from "./BootScreen.module.css";

type BootScreenProps = {
    onComplete: () => void;
};

type Phase = "assemble" | "diagnostics" | "readouts" | "ready" | "closing";

const LOG_INTERVAL_MS = 150;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Retro terminal boot sequence — green monospace text on black,
 * macOS-style terminal window with commands streaming in.
 */
export default function BootScreen({ onComplete }: BootScreenProps) {
    const reducedMotion = useRef(
        typeof window !== "undefined" &&
            window.matchMedia(REDUCED_MOTION_QUERY).matches
    ).current;

    const [phase, setPhase] = useState<Phase>("assemble");
    const [visibleLogs, setVisibleLogs] = useState<typeof bootLogs>([]);

    const onCompleteRef = useRef(onComplete);
    onCompleteRef.current = onComplete;

    useEffect(() => {
        const timeouts: number[] = [];
        let logInterval: number | undefined;

        const after = (fn: () => void, delay: number) => {
            timeouts.push(window.setTimeout(fn, delay));
        };

        const complete = () => onCompleteRef.current();

        if (reducedMotion) {
            setVisibleLogs(bootLogs);
            after(() => setPhase("ready"), 150);
            after(() => setPhase("closing"), 550);
            after(complete, 850);
        } else {
            after(() => setPhase("diagnostics"), 600);

            let logIndex = 0;
            logInterval = window.setInterval(() => {
                if (logIndex >= bootLogs.length) {
                    window.clearInterval(logInterval);
                    return;
                }

                const nextLog = bootLogs[logIndex];
                logIndex += 1;

                if (!nextLog) return;

                setVisibleLogs((previous) => [...previous, nextLog]);
            }, LOG_INTERVAL_MS);

            const logsDuration = bootLogs.length * LOG_INTERVAL_MS;

            after(() => setPhase("readouts"), 600 + logsDuration + 100);
            after(() => setPhase("ready"), 600 + logsDuration + 800);
            after(() => setPhase("closing"), 600 + logsDuration + 2000);
            after(complete, 600 + logsDuration + 2700);
        }

        return () => {
            timeouts.forEach(window.clearTimeout);

            if (logInterval) {
                window.clearInterval(logInterval);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reducedMotion]);

    const skip = () => {
        setPhase("closing");
        window.setTimeout(onComplete, 450);
    };

    return (
        <div
            className={`${styles.boot} ${
                phase === "closing" ? styles.closing : ""
            }`}
            role="status"
            aria-live="polite"
            aria-label="Terminal Boot Sequence"
        >
            <PortalOverlay />

            <button type="button" className={styles.skip} onClick={skip}>
                Skip intro <span aria-hidden="true">→</span>
            </button>

            <div className={styles.container}>
                {/* Terminal Window */}
                <div className={styles.terminalWindow}>
                    {/* Title bar */}
                    <div className={styles.titleBar}>
                        <div className={styles.trafficLights}>
                            <span className={styles.light} data-color="red" />
                            <span className={styles.light} data-color="yellow" />
                            <span className={styles.light} data-color="green" />
                        </div>
                        <span className={styles.windowTitle}>terminal.app</span>
                    </div>

                    {/* Terminal content */}
                    <div className={styles.terminalContent}>
                        {/* Welcome prompt */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className={styles.prompt}
                        >
                            $ whoami
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className={styles.output}
                        >
                            {profile.name}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className={styles.prompt}
                        >
                            $ cat bio.txt
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className={styles.output}
                        >
                            {profile.tagline}
                        </motion.div>

                        {/* Streaming logs */}
                        <AnimatePresence>
                            {phase === "diagnostics" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 1.2 }}
                                >
                                    <motion.div
                                        className={styles.prompt}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 1.2,
                                        }}
                                    >
                                        $ ./bootstrap.sh
                                    </motion.div>

                                    {visibleLogs
                                        .filter(Boolean)
                                        .map((log, index) => (
                                            <motion.div
                                                key={index}
                                                className={styles.logLine}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duration: 0.2,
                                                }}
                                            >
                                                <span
                                                    className={`${styles.tag} ${styles[`tag${log.tag}`]}`}
                                                >
                                                    [{log.tag}]
                                                </span>
                                                <span className={styles.text}>
                                                    {log.text}
                                                </span>
                                            </motion.div>
                                        ))}

                                    {phase === "diagnostics" ? (
                                        <span
                                            className={styles.cursor}
                                            aria-hidden="true"
                                        />
                                    ) : null}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Loading percentage */}
                        {(phase === "diagnostics" || phase === "readouts") && (
                            <motion.div
                                className={styles.loadingPercentage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 1.5 }}
                            >
                                <HudCore loading={true} />
                            </motion.div>
                        )}

                        {/* Ready message */}
                        <AnimatePresence>
                            {phase === "ready" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className={styles.readyMessage}
                                >
                                    <div className={styles.prompt}>
                                        $ sudo access --grant
                                    </div>
                                    <div className={styles.output}>
                                        Access granted. Welcome back.
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { profile } from "@/config/profile";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

import HudCore from "./HudCore";
import { bootLogs } from "./bootLogs";
import { bootReadouts } from "./bootReadouts";
import styles from "./BootScreen.module.css";

type BootScreenProps = {
    onComplete: () => void;
};

type Phase = "assemble" | "diagnostics" | "readouts" | "ready" | "closing";

const LOG_INTERVAL_MS = 220;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * JARVIS-style boot sequence shown once per session before the
 * dashboard is revealed. Runs on a fixed timeline (assemble → stream
 * diagnostics → surface live-looking readouts → grant access → iris
 * out) built from CSS/SVG animation so it stays light, and collapses
 * to a quick static fade for prefers-reduced-motion.
 */
export default function BootScreen({ onComplete }: BootScreenProps) {
    const reducedMotion = useRef(
        typeof window !== "undefined" &&
            window.matchMedia(REDUCED_MOTION_QUERY).matches
    ).current;

    const [phase, setPhase] = useState<Phase>("assemble");
    const [visibleLogs, setVisibleLogs] = useState<typeof bootLogs>([]);

    // `onComplete` (finishBoot from useBoot) is stable across renders,
    // but routing it through a ref means the timeline below is immune
    // either way — the effect that owns the interval only ever runs
    // once per real mount, never restarted by a parent re-render.
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
            after(() => setPhase("diagnostics"), 1150);

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

            after(() => setPhase("readouts"), 1150 + logsDuration + 150);
            after(() => setPhase("ready"), 1150 + logsDuration + 1100);
            after(() => setPhase("closing"), 1150 + logsDuration + 2500);
            after(complete, 1150 + logsDuration + 3200);
        }

        return () => {
            timeouts.forEach(window.clearTimeout);

            if (logInterval) {
                window.clearInterval(logInterval);
            }
        };
        // Intentionally runs once per real mount — the timeline owns
        // its own phase transitions rather than reacting to `phase`
        // changes, and `onComplete` is read via a ref (see above) so
        // an unstable prop identity can't restart it.
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
            aria-label="Loading Cloud Control Center"
        >
            <div className={styles.grid} aria-hidden="true" />
            <div className={styles.scanline} aria-hidden="true" />

            <span className={styles.frame} data-corner="tl" aria-hidden="true" />
            <span className={styles.frame} data-corner="tr" aria-hidden="true" />
            <span className={styles.frame} data-corner="bl" aria-hidden="true" />
            <span className={styles.frame} data-corner="br" aria-hidden="true" />

            <button type="button" className={styles.skip} onClick={skip}>
                Skip intro <span aria-hidden="true">→</span>
            </button>

            <div className={styles.stage}>
                <HudCore ready={phase === "ready"} />

                <div className={styles.titleBlock}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, letterSpacing: "0.5em" }}
                        animate={{ opacity: 1, letterSpacing: "0.1em" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Cloud Control Center
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Multi-cloud operations interface
                    </motion.p>
                </div>

                <div className={styles.terminal}>
                    {visibleLogs.filter(Boolean).map((log, index) => (
                        <p key={index} className={styles.logLine}>
                            <span
                                className={`${styles.tag} ${styles[`tag${log.tag}`]}`}
                            >
                                {log.tag}
                            </span>

                            {log.text}
                        </p>
                    ))}

                    {phase === "diagnostics" ? (
                        <span className={styles.cursor} aria-hidden="true" />
                    ) : null}
                </div>

                <AnimatePresence>
                    {phase === "readouts" || phase === "ready" ? (
                        <motion.div
                            className={styles.readouts}
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.1 },
                                },
                            }}
                        >
                            {bootReadouts.map((readout) => {
                                const Icon = readout.icon;

                                return (
                                    <motion.div
                                        key={readout.label}
                                        className={styles.readout}
                                        variants={{
                                            hidden: { opacity: 0, y: 8 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        <Icon
                                            size={14}
                                            className={styles.readoutIcon}
                                        />

                                        <span className={styles.readoutValue}>
                                            <AnimatedCounter
                                                end={readout.value}
                                                suffix={readout.suffix}
                                                decimals={readout.decimals ?? 0}
                                                duration={850}
                                            />
                                        </span>

                                        <span className={styles.readoutLabel}>
                                            {readout.label}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <AnimatePresence>
                    {phase === "ready" ? (
                        <motion.div
                            className={styles.welcome}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <span className={styles.accessGranted}>
                                Access granted
                            </span>

                            <p>Welcome back,</p>

                            <h2>{profile.name}</h2>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </div>
    );
}

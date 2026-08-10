import { memo, useMemo, type CSSProperties } from "react";

import styles from "./TextReveal.module.css";

type TextRevealProps = {
    text: string;
    className?: string;
    charDelayMs?: number;
    charDurationMs?: number;
    easing?: string;
    variant?: "glitch" | "loading" | "hybrid";
};

const GLITCH_SHIFT_PATTERN = [-0.11, -0.06, 0.02, 0.08, 0.12, -0.03] as const;
const LOADING_ANGLE_PATTERN = [-7, -4, 0, 3, 6, 10, 14, 18] as const;
const LOADING_DROP_PATTERN = [0.04, 0.02, 0, 0.03, 0.06, 0.1, 0.15, 0.21] as const;

const TextReveal = memo(function TextReveal({
    text,
    className,
    charDelayMs = 78,
    charDurationMs = 500,
    easing = "cubic-bezier(0.16, 1, 0.3, 1)",
    variant = "hybrid",
}: TextRevealProps) {
    const characters = useMemo(() => Array.from(text), [text]);

    const cssVariables = {
        "--char-duration-ms": `${charDurationMs}ms`,
        "--char-ease": easing,
    } as CSSProperties;

    return (
        <span
            className={[styles.reveal, className].filter(Boolean).join(" ")}
            style={cssVariables}
            data-variant={variant}
        >
            <span className={styles.srOnly}>{text}</span>
            <span className={styles.visual} aria-hidden="true">
                {characters.map((character, index) => (
                    <span
                        key={`${character}-${index}`}
                        className={`${styles.charWrap} ${character === " " ? styles.charSpace : ""}`}
                        style={
                            {
                                "--char-delay": `${index * charDelayMs}ms`,
                                "--glitch-shift": `${GLITCH_SHIFT_PATTERN[index % GLITCH_SHIFT_PATTERN.length]}em`,
                                "--char-angle": `${LOADING_ANGLE_PATTERN[index % LOADING_ANGLE_PATTERN.length]}deg`,
                                "--char-drop": `${LOADING_DROP_PATTERN[index % LOADING_DROP_PATTERN.length]}em`,
                            } as CSSProperties
                        }
                    >
                        <span className={styles.charBase}>{character === " " ? "\u00A0" : character}</span>
                        <span className={`${styles.charGhost} ${styles.charGhostCyan}`}>
                            {character === " " ? "\u00A0" : character}
                        </span>
                        <span className={`${styles.charGhost} ${styles.charGhostRed}`}>
                            {character === " " ? "\u00A0" : character}
                        </span>
                        <span className={styles.charScan}>
                            {character === " " ? "\u00A0" : character}
                        </span>
                    </span>
                ))}
            </span>
        </span>
    );
});

export default TextReveal;

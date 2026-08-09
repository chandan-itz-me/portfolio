import {
    useEffect,
    useRef,
} from "react";

import styles from "./TerminalOutput.module.css";

type Props = {
    history: {
        type: "input" | "output";
        text: string;
    }[];
};

export default function TerminalOutput({
    history,
}: Props) {
    const bottomRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [history]);

    return (
        <div className={styles.output}>
            {history.map(
                (line, index) => (
                    <div
                        key={index}
                        className={
                            line.type ===
                            "input"
                                ? styles.input
                                : styles.line
                        }
                    >
                        {line.type ===
                        "input"
                            ? `> ${line.text}`
                            : line.text}
                    </div>
                )
            )}

            <div ref={bottomRef} />
        </div>
    );
}
import { useRef, useState } from "react";

import styles from "./TerminalPrompt.module.css";

type Props = {
    onCommand: (command: string) => void;

    commandHistory: string[];

    historyIndex: number;

    setHistoryIndex: React.Dispatch<
        React.SetStateAction<number>
    >;

    commands: string[];
};

export default function TerminalPrompt({
    onCommand,
    commandHistory,
    historyIndex,
    setHistoryIndex,
    commands,
}: Props) {
    const [value, setValue] = useState("");

    const inputRef =
        useRef<HTMLInputElement>(null);

    function submit(
        e: React.FormEvent
    ) {
        e.preventDefault();

        if (!value.trim()) return;

        onCommand(value);

        setValue("");
    }

    function handleKeyDown(
        e: React.KeyboardEvent<HTMLInputElement>
    ) {
        if (e.key === "ArrowUp") {
            e.preventDefault();

            if (
                commandHistory.length === 0
            )
                return;

            const index =
                historyIndex === -1
                    ? commandHistory.length - 1
                    : Math.max(
                          historyIndex - 1,
                          0
                      );

            setHistoryIndex(index);

            setValue(
                commandHistory[index]
            );
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();

            if (
                historyIndex === -1
            )
                return;

            const index =
                Math.min(
                    historyIndex + 1,
                    commandHistory.length - 1
                );

            setHistoryIndex(index);

            setValue(
                commandHistory[index]
            );
        }

        if (e.key === "Tab") {
            e.preventDefault();

            const match =
                commands.find((cmd) =>
                    cmd.startsWith(
                        value.toLowerCase()
                    )
                );

            if (match) {
                setValue(match);
            }
        }
    }

    return (
        <form
            onSubmit={submit}
            className={styles.prompt}
        >
            <span className={styles.symbol}>
                &gt;
            </span>

            <input
                ref={inputRef}
                value={value}
                onChange={(e) =>
                    setValue(
                        e.target.value
                    )
                }
                onKeyDown={
                    handleKeyDown
                }
                autoFocus
                spellCheck={false}
            />
        </form>
    );
}
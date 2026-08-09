import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    commandRegistry,
    resolveRoute,
} from "../commands";

import TerminalOutput from "../TerminalOutput";
import TerminalPrompt from "../TerminalPrompt";

export interface TerminalLine {
    type: "input" | "output";
    text: string;
}

const initialHistory: TerminalLine[] = [
    {
        type: "output",
        text: "Cloud Control Center Terminal",
    },
    {
        type: "output",
        text: "Version 2.0.0",
    },
    {
        type: "output",
        text: "",
    },
    {
        type: "output",
        text: "Type 'help' to begin.",
    },
];

export default function TerminalEngine() {
    const navigate = useNavigate();

    const [history, setHistory] =
        useState<TerminalLine[]>(initialHistory);

    const [commandHistory, setCommandHistory] =
        useState<string[]>([]);

    const [historyIndex, setHistoryIndex] =
        useState(-1);

    const availableCommands = [
        ...commandRegistry.map(
            (command) => command.name
        ),
        "goto",
        "open",
        "clear",
    ];

    const execute = (command: string) => {
        const cmd = command.trim().toLowerCase();

        if (!cmd) {
            return;
        }

        setCommandHistory((previous) => [
            ...previous,
            cmd,
        ]);

        setHistoryIndex(-1);

        const updatedHistory: TerminalLine[] = [
            ...history,
            {
                type: "input",
                text: cmd,
            },
        ];

        if (cmd === "clear") {
            setHistory(initialHistory);
            return;
        }

        const route = resolveRoute(cmd);

        if (route) {
            updatedHistory.push({
                type: "output",
                text: `Opening ${route}...`,
            });

            setHistory(updatedHistory);

            navigate(route);

            return;
        }

        const registryCommand =
            commandRegistry.find(
                (command) =>
                    command.name === cmd ||
                    command.aliases?.includes(cmd)
            );

        if (registryCommand) {
            registryCommand.output.forEach(
                (line) => {
                    updatedHistory.push({
                        type: "output",
                        text: line,
                    });
                }
            );

            setHistory(updatedHistory);

            return;
        }

        updatedHistory.push({
            type: "output",
            text: `Unknown command: ${cmd}`,
        });

        updatedHistory.push({
            type: "output",
            text:
                "Type 'help' to see available commands.",
        });

        setHistory(updatedHistory);
    };

    return (
        <>
            <TerminalOutput history={history} />

            <TerminalPrompt
                onCommand={execute}
                commandHistory={commandHistory}
                historyIndex={historyIndex}
                setHistoryIndex={setHistoryIndex}
                commands={availableCommands}
            />
        </>
    );
}
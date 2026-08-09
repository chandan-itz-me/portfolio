import { useMemo } from "react";

import type { Command } from "./commands";
import { getPageCommands } from "./providers/pages";
import { getProjectCommands } from "./providers/projects";
import { getSkillCommands } from "./providers/skills";
import { getCertificationCommands } from "./providers/certifications";
import { getInfrastructureCommands } from "./providers/infrastructure";

const MAX_RESULTS = 8;

function matches(command: Command, query: string): boolean {
    const haystack = [command.label, command.description, command.group, ...(command.keywords ?? [])]
        .join(" ")
        .toLowerCase();

    return haystack.includes(query);
}

/**
 * Combines every command source once, then filters against the
 * current query on every keystroke. Page commands always win ties
 * (they're cheapest to act on), everything else follows in the
 * order its provider was registered.
 */
export function useCommandSearch(query: string) {
    const allCommands = useMemo<Command[]>(
        () => [
            ...getPageCommands(),
            ...getProjectCommands(),
            ...getSkillCommands(),
            ...getCertificationCommands(),
            ...getInfrastructureCommands(),
        ],
        []
    );

    const results = useMemo(() => {
        const trimmed = query.trim().toLowerCase();

        if (!trimmed) {
            return allCommands.filter((command) => command.group === "Navigate");
        }

        return allCommands
            .filter((command) => matches(command, trimmed))
            .slice(0, MAX_RESULTS);
    }, [allCommands, query]);

    return results;
}

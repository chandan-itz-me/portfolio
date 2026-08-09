import { commands } from "../commands";
import type { Command } from "../commands";

/** Static page-navigation entries — the base layer of the palette. */
export function getPageCommands(): Command[] {
    return commands;
}

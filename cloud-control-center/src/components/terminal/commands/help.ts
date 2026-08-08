import { commandRegistry } from "./registry";

export default [
    "Available Commands",
    "",
    ...commandRegistry.map(
        (command) =>
            `${command.name.padEnd(16)}${command.description}`
    ),
    "",
    "goto <page>",
    "open <page>",
    "clear",
];
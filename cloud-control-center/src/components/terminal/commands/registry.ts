export interface Command {
    name: string;
    aliases?: string[];
    description: string;
    output: string[];
}

import about from "./about";
import contact from "./contact";
import experience from "./experience";
import help from "./help";
import infrastructure from "./infrastructure";
import projects from "./projects";
import skills from "./skills";

export const commandRegistry: Command[] = [
    {
        name: "help",
        description: "Show available commands",
        output: help,
    },
    {
        name: "about",
        aliases: ["whoami"],
        description: "About me",
        output: about,
    },
    {
        name: "experience",
        aliases: ["exp"],
        description: "Professional experience",
        output: experience,
    },
    {
        name: "projects",
        aliases: ["proj"],
        description: "Project portfolio",
        output: projects,
    },
    {
        name: "skills",
        aliases: ["skill"],
        description: "Technical capabilities",
        output: skills,
    },
    {
        name: "infrastructure",
        aliases: ["infra"],
        description: "Infrastructure expertise",
        output: infrastructure,
    },
    {
        name: "contact",
        aliases: ["social"],
        description: "Contact information",
        output: contact,
    },
];
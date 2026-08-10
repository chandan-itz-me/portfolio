import type { NavigationItem } from "@/types/navigation";

export const navigation = [
    {
        label: "Home",
        path: "#home",
    },
    {
        label: "About",
        path: "#about",
    },
    {
        label: "Experience",
        path: "#experience",
    },
    {
        label: "Projects",
        path: "#projects",
    },
    {
        label: "Infrastructure",
        path: "#infrastructure",
    },
    {
        label: "Professional",
        path: "#professional",
    },
    {
        label: "Contact",
        path: "#contact",
    },
] as const satisfies readonly NavigationItem[];
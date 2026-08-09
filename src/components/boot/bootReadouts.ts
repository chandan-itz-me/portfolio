import { Activity, GitBranch, Globe, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type BootReadout = {
    icon: LucideIcon;
    label: string;
    value: number;
    suffix?: string;
    decimals?: number;
};

// Decorative HUD readouts shown while the boot sequence is running.
// Numbers are illustrative — they set the "live operations" tone the
// same way the Dashboard's metrics do, not a literal status feed.
export const bootReadouts: BootReadout[] = [
    { icon: Globe, label: "Regions Online", value: 6 },
    { icon: Server, label: "Nodes Active", value: 128 },
    { icon: GitBranch, label: "Pipelines Synced", value: 42 },
    {
        icon: Activity,
        label: "Platform Uptime",
        value: 99.98,
        suffix: "%",
        decimals: 2,
    },
];

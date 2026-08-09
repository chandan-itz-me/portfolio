export type BootLogTag = "BOOT" | "LINK" | "SYNC" | "SEC" | "OK";

export type BootLogEntry = {
    text: string;
    tag: BootLogTag;
};

export const bootLogs: BootLogEntry[] = [
    { text: "Initializing runtime kernel", tag: "BOOT" },
    { text: "Mounting component tree", tag: "OK" },
    { text: "Establishing link :: AWS us-east-1", tag: "LINK" },
    { text: "Establishing link :: Azure west-europe", tag: "LINK" },
    { text: "Establishing link :: GCP asia-south1", tag: "LINK" },
    { text: "Syncing Terraform state", tag: "SYNC" },
    { text: "Loading Kubernetes control plane", tag: "BOOT" },
    { text: "Verifying CI/CD pipelines", tag: "OK" },
    { text: "Running security policy scan", tag: "SEC" },
    { text: "Calibrating observability stack", tag: "SYNC" },
    { text: "All systems nominal", tag: "OK" },
];

export type BootLogEntry = {
    text: string;
    tag: "BOOT" | "LINK" | "SYNC" | "SEC" | "OK";
};

export const bootLogs: BootLogEntry[] = [
    { text: "Initializing runtime kernel", tag: "BOOT" },
    { text: "Mounting component tree", tag: "OK" },
    { text: "Loading AWS...", tag: "LINK" },
    { text: "Loading Azure...", tag: "LINK" },
    { text: "Loading Google Cloud Platform...", tag: "LINK" },
    { text: "Creating infrastructure", tag: "SYNC" },
    { text: "Developing pipelines", tag: "BOOT" },
    { text: "Executing Python & shell automation", tag: "OK" },
    { text: "Provisioning Kubernetes control plane", tag: "BOOT" },
    { text: "Verifying CI/CD pipelines", tag: "OK" },
    { text: "Running security policy scan", tag: "SEC" },
    { text: "Calibrating observability stack", tag: "SYNC" },
    { text: "All systems nominal", tag: "OK" },
];

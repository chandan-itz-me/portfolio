import { infrastructure } from "@/data/infrastructure";
import type { Command } from "../commands";

const PROVIDER_LABELS = {
    aws: "AWS",
    azure: "Azure",
    gcp: "GCP",
} as const;

/** Flattens every cloud service across providers into searchable entries. */
export function getInfrastructureCommands(): Command[] {
    return (Object.keys(infrastructure) as Array<keyof typeof infrastructure>).flatMap(
        (provider) =>
            infrastructure[provider].map((service) => ({
                id: `infra-${provider}-${service.id}`,
                label: service.name,
                description: `${PROVIDER_LABELS[provider]} · ${service.category}`,
                path: "/infrastructure",
                group: "Infrastructure",
                keywords: [PROVIDER_LABELS[provider], service.category, service.level],
            }))
    );
}

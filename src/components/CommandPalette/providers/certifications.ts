import { certifications } from "@/data/certifications";
import type { Command } from "../commands";

/** Surfaces each certification as a jump-to-Professional-page command. */
export function getCertificationCommands(): Command[] {
    return certifications.map((certification) => ({
        id: `certification-${certification.id}`,
        label: certification.title,
        description: `${certification.provider} · Issued ${certification.issued}`,
        path: "/#professional",
        group: "Certifications",
        keywords: [certification.provider],
    }));
}

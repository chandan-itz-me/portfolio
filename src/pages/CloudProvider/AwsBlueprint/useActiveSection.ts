import { useEffect, useState } from "react";

import type { SectionId } from "./nodeSpecs";

export function useActiveSection(ids: readonly SectionId[], threshold = 0.4) {
    const [activeSection, setActiveSection] = useState<SectionId>(ids[0]);

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);

        if (sections.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                let best: { id: SectionId; ratio: number } | null = null;

                for (const entry of entries) {
                    if (!entry.isIntersecting) {
                        continue;
                    }

                    const id = entry.target.id as SectionId;
                    const ratio = entry.intersectionRatio;

                    if (!best || ratio > best.ratio) {
                        best = { id, ratio };
                    }
                }

                if (best) {
                    setActiveSection(best.id);
                }
            },
            {
                threshold: [threshold, 0.6, 0.8],
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, [ids, threshold]);

    return activeSection;
}

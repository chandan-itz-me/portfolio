import type { SectionId } from "./nodeSpecs";

import styles from "./AwsBlueprintPage.module.css";

type SystemNavProps = {
    activeSection: SectionId;
    sections: readonly SectionId[];
};

export default function SystemNav({ activeSection, sections }: SystemNavProps) {
    return (
        <nav className={styles.sysnav} aria-label="AWS blueprint sections">
            {sections.map((section) => (
                <a
                    key={section}
                    href={`#${section}`}
                    data-active={activeSection === section}
                >
                    <span>{section}</span>
                </a>
            ))}
        </nav>
    );
}

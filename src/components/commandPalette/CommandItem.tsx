import { ChevronRight } from "lucide-react";

import type { Command } from "./commands";
import styles from "./CommandItem.module.css";

type CommandItemProps = {
    command: Command;
    active: boolean;
    onSelect: (command: Command) => void;
    onHover: () => void;
};

export default function CommandItem({
    command,
    active,
    onSelect,
    onHover,
}: CommandItemProps) {
    return (
        <li>
            <button
                type="button"
                className={`${styles.item} ${active ? styles.active : ""}`}
                onClick={() => onSelect(command)}
                onMouseEnter={onHover}
                role="option"
                aria-selected={active}
            >
                <span className={styles.text}>
                    <span className={styles.label}>{command.label}</span>

                    <span className={styles.description}>
                        {command.description}
                    </span>
                </span>

                <span className={styles.group}>{command.group}</span>

                <ChevronRight
                    size={16}
                    className={styles.chevron}
                />
            </button>
        </li>
    );
}

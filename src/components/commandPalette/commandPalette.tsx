import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";

import { fadeVariants } from "@/animations/fade";

import type { Command } from "./commands";
import { useCommandSearch } from "./useCommandSearch";
import CommandItem from "./CommandItem";
import styles from "./CommandPalette.module.css";

type CommandPaletteProps = {
    open: boolean;
    onClose: () => void;
};

/**
 * Global ⌘K / Ctrl+K search overlay. Searches across pages, projects,
 * skills, certifications, and infrastructure services, then routes to
 * the relevant page on selection. Mounted once in MainLayout; open
 * state and the keyboard shortcut live in useCommandPalette.
 */
export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const results = useCommandSearch(query);

    useEffect(() => {
        if (open) {
            setQuery("");
            setActiveIndex(0);
            window.setTimeout(() => inputRef.current?.focus(), 10);
        }
    }, [open]);

    useEffect(() => {
        setActiveIndex(0);
    }, [query]);

    useEffect(() => {
        if (!open) {
            return;
        }

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleSelect = (command: Command) => {
        navigate(command.path);
        onClose();
    };

    const handleKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            setActiveIndex((previous) => Math.min(previous + 1, results.length - 1));
            return;
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();
            setActiveIndex((previous) => Math.max(previous - 1, 0));
            return;
        }

        if (event.key === "Enter" && results[activeIndex]) {
            event.preventDefault();
            handleSelect(results[activeIndex]);
            return;
        }

        if (event.key === "Escape") {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {open ? (
                <motion.div
                    className={styles.backdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={styles.panel}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Command palette"
                        variants={fadeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className={styles.searchRow}>
                            <Search
                                size={18}
                                className={styles.searchIcon}
                            />

                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Search pages, projects, skills, infrastructure…"
                                className={styles.input}
                                aria-label="Search"
                            />

                            <kbd className={styles.escHint}>Esc</kbd>
                        </div>

                        <ul
                            className={styles.results}
                            role="listbox"
                        >
                            {results.length > 0 ? (
                                results.map((command, index) => (
                                    <CommandItem
                                        key={command.id}
                                        command={command}
                                        active={index === activeIndex}
                                        onSelect={handleSelect}
                                        onHover={() => setActiveIndex(index)}
                                    />
                                ))
                            ) : (
                                <li className={styles.empty}>
                                    No results for "{query}"
                                </li>
                            )}
                        </ul>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}

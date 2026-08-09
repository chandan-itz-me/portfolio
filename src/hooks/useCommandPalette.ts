import { useEffect, useState } from "react";

/**
 * Owns the command palette's open state and the global ⌘K / Ctrl+K
 * shortcut to toggle it. Kept separate from the CommandPalette
 * component itself so the trigger button in Navbar can share the
 * same state without prop-drilling through MainLayout.
 */
export function useCommandPalette() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

            if (isShortcut) {
                event.preventDefault();
                setOpen((previous) => !previous);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return {
        open,
        openPalette: () => setOpen(true),
        closePalette: () => setOpen(false),
    };
}

import { useCallback, useEffect, useState } from "react";

const SESSION_KEY = "ccc_boot_completed";

export function useBoot() {
    const [completed, setCompleted] = useState(() => {
        return sessionStorage.getItem(SESSION_KEY) === "true";
    });

    // Stable identities: BootScreen's boot timeline takes `finishBoot`
    // as an effect dependency, so a new function reference on every
    // render (the previous behavior) would restart that timeline
    // whenever AppInitializer re-rendered for any unrelated reason.
    const finishBoot = useCallback(() => {
        sessionStorage.setItem(SESSION_KEY, "true");
        setCompleted(true);
    }, []);

    const resetBoot = useCallback(() => {
        sessionStorage.removeItem(SESSION_KEY);
        setCompleted(false);
    }, []);

    useEffect(() => {
        const handleStorage = () => {
            setCompleted(sessionStorage.getItem(SESSION_KEY) === "true");
        };

        window.addEventListener("storage", handleStorage);

        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, []);

    return {
        completed,
        finishBoot,
        resetBoot,
    };
}
import { useEffect, useState } from "react";

const SESSION_KEY = "ccc_boot_completed";

export function useBoot() {
    const [completed, setCompleted] = useState(() => {
        return sessionStorage.getItem(SESSION_KEY) === "true";
    });

    const finishBoot = () => {
        sessionStorage.setItem(SESSION_KEY, "true");
        setCompleted(true);
    };

    const resetBoot = () => {
        sessionStorage.removeItem(SESSION_KEY);
        setCompleted(false);
    };

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
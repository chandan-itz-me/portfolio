import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import {
    ThemeContext,
    type Theme,
    type ThemeContextValue,
} from "./theme-context";

const STORAGE_KEY = "ccc_theme";

function getPreferredTheme(): Theme {
    if (typeof window === "undefined") {
        return "dark";
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored === "dark" || stored === "light") {
        return stored;
    }

    // Default to night theme for first-time visitors.
    return "dark";
}

type ThemeProviderProps = {
    children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(getPreferredTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const value = useMemo<ThemeContextValue>(
        () => ({
            theme,
            setTheme: setThemeState,
            toggleTheme: () => {
                setThemeState((previous) =>
                    previous === "dark" ? "light" : "dark"
                );
            },
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

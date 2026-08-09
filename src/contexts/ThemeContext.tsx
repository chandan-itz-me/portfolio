import { createContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Theme = "dark" | "light";

type ThemeContextValue = {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
};

const STORAGE_KEY = "ccc_theme";

export const ThemeContext = createContext<ThemeContextValue | null>(null);

function getPreferredTheme(): Theme {
    if (typeof window === "undefined") {
        return "dark";
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored === "dark" || stored === "light") {
        return stored;
    }

    const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
    ).matches;

    return prefersLight ? "light" : "dark";
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

    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: light)");

        const handleChange = (event: MediaQueryListEvent) => {
            const hasStoredPreference = window.localStorage.getItem(STORAGE_KEY);

            if (hasStoredPreference) {
                return;
            }

            setThemeState(event.matches ? "light" : "dark");
        };

        media.addEventListener("change", handleChange);

        return () => {
            media.removeEventListener("change", handleChange);
        };
    }, []);

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

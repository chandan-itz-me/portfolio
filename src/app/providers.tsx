import type { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

type ProvidersProps = {
    children: ReactNode;
};

function SmoothScrollBoundary({ children }: ProvidersProps) {
    useSmoothScroll();

    return children;
}

/**
 * Single composition point for every app-wide provider. Keeping this
 * separate from App.tsx means new global concerns (theme, smooth
 * scroll, future context providers) have one obvious place to live
 * instead of nesting further inside App.
 */
export default function Providers({ children }: ProvidersProps) {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <SmoothScrollBoundary>{children}</SmoothScrollBoundary>
            </ThemeProvider>
        </HelmetProvider>
    );
}

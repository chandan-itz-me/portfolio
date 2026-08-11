import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        const targetId = hash.replace("#", "").trim();

        if (!targetId) {
            // Scroll to top immediately for non-hash route changes.
            window.scrollTo(0, 0);
            return;
        }

        let attempts = 0;
        let frameId = 0;
        // Allow enough frames for route transitions and animated sections to mount.
        const maxAttempts = 180;

        const scrollToHashTarget = () => {
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({ behavior: "auto", block: "start" });
                return;
            }

            if (attempts < maxAttempts) {
                attempts += 1;
                frameId = window.requestAnimationFrame(scrollToHashTarget);
            }
        };

        frameId = window.requestAnimationFrame(scrollToHashTarget);

        return () => {
            window.cancelAnimationFrame(frameId);
        };
    }, [pathname, hash]);

    return null;
}
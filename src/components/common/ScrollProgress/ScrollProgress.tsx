import { useEffect, useRef } from "react";

import styles from "./ScrollProgress.module.css";

/**
 * Slim progress bar pinned to the top of the viewport, filling as the
 * user scrolls the page. Reads native scroll position directly (Lenis
 * keeps that position smooth already) and writes to a CSS variable
 * via rAF so it never triggers React re-renders on scroll.
 */
export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let frame = 0;

        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress = docHeight > 0 ? scrollTop / docHeight : 0;

            if (barRef.current) {
                barRef.current.style.transform = `scaleX(${progress})`;
            }

            frame = window.requestAnimationFrame(update);
        };

        frame = window.requestAnimationFrame(update);

        return () => {
            window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div
            className={styles.track}
            aria-hidden="true"
        >
            <div
                ref={barRef}
                className={styles.bar}
            />
        </div>
    );
}

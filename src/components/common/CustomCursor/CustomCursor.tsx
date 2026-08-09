import { useEffect, useRef } from "react";

import styles from "./CustomCursor.module.css";

const INTERACTIVE_SELECTOR =
    "a, button, input, textarea, select, [role='button'], label";

/**
 * Replaces the OS cursor with a glowing sphere that trails the
 * pointer with easing and blends into the aurora/particle backdrop
 * via mix-blend-mode: screen. Desktop-only (fine pointer) and skips
 * the trailing lerp for reduced motion.
 */
export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const orbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isFinePointer = window.matchMedia("(pointer: fine)").matches;

        if (!isFinePointer) {
            return;
        }

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const previousCursor = document.body.style.cursor;
        document.body.style.cursor = "none";

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let orbX = mouseX;
        let orbY = mouseY;
        let frameId = 0;

        function setDotPosition(x: number, y: number) {
            dotRef.current?.style.setProperty(
                "transform",
                `translate3d(${x}px, ${y}px, 0)`
            );
        }

        function setOrbPosition(x: number, y: number) {
            orbRef.current?.style.setProperty(
                "transform",
                `translate3d(${x}px, ${y}px, 0)`
            );
        }

        function handlePointerMove(event: PointerEvent) {
            mouseX = event.clientX;
            mouseY = event.clientY;

            setDotPosition(mouseX, mouseY);

            const target = event.target as HTMLElement | null;
            const hovering = Boolean(
                target?.closest(INTERACTIVE_SELECTOR)
            );

            orbRef.current?.classList.toggle(
                styles.orbActive,
                hovering
            );
        }

        function handlePointerDown() {
            orbRef.current?.classList.add(styles.orbPressed);
        }

        function handlePointerUp() {
            orbRef.current?.classList.remove(styles.orbPressed);
        }

        function handleLeaveWindow() {
            dotRef.current?.style.setProperty("opacity", "0");
            orbRef.current?.style.setProperty("opacity", "0");
        }

        function handleEnterWindow() {
            dotRef.current?.style.setProperty("opacity", "1");
            orbRef.current?.style.setProperty("opacity", "");
        }

        function animate() {
            orbX += (mouseX - orbX) * 0.18;
            orbY += (mouseY - orbY) * 0.18;

            setOrbPosition(orbX, orbY);

            frameId = requestAnimationFrame(animate);
        }

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerdown", handlePointerDown);
        window.addEventListener("pointerup", handlePointerUp);
        document.addEventListener("mouseleave", handleLeaveWindow);
        document.addEventListener("mouseenter", handleEnterWindow);

        if (reduceMotion) {
            setOrbPosition(mouseX, mouseY);
        } else {
            animate();
        }

        return () => {
            document.body.style.cursor = previousCursor;

            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("pointerup", handlePointerUp);
            document.removeEventListener("mouseleave", handleLeaveWindow);
            document.removeEventListener("mouseenter", handleEnterWindow);

            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <>
            <div
                ref={orbRef}
                className={styles.orb}
                aria-hidden="true"
            />

            <div
                ref={dotRef}
                className={styles.dot}
                aria-hidden="true"
            />
        </>
    );
}

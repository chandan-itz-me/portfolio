import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";
import gsap from "gsap";

import styles from "./MagneticButton.module.css";

type MagneticButtonProps = {
    children: ReactNode;
    className?: string;
    strength?: number;
};

/**
 * Wraps any interactive element and pulls it gently toward the
 * cursor on hover, snapping back with an elastic ease on leave.
 * A GSAP-driven micro-interaction, reused anywhere a CTA or button
 * should feel a little more alive. No-ops for touch/reduced-motion.
 */
export default function MagneticButton({
    children,
    className = "",
    strength = 0.4,
}: MagneticButtonProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
        if (prefersReducedMotion || !elementRef.current) {
            return;
        }

        const bounds = elementRef.current.getBoundingClientRect();
        const relativeX = event.clientX - bounds.left - bounds.width / 2;
        const relativeY = event.clientY - bounds.top - bounds.height / 2;

        gsap.to(elementRef.current, {
            x: relativeX * strength,
            y: relativeY * strength,
            duration: 0.5,
            ease: "power3.out",
        });
    };

    const handleMouseLeave = () => {
        if (!elementRef.current) {
            return;
        }

        gsap.to(elementRef.current, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.4)",
        });
    };

    return (
        <div
            ref={elementRef}
            className={`${styles.magnetic} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}

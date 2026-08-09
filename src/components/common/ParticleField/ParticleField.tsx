import { useEffect, useRef } from "react";

import styles from "./ParticleField.module.css";

type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
};

const PARTICLE_RGB = "0, 229, 255"; // --color-primary
const LINK_RGB = "56, 189, 248"; // --color-secondary
const LINK_DISTANCE = 130;
const CURSOR_RADIUS = 150;
const CURSOR_FORCE = 1.6;

/**
 * Fixed, decorative particle network mounted once in MainLayout.
 * Drifts continuously and gently flees the cursor (repulsion reads
 * better than attraction here — it avoids particles clumping into a
 * distracting blob over foreground text). Purely visual: aria-hidden,
 * pointer-events: none — cursor tracking uses a window listener instead.
 */
export default function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        let particles: Particle[] = [];
        let width = 0;
        let height = 0;
        let frameId = 0;

        const mouse = { x: -9999, y: -9999 };

        function createParticles() {
            const area = width * height;
            const count = Math.min(
                120,
                Math.max(36, Math.round(area / 16000))
            );

            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                radius: Math.random() * 1.6 + 0.6,
            }));
        }

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;

            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas!.width = width * dpr;
            canvas!.height = height * dpr;
            canvas!.style.width = `${width}px`;
            canvas!.style.height = `${height}px`;

            ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

            createParticles();
        }

        function handlePointerMove(event: PointerEvent) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        }

        function handlePointerLeave() {
            mouse.x = -9999;
            mouse.y = -9999;
        }

        function draw() {
            ctx!.clearRect(0, 0, width, height);

            for (const particle of particles) {
                particle.x += particle.vx;
                particle.y += particle.vy;

                const dx = particle.x - mouse.x;
                const dy = particle.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CURSOR_RADIUS && dist > 0.01) {
                    const force =
                        ((CURSOR_RADIUS - dist) / CURSOR_RADIUS) *
                        CURSOR_FORCE;

                    particle.x += (dx / dist) * force;
                    particle.y += (dy / dist) * force;
                }

                if (particle.x < -20) particle.x = width + 20;
                if (particle.x > width + 20) particle.x = -20;
                if (particle.y < -20) particle.y = height + 20;
                if (particle.y > height + 20) particle.y = -20;

                ctx!.beginPath();
                ctx!.arc(
                    particle.x,
                    particle.y,
                    particle.radius,
                    0,
                    Math.PI * 2
                );
                ctx!.fillStyle = `rgba(${PARTICLE_RGB}, 0.75)`;
                ctx!.fill();
            }

            for (let i = 0; i < particles.length; i += 1) {
                for (let j = i + 1; j < particles.length; j += 1) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < LINK_DISTANCE) {
                        ctx!.beginPath();
                        ctx!.strokeStyle = `rgba(${LINK_RGB}, ${
                            0.18 * (1 - dist / LINK_DISTANCE)
                        })`;
                        ctx!.lineWidth = 1;
                        ctx!.moveTo(a.x, a.y);
                        ctx!.lineTo(b.x, b.y);
                        ctx!.stroke();
                    }
                }
            }
        }

        function animate() {
            draw();
            frameId = requestAnimationFrame(animate);
        }

        resize();

        window.addEventListener("resize", resize);
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerleave", handlePointerLeave);

        if (reduceMotion) {
            draw();
        } else {
            animate();
        }

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener(
                "pointerleave",
                handlePointerLeave
            );
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={styles.canvas}
            aria-hidden="true"
        />
    );
}

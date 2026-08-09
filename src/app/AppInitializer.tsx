import { useEffect, type ReactNode } from "react";

import BootScreen from "@/components/boot/BootScreen";
import { useBoot } from "@/hooks/useBoot";

type AppInitializerProps = {
    children: ReactNode;
};

/**
 * Mounts the app underneath the boot overlay from the start (instead
 * of swapping one for the other) so the closing "iris" transition in
 * BootScreen has something real to reveal instead of cutting to a
 * blank frame. The overlay sits above at z-index 9999 and blocks
 * interaction until it finishes.
 */
export default function AppInitializer({
    children,
}: AppInitializerProps) {
    const { completed, finishBoot } = useBoot();

    useEffect(() => {
        document.body.style.overflow = completed ? "" : "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [completed]);

    return (
        <>
            {children}

            {!completed ? <BootScreen onComplete={finishBoot} /> : null}
        </>
    );
}

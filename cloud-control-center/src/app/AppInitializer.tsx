import type { ReactNode } from "react";

import BootScreen from "@/components/boot/BootScreen";
import { useBoot } from "@/hooks/useBoot";

type AppInitializerProps = {
    children: ReactNode;
};

export default function AppInitializer({
    children,
}: AppInitializerProps) {
    const {
        completed,
        finishBoot,
    } = useBoot();

    if (!completed) {
        return (
            <BootScreen
                onComplete={finishBoot}
            />
        );
    }

    return children;
}

// import type { ReactNode } from "react";

// type AppInitializerProps = {
//     children: ReactNode;
// };

// export default function AppInitializer({
//     children,
// }: AppInitializerProps) {
//     return children;
// }
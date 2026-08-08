import { useEffect, useState } from "react";

type AnimatedCounterProps = {
    end: number;
    duration?: number;
    suffix?: string;
    decimals?: number;
};

export default function AnimatedCounter({
    end,
    duration = 2000,
    suffix = "",
    decimals = 0,
}: AnimatedCounterProps) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;

        function animate(timestamp: number) {
            if (!startTime) {
                startTime = timestamp;
            }

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            );

            const current = end * progress;

            setValue(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }, [end, duration]);

    return (
        <>
            {value.toFixed(decimals)}
            {suffix}
        </>
    );
}
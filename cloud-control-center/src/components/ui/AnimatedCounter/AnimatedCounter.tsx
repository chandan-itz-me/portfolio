import {
    useEffect,
    useRef,
    useState,
} from "react";

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

    const [started, setStarted] =
        useState(false);

    const elementRef =
        useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer =
            new IntersectionObserver(
                ([entry]) => {
                    if (
                        entry.isIntersecting
                    ) {
                        setStarted(true);

                        observer.disconnect();
                    }
                },
                {
                    threshold: 0.35,
                }
            );

        if (elementRef.current) {
            observer.observe(
                elementRef.current
            );
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;

        let animationId = 0;

        let startTime: number | null =
            null;

        function animate(
            timestamp: number
        ) {
            if (!startTime) {
                startTime = timestamp;
            }

            const linearProgress = Math.min(
            (timestamp - startTime) /
            duration,
            1
        );

    const progress =
    1 -
    Math.pow(
        1 - linearProgress,
        3
    );

            setValue(end * progress);

            if (progress < 1) {
                animationId =
                    requestAnimationFrame(
                        animate
                    );
            }
        }

        animationId =
            requestAnimationFrame(
                animate
            );

        return () =>
            cancelAnimationFrame(
                animationId
            );
    }, [
        started,
        end,
        duration,
    ]);

    return (
        <span ref={elementRef}>
            {value.toFixed(decimals)}
            {suffix}
        </span>
    );
}
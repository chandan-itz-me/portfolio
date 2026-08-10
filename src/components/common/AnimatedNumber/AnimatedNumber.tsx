import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, animate } from "framer-motion";

interface AnimatedNumberProps {
    value: number;
    suffix?: string;
    className?: string;
}

export default function AnimatedNumber({ value, suffix = "", className = "" }: AnimatedNumberProps) {
    const motionValue = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState("0");
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useMotionValueEvent(motionValue, "change", (latest) => {
        setDisplayValue(Math.round(latest).toString());
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animate(motionValue, value, { duration: 2 });
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [motionValue, value]);

    return (
        <motion.span
            ref={ref}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {displayValue}
            {suffix}
        </motion.span>
    );
}

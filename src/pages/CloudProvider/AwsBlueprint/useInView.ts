import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
};

export function useInView<T extends HTMLElement>({
    threshold = 0.12,
    rootMargin = "0px",
    once = true,
}: UseInViewOptions = {}) {
    const ref = useRef<T | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);

                        if (once) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!once) {
                        setIsInView(false);
                    }
                });
            },
            {
                threshold,
                rootMargin,
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [once, rootMargin, threshold]);

    return {
        ref,
        isInView,
    };
}

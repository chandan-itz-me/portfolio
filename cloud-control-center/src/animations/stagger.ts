import type { Variants } from "framer-motion";

export const staggerContainer: Variants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
};
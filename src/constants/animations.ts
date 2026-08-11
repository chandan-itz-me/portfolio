import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.5,
        },
    },
};

export const slideInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -40,
    },

    visible: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const slideInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 40,
    },

    visible: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const slideInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const slideInTop: Variants = {
    hidden: {
        opacity: 0,
        y: -40,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const scaleUp: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },

    visible: {
        opacity: 1,
        scale: 1,

        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export const staggerContainer: Variants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export const staggerContainerSmall: Variants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};
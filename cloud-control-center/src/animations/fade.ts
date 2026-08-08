import type { Variants } from "framer-motion";

export const fadeVariants: Variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,

        transition: {
            duration: 0.5,
        },
    },
};
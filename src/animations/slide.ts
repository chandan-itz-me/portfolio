import type { Variants } from "framer-motion";

export const slideUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};
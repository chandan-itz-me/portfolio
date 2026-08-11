import { motion } from "framer-motion";

import styles from "./AboutMeHero.module.css";

type AboutMeHeroProps = {
    isVisible: boolean;
};

export default function AboutMeHero({ isVisible }: AboutMeHeroProps) {
    return (
        <section className={styles.hero}>
            <motion.h1
                className={styles.title}
                initial={{ opacity: 0, scale: 0.35 }}
                animate={isVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.35 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
                About Me
            </motion.h1>
        </section>
    );
}

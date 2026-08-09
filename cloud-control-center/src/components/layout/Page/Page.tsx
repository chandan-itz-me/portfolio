import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { pageVariants } from "@/animations/page";

import Container from "../Container";

import styles from "./Page.module.css";

type Props = {
    children: ReactNode;
    fluid?: boolean;
};

export default function Page({
    children,
    fluid = false,
}: Props) {
    return (
        <motion.main
            className={styles.page}
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {fluid ? (
                children
            ) : (
                <Container>
                    <div className={styles.stack}>{children}</div>
                </Container>
            )}
        </motion.main>
    );
}
import { motion } from "framer-motion";

import { profile } from "@/config/profile";

import {
    staggerContainer,
    staggerItem,
} from "@/animations/stagger";

import styles from "./ContactMethods.module.css";

const methods = [
    {
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
    },
    {
        label: "Phone",
        value: profile.phone,
        href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/chandan-itz-me",
        href: profile.linkedin,
    },
    {
        label: "Location",
        value: profile.location,
        href: null,
    },
] as const;

export default function ContactMethods() {
    return (
        <motion.div
            className={styles.grid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.25,
            }}
        >
            {methods.map((method) => {
                const content = (
                    <>
                        <span className={styles.label}>
                            {method.label.toUpperCase()}
                        </span>

                        <span className={styles.value}>
                            {method.value}
                        </span>
                    </>
                );

                return (
                    <motion.article
                        key={method.label}
                        variants={staggerItem}
                        className={styles.card}
                    >
                        {method.href ? (
                            <a
                                href={method.href}
                                target={
                                    method.href.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    method.href.startsWith("http")
                                        ? "noreferrer"
                                        : undefined
                                }
                                className={styles.link}
                            >
                                {content}
                            </a>
                        ) : (
                            <div className={styles.link}>
                                {content}
                            </div>
                        )}
                    </motion.article>
                );
            })}
        </motion.div>
    );
}

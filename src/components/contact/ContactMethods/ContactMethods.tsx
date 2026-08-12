import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import { profile } from "@/config/profile";
import { LinkedinIcon } from "@/components/icons/BrandIcons";

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
        icon: Mail,
    },
    {
        label: "Phone",
        value: profile.phone,
        href: `tel:${profile.phone.replace(/\s+/g, "")}`,
        icon: Phone,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/chandan-itz-me",
        href: profile.linkedin,
        icon: LinkedinIcon,
    },
    {
        label: "Location",
        value: profile.location,
        href: null,
        icon: MapPin,
    },
] as const;

export default function ContactMethods() {
    const emailMethod = methods[0];
    const secondaryMethods = methods.slice(1);

    const renderCard = (method: (typeof methods)[number], primary = false) => {
        const Icon = method.icon;
        const content = (
            <>
                <span className={styles.iconWrap} aria-hidden="true">
                    <Icon size={primary ? 26 : 19} strokeWidth={1.8} />
                </span>
                <span className={styles.copy}>
                    <span className={styles.label}>{method.label.toUpperCase()}</span>
                    <span className={styles.value}>{method.value}</span>
                </span>
            </>
        );

        return (
            <motion.article
                key={method.label}
                variants={staggerItem}
                className={`${styles.card} ${primary ? styles.primaryCard : styles.secondaryCard}`}
            >
                {method.href ? (
                    <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                        className={styles.link}
                    >
                        {content}
                    </a>
                ) : (
                    <div className={styles.link}>{content}</div>
                )}
            </motion.article>
        );
    };

    return (
        <motion.div
            className={styles.contactLayout}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.25,
            }}
        >
            {renderCard(emailMethod, true)}

            <div className={styles.secondaryGrid}>
                {secondaryMethods.map((method) => renderCard(method))}
            </div>
        </motion.div>
    );
}

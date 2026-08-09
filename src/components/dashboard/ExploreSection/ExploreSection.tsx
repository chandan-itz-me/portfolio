import { motion } from "framer-motion";

import SectionHeader from "@/components/common/SectionHeader";
import NavigationCard from "../NavigationCard";

import { staggerContainer } from "@/animations/stagger";

import styles from "./ExploreSection.module.css";

const destinations = [
    {
        title: "Experience",
        description:
            "A timeline of enterprise engagements across Azure, AWS, and Oracle Cloud.",
        to: "/experience",
    },
    {
        title: "Projects",
        description:
            "Infrastructure automation, CI/CD, and platform engineering delivered for real clients.",
        to: "/projects",
    },
    {
        title: "Infrastructure",
        description:
            "An interactive breakdown of cloud services used in production, by provider.",
        to: "/infrastructure",
    },
    {
        title: "Professional",
        description:
            "Technical skills, certifications, and education at a glance.",
        to: "/professional",
    },
    {
        title: "Terminal",
        description:
            "A command-line way to explore this site — type 'help' to begin.",
        to: "/terminal",
    },
    {
        title: "Contact",
        description:
            "Reach out directly by email, phone, or LinkedIn.",
        to: "/contact",
    },
];

export default function ExploreSection() {
    return (
        <section className={styles.section}>
            <SectionHeader
                title="Explore"
                subtitle="Jump to any section of the platform."
            />

            <motion.div
                className={styles.grid}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.15,
                }}
            >
                {destinations.map((item) => (
                    <NavigationCard
                        key={item.to}
                        title={item.title}
                        description={item.description}
                        to={item.to}
                    />
                ))}
            </motion.div>
        </section>
    );
}

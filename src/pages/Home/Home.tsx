import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Page from "@/components/layout/Page";
import { fadeUp, slideInLeft, slideInRight, slideInUp, scaleUp, staggerContainer } from "@/constants/animations";

import IdentityHero from "@/components/home/IdentityHero";
import AboutMeHero from "@/components/home/AboutMeHero";
import AboutMe from "@/components/home/AboutMe";
import ExperienceHero from "@/components/experience/ExperienceHero";
import CareerTimeline from "@/components/experience/CareerTimeline/CareerTimeline";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import InfrastructureHero from "@/components/infrastructure/InfrastructureHero";
import InfrastructureExplorer from "@/components/infrastructure/InfrastructureExplorer";

import ProfessionalHero from "@/components/professional/ProfessionalHero";
import ProfessionalTabs, { type ProfessionalTab } from "@/components/professional/ProfessionalTabs";
import SkillsSection from "@/components/professional/SkillsSection";
import CertificationsSection from "@/components/professional/CertificationsSection";
import LearningSection from "@/components/professional/LearningSection";

import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";

import styles from "./Home.module.css";

const sectionViewport = {
    once: false,
    amount: 0.3,
};

export default function Home() {
    const [activeTab, setActiveTab] = useState<ProfessionalTab>("skills");
    const aboutRef = useRef<HTMLElement>(null);
    const isAboutInView = useInView(aboutRef, { amount: 0.3 });

    return (
        <Page>
            <motion.section
                id="home"
                className={`${styles.section} ${styles.homeHero}`}
                variants={fadeUp as any}
                initial="hidden"
                animate="visible"
            >
                <IdentityHero />
            </motion.section>

            <section
                ref={aboutRef}
                id="about"
                className={styles.section}
            >
                <AboutMeHero isVisible={isAboutInView} />
                <AboutMe />
            </section>

            <motion.section
                id="experience"
                className={styles.section}
                variants={staggerContainer as any}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
            >
                <motion.div variants={slideInLeft as any}>
                    <ExperienceHero />
                </motion.div>
                <motion.div variants={slideInLeft as any}>
                    <CareerTimeline />
                </motion.div>
            </motion.section>

            <motion.section
                id="projects"
                className={styles.section}
                variants={scaleUp as any}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
            >
                <ProjectsHero />
                <p className={styles.sectionDescription}>
                    Every tile maps to a dedicated project route, making room for deeper
                    architecture notes, delivery narratives, and future expansion.
                </p>
                <ProjectGrid />
            </motion.section>

            <motion.section
                id="infrastructure"
                className={styles.section}
                variants={slideInRight as any}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
            >
                <InfrastructureHero />
                <p className={styles.sectionDescription}>
                    Explore AWS, Azure, and Google Cloud foundations with dedicated
                    provider pages designed for Terraform workflows, architecture diagrams,
                    security controls, networking, and observability patterns.
                </p>
                <InfrastructureExplorer />
            </motion.section>

            <motion.section
                id="professional"
                className={styles.section}
                variants={staggerContainer as any}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
            >
                <ProfessionalHero />

                <ProfessionalTabs
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />

                {activeTab === "skills" && <SkillsSection />}
                {activeTab === "certifications" && <CertificationsSection />}
                {activeTab === "learning" && <LearningSection />}
            </motion.section>

            <motion.section
                id="contact"
                className={styles.section}
                variants={slideInUp as any}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
            >
                <ContactHero />
                <ContactMethods />
            </motion.section>
        </Page>
    );
}
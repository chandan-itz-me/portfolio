import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

import Page from "@/components/layout/Page";
import { fadeUp, slideInRight, slideInUp, scaleUp, staggerContainer } from "@/constants/animations";

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
import { certifications } from "@/data/certifications";
import ProfessionalWebStage from "@/components/professional/ProfessionalWebStage/ProfessionalWebStage";

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

    useEffect(() => {
        certifications.forEach((certification) => {
            const image = new Image();
            image.src = `${import.meta.env.BASE_URL}certs/${encodeURIComponent(certification.logo)}`;
        });
    }, []);

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

            <section
                id="experience"
                className={styles.section}
            >
                <div>
                    <ExperienceHero />
                </div>
                <div>
                    <CareerTimeline />
                </div>
            </section>

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

                <ProfessionalWebStage>
                    <AnimatePresence mode="wait" initial={false}>
                            {activeTab === "skills" && (
                                <motion.div
                                    key="skills"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.22 }}
                                >
                                    <SkillsSection />
                                </motion.div>
                            )}
                            {activeTab === "certifications" && (
                                <motion.div
                                    key="certifications"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.22 }}
                                >
                                    <CertificationsSection />
                                </motion.div>
                            )}
                            {activeTab === "learning" && (
                                <motion.div
                                    key="learning"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.22 }}
                                >
                                    <LearningSection />
                                </motion.div>
                            )}
                        </AnimatePresence>
                </ProfessionalWebStage>
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
import { useState } from "react";

import Container from "@/components/layout/Container";

import ProfessionalHero from "@/components/professional/ProfessionalHero";
import ProfessionalTabs, {
    type ProfessionalTab,
} from "@/components/professional/ProfessionalTabs";

import SkillsSection from "@/components/professional/SkillsSection";
import CertificationsSection from "@/components/professional/CertificationsSection";
import LearningSection from "@/components/professional/LearningSection";

import styles from "./Professional.module.css";

export default function Professional() {
    const [activeTab, setActiveTab] =
        useState<ProfessionalTab>("skills");

    return (
        <section className={styles.page}>
            <Container>
                <ProfessionalHero />

                <ProfessionalTabs
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />

                {activeTab === "skills" && (
                    <SkillsSection />
                )}

                {activeTab ===
                    "certifications" && (
                    <CertificationsSection />
                )}

                {activeTab === "learning" && (
                    <LearningSection />
                )}
            </Container>
        </section>
    );
}
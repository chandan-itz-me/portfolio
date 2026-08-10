import ExperienceHero from "@/components/experience/ExperienceHero/ExperienceHero";
import CareerTimeline from "@/components/experience/CareerTimeline/CareerTimeline";
import Page from "@/components/layout/Page";  

export default function Experience() {
    return (
        <Page>
            <ExperienceHero />

            <CareerTimeline />
        </Page>
    );
}
import ExperienceHero from "@/components/experience/ExperienceHero/ExperienceHero";
import CareerTimeline from "@/components/experience/CareerTimeline/CareerTimeline";
// import Container from "@/components/layout/Container/Container";
import Page from "@/components/layout/Page";  

export default function Experience() {
    return (
        <Page>
            <ExperienceHero />

            <CareerTimeline />
        </Page>
    );
}
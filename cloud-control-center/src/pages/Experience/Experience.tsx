import ExperienceHero from "@/components/experience/ExperienceHero/ExperienceHero";
import CareerTimeline from "@/components/experience/CareerTimeline/CareerTimeline";
import Container from "@/components/layout/Container/Container";

export default function Experience() {
    return (
        <Container>
            <ExperienceHero />

            <CareerTimeline />
        </Container>
    );
}
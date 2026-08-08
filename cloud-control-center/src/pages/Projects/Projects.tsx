import Container from "@/components/layout/Container";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectsHero from "@/components/projects/ProjectsHero";

export default function Projects() {
    return (
        <Container>
            <ProjectsHero />

            <ProjectGrid />
        </Container>
    );
}
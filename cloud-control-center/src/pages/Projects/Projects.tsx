import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectsHero from "@/components/projects/ProjectsHero";
import Page from "@/components/layout/Page";

export default function Projects() {
    return (
        <Page>
            <ProjectsHero />

            <ProjectGrid />
        </Page>
    );
}
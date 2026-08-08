import DashboardHero from "@/components/dashboard/DashboardHero/DashboardHero";
import NavigationCard from "@/components/dashboard/NavigationCard/NavigationCard";
import StatusCard from "@/components/dashboard/StatusCard/StatusCard";
import Container from "@/components/layout/Container/Container";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
    return (
        <Container>

            <DashboardHero />

            <section className={styles.grid}>

                <StatusCard
                    title="AWS"
                    status="Online"
                />

                <StatusCard
                    title="Azure"
                    status="Ready"
                />

                <StatusCard
                    title="Terraform"
                    status="Active"
                />

                <StatusCard
                    title="CI/CD"
                    status="Healthy"
                />

            </section>

            <section>

                <h2 className={styles.heading}>
                    Explore
                </h2>

                <div className={styles.navigationGrid}>

                    <NavigationCard
                        title="Experience"
                        description="Professional journey and cloud engineering experience."
                        to="/experience"
                    />

                    <NavigationCard
                        title="Projects"
                        description="Production infrastructure and DevOps implementations."
                        to="/projects"
                    />

                    <NavigationCard
                        title="Infrastructure"
                        description="Architecture diagrams, AWS, Azure and Terraform."
                        to="/infrastructure"
                    />

                    <NavigationCard
                        title="Command Center"
                        description="Interactive console and deployment timeline."
                        to="/terminal"
                    />

                </div>

            </section>

        </Container>
    );
}
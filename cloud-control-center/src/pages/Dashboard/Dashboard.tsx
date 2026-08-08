import DashboardHero from "@/components/dashboard/DashboardHero/DashboardHero";
import MetricsGrid from "@/components/dashboard/Metrics/MetricsGrid";
import NavigationCard from "@/components/dashboard/NavigationCard/NavigationCard";

import OperationsOverview from "@/components/dashboard/OperationsOverview";
import InfrastructureHealth from "@/components/dashboard/InfrastructureHealth";
import CloudStatus from "@/components/dashboard/CloudStatus";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";

import Page from "@/components/layout/Page";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
    return (
        <Page>
            <DashboardHero />

            <OperationsOverview />

            <MetricsGrid />

            <section className={styles.operationsGrid}>
                <InfrastructureHealth />

                <CloudStatus />
            </section>

            <section className={styles.bottomGrid}>
                <RecentActivity />

                <QuickActions />
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
                        description="Architecture diagrams and cloud platforms."
                        to="/infrastructure"
                    />

                    <NavigationCard
                        title="Professional"
                        description="Skills, certifications and continuous learning."
                        to="/professional"
                    />

                    <NavigationCard
                        title="Command Center"
                        description="Interactive terminal and developer tools."
                        to="/terminal"
                    />

                    <NavigationCard
                        title="Contact"
                        description="Get in touch and connect with me."
                        to="/contact"
                    />
                </div>
            </section>
        </Page>
    );
}
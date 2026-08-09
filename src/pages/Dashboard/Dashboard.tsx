import DashboardHero from "@/components/dashboard/DashboardHero";
import OperationsOverview from "@/components/dashboard/OperationsOverview";
import DevOpsDashboard from "@/components/dashboard/DevOpsDashboard";
import InfrastructureHealth from "@/components/dashboard/InfrastructureHealth";
import CloudStatus from "@/components/dashboard/CloudStatus";
import RecentActivity from "@/components/dashboard/RecentActivity";

import Page from "@/components/layout/Page";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
    return (
        <Page>
            <DashboardHero />

            <OperationsOverview />

            <DevOpsDashboard />

            <section className={styles.operationsGrid}>
                <InfrastructureHealth />

                <CloudStatus />
            </section>

            <section className={styles.bottomGrid}>
                <RecentActivity />
            </section>
        </Page>
    );
}
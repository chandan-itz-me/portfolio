import { Activity, Cloud, BarChart3, Clock } from "lucide-react";

import DashboardHero from "@/components/dashboard/DashboardHero";
import OperationsOverview from "@/components/dashboard/OperationsOverview";
import DevOpsDashboard from "@/components/dashboard/DevOpsDashboard";
import InfrastructureHealth from "@/components/dashboard/InfrastructureHealth";
import CloudStatus from "@/components/dashboard/CloudStatus";
import RecentActivity from "@/components/dashboard/RecentActivity";
import SectionHeader from "@/components/common/SectionHeader";

import Page from "@/components/layout/Page";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
    return (
        <Page>
            <DashboardHero />

            {/* Overview Section */}
            <section className={styles.section}>
                <SectionHeader
                    icon={<Activity size={24} />}
                    title="Overview"
                    subtitle="Real-time key metrics and platform status"
                />
                <OperationsOverview />
            </section>

            {/* Performance Section */}
            <section className={styles.section}>
                <SectionHeader
                    icon={<BarChart3 size={24} />}
                    title="Performance"
                    subtitle="DevOps dashboards, sprint velocity, and reliability signals"
                />
                <DevOpsDashboard />
            </section>

            {/* Infrastructure Section */}
            <section className={styles.section}>
                <SectionHeader
                    icon={<Cloud size={24} />}
                    title="Infrastructure"
                    subtitle="Cloud resources and service health"
                />
                <div className={styles.infrastructureGrid}>
                    <InfrastructureHealth />
                    <CloudStatus />
                </div>
            </section>

            {/* Activity Section */}
            <section className={styles.section}>
                <SectionHeader
                    icon={<Clock size={24} />}
                    title="Recent Activity"
                    subtitle="Latest deployments and system events"
                />
                <RecentActivity />
            </section>
        </Page>
    );
}
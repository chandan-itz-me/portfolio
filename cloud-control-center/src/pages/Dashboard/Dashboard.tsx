import DashboardHero from "@/components/dashboard/DashboardHero";
import OperationsOverview from "@/components/dashboard/OperationsOverview";
import ExploreSection from "@/components/dashboard/ExploreSection";
import InfrastructureHealth from "@/components/dashboard/InfrastructureHealth";
import CloudStatus from "@/components/dashboard/CloudStatus";
import RecentActivity from "@/components/dashboard/RecentActivity";

import Page from "@/components/layout/Page";

import { dashboard } from "@/data/dashboard";

import Card from "@/components/common/Card";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
    return (
        <Page>
            <DashboardHero />

            <ExploreSection />

            <OperationsOverview />

            <section className={styles.metricsGrid}>
                {dashboard.metrics.map((metric) => (
                    <Card key={metric.label}>
                        <div className={styles.metricValue}>
                            <AnimatedCounter
                                end={metric.value}
                                suffix={metric.suffix}
                                decimals={
                                    metric.value % 1 !== 0 ? 1 : 0
                                }
                            />
                        </div>

                        <div className={styles.metricLabel}>
                            {metric.label}
                        </div>
                    </Card>
                ))}
            </section>

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
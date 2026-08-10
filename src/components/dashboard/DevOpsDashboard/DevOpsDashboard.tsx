import {
    Bar,
    BarChart,
    LineChart,
    Line,
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Legend,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import Card from "@/components/common/Card";
import ChartTooltip from "./ChartTooltip";
import { dashboard } from "@/data/dashboard";
import styles from "./DevOpsDashboard.module.css";

const AXIS_COLOR = "var(--color-text-secondary)";

export default function DevOpsDashboard() {
    const { dora, incidents } = dashboard;

    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {/* Deployment Frequency */}
                <Card className={styles.deploymentCard}>
                    <h3 className={styles.cardTitle}>
                        Deployment Frequency
                    </h3>
                    <p className={styles.cardSubtitle}>
                        Monthly average deployments (yearly)
                    </p>
                    <div className={styles.chartArea}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={dora.deploymentFrequency}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="var(--color-border)"
                                />
                                <XAxis
                                    dataKey="day"
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <YAxis
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <Tooltip
                                    content={<ChartTooltip />}
                                    cursor={{ fill: "rgba(34, 211, 238, 0.08)" }}
                                />
                                <Bar
                                    dataKey="deploys"
                                    name="Deployments"
                                    fill="var(--color-status-success)"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Change Failure Rate */}
                <Card className={styles.failureCard}>
                    <h3 className={styles.cardTitle}>
                        Change Failure Rate
                    </h3>
                    <p className={styles.cardSubtitle}>
                        % of deploys requiring remediation (yearly)
                    </p>
                    <div className={styles.chartArea}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dora.changeFailureRate}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="var(--color-border)"
                                />
                                <XAxis
                                    dataKey="week"
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <YAxis
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <Tooltip
                                    content={<ChartTooltip />}
                                    cursor={{ fill: "rgba(34, 211, 238, 0.08)" }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="rate"
                                    stroke="var(--color-status-warning)"
                                    strokeWidth={2}
                                    dot={{ fill: "var(--color-status-warning)", r: 4 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Lead Time for Changes */}
                <Card className={styles.leadTimeCard}>
                    <h3 className={styles.cardTitle}>
                        Lead Time for Changes
                    </h3>
                    <p className={styles.cardSubtitle}>
                        Commit to production in hours (yearly)
                    </p>
                    <div className={styles.chartArea}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={dora.leadTimeForChanges}>
                                <defs>
                                    <linearGradient
                                        id="leadTimeGradient"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="var(--color-status-info)"
                                            stopOpacity={0.6}
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="var(--color-status-info)"
                                            stopOpacity={0.1}
                                        />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="var(--color-border)"
                                />
                                <XAxis
                                    dataKey="sprint"
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <YAxis
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <Tooltip
                                    content={<ChartTooltip />}
                                    cursor={{ fill: "rgba(34, 211, 238, 0.08)" }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="hours"
                                    stroke="var(--color-status-info)"
                                    fill="url(#leadTimeGradient)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Mean Time to Recovery */}
                <Card className={styles.mttrCard}>
                    <h3 className={styles.cardTitle}>
                        Mean Time to Recovery
                    </h3>
                    <p className={styles.cardSubtitle}>
                        Minutes to restore service (yearly)
                    </p>
                    <div className={styles.chartArea}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dora.meanTimeToRecovery}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="var(--color-border)"
                                />
                                <XAxis
                                    dataKey="month"
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <YAxis
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <Tooltip
                                    content={<ChartTooltip />}
                                    cursor={{ fill: "rgba(34, 211, 238, 0.08)" }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="minutes"
                                    stroke="var(--color-status-info)"
                                    strokeWidth={2}
                                    dot={{ fill: "var(--color-status-info)", r: 4 }}
                                    name="MTTR (minutes)"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Pipeline Stages Success */}
                <Card className={styles.pipelineCard}>
                    <h3 className={styles.cardTitle}>
                        CI/CD Pipeline Success
                    </h3>
                    <p className={styles.cardSubtitle}>
                        Dev → Test → Prod success rates
                    </p>
                    <div className={styles.chartArea}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={dora.pipelineStages}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="var(--color-border)"
                                />
                                <XAxis
                                    dataKey="stage"
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <YAxis
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <Tooltip
                                    content={<ChartTooltip />}
                                    cursor={{ fill: "rgba(34, 211, 238, 0.08)" }}
                                />
                                <Legend />
                                <Bar
                                    dataKey="pass"
                                    name="Passed"
                                    fill="var(--color-status-success)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                    dataKey="fail"
                                    name="Failed"
                                    fill="var(--color-status-critical)"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Incidents by Severity */}
                <Card className={styles.incidentsCard}>
                    <h3 className={styles.cardTitle}>
                        Incidents by Severity
                    </h3>
                    <p className={styles.cardSubtitle}>
                        Sev1 / Sev2 / Sev3 trend
                    </p>
                    <div className={styles.chartArea}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={incidents.bySeverity}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="var(--color-border)"
                                />
                                <XAxis
                                    dataKey="date"
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <YAxis
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />
                                <Tooltip
                                    content={<ChartTooltip />}
                                    cursor={{ fill: "rgba(34, 211, 238, 0.08)" }}
                                />
                                <Legend />
                                <Area
                                    type="monotone"
                                    dataKey="sev1"
                                    name="Sev1 (Critical)"
                                    fill="var(--color-status-critical)"
                                    stroke="var(--color-status-critical)"
                                    stackId="1"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="sev2"
                                    name="Sev2 (High)"
                                    fill="var(--color-status-warning)"
                                    stroke="var(--color-status-warning)"
                                    stackId="1"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="sev3"
                                    name="Sev3 (Medium)"
                                    fill="var(--color-status-info)"
                                    stroke="var(--color-status-info)"
                                    stackId="1"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
        </section>
    );
}


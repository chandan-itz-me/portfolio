import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import Card from "@/components/common/Card";
import SectionHeader from "@/components/common/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

import { dashboard } from "@/data/dashboard";

import styles from "./DevOpsDashboard.module.css";

const AXIS_COLOR = "var(--color-text-secondary)";

const TOOLTIP_STYLE = {
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: 8,
    color: "var(--color-text-primary)",
    fontSize: 12,
};

const COVERAGE_SERIES = [
    { key: "passed", label: "Passed", color: "var(--color-warning)" },
    { key: "notRun", label: "Not Run", color: "#a855f7" },
    { key: "failed", label: "Failed", color: "var(--color-secondary)" },
    { key: "blocked", label: "Blocked", color: "var(--color-danger)" },
    {
        key: "notApplicable",
        label: "Not Applicable",
        color: "var(--color-primary)",
    },
] as const;

export default function DevOpsDashboard() {
    const { devops } = dashboard;

    return (
        <section className={styles.section}>
            <SectionHeader
                title="DevOps Dashboard"
                subtitle="A simulated view of the sprint, incident, and reliability signals I track day to day."
            />

            <div className={styles.grid}>
                <Card className={styles.kpiCard}>
                    {devops.kpis.map((kpi) => (
                        <div
                            key={kpi.label}
                            className={styles.kpiRow}
                        >
                            <span
                                className={styles.kpiSwatch}
                                style={{
                                    background: kpi.color,
                                }}
                            />

                            <div className={styles.kpiText}>
                                <span
                                    className={styles.kpiValue}
                                    style={{ color: kpi.color }}
                                >
                                    <AnimatedCounter
                                        end={kpi.value}
                                        suffix={
                                            kpi.suffix
                                                ? ` ${kpi.suffix}`
                                                : ""
                                        }
                                        decimals={
                                            kpi.value % 1 !== 0
                                                ? 1
                                                : 0
                                        }
                                    />
                                </span>

                                <span className={styles.kpiLabel}>
                                    {kpi.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </Card>

                <Card className={styles.velocityCard}>
                    <h3 className={styles.cardTitle}>
                        Sprint Velocity
                    </h3>

                    <div className={styles.chartArea}>
                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                        >
                            <BarChart data={[...devops.sprintVelocity]}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="var(--color-border)"
                                />

                                <XAxis
                                    dataKey="quarter"
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
                                    contentStyle={TOOLTIP_STYLE}
                                />

                                <Legend
                                    wrapperStyle={{
                                        fontSize: 12,
                                        color: AXIS_COLOR,
                                    }}
                                />

                                <Bar
                                    dataKey="planned"
                                    name="Planned"
                                    fill="var(--color-warning)"
                                    radius={[4, 4, 0, 0]}
                                />

                                <Bar
                                    dataKey="commitment"
                                    name="Commitment"
                                    fill="#a855f7"
                                    radius={[4, 4, 0, 0]}
                                />

                                <Bar
                                    dataKey="delivered"
                                    name="Delivered"
                                    fill="var(--color-secondary)"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card className={styles.issuesCard}>
                    <h3 className={styles.cardTitle}>
                        Incidents Per Day
                    </h3>

                    <div className={styles.chartArea}>
                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                        >
                            <BarChart
                                data={[...devops.incidentsPerDay]}
                                layout="vertical"
                                margin={{ left: 8 }}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="var(--color-border)"
                                />

                                <XAxis
                                    type="number"
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />

                                <YAxis
                                    type="category"
                                    dataKey="day"
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                    width={36}
                                />

                                <Tooltip
                                    contentStyle={TOOLTIP_STYLE}
                                />

                                <Bar
                                    dataKey="value"
                                    name="Incidents"
                                    radius={[0, 4, 4, 0]}
                                >
                                    {devops.incidentsPerDay.map(
                                        (entry, index) => (
                                            <Cell
                                                key={entry.day}
                                                fill={
                                                    [
                                                        "var(--color-warning)",
                                                        "#a855f7",
                                                        "var(--color-secondary)",
                                                    ][index % 3]
                                                }
                                            />
                                        )
                                    )}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card className={styles.errorCard}>
                    <h3 className={styles.cardTitle}>
                        Error Rate
                    </h3>

                    <p className={styles.cardSubtitle}>
                        1 hour ago (request headers &amp; hosts)
                    </p>

                    <div className={styles.errorList}>
                        {devops.errorRate.map((service, index) => (
                            <div
                                key={service.service}
                                className={styles.errorItem}
                            >
                                <div className={styles.errorTop}>
                                    <span>{service.service}</span>

                                    <span>{service.value}</span>
                                </div>

                                <div className={styles.errorTrack}>
                                    <div
                                        className={styles.errorFill}
                                        style={{
                                            width: `${
                                                (service.value / 50) *
                                                100
                                            }%`,
                                            background: [
                                                "var(--color-warning)",
                                                "#a855f7",
                                                "var(--color-secondary)",
                                            ][index % 3],
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className={styles.requestsCard}>
                    <h3 className={styles.cardTitle}>
                        Requests &amp; Errors Today
                    </h3>

                    <div className={styles.chartArea}>
                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                        >
                            <BarChart data={[...devops.requestsToday]}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="var(--color-border)"
                                />

                                <XAxis
                                    dataKey="time"
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
                                    contentStyle={TOOLTIP_STYLE}
                                />

                                <Bar
                                    dataKey="errors"
                                    name="Errors"
                                    fill="var(--color-secondary)"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card className={styles.coverageCard}>
                    <h3 className={styles.cardTitle}>
                        Test Coverage
                    </h3>

                    <div className={styles.chartArea}>
                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                        >
                            <BarChart
                                data={[...devops.testCoverage]}
                                layout="vertical"
                                margin={{ left: 8 }}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="var(--color-border)"
                                />

                                <XAxis
                                    type="number"
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                />

                                <YAxis
                                    type="category"
                                    dataKey="suite"
                                    stroke={AXIS_COLOR}
                                    tick={{ fill: AXIS_COLOR }}
                                    fontSize={12}
                                    width={100}
                                />

                                <Tooltip
                                    contentStyle={TOOLTIP_STYLE}
                                />

                                <Legend
                                    wrapperStyle={{
                                        fontSize: 12,
                                        color: AXIS_COLOR,
                                    }}
                                />

                                {COVERAGE_SERIES.map((series) => (
                                    <Bar
                                        key={series.key}
                                        dataKey={series.key}
                                        name={series.label}
                                        stackId="coverage"
                                        fill={series.color}
                                    />
                                ))}
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card className={styles.statusCard}>
                    <h3 className={styles.cardTitle}>
                        Incident Status
                    </h3>

                    <div className={styles.statusBody}>
                        <div className={styles.donutWrap}>
                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                            >
                                <PieChart>
                                    <Pie
                                        data={[
                                            ...devops.incidentStatus,
                                        ]}
                                        dataKey="value"
                                        nameKey="label"
                                        innerRadius="65%"
                                        outerRadius="100%"
                                        paddingAngle={2}
                                    >
                                        {devops.incidentStatus.map(
                                            (entry) => (
                                                <Cell
                                                    key={entry.label}
                                                    fill={entry.color}
                                                />
                                            )
                                        )}
                                    </Pie>

                                    <Tooltip
                                        contentStyle={TOOLTIP_STYLE}
                                    />
                                </PieChart>
                            </ResponsiveContainer>

                            <div className={styles.donutCenter}>
                                <span className={styles.donutValue}>
                                    <AnimatedCounter
                                        end={devops.incidentsTotal}
                                    />
                                </span>

                                <span className={styles.donutLabel}>
                                    Total Incidents
                                </span>
                            </div>
                        </div>

                        <ul className={styles.statusLegend}>
                            {devops.incidentStatus.map((entry) => (
                                <li key={entry.label}>
                                    <span
                                        className={styles.legendDot}
                                        style={{
                                            background: entry.color,
                                        }}
                                    />

                                    <span className={styles.legendLabel}>
                                        {entry.label}
                                    </span>

                                    <span className={styles.legendValue}>
                                        {entry.value}%
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            </div>
        </section>
    );
}

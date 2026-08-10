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
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ChartTooltip from "./ChartTooltip";

import { dashboard } from "@/data/dashboard";

import styles from "./DevOpsDashboard.module.css";

const AXIS_COLOR = "var(--color-text-secondary)";

const COVERAGE_SERIES = [
    { key: "passed", label: "Passed", color: "var(--color-status-success)" },
    { key: "notRun", label: "Not Run", color: "var(--color-status-analytics)" },
    { key: "failed", label: "Failed", color: "var(--color-status-warning)" },
    { key: "blocked", label: "Blocked", color: "var(--color-status-critical)" },
    {
        key: "notApplicable",
        label: "Not Applicable",
        color: "var(--color-status-info)",
    },
] as const;

export default function DevOpsDashboard() {
    const { devops } = dashboard;

    return (
        <section className={styles.section}>
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
                                <defs>
                                    <linearGradient id="gradient-planned" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="var(--color-status-info)" stopOpacity={1} />
                                        <stop offset="100%" stopColor="var(--color-status-info)" stopOpacity={0.6} />
                                    </linearGradient>
                                    <linearGradient id="gradient-commitment" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="var(--color-status-analytics)" stopOpacity={1} />
                                        <stop offset="100%" stopColor="var(--color-status-analytics)" stopOpacity={0.6} />
                                    </linearGradient>
                                    <linearGradient id="gradient-delivered" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="var(--color-status-success)" stopOpacity={1} />
                                        <stop offset="100%" stopColor="var(--color-status-success)" stopOpacity={0.6} />
                                    </linearGradient>
                                </defs>
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
                                    content={<ChartTooltip />}
                                    cursor={{ fill: "rgba(34, 211, 238, 0.08)" }}
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
                                    fill="url(#gradient-planned)"
                                    radius={[4, 4, 0, 0]}
                                />

                                <Bar
                                    dataKey="commitment"
                                    name="Commitment"
                                    fill="url(#gradient-commitment)"
                                    radius={[4, 4, 0, 0]}
                                />

                                <Bar
                                    dataKey="delivered"
                                    name="Delivered"
                                    fill="url(#gradient-delivered)"
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
                                    content={<ChartTooltip />}
                                    cursor={{ fill: "rgba(34, 211, 238, 0.08)" }}
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
                                                        "var(--color-status-warning)",
                                                        "var(--color-status-analytics)",
                                                        "var(--color-status-info)",
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
                                                "var(--color-status-warning)",
                                                "var(--color-status-analytics)",
                                                "var(--color-status-info)",
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
                                <defs>
                                    <linearGradient id="gradient-errors" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="var(--color-status-warning)" stopOpacity={1} />
                                        <stop offset="100%" stopColor="var(--color-status-warning)" stopOpacity={0.6} />
                                    </linearGradient>
                                </defs>
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
                                    content={<ChartTooltip />}
                                    cursor={{ fill: "rgba(34, 211, 238, 0.08)" }}
                                />

                                <Bar
                                    dataKey="errors"
                                    name="Errors"
                                    fill="url(#gradient-errors)"
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
                                <defs>
                                    <linearGradient id="gradient-passed" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="var(--color-status-success)" stopOpacity={1} />
                                        <stop offset="100%" stopColor="var(--color-status-success)" stopOpacity={0.6} />
                                    </linearGradient>
                                    <linearGradient id="gradient-notRun" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="var(--color-status-analytics)" stopOpacity={1} />
                                        <stop offset="100%" stopColor="var(--color-status-analytics)" stopOpacity={0.6} />
                                    </linearGradient>
                                    <linearGradient id="gradient-failed" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="var(--color-status-warning)" stopOpacity={1} />
                                        <stop offset="100%" stopColor="var(--color-status-warning)" stopOpacity={0.6} />
                                    </linearGradient>
                                    <linearGradient id="gradient-blocked" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="var(--color-status-critical)" stopOpacity={1} />
                                        <stop offset="100%" stopColor="var(--color-status-critical)" stopOpacity={0.6} />
                                    </linearGradient>
                                    <linearGradient id="gradient-notApplicable" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="var(--color-status-info)" stopOpacity={1} />
                                        <stop offset="100%" stopColor="var(--color-status-info)" stopOpacity={0.6} />
                                    </linearGradient>
                                </defs>
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
                                    content={<ChartTooltip />}
                                    cursor={{ fill: "rgba(34, 211, 238, 0.08)" }}
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
                                        fill={`url(#gradient-${series.key})`}
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
                                    <defs>
                                        <filter id="pieShadow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
                                        </filter>
                                    </defs>
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
                                        content={<ChartTooltip />}
                                        cursor={{ fill: "rgba(34, 211, 238, 0.08)" }}
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

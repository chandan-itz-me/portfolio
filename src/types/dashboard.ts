/* ===== KPI TYPES ===== */
export interface KpiMetric {
    label: string;
    value: number;
    suffix: string;
    target?: number;
    trend?: string;
    status: "success" | "warning" | "critical" | "info";
}

export interface IncidentKpi {
    label: string;
    value: number;
    breakdown: { sev1: number; sev2: number; sev3: number };
    status: "warning" | "success";
}

export interface KpiData {
    uptime: KpiMetric;
    deploymentFrequency: KpiMetric;
    mttr: KpiMetric;
    changeFailureRate: KpiMetric;
}

/* ===== MULTICLOUD TYPES ===== */
export interface CostProvider {
    provider: string;
    percentage: number;
    trend: string;
}

export interface ResourceMetric {
    provider: string;
    compute: number;
    storage: number;
    network: number;
}

export interface RegionLatency {
    region: string;
    aws: number;
    azure: number;
    gcp: number;
}

export interface CloudService {
    service: string;
    status: "healthy" | "warning" | "critical";
}

export interface MulticloudData {
    costByProvider: CostProvider[];
    resourceDistribution: ResourceMetric[];
    regionLatency: RegionLatency[];
    cloudServices: CloudService[];
}

/* ===== DORA METRICS TYPES ===== */
export interface DeploymentFrequency {
    day: string;
    deploys: number;
}

export interface ChangeFailureRate {
    week: string;
    rate: number;
}

export interface LeadTime {
    sprint: string;
    hours: number;
}

export interface PipelineStage {
    stage: string;
    pass: number;
    fail: number;
}

export interface MeanTimeToRecovery {
    month: string;
    minutes: number;
}

export interface DoraMetrics {
    deploymentFrequency: DeploymentFrequency[];
    changeFailureRate: ChangeFailureRate[];
    leadTimeForChanges: LeadTime[];
    pipelineStages: PipelineStage[];
    meanTimeToRecovery: MeanTimeToRecovery[];
}

/* ===== INCIDENT MANAGEMENT TYPES ===== */
export interface IncidentStatus {
    label: string;
    value: number;
    color: string;
}

export interface IncidentBySeverity {
    date: string;
    sev1: number;
    sev2: number;
    sev3: number;
}

export interface IncidentData {
    status: IncidentStatus[];
    bySeverity: IncidentBySeverity[];
}

/* ===== ACTIVITY TYPES ===== */
export interface ActivityItem {
    category: string;
    title: string;
}

/* ===== COMBINED DASHBOARD TYPES ===== */
export interface DashboardOverview {
    experience: string;
    clients: string;
    infrastructure: string;
    status: string;
}

export interface HealthMetric {
    name: string;
    value: number;
}

export interface CloudProviderStatus {
    provider: string;
    services: string;
    status: string;
}

export interface DashboardData {
    kpis: KpiData;
    multicloud: MulticloudData;
    dora: DoraMetrics;
    incidents: IncidentData;
    activity: ActivityItem[];
}
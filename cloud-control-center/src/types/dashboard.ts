export interface DashboardOverview {
    projects: number;
    experience: string;
    infrastructure: number;
    status: string;
}

export interface HealthMetric {
    name: string;
    value: number;
}

export interface CloudProviderStatus {
    provider: string;
    services: number;
    status: string;
}

export interface ActivityItem {
    time: string;
    title: string;
}

export interface DashboardData {
    overview: DashboardOverview;
    health: HealthMetric[];
    cloudProviders: CloudProviderStatus[];
    activity: ActivityItem[];
}
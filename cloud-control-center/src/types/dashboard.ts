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

export interface ActivityItem {
    category: string;
    title: string;
}

export interface DashboardData {
    overview: DashboardOverview;
    health: HealthMetric[];
    cloudProviders: CloudProviderStatus[];
    activity: ActivityItem[];
}
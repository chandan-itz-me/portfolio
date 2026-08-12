export interface NodeSpec {
    id: string;
    title: string;
    description: string;
}

export const nodeSpecs: Record<string, NodeSpec> = {
    dns: {
        id: "dns",
        title: "Cloud DNS",
        description: "Authoritative DNS hosting with policy routing to healthy global ingress endpoints.",
    },
    frontdoor: {
        id: "frontdoor",
        title: "Cloud CDN + HTTPS LB",
        description: "Global anycast ingress for TLS termination, edge caching, and backend health-based routing.",
    },
    waf: {
        id: "waf",
        title: "Cloud Armor WAF",
        description: "Managed layer-7 protection policy enforcing OWASP rules, bot mitigation, and rate limiting.",
    },
    appgw: {
        id: "appgw",
        title: "Global HTTPS Load Balancer",
        description: "Global layer-7 ingress with path-based routing to backend services in VPC networks.",
    },
    aks: {
        id: "aks",
        title: "GKE",
        description: "Managed Kubernetes platform for scalable containerized microservices.",
    },
    vmss: {
        id: "vmss",
        title: "Managed Instance Groups",
        description: "Autoscaling virtual machine pools for services that require host-level control.",
    },
    functions: {
        id: "functions",
        title: "Cloud Functions",
        description: "Event-driven serverless execution for background jobs, webhooks, and burst workloads.",
    },
    sql: {
        id: "sql",
        title: "Cloud SQL / AlloyDB",
        description: "Managed relational databases with zone redundancy, backups, and automated maintenance.",
    },
    redis: {
        id: "redis",
        title: "Memorystore (Redis)",
        description: "Low-latency cache tier reducing read pressure on transactional databases.",
    },
    blob: {
        id: "blob",
        title: "Cloud Storage",
        description: "Durable object storage for static assets, backups, and long-term retention policies.",
    },
    publicip: {
        id: "publicip",
        title: "Global LB + Cloud CDN",
        description: "Public ingress endpoint protected by Cloud Armor before traffic is distributed to regional backends.",
    },
    appgwweb: {
        id: "appgwweb",
        title: "Global HTTPS Load Balancer — Web Tier",
        description: "Global web ingress distributing requests across zonal backend instance groups and GKE ingress.",
    },
    natgw: {
        id: "natgw",
        title: "NAT Gateway",
        description: "Cloud NAT provides controlled outbound internet access for private subnets without inbound exposure.",
    },
    bastion: {
        id: "bastion",
        title: "IAP Bastion",
        description: "Browser-based secure administration path for private workloads without public VM exposure.",
    },
    vmssweb: {
        id: "vmssweb",
        title: "MIG / GKE Ingress Nodes",
        description: "Scalable web tier spread across zones and protected by firewall and WAF controls.",
    },
    ilbapp: {
        id: "ilbapp",
        title: "Internal Load Balancer",
        description: "Private layer-4 balancing between web and application tiers inside the VPC network.",
    },
    aksapp: {
        id: "aksapp",
        title: "GKE / Cloud Run",
        description: "Application tier running business logic, reachable only through internal routing paths.",
    },
    sqlprimary: {
        id: "sqlprimary",
        title: "Cloud SQL — Data Tier",
        description: "Zone-redundant relational data plane in isolated subnets with private endpoint connectivity.",
    },
};

export const architectureNodeRows = {
    edge: [
        { id: "dns", label: "Cloud DNS" },
        { id: "frontdoor", label: "Cloud CDN + HTTPS LB" },
        { id: "waf", label: "Cloud Armor WAF" },
        { id: "appgw", label: "Global HTTPS Load Balancer" },
    ],
    app: [
        { id: "aks", label: "GKE" },
        { id: "vmss", label: "Managed Instance Groups" },
        { id: "functions", label: "Cloud Functions" },
    ],
    data: [
        { id: "sql", label: "Cloud SQL / AlloyDB" },
        { id: "redis", label: "Memorystore (Redis)" },
        { id: "blob", label: "Cloud Storage" },
    ],
} as const;

export const topologyNodeRows = [
    { id: "publicip", label: "Global LB + Cloud CDN" },
    { id: "appgwweb", label: "Global HTTPS Load Balancer" },
    { id: "natgw", label: "NAT Gateway" },
    { id: "bastion", label: "IAP Bastion" },
    { id: "vmssweb", label: "MIG / GKE Nodes" },
    { id: "ilbapp", label: "Internal Load Balancer" },
    { id: "aksapp", label: "GKE / Cloud Run" },
    { id: "sqlprimary", label: "Cloud SQL (Primary)" },
] as const;

export const decisionItems = [
    {
        id: "multi-az",
        title: "Why multi-AZ?",
        body: "Zone-aware architecture removes single-datacenter dependency and improves availability under partial regional failures.",
    },
    {
        id: "iac",
        title: "Why Infrastructure as Code?",
        body: "Terraform and Cloud Deploy provide repeatable, policy-governed infrastructure definitions with reviewable change history.",
    },
    {
        id: "managed-services",
        title: "Why managed services?",
        body: "Managed Google Cloud services reduce patching and platform toil so teams focus on product and reliability outcomes.",
    },
    {
        id: "modular",
        title: "Why modular architecture?",
        body: "Reusable modules cut duplication and keep patterns consistent across environments.",
    },
    {
        id: "observability-first",
        title: "Why observability first?",
        body: "Telemetry from Cloud Monitoring, Cloud Logging, and distributed tracing accelerates diagnosis and incident response.",
    },
] as const;

export const sectionIds = [
    "overview",
    "architecture",
    "topology",
    "iac",
    "pipeline",
    "security",
    "observability",
    "decisions",
    "repository",
] as const;

export type SectionId = (typeof sectionIds)[number];


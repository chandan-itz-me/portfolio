export interface NodeSpec {
    id: string;
    title: string;
    description: string;
}

export const nodeSpecs: Record<string, NodeSpec> = {
    dns: {
        id: "dns",
        title: "Azure DNS",
        description: "Authoritative DNS hosting with traffic policies directing users to healthy regional front doors.",
    },
    frontdoor: {
        id: "frontdoor",
        title: "Azure Front Door",
        description: "Global anycast entry for TLS termination, edge routing, and origin health-based failover.",
    },
    waf: {
        id: "waf",
        title: "WAF Policy",
        description: "Managed layer-7 protection policy enforcing OWASP rules, bot mitigation, and rate limiting.",
    },
    appgw: {
        id: "appgw",
        title: "Application Gateway",
        description: "Regional ingress and path-based routing to backend pools in virtual networks.",
    },
    aks: {
        id: "aks",
        title: "AKS",
        description: "Managed Kubernetes platform for scalable containerized microservices.",
    },
    vmss: {
        id: "vmss",
        title: "VM Scale Sets",
        description: "Autoscaling virtual machine pools for services that require host-level control.",
    },
    functions: {
        id: "functions",
        title: "Azure Functions",
        description: "Event-driven serverless execution for background jobs, webhooks, and burst workloads.",
    },
    sql: {
        id: "sql",
        title: "Azure SQL / PostgreSQL",
        description: "Managed relational databases with zone redundancy, backups, and automated maintenance.",
    },
    redis: {
        id: "redis",
        title: "Azure Cache for Redis",
        description: "Low-latency cache tier reducing read pressure on transactional databases.",
    },
    blob: {
        id: "blob",
        title: "Blob Storage",
        description: "Durable object storage for static assets, backups, and long-term retention policies.",
    },
    publicip: {
        id: "publicip",
        title: "Public IP + Front Door",
        description: "Public ingress endpoint backed by Front Door and security policies before regional traffic distribution.",
    },
    appgwweb: {
        id: "appgwweb",
        title: "Application Gateway — Web Tier",
        description: "Regional web ingress distributing requests across web-tier nodes in multiple availability zones.",
    },
    natgw: {
        id: "natgw",
        title: "NAT Gateway",
        description: "Provides controlled outbound internet access for private subnets without exposing inbound paths.",
    },
    bastion: {
        id: "bastion",
        title: "Azure Bastion",
        description: "Browser-based secure administration path for private workloads without public VM exposure.",
    },
    vmssweb: {
        id: "vmssweb",
        title: "VMSS / AKS Ingress Nodes",
        description: "Scalable web tier spread across zones and protected by NSG and WAF controls.",
    },
    ilbapp: {
        id: "ilbapp",
        title: "Internal Load Balancer",
        description: "Private layer-4 balancing between web and application tiers inside the virtual network.",
    },
    aksapp: {
        id: "aksapp",
        title: "AKS / App Services",
        description: "Application tier running business logic, reachable only through internal routing paths.",
    },
    sqlprimary: {
        id: "sqlprimary",
        title: "Azure SQL — Data Tier",
        description: "Zone-redundant relational data plane in isolated subnets with private endpoint connectivity.",
    },
};

export const architectureNodeRows = {
    edge: [
        { id: "dns", label: "Azure DNS" },
        { id: "frontdoor", label: "Azure Front Door" },
        { id: "waf", label: "WAF Policy" },
        { id: "appgw", label: "Application Gateway" },
    ],
    app: [
        { id: "aks", label: "AKS" },
        { id: "vmss", label: "VM Scale Sets" },
        { id: "functions", label: "Azure Functions" },
    ],
    data: [
        { id: "sql", label: "Azure SQL / PostgreSQL" },
        { id: "redis", label: "Azure Cache for Redis" },
        { id: "blob", label: "Blob Storage" },
    ],
} as const;

export const topologyNodeRows = [
    { id: "publicip", label: "Public IP + Front Door" },
    { id: "appgwweb", label: "Application Gateway" },
    { id: "natgw", label: "NAT Gateway" },
    { id: "bastion", label: "Azure Bastion" },
    { id: "vmssweb", label: "VMSS / AKS Nodes" },
    { id: "ilbapp", label: "Internal Load Balancer" },
    { id: "aksapp", label: "AKS / App Services" },
    { id: "sqlprimary", label: "Azure SQL (Primary)" },
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
        body: "Terraform and Bicep provide repeatable, policy-governed infrastructure definitions with reviewable change history.",
    },
    {
        id: "managed-services",
        title: "Why managed services?",
        body: "Managed Azure services reduce patching and platform toil so teams focus on product and reliability outcomes.",
    },
    {
        id: "modular",
        title: "Why modular architecture?",
        body: "Reusable modules cut duplication and keep patterns consistent across environments.",
    },
    {
        id: "observability-first",
        title: "Why observability first?",
        body: "Telemetry from Azure Monitor, Log Analytics, and distributed tracing accelerates diagnosis and incident response.",
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

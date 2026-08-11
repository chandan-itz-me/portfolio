export interface NodeSpec {
    id: string;
    title: string;
    description: string;
}

export const nodeSpecs: Record<string, NodeSpec> = {
    route53: {
        id: "route53",
        title: "Route 53",
        description: "Authoritative DNS with health-checked failover routing to the healthiest endpoint.",
    },
    cloudfront: {
        id: "cloudfront",
        title: "CloudFront",
        description: "Global edge caching and TLS termination close to the user, reducing origin load.",
    },
    waf: {
        id: "waf",
        title: "WAF",
        description: "Layer 7 rule engine blocking common exploit patterns and bot traffic before it reaches the app.",
    },
    alb: {
        id: "alb",
        title: "Application Load Balancer",
        description: "Distributes incoming traffic across healthy targets inside the VPC.",
    },
    ecs: {
        id: "ecs",
        title: "ECS / EKS",
        description: "Container orchestration for long-running, horizontally scaled services.",
    },
    ec2: {
        id: "ec2",
        title: "EC2 Auto Scaling",
        description: "Virtual-machine workloads that scale out and in based on demand signals.",
    },
    lambda: {
        id: "lambda",
        title: "Lambda",
        description: "Event-driven functions for asynchronous work and low, spiky traffic paths.",
    },
    aurora: {
        id: "aurora",
        title: "Aurora / RDS",
        description: "Managed relational storage with automated backups and read replicas.",
    },
    elasticache: {
        id: "elasticache",
        title: "ElastiCache",
        description: "In-memory caching layer that reduces load on the primary database.",
    },
    s3: {
        id: "s3",
        title: "S3",
        description: "Durable object storage for static assets, backups, and long-term archives.",
    },
    igw: {
        id: "igw",
        title: "Internet Gateway",
        description: "Horizontally scaled, redundant gateway — the VPC's only path to and from the public internet.",
    },
    albweb: {
        id: "albweb",
        title: "ALB — Web Tier",
        description: "Internet-facing load balancer. Terminates public traffic and spreads it across web-tier EC2 instances in both AZs.",
    },
    natgw: {
        id: "natgw",
        title: "NAT Gateway",
        description: "Lets instances in private subnets reach the internet outbound for updates and API calls, without accepting inbound connections.",
    },
    bastion: {
        id: "bastion",
        title: "Bastion Host",
        description: "The only SSH entry point into private subnets — every other inbound path to the app tier is closed.",
    },
    ec2web: {
        id: "ec2web",
        title: "EC2 — Web Tier (ASG)",
        description: "Auto Scaling group of web servers spread across two AZs behind the public ALB, guarded by webserver-sg.",
    },
    alballapp: {
        id: "alballapp",
        title: "ALB — Application Tier",
        description: "Internal load balancer, reachable only from the web tier — never exposed to the internet.",
    },
    ec2app: {
        id: "ec2app",
        title: "EC2 — App Tier (ASG)",
        description: "Auto Scaling group running application logic, reachable only from the internal ALB and the bastion host.",
    },
    rds: {
        id: "rds",
        title: "RDS — Database Tier",
        description: "Multi-AZ relational database in fully isolated private subnets — no route to the NAT Gateway or Internet Gateway.",
    },
};

export const architectureNodeRows = {
    edge: [
        { id: "route53", label: "Route 53" },
        { id: "cloudfront", label: "CloudFront" },
        { id: "waf", label: "WAF" },
        { id: "alb", label: "Application Load Balancer" },
    ],
    app: [
        { id: "ecs", label: "ECS / EKS" },
        { id: "ec2", label: "EC2 Auto Scaling" },
        { id: "lambda", label: "Lambda" },
    ],
    data: [
        { id: "aurora", label: "Aurora / RDS" },
        { id: "elasticache", label: "ElastiCache" },
        { id: "s3", label: "S3" },
    ],
} as const;

export const topologyNodeRows = [
    { id: "igw", label: "Internet Gateway" },
    { id: "albweb", label: "Application Load Balancer" },
    { id: "natgw", label: "NAT Gateway" },
    { id: "bastion", label: "Bastion Host" },
    { id: "ec2web", label: "EC2 (ASG)" },
    { id: "alballapp", label: "Internal Load Balancer" },
    { id: "ec2app", label: "EC2 (ASG)" },
    { id: "rds", label: "RDS (Primary)" },
] as const;

export const decisionItems = [
    {
        id: "multi-az",
        title: "Why multi-AZ?",
        body: "Distributing workloads across Availability Zones removes dependence on a single failure domain.",
    },
    {
        id: "iac",
        title: "Why Infrastructure as Code?",
        body: "Terraform gives a repeatable, reviewable mechanism for defining infrastructure and managing change through version control.",
    },
    {
        id: "managed-services",
        title: "Why managed services?",
        body: "Managed services reduce administration overhead, freeing engineering time for workload capabilities.",
    },
    {
        id: "modular",
        title: "Why modular architecture?",
        body: "Reusable modules cut duplication and keep patterns consistent across environments.",
    },
    {
        id: "observability-first",
        title: "Why observability first?",
        body: "Early visibility into infrastructure and application behavior improves diagnosis and incident response.",
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

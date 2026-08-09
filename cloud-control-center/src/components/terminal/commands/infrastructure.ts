import { infrastructure } from "@/data/infrastructure";

export default [
    "AWS",
    ...infrastructure.aws.map(
        (service) => `  • ${service.name}`
    ),

    "",

    "Azure",
    ...infrastructure.azure.map(
        (service) => `  • ${service.name}`
    ),

    "",

    "Google Cloud",
    ...infrastructure.gcp.map(
        (service) => `  • ${service.name}`
    ),
];
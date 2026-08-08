import { useState } from "react";

import Container from "@/components/layout/Container";

import { infrastructure } from "@/data/infrastructure";

import CloudTabs from "@/components/infrastructure/CloudTabs";
import InfrastructureHero from "@/components/infrastructure/InfrastructureHero";
import ServiceGrid from "@/components/infrastructure/ServiceGrid";

type CloudProvider =
    | "aws"
    | "azure"
    | "gcp";

export default function Infrastructure() {

    const [cloud, setCloud] =
        useState<CloudProvider>("aws");

    return (
        <Container>

            <InfrastructureHero />

            <CloudTabs
                selected={cloud}
                onSelect={setCloud}
            />

            <ServiceGrid
                services={infrastructure[cloud]}
            />

        </Container>
    );
}
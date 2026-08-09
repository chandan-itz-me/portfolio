import { useEffect, useState } from "react";

import type {
    InfrastructureService,
} from "@/types/infrastructure";

import ServiceDetails from "../ServiceDetails";

import styles from "./ServiceGrid.module.css";

type ServiceGridProps = {
    services: InfrastructureService[];
};

export default function ServiceGrid({
    services,
}: ServiceGridProps) {
    const [selected, setSelected] = useState<InfrastructureService>(services[0]);

useEffect(() => {
    setSelected(services[0]);
}, [services]);

    return (
        <>
            <section className={styles.grid}>
                {services.map((service) => (
                    <article
                        key={service.id}
                        className={`${styles.card} ${
                            selected.id === service.id
                                ? styles.active
                                : ""
                        }`}
                        onClick={() =>
                        setSelected(service)
                    }
                    >
                        <h3>{service.name}</h3>

                        <p className={styles.category}>
                            {service.category}
                        </p>
                    </article>
                ))}
            </section>

            <ServiceDetails
                title={selected.name}
                description={selected.description}
                projects={selected.projects}
                experience={selected.experience}
                level={selected.level}
            />
        </>
    );
}
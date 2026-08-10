import { dashboard } from "@/data/dashboard";

import styles from "./InfrastructureHealth.module.css";

export default function InfrastructureHealth() {
    const { cloudServices } = dashboard.multicloud;

    const getStatusColor = (status: string) => {
        switch (status) {
            case "healthy":
                return "var(--color-status-success)";
            case "warning":
                return "var(--color-status-warning)";
            case "critical":
                return "var(--color-status-critical)";
            default:
                return "var(--color-text-secondary)";
        }
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                Cloud Services Health
            </h2>

            <div className={styles.card}>
                {cloudServices.map((service) => (
                    <div
                        key={service.service}
                        className={styles.serviceRow}
                    >
                        <span className={styles.serviceName}>
                            {service.service}
                        </span>

                        <div className={styles.statusIndicator}>
                            <span
                                className={styles.dot}
                                style={{
                                    background: getStatusColor(
                                        service.status
                                    ),
                                }}
                            />
                            <span className={styles.statusLabel}>
                                {service.status.charAt(0).toUpperCase() +
                                    service.status.slice(1)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
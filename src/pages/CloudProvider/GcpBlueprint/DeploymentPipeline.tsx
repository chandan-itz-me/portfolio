import { useState } from "react";
import styles from "./GcpBlueprintPage.module.css";

const pipelineNodes = [
    {
        title: "SOURCE",
        items: ["Feature branch", "Pull request"],
    },
    {
        title: "VALIDATE",
        items: ["Tests", "Static analysis", "Dependency checks"],
    },
    {
        title: "BUILD",
        items: ["Versioned artifact"],
    },
    {
        title: "INFRASTRUCTURE",
        items: ["Terraform plan", "Policy checks", "Approval"],
    },
    {
        title: "DEPLOY",
        items: ["Development", "Test", "Production"],
    },
    {
        title: "VERIFY",
        items: ["Health checks", "Monitoring"],
    },
] as const;

const deploymentStrategies = [
    {
        id: "rolling",
        label: "Rolling",
        definition: "Replaces instances in small batches to keep most of the service available while gradually shifting traffic.",
    },
    {
        id: "blue-green",
        label: "Blue / Green",
        definition: "Runs old and new environments side-by-side, then flips traffic to the new stack after validation.",
    },
    {
        id: "canary",
        label: "Canary",
        definition: "Routes a small percentage of production traffic to the new version first, then expands after success checks.",
    },
    {
        id: "progressive",
        label: "Progressive Delivery",
        definition: "Uses policy gates and telemetry-driven rollouts so releases advance only when health and SLO signals pass.",
    },
    {
        id: "shadow",
        label: "Shadow",
        definition: "Mirrors live production requests to a new version without impacting users, enabling realistic validation before cutover.",
    },
    {
        id: "ab-testing",
        label: "A/B Testing",
        definition: "Splits traffic between variants to compare business or UX outcomes and promote the better-performing release path.",
    },
] as const;

export default function DeploymentPipeline() {
    const [activeStrategyId, setActiveStrategyId] = useState<string>(deploymentStrategies[0].id);
    const activeStrategy = deploymentStrategies.find((strategy) => strategy.id === activeStrategyId) ?? deploymentStrategies[0];

    return (
        <>
            <div className={styles.pipeline}>
                {pipelineNodes.map((node, index) => (
                    <div key={`${node.title}-group`} className={styles.pipelineGroup}>
                        <div
                            className={styles.plNode}
                            style={{ ["--pl-index" as string]: index }}
                        >
                            <h4>{node.title}</h4>
                            <ul>
                                {node.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        {index < pipelineNodes.length - 1 ? (
                            <div
                                className={styles.plArrow}
                                style={{ ["--pl-index" as string]: index }}
                            >
                                →
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>

            <div className={styles.strategyRow}>
                {deploymentStrategies.map((strategy) => {
                    const isActive = strategy.id === activeStrategyId;
                    return (
                        <button
                            key={strategy.id}
                            type="button"
                            className={styles.signal}
                            data-active={isActive ? "true" : "false"}
                            onClick={() => setActiveStrategyId(strategy.id)}
                            aria-pressed={isActive}
                            aria-controls="deployment-strategy-definition"
                        >
                            {strategy.label}
                        </button>
                    );
                })}
            </div>

            <div
                id="deployment-strategy-definition"
                className={styles.strategyDefinition}
                role="status"
                aria-live="polite"
            >
                <span className={styles.strategyDefinitionLabel}>{activeStrategy.label}</span>
                <p>{activeStrategy.definition}</p>
            </div>
        </>
    );
}




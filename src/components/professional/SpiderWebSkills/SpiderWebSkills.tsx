import { useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { skills } from "@/data/skills";
import type { Skill } from "@/types/skills";
import { useTheme } from "@/hooks/useTheme";

import styles from "./SpiderWebSkills.module.css";

// Levels map to a color for visual emphasis
const LEVEL_CONFIG: Record<Skill["level"], { color: string; bgColor: string }> = {
    Advanced: {
        color: "var(--color-success)",
        bgColor: "rgba(34, 197, 94, .1)",
    },
    Intermediate: {
        color: "var(--color-secondary)",
        bgColor: "rgba(245, 158, 11, .1)",
    },
    Learning: {
        color: "var(--color-accent)",
        bgColor: "var(--color-accent-soft)",
    },
};

const NODE_POSITIONS: Record<string, { x: number; y: number }> = {
    "Cloud Platforms": { x: 72, y: 18 },
    "Core Azure Services": { x: 50, y: 12 },
    "Core AWS Services": { x: 20, y: 12 },
    "Programming & Scripting": { x: 18, y: 30 },
    "Security & Identity": { x: 38, y: 35 },
    "Monitoring & Observability": { x: 48, y: 74 },
    "Infrastructure as Code": { x: 78, y: 48 },
    "Containers & Orchestration": { x: 70, y: 66 },
    "CI/CD & DevOps": { x: 24, y: 48 },
    "Collaboration & Design": { x: 30, y: 68 },
    Databases: { x: 14, y: 56 },
    "Operating Systems": { x: 66, y: 38 },
};

const SPIDER_HUB = { x: 21, y: 50 };

export default function SpiderWebSkills() {
    const [expandedNode, setExpandedNode] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const webAsset = `${import.meta.env.BASE_URL}spiderweb.png`;

    useEffect(() => {
        const closeOnOutsidePointer = (event: PointerEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setExpandedNode(null);
            }
        };

        document.addEventListener("pointerdown", closeOnOutsidePointer);

        return () => {
            document.removeEventListener("pointerdown", closeOnOutsidePointer);
        };
    }, []);

    const webNodes = useMemo(() => {
        return skills.map((category, index) => ({
            id: category.title,
            title: category.title,
            position: NODE_POSITIONS[category.title] ?? {
                x: 50 + Math.cos(index) * 30,
                y: 50 + Math.sin(index) * 30,
            },
            dropdownPlacement:
                (NODE_POSITIONS[category.title]?.y ?? 50) > 55
                    ? "above"
                    : "below",
            dropdownAlignment:
                (NODE_POSITIONS[category.title]?.x ?? 50) < 28
                    ? "left"
                    : (NODE_POSITIONS[category.title]?.x ?? 50) > 72
                      ? "right"
                      : "center",
            isExpanded: expandedNode === category.title,
        }));
    }, [expandedNode]);

    const toggleNode = (nodeId: string) => {
        setExpandedNode((currentNode) =>
            currentNode === nodeId ? null : nodeId
        );
    };

    const closeOnStagePointer = (event: ReactPointerEvent<HTMLDivElement>) => {
        const target = event.target as Element;

        if (!target.closest("button, [data-skills-dropdown]")) {
            setExpandedNode(null);
        }
    };

    const getPositionStyle = (x: number, y: number) => {
        return {
            left: `${x}%`,
            top: `${y}%`,
        };
    };

    return (
        <div ref={containerRef} className={styles.container}>
            <div
                className={styles.webContainer}
                onPointerDown={closeOnStagePointer}
            >
                {/* Background spiderweb image */}
                <img
                    className={styles.webBackground}
                    src={webAsset}
                    alt=""
                    aria-hidden="true"
                    style={{
                        filter:
                            theme === "dark"
                                ? "brightness(0) invert(1) drop-shadow(0 -4px 30px rgba(168, 85, 247, 0.58)) drop-shadow(0 -7px 64px rgba(168, 85, 247, 0.22))"
                                : "brightness(0) invert(1) drop-shadow(0 0 30px rgba(217, 119, 6, 0.9)) drop-shadow(0 0 64px rgba(217, 119, 6, 0.45))",
                    }}
                />

                <img
                    className={styles.spider}
                    src={`${import.meta.env.BASE_URL}spider.png`}
                    alt=""
                    aria-hidden="true"
                />

                {/* SVG overlay for animated threads only */}
                <svg
                    className={styles.threadsSvg}
                    viewBox="0 0 700 700"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                >
                    {/* Animated threads from expanded nodes */}
                    <AnimatePresence>
                        {expandedNode && (() => {
                            const node = webNodes.find((n) => n.id === expandedNode);
                            if (!node) return null;

                            const fromX = (node.position.x / 100) * 700;
                            const fromY = (node.position.y / 100) * 700;
                            const spiderX = (SPIDER_HUB.x / 100) * 700;
                            const spiderY = (SPIDER_HUB.y / 100) * 700;
                            const deltaX = fromX - spiderX;
                            const deltaY = fromY - spiderY;
                            const gravityDrop = Math.min(
                                52,
                                24 + Math.abs(deltaX) * 0.08
                            );
                            const controlOneX = spiderX + deltaX * 0.3;
                            const controlOneY =
                                spiderY + deltaY * 0.3 + gravityDrop;
                            const controlTwoX = spiderX + deltaX * 0.72;
                            const controlTwoY =
                                spiderY + deltaY * 0.72 + gravityDrop;

                            return (
                                <motion.path
                                    key={`thread-${expandedNode}`}
                                    d={`M ${spiderX} ${spiderY} C ${controlOneX} ${controlOneY}, ${controlTwoX} ${controlTwoY}, ${fromX} ${fromY}`}
                                    stroke={theme === "dark" ? "#a855f7" : "#d97706"}
                                    strokeWidth="2.5"
                                    strokeDasharray="9 7"
                                    strokeLinecap="round"
                                    fill="none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.72, pathLength: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.45 }}
                                />
                            );
                        })()}
                    </AnimatePresence>
                </svg>

                {/* Category nodes */}
                <div className={styles.nodesContainer}>
                    {webNodes.map((node) => {
                        const category = skills.find(
                            (s) => s.title === node.id
                        )!;

                        return (
                            <motion.div
                                key={node.id}
                                className={`${styles.node} ${
                                    node.isExpanded ? styles.nodeExpanded : ""
                                }`}
                                style={getPositionStyle(
                                    node.position.x,
                                    node.position.y
                                )}
                                animate={{
                                    scale: node.isExpanded ? 1.1 : 1,
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            >
                                <button
                                    className={`${styles.nodeButton} ${
                                        node.isExpanded ? styles.nodeButtonActive : ""
                                    }`}
                                    onClick={() => toggleNode(node.id)}
                                    aria-expanded={node.isExpanded}
                                    aria-label={`Toggle ${node.title} skills`}
                                >
                                    <div className={styles.nodeLabel}>
                                        {node.title}
                                    </div>
                                    <div className={styles.nodeCount}>
                                        {category.skills.length}
                                    </div>
                                </button>

                                {/* Expanded skills */}
                                <AnimatePresence>
                                    {node.isExpanded && (
                                        <motion.div
                                            className={`${styles.skillsDropdown} ${styles[node.dropdownPlacement]} ${styles[node.dropdownAlignment]} ${category.skills.length > 10 ? styles.largeDropdown : ""}`}
                                            data-skills-dropdown
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className={styles.skillsList}>
                                                {category.skills.map((skill, index) => {
                                                    const config =
                                                        LEVEL_CONFIG[skill.level];

                                                    return (
                                                        <motion.div
                                                            key={skill.name}
                                                            className={
                                                                styles.skillItem
                                                            }
                                                            initial={{ opacity: 0, x: -8 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{
                                                                duration: 0.2,
                                                                delay: index * 0.05,
                                                            }}
                                                        >
                                                            {/* Thread connector */}
                                                            <div
                                                                className={
                                                                    styles.threadConnector
                                                                }
                                                                style={{
                                                                    background: config.color,
                                                                }}
                                                            />

                                                            <div
                                                                className={
                                                                    styles.skillContent
                                                                }
                                                            >
                                                                <span
                                                                    className={
                                                                        styles.skillName
                                                                    }
                                                                >
                                                                    {skill.name}
                                                                </span>

                                                                <span
                                                                    className={`${styles.level} ${styles[skill.level.toLowerCase()]}`}
                                                                    style={{
                                                                        color: config.color,
                                                                        background:
                                                                            config.bgColor,
                                                                    }}
                                                                >
                                                                    {skill.level}
                                                                </span>
                                                            </div>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

import { useEffect, useRef, useState, type WheelEventHandler } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
    AnsibleIcon,
    AwsIcon,
    AzureIcon,
    DockerIcon,
    GcpIcon,
    GithubActionsIcon,
    GrafanaIcon,
    JenkinsIcon,
    KubernetesIcon,
    PrometheusIcon,
    TerraformIcon,
} from "@/components/icons/BrandIcons";

import MagneticButton from "@/components/ui/MagneticButton/MagneticButton";
import TextReveal from "@/components/common/TextReveal";
import { profile } from "@/config/profile";

import styles from "./IdentityHero.module.css";

const roles = [
    "DevOps Developer",
    "Multi-Cloud Engineer",
    "Platform Engineer",
    "Coder",
    "Technical Writer",
] as const;

const floatingLogos = [
    { label: "AWS", className: "aws", icon: AwsIcon },
    { label: "Azure", className: "azure", icon: AzureIcon },
    { label: "Google Cloud", className: "gcp", icon: GcpIcon },
    { label: "Terraform", className: "terraform", icon: TerraformIcon },
    { label: "Kubernetes", className: "kubernetes", icon: KubernetesIcon },
    { label: "Docker", className: "docker", icon: DockerIcon },
    { label: "Jenkins", className: "jenkins", icon: JenkinsIcon },
    { label: "GitHub Actions", className: "githubActions", icon: GithubActionsIcon },
    { label: "Prometheus", className: "prometheus", icon: PrometheusIcon },
    { label: "Grafana", className: "grafana", icon: GrafanaIcon },
    { label: "Ansible", className: "ansible", icon: AnsibleIcon },
] as const;

const CHARACTER_STAGGER_MS = 78;
const CHARACTER_DURATION_MS = 500;
const WORD_PAUSE_MS = 700;
const MIN_REVEAL_MS = 1000;
const MAX_REVEAL_MS = 2000;

export default function IdentityHero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const prefersReducedMotion = useReducedMotion();
    const isSnappingRef = useRef(false);
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.72], [1, 0.94]);
    const activeRole = roles[roleIndex];

    useEffect(() => {
        const visibleCharacterCount = activeRole.replace(/\s+/g, "").length;
        const revealDuration = prefersReducedMotion
            ? MIN_REVEAL_MS
            : Math.min(
                MAX_REVEAL_MS,
                Math.max(
                    MIN_REVEAL_MS,
                    visibleCharacterCount * CHARACTER_STAGGER_MS + CHARACTER_DURATION_MS,
                ),
            );

        const timeout = window.setTimeout(() => {
            setRoleIndex((previous) => (previous + 1) % roles.length);
        }, revealDuration + WORD_PAUSE_MS);

        return () => {
            window.clearTimeout(timeout);
        };
    }, [activeRole, prefersReducedMotion]);

    const handleWheelScroll: WheelEventHandler<HTMLElement> = (event) => {
        if (event.deltaY <= 0 || isSnappingRef.current) {
            return;
        }

        const aboutSection = document.getElementById("about");

        if (!aboutSection) {
            return;
        }

        isSnappingRef.current = true;
        aboutSection.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
        });

        window.setTimeout(() => {
            isSnappingRef.current = false;
        }, 700);
    };

    return (
        <motion.section
            ref={heroRef}
            className={styles.hero}
            style={prefersReducedMotion ? undefined : { opacity: heroOpacity, scale: heroScale }}
            onWheel={handleWheelScroll}
        >
            <p className={styles.cornerText}>Welcome User Let Me Introduce Myself</p>

            <div className={styles.logoField} aria-hidden="true">
                {floatingLogos.map((logo, index) => {
                    const LogoIcon = logo.icon;

                    return (
                        <motion.div
                            key={logo.label}
                            className={`${styles.logoBadge} ${styles[logo.className]}`}
                            animate={
                                prefersReducedMotion
                                    ? undefined
                                    : {
                                        y: [0, -10, 0],
                                        x: [0, index % 2 === 0 ? 6 : -6, 0],
                                        rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                                    }
                            }
                            transition={{
                                duration: 5 + (index % 3),
                                delay: index * 0.14,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <LogoIcon size={16} />
                        </motion.div>
                    );
                })}
            </div>

            <div className={styles.content}>
                <div className={styles.roleWrapper} aria-live="polite" aria-atomic="true">
                    <p className={styles.role}>
                        <TextReveal
                            key={activeRole}
                            text={activeRole}
                            charDelayMs={prefersReducedMotion ? 0 : CHARACTER_STAGGER_MS}
                            charDurationMs={prefersReducedMotion ? 0 : CHARACTER_DURATION_MS}
                            variant="hybrid"
                            className={styles.roleText}
                        />
                    </p>
                </div>

                <div className={styles.actions}>
                    <MagneticButton>
                        <Link to="/#contact" className={styles.primaryAction}>
                            Let us connect
                        </Link>
                    </MagneticButton>

                    <MagneticButton>
                        <a
                            href={profile.resume}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.secondaryAction}
                        >
                            View Resume
                        </a>
                    </MagneticButton>
                </div>
            </div>
        </motion.section>
    );
}

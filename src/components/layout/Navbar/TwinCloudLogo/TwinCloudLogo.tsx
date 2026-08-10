import { useTheme } from "@/hooks/useTheme";
import styles from "./TwinCloudLogo.module.css";

export default function TwinCloudLogo() {
    const { theme } = useTheme();

    return (
        <svg
            className={styles.logo}
            viewBox="0 0 120 80"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Twin Cloud Logo"
        >
            {/* Define gradients */}
            <defs>
                {/* Left Cloud */}
                <linearGradient id="leftCloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgba(255, 255, 255, 0.9)", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "rgba(255, 255, 255, 0.7)", stopOpacity: 1 }} />
                </linearGradient>

                {/* Right Cloud */}
                <linearGradient id="rightCloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgba(255, 255, 255, 0.85)", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "rgba(255, 255, 255, 0.65)", stopOpacity: 1 }} />
                </linearGradient>

                {/* Sun gradient (light theme) */}
                <radialGradient id="sunGradient">
                    <stop offset="0%" style={{ stopColor: "#FCD34D", stopOpacity: 1 }} />
                    <stop offset="70%" style={{ stopColor: "#F59E0B", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#D97706", stopOpacity: 0.8 }} />
                </radialGradient>

                {/* Moon gradient (dark theme) */}
                <radialGradient id="moonGradient">
                    <stop offset="0%" style={{ stopColor: "#FEFCE8", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#FEF08A", stopOpacity: 0.9 }} />
                </radialGradient>

                {/* Filter for subtle shadow/glow */}
                <filter id="softGlow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Left Cloud - rounded, soft shape */}
            <g filter="url(#softGlow)">
                <path
                    d="M 20 45 C 15 45 10 50 10 56 C 10 62 15 67 22 67 C 25 67 28 66 30 64 C 32 62 33 59 33 56 C 33 48 27 42 20 42 Z"
                    fill="url(#leftCloudGradient)"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="0.5"
                />
            </g>

            {/* Right Cloud - rounded, soft shape */}
            <g filter="url(#softGlow)">
                <path
                    d="M 90 50 C 85 50 80 54 78 60 C 75 58 72 57 68 57 C 60 57 54 63 54 70 C 54 77 60 83 68 83 C 72 83 76 81 78 79 C 80 81 84 82 88 82 C 97 82 104 75 104 66 C 104 58 97 50 90 50 Z"
                    fill="url(#rightCloudGradient)"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="0.5"
                />
            </g>

            {/* Sun/Moon - centered between clouds with smooth transition */}
            <g className={theme === "dark" ? styles.moonGroup : styles.sunGroup}>
                {/* Sun (visible in light theme) */}
                <circle
                    cx="60"
                    cy="50"
                    r="14"
                    fill="url(#sunGradient)"
                    className={styles.celestialBody}
                    opacity={theme === "light" ? 1 : 0}
                />

                {/* Sun rays (light theme only) */}
                <g className={styles.sunRays} opacity={theme === "light" ? 1 : 0}>
                    {/* Top ray */}
                    <line x1="60" y1="30" x2="60" y2="22" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Top-right ray */}
                    <line x1="74" y1="36" x2="80" y2="30" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Right ray */}
                    <line x1="80" y1="50" x2="88" y2="50" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Bottom-right ray */}
                    <line x1="74" y1="64" x2="80" y2="70" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                </g>

                {/* Moon (visible in dark theme) */}
                <circle
                    cx="60"
                    cy="50"
                    r="14"
                    fill="url(#moonGradient)"
                    className={styles.celestialBody}
                    opacity={theme === "dark" ? 1 : 0}
                />

                {/* Crescent moon indentation (dark theme only) */}
                <circle
                    cx="67"
                    cy="46"
                    r="13"
                    fill="rgba(10, 16, 28, 0.95)"
                    className={styles.moonIndent}
                    opacity={theme === "dark" ? 1 : 0}
                />

                {/* Subtle moon glow (dark theme only) */}
                <circle
                    cx="60"
                    cy="50"
                    r="16"
                    fill="none"
                    stroke="#FEF08A"
                    strokeWidth="0.8"
                    opacity={theme === "dark" ? 0.3 : 0}
                    className={styles.moonGlow}
                />
            </g>
        </svg>
    );
}

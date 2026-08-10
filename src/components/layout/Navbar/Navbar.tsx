import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, Moon, Sun, X } from "lucide-react";

import Container from "../Container/Container";
import TwinCloudLogo from "./TwinCloudLogo/TwinCloudLogo";
import { navigation } from "@/config/navigation";
import { useTheme } from "@/hooks/useTheme";
import MagneticButton from "@/components/ui/MagneticButton/MagneticButton";

import styles from "./Navbar.module.css";

type NavbarProps = {
    onOpenPalette: () => void;
};

export default function Navbar({ onOpenPalette }: NavbarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activePath, setActivePath] = useState(
        typeof window !== "undefined" && window.location.hash
            ? window.location.hash
            : "#home"
    );
    const { theme, toggleTheme } = useTheme();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Map routes to their corresponding nav sections
        if (pathname.startsWith("/projects/")) {
            setActivePath("#projects");
        } else if (pathname.startsWith("/infrastructure/")) {
            setActivePath("#infrastructure");
        } else if (pathname === "/") {
            // Keep existing hash-based logic for home page
        } else {
            setActivePath("#home");
        }
    }, [pathname]);

    useEffect(() => {
        const handleHashChange = () => {
            setActivePath(window.location.hash || "#home");
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    useEffect(() => {
        if (pathname !== "/") {
            return;
        }

        const sections: Array<{ path: string; element: HTMLElement; top: number }> = [];

        navigation.forEach((item) => {
            const element = document.getElementById(item.path.slice(1));

            if (element) {
                sections.push({
                    path: item.path,
                    element,
                    top: element.getBoundingClientRect().top + window.scrollY,
                });
            }
        });

        if (sections.length === 0) {
            return;
        }

        const handleScroll = () => {
            const currentScroll = window.scrollY + window.innerHeight * 0.3;

            // Find the section you've scrolled past (most recent one)
            let activeSection = sections[0];

            for (let i = sections.length - 1; i >= 0; i--) {
                if (currentScroll >= sections[i].top) {
                    activeSection = sections[i];
                    break;
                }
            }

            setActivePath(activeSection.path);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    useEffect(() => {
        let frame = 0;

        const update = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = maxScroll > 0
                ? Math.round((window.scrollY / maxScroll) * 100)
                : 0;

            setScrollProgress(progress);
            frame = window.requestAnimationFrame(update);
        };

        frame = window.requestAnimationFrame(update);

        return () => {
            window.cancelAnimationFrame(frame);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const scrollToSection = (path: string) => {
        const targetId = path.replace("#", "");

        if (targetId === "home") {
            window.history.replaceState(null, "", window.location.pathname + window.location.search);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            setActivePath("#home");
            return;
        }

        const section = document.getElementById(targetId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            window.history.replaceState(null, "", `${window.location.pathname}#${targetId}`);
            setActivePath(path);
        }
    };

    const handleNavigate = (path: string) => {
        setMobileOpen(false);

        if (pathname !== "/") {
            navigate("/");
            // Wait for route to complete before scrolling
            setTimeout(() => scrollToSection(path), 50);
            return;
        }

        scrollToSection(path);
    };

    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <button
                        type="button"
                        onClick={() => handleNavigate("#home")}
                        className={styles.logo}
                    >
                        <div className={styles.logoMark}>
                            <TwinCloudLogo />
                        </div>

                        <span>Chandan Padal</span>
                    </button>

                    <div className={styles.scrollMeta} aria-live="polite">
                        <span className={styles.scrollLabel}>SCROLL</span>
                        <span className={styles.scrollValue}>{scrollProgress}%</span>
                    </div>

                    <ul className={styles.links}>
                        {navigation.map((item) => (
                            <li key={item.label}>
                                <button
                                    type="button"
                                    onClick={() => handleNavigate(item.path)}
                                    className={
                                        activePath === item.path
                                            ? `${styles.link} ${styles.active}`
                                            : styles.link
                                    }
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.actions}>
                        <MagneticButton>
                            <button
                                type="button"
                                className={styles.iconButton}
                                onClick={onOpenPalette}
                                aria-label="Open command palette"
                            >
                                <Command size={17} />

                                <kbd className={styles.kbd}>⌘K</kbd>
                            </button>
                        </MagneticButton>

                        <button
                            type="button"
                            className={styles.iconButton}
                            onClick={toggleTheme}
                            aria-label={
                                theme === "dark"
                                    ? "Switch to light theme"
                                    : "Switch to dark theme"
                            }
                        >
                            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
                        </button>

                        <button
                            type="button"
                            className={styles.menuToggle}
                            onClick={() => setMobileOpen((previous) => !previous)}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </nav>
            </Container>

            <AnimatePresence>
                {mobileOpen ? (
                    <motion.div
                        className={styles.mobilePanel}
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <ul className={styles.mobileLinks}>
                            {navigation.map((item) => (
                                <li key={item.label}>
                                    <button
                                        type="button"
                                        onClick={() => handleNavigate(item.path)}
                                        className={
                                            activePath === item.path
                                                ? `${styles.mobileLink} ${styles.active}`
                                                : styles.mobileLink
                                        }
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
}

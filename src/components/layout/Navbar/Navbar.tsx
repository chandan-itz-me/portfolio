import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, Moon, Sun, X } from "lucide-react";

import Container from "../Container/Container";
import { navigation } from "@/config/navigation";
import { useTheme } from "@/hooks/useTheme";
import MagneticButton from "@/components/ui/MagneticButton/MagneticButton";

import styles from "./Navbar.module.css";

type NavbarProps = {
    onOpenPalette: () => void;
};

export default function Navbar({ onOpenPalette }: NavbarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { pathname } = useLocation();

    // Close the mobile menu on route change and lock body scroll while open.
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <NavLink
                        to="/"
                        className={styles.logo}
                    >
                        <span className={styles.logoMark}>CC</span>

                        <span>Cloud Control Center</span>
                    </NavLink>

                    <ul className={styles.links}>
                        {navigation.map((item) => (
                            <li key={item.label}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }: { isActive: boolean }) =>
                                        isActive
                                            ? `${styles.link} ${styles.active}`
                                            : styles.link
                                    }
                                >
                                    {item.label}
                                </NavLink>
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
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }: { isActive: boolean }) =>
                                            isActive
                                                ? `${styles.mobileLink} ${styles.active}`
                                                : styles.mobileLink
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
}

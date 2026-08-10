import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import AuroraBackground from "@/components/common/AuroraBackground/AuroraBackground";
import ParticleField from "@/components/common/ParticleField/ParticleField";
import CustomCursor from "@/components/common/CustomCursor/CustomCursor";
import ScrollProgress from "@/components/common/ScrollProgress/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import { useCommandPalette } from "@/hooks/useCommandPalette";

import styles from "./MainLayout.module.css";

export default function MainLayout() {
    const { open, openPalette, closePalette } = useCommandPalette();
    const { pathname } = useLocation();
    const [showTopChrome, setShowTopChrome] = useState(pathname !== "/");
    const [key, setKey] = useState(0);

    useEffect(() => {
        if (pathname !== "/") {
            setShowTopChrome(true);
            return;
        }

        const onScroll = () => {
            const homeSection = document.getElementById("home");

            if (!homeSection) {
                setShowTopChrome(false);
                return;
            }

            const triggerPoint = Math.max(180, homeSection.offsetHeight * 0.6);
            setShowTopChrome(window.scrollY > triggerPoint);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [pathname]);

    // Force animation reset on route change by updating key
    useEffect(() => {
        setKey(prev => prev + 1);
    }, [pathname]);

    return (
        <>
            <AuroraBackground />

            <ParticleField />

            <CustomCursor />

            {showTopChrome ? <ScrollProgress /> : null}

            <div className={styles.content}>
                <ScrollToTop />

                {showTopChrome ? <Navbar onOpenPalette={openPalette} /> : null}

                <div key={key}>
                    <Outlet />
                </div>

                <Footer />
            </div>

            <CommandPalette
                open={open}
                onClose={closePalette}
            />
        </>
    );
}

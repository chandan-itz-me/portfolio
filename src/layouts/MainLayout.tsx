import { Outlet } from "react-router-dom";

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

    return (
        <>
            <AuroraBackground />

            <ParticleField />

            <CustomCursor />

            <ScrollProgress />

            <div className={styles.content}>
                <ScrollToTop />

                <Navbar onOpenPalette={openPalette} />

                <Outlet />

                <Footer />
            </div>

            <CommandPalette
                open={open}
                onClose={closePalette}
            />
        </>
    );
}

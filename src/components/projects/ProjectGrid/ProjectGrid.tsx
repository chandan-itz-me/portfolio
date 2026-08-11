import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { projects } from "@/data/projects";
import { staggerContainer } from "@/animations/stagger";
import { fadeUp } from "@/constants/animations";
import type { Project } from "@/types/project";

import ProjectCard from "../ProjectCard";

import styles from "./ProjectGrid.module.css";

const preferredProjectOrder = [
    "PSA BDP",
    "DFDS",
    "BridgeNet",
    "Edge World Logistics",
    "Kellogs",
    "AG Barr",
    "Mondelez",
    "Pepsico",
    "Superdry",
    "Primark",
    "Aptos",
    "WHSmith",
] as const;

const orderLookup = new Map(preferredProjectOrder.map((name, index) => [name.toLowerCase(), index]));

const MODAL_INITIAL_FLIP_DELAY = 220;
const MODAL_FLIP_DURATION = 460;

export default function ProjectGrid() {
    const [cardsPerView, setCardsPerView] = useState(3);
    const [slideWidth, setSlideWidth] = useState(320);
    const [cardGap, setCardGap] = useState(16);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedLayoutId, setSelectedLayoutId] = useState<string | null>(null);
    const [isModalFlipped, setIsModalFlipped] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [isClosingModal, setIsClosingModal] = useState(false);
    const [isLoopPaused, setIsLoopPaused] = useState(false);
    const viewportRef = useRef<HTMLDivElement>(null);

    const orderedProjects = useMemo(
        () => [...projects].sort((first, second) => {
            const firstOrder = orderLookup.get(first.title.toLowerCase()) ?? Number.MAX_SAFE_INTEGER;
            const secondOrder = orderLookup.get(second.title.toLowerCase()) ?? Number.MAX_SAFE_INTEGER;

            if (firstOrder !== secondOrder) {
                return firstOrder - secondOrder;
            }

            return first.title.localeCompare(second.title);
        }),
        [],
    );

    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth <= 700) {
                setCardsPerView(1);
                setCardGap(10);
                return;
            }

            if (window.innerWidth <= 900) {
                setCardsPerView(2);
                setCardGap(14);
                return;
            }

            setCardsPerView(3);
            setCardGap(16);
        };

        updateCardsPerView();
        window.addEventListener("resize", updateCardsPerView);

        return () => {
            window.removeEventListener("resize", updateCardsPerView);
        };
    }, []);

    useEffect(() => {
        const updateSlideWidth = () => {
            const viewportWidth = viewportRef.current?.clientWidth;

            if (!viewportWidth) {
                return;
            }

            const totalGap = cardGap * (cardsPerView - 1);
            const nextWidth = Math.max((viewportWidth - totalGap) / cardsPerView, 180);

            setSlideWidth(nextWidth);
        };

        updateSlideWidth();
        window.addEventListener("resize", updateSlideWidth);

        return () => {
            window.removeEventListener("resize", updateSlideWidth);
        };
    }, [cardGap, cardsPerView]);

    const loopProjects = useMemo(
        () => [...orderedProjects, ...orderedProjects],
        [orderedProjects],
    );

    useEffect(() => {
        if (!selectedProject) {
            return;
        }

        setModalImageIndex(0);

        const timer = window.setTimeout(() => {
            setIsModalFlipped(true);
        }, MODAL_INITIAL_FLIP_DELAY);

        return () => {
            window.clearTimeout(timer);
        };
    }, [selectedProject]);

    useEffect(() => {
        if (!selectedProject) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const closeOnScroll = () => {
            closeProjectPostcard();
        };

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeProjectPostcard();
            }
        };

        window.addEventListener("wheel", closeOnScroll, { passive: true });
        window.addEventListener("touchmove", closeOnScroll, { passive: true });
        window.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("wheel", closeOnScroll);
            window.removeEventListener("touchmove", closeOnScroll);
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [selectedProject]);

    const openProjectPostcard = (project: Project, layoutId: string) => {
        setIsClosingModal(false);
        setIsModalFlipped(false);
        setSelectedProject(project);
        setSelectedLayoutId(layoutId);
    };

    const closeProjectPostcard = () => {
        if (!selectedProject || isClosingModal) {
            return;
        }

        setIsClosingModal(true);
        setIsModalFlipped(false);

        window.setTimeout(() => {
            setSelectedProject(null);
            setSelectedLayoutId(null);
            setIsClosingModal(false);
        }, MODAL_FLIP_DURATION);
    };

    const modalLogoCandidates = selectedProject?.logoPaths?.length
        ? selectedProject.logoPaths
        : (selectedProject?.logoPath ? [selectedProject.logoPath] : []);

    const activeModalLogoPath = modalLogoCandidates[modalImageIndex];

    const handleModalImageError = () => {
        if (modalImageIndex < modalLogoCandidates.length) {
            setModalImageIndex((current) => current + 1);
        }
    };

    const shouldPauseLoop = isLoopPaused || Boolean(selectedProject);
    const loopDistance = orderedProjects.length * slideWidth + (orderedProjects.length - 1) * cardGap;

    return (
        <>
            <motion.section
                className={styles.carousel}
                variants={staggerContainer as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{
                    ["--cards-per-view" as string]: cardsPerView,
                    ["--slide-width" as string]: `${slideWidth}px`,
                    ["--card-gap" as string]: `${cardGap}px`,
                    ["--loop-distance" as string]: `${loopDistance}px`,
                }}
            >
                <div ref={viewportRef} className={styles.viewport}>
                    <div
                        className={`${styles.track} ${shouldPauseLoop ? styles.trackPaused : ""}`}
                    >
                        {loopProjects.map((project, index) => {
                            const tileLayoutId = `project-cover-${project.id}-${index}`;

                            return (
                            <motion.div
                                key={`${project.id}-${index}`}
                                className={styles.slide}
                                variants={fadeUp as any}
                            >
                                <ProjectCard
                                    tileLayoutId={tileLayoutId}
                                    title={project.title}
                                    logoPath={project.logoPath}
                                    logoPaths={project.logoPaths}
                                    logoAlt={project.logoAlt}
                                    onHoverStart={() => setIsLoopPaused(true)}
                                    onHoverEnd={() => setIsLoopPaused(false)}
                                    onSelect={() => openProjectPostcard(project, tileLayoutId)}
                                />
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className={styles.modalOverlay}
                        onClick={closeProjectPostcard}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className={styles.modalContainer}
                            initial={{ scale: 0.9, y: 24, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.94, y: 16, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                className={styles.closeButton}
                                onClick={closeProjectPostcard}
                                aria-label="Close project details"
                            >
                                ×
                            </button>

                            <button
                                type="button"
                                className={styles.modalFlipButton}
                                onClick={() => setIsModalFlipped((previous) => !previous)}
                                aria-label={`Flip project postcard for ${selectedProject.title}`}
                                aria-pressed={isModalFlipped}
                            >
                                <div className={`${styles.modalInner} ${isModalFlipped ? styles.modalFlipped : ""}`}>
                                    <div className={`${styles.modalFace} ${styles.modalFront}`}>
                                        {activeModalLogoPath ? (
                                            <motion.img
                                                layoutId={selectedLayoutId ?? `project-cover-modal-${selectedProject.id}`}
                                                src={encodeURI(`${import.meta.env.BASE_URL}${activeModalLogoPath}`)}
                                                alt={selectedProject.logoAlt ?? `${selectedProject.title} logo`}
                                                className={styles.modalImage}
                                                onError={handleModalImageError}
                                            />
                                        ) : (
                                            <div className={styles.modalImageFallback} aria-hidden="true" />
                                        )}
                                    </div>

                                    <div className={`${styles.modalFace} ${styles.modalBack}`}>
                                        <div className={styles.modalSection}>
                                            <h3>Title</h3>
                                            <p>{selectedProject.title}</p>
                                        </div>

                                        <div className={styles.modalSection}>
                                            <h3>Description</h3>
                                            <p>{selectedProject.description}</p>
                                        </div>

                                        <div className={styles.modalSection}>
                                            <h3>Technology Stack</h3>
                                            <div className={styles.modalBadgeGrid}>
                                                {selectedProject.technologies.map((technology) => (
                                                    <span key={technology} className={styles.modalBadge}>
                                                        {technology}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={styles.modalSection}>
                                            <h3>Infrastructure Architecture</h3>
                                            <p>{selectedProject.infrastructureArchitecture}</p>
                                        </div>

                                        <div className={styles.modalSection}>
                                            <h3>Application</h3>
                                            <p>{selectedProject.application}</p>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
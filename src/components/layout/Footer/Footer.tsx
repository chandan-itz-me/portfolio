import { ArrowUp, Mail } from "lucide-react";

import Container from "../Container/Container";
import { socials } from "@/config/socials";
import MagneticButton from "@/components/ui/MagneticButton/MagneticButton";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

import styles from "./Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.wrapper}>
                    <div>
                        <h3 className={styles.title}>Cloud Control Center</h3>

                        <p className={styles.subtitle}>
                            Building resilient cloud platforms across AWS,
                            Azure and Google Cloud.
                        </p>

                        <div className={styles.socials}>
                            <a
                                href={socials.github}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="GitHub"
                                className={styles.socialLink}
                            >
                                <GithubIcon size={17} />
                            </a>

                            <a
                                href={socials.linkedin}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="LinkedIn"
                                className={styles.socialLink}
                            >
                                <LinkedinIcon size={17} />
                            </a>

                            <a
                                href={`mailto:${socials.email}`}
                                aria-label="Email"
                                className={styles.socialLink}
                            >
                                <Mail size={17} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <p>© {year} Chandan Padal. All rights reserved.</p>

                        <p>Built with React, TypeScript and Vite.</p>

                        <MagneticButton className={styles.backToTopWrapper}>
                            <button
                                type="button"
                                className={styles.backToTop}
                                onClick={scrollToTop}
                                aria-label="Back to top"
                            >
                                <ArrowUp size={16} />

                                Back to top
                            </button>
                        </MagneticButton>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

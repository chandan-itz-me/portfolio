import Container from "../Container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.wrapper}>
                    <div>
                        <h3 className={styles.title}>
                            Cloud Control Center
                        </h3>

                        <p className={styles.subtitle}>
                            Building resilient cloud platforms across AWS,
                            Azure and Google Cloud.
                        </p>
                    </div>

                    <div className={styles.right}>
                        <p>
                            © {year} Harish. All rights reserved.
                        </p>

                        <p>
                            Built with React, TypeScript and Vite.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
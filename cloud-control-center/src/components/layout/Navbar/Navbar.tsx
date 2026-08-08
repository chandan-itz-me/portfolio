import Container from "../Container/Container";
import styles from "./Navbar.module.css";

const navigation = [
    "Home",
    "Experience",
    "Projects",
    "Skills",
    "Certifications",
    "Contact",
];

export default function Navbar() {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <a href="/" className={styles.logo}>
                        <span className={styles.logoMark}>⬢</span>
                        <span>Cloud Control Center</span>
                    </a>

                    <ul className={styles.links}>
                        {navigation.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className={styles.link}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
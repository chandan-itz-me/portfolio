import { NavLink } from "react-router-dom";

import Container from "../Container/Container";
import { navigation } from "@/config/navigation";

import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <NavLink
                        to="/"
                        className={styles.logo}
                    >
                        <span className={styles.logoMark}>
                            CC
                        </span>

                        <span>
                            Cloud Control Center
                        </span>
                    </NavLink>

                    <ul className={styles.links}>
                        {navigation.map((item) => (
                            <li key={item.label}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
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
                </nav>
            </Container>
        </header>
    );
}
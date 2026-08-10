import { Link } from "react-router-dom";

import styles from "./QuickActions.module.css";

const actions = [
    {
        title: "Projects",
        path: "/#projects",
    },
    {
        title: "Infrastructure",
        path: "/#infrastructure",
    },
    {
        title: "Professional",
        path: "/#professional",
    },
    {
        title: "Contact",
        path: "/#contact",
    },
];

export default function QuickActions() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                Quick Actions
            </h2>

            <div className={styles.card}>
                {actions.map((action) => (
                    <Link
                        key={action.path}
                        to={action.path}
                        className={styles.action}
                    >
                        {action.title}

                        <span>→</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
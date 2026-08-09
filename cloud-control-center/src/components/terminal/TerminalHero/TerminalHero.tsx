import styles from "./TerminalHero.module.css";

export default function TerminalHero() {
    return (
        <section className={styles.hero}>
            <p className={styles.badge}>
                INTERACTIVE
            </p>

            <h1 className={styles.title}>
                Command Center
            </h1>

            <p className={styles.description}>
                Explore this portfolio the DevOps way. Type
                'help' to see available commands, or 'goto projects'
                to jump straight to a page.
            </p>
        </section>
    );
}

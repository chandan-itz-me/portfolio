import TerminalHeader from "../TerminalHeader";
import TerminalBody from "../TerminalBody";

import styles from "./TerminalWindow.module.css";

export default function TerminalWindow() {
    return (
        <section className={styles.window}>
            <TerminalHeader />
            <TerminalBody />
        </section>
    );
}
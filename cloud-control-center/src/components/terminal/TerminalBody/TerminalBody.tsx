import TerminalEngine from "../TerminalEngine";

import styles from "./TerminalBody.module.css";

export default function TerminalBody() {
    return (
        <section className={styles.body}>
            <TerminalEngine />
        </section>
    );
}
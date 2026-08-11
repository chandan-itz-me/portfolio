import { useState } from "react";

import { decisionItems } from "./nodeSpecs";

import styles from "./AwsBlueprintPage.module.css";

export default function ArchitectureDecisions() {
    const [openId, setOpenId] = useState<string | null>(decisionItems[0].id);

    return (
        <div id="accordion">
            {decisionItems.map((item) => {
                const isOpen = openId === item.id;

                return (
                    <div key={item.id} className={styles.accordionItem} data-open={isOpen}>
                        <button
                            type="button"
                            className={styles.accordionQ}
                            onClick={() => setOpenId(isOpen ? null : item.id)}
                            aria-expanded={isOpen}
                        >
                            <span>{item.title}</span>
                            <span className={styles.plus}>+</span>
                        </button>
                        <div className={styles.accordionA} style={isOpen ? { maxHeight: "220px" } : undefined}>
                            <p>{item.body}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

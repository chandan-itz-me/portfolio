import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { bootReadouts, type BootReadout } from "../bootReadouts";
import styles from "./LoadingAttributes.module.css";

type LoadingAttributesProps = {
    visible: boolean;
};

/**
 * Loading attributes that slide in from the bottom during boot sequence.
 * Each attribute enters one after another with a staggered animation.
 */
export default function LoadingAttributes({ visible }: LoadingAttributesProps) {
    return (
        <div className={styles.container} aria-hidden="true">
            {bootReadouts.map((readout: BootReadout, index: number) => {
                const Icon = readout.icon;
                return (
                    <motion.div
                        key={readout.label}
                        className={styles.attribute}
                        initial={{ opacity: 0, y: 20 }}
                        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{
                            duration: 0.5,
                            delay: visible ? index * 0.15 : 0,
                            ease: "easeOut",
                        }}
                    >
                        <Icon size={16} className={styles.icon} />
                        <span className={styles.label}>{readout.label}</span>
                        <span className={styles.value}>
                            {visible && (
                                <AnimatedCounter
                                    end={readout.value}
                                    decimals={readout.decimals}
                                    duration={800}
                                    suffix={readout.suffix}
                                />
                            )}
                            {!visible && "0"}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
}

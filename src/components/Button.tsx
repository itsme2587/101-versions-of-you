"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import styles from "./Button.module.css";

export default function Button({ children, className = "", ...props }: HTMLMotionProps<"button">) {
  return (
    <motion.button 
      className={`${styles.button} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

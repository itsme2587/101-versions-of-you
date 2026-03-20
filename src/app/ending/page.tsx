"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import styles from "./ending.module.css";
import { useProgress } from "@/hooks/useProgress";
import { useEffect } from "react";

export default function Ending() {
  const router = useRouter();
  const { isUnlocked, isLoaded } = useProgress();

  useEffect(() => {
    if (isLoaded && !isUnlocked) {
      router.push("/");
    }
  }, [isUnlocked, isLoaded, router]);

  if (!isLoaded || !isUnlocked) return null;

  return (
    <main className={styles.main}>
      <PageTransition>
        <div className={styles.container}>
          <motion.h1 
            className={`serif ${styles.text}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
          >
            You are still becoming,<br/>
            and I already love who you are.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1.5 }}
            className={styles.buttonWrapper}
          >
            <button onClick={() => router.push("/home")} className={styles.ghostButton}>
              Revisit Gallery
            </button>
          </motion.div>
        </div>
      </PageTransition>
    </main>
  );
}

"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";
import styles from "./intro.module.css";
import { useProgress } from "@/hooks/useProgress";
import { useEffect } from "react";

export default function Intro() {
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
        <div className={styles.backdrop}></div>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={styles.content}
          >
            <h1 className={`serif ${styles.title}`}>100 Versions of You</h1>
            <h2 className={`serif ${styles.subtitle}`}>The way I see you.</h2>
            <div className={styles.divider} />
            <p className={styles.text}>
              Not just the moments I remember. <br/>
              The versions of you I’ve loved, noticed, and never forgotten.
            </p>
            <div className={styles.buttonWrapper}>
              <Button onClick={() => router.push("/home")}>Enter Gallery</Button>
            </div>
          </motion.div>
        </div>
      </PageTransition>
    </main>
  );
}

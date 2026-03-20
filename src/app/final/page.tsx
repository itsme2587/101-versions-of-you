"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Button from "@/components/Button";
import styles from "./final.module.css";
import { useProgress } from "@/hooks/useProgress";
import { AppData } from "@/data/content";

export default function FinalLetter() {
  const router = useRouter();
  const { isUnlocked, unlockedSections, isLoaded } = useProgress();
  const data = AppData.finalLetter;

  useEffect(() => {
    if (!isLoaded) return;
    if (!isUnlocked) {
      router.push("/");
      return;
    }
    const allViewed = unlockedSections.length >= AppData.sections.length;
    if (!allViewed) {
      router.push("/home");
    }
  }, [isUnlocked, isLoaded, unlockedSections, router]);

  if (!isLoaded || !isUnlocked) return null;

  return (
    <main className={styles.main}>
      <PageTransition>
        <div className={styles.container}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className={`serif ${styles.title}`}>{data.title}</h1>
            <h2 className={`serif ${styles.subtitle}`}>{data.subtitle}</h2>
            <div className={styles.divider} />
          </motion.div>

          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <div className={styles.note}>
              {data.note.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {data.video && (
              <div className={styles.videoWrapper}>
                <video controls src={data.video} className={styles.videoPlayer} />
              </div>
            )}

            <div className={styles.buttonWrapper}>
              <Button onClick={() => router.push("/ending")}>Complete Journey</Button>
            </div>
          </motion.div>
        </div>
      </PageTransition>
    </main>
  );
}

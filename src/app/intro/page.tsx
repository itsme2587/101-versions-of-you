"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";
import styles from "./intro.module.css";
import { useProgress } from "@/hooks/useProgress";
import { useEffect } from "react";
import { AppConfig } from "@/data/content";

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
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 1.2, delayChildren: 0.8 } 
              }
            }}
            className={styles.content}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } } }}
              style={{ textAlign: 'center', marginBottom: '1rem' }}
            >
              <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.6, display: 'block', marginBottom: '0.5rem' }}>
                Happy {AppConfig.birthdayAge}th Birthday
              </span>
              <h1 className={`serif ${styles.title}`} style={{ margin: 0 }}>
                {AppConfig.title}
              </h1>
            </motion.div>

            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } } }}
              className={`serif ${styles.subtitle}`}
            >
              The way I see you.
            </motion.h2>

            <motion.div 
              variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } } }}
              className={styles.divider} 
            />

            <motion.p 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } } }}
              className={styles.text}
            >
              Not just the moments I remember. <br/>
              The versions of you I’ve loved, noticed, and never forgotten.
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } } }}
              className={styles.buttonWrapper}
            >
              <Button onClick={() => router.push("/home")}>Enter Gallery</Button>
            </motion.div>
          </motion.div>
        </div>
      </PageTransition>
    </main>
  );
}

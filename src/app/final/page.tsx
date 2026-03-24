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
        <div className={styles.backdrop} />
        <div className={styles.container}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
          >
            <h1 className={`serif ${styles.title}`}>{data.title}</h1>
            <h2 className={`serif ${styles.subtitle}`}>{data.subtitle}</h2>
            <div className={styles.divider} />
          </motion.div>

          <motion.div 
            className={styles.content}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 1.5, delayChildren: 2.5 } 
              }
            }}
          >
            <div className={styles.note}>
              {data.note.split('\n').map((paragraph, idx) => (
                <motion.p 
                  key={idx}
                  variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 2, ease: [0.22, 1, 0.36, 1] } } }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {data.video && (
              <motion.div 
                className={styles.videoWrapper}
                variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 2 } } }}
              >
                <video controls src={data.video} className={styles.videoPlayer} />
              </motion.div>
            )}

            <motion.div 
              className={styles.buttonWrapper}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 2 } } }}
            >
              <Button onClick={() => router.push("/ending")} style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#F8F6F0' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F8F6F0'; e.currentTarget.style.color = '#080707'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F8F6F0'; }}>Complete Journey</Button>
            </motion.div>
          </motion.div>
        </div>
      </PageTransition>
    </main>
  );
}

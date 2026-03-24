"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import styles from "./home.module.css";
import { useProgress } from "@/hooks/useProgress";
import { AppData } from "@/data/content";
import { Lock, Unlock } from "lucide-react";
import { useEffect } from "react";

export default function HomeGallery() {
  const router = useRouter();
  const { isUnlocked, unlockedSections, isLoaded } = useProgress();

  useEffect(() => {
    if (isLoaded && !isUnlocked) {
      router.push("/");
    }
  }, [isUnlocked, isLoaded, router]);

  if (!isLoaded || !isUnlocked) return null;

  const totalSections = AppData.sections.length;
  const viewedCount = unlockedSections.length;
  const allViewed = viewedCount >= totalSections; // unlock final

  return (
    <main className={styles.main}>
      <PageTransition>
        <div className={styles.container}>
          <header className={styles.header}>
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className={`serif ${styles.title}`}
            >
              Version I
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.2 }}
              className={styles.progress}
            >
              Revealed {viewedCount} of {totalSections} chapters
            </motion.p>
          </header>

          <div className={styles.grid}>
            {AppData.sections.map((section, idx) => {
              const isViewed = unlockedSections.includes(section.id);
              return (
                <motion.div
                  key={section.id}
                  className={`${styles.card} ${isViewed ? styles.viewed : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                  onClick={() => router.push(`/section/${section.id}`)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'block', marginBottom: '0.5rem' }}>
                    Chapter {idx + 1}
                  </span>
                  <h2 className={`serif ${styles.cardTitle}`}>{section.title}</h2>
                  <p className={styles.cardSubtitle}>{section.subtitle}</p>
                  {isViewed && <span className={styles.statusBadge}>Read</span>}
                </motion.div>
              );
            })}

            {/* Open When Hub */}
            <motion.div
              className={`${styles.card} ${styles.cardAccent}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * totalSections, duration: 0.6 }}
              onClick={() => router.push(`/open-when`)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <h2 className={`serif ${styles.cardTitle}`}>Open When...</h2>
              <p className={styles.cardSubtitle}>For the moments you need me most.</p>
            </motion.div>

            {/* Final Locked Section */}
            <motion.div
              className={`${styles.card} ${styles.cardFinal} ${!allViewed ? styles.locked : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (totalSections + 1), duration: 0.6 }}
              onClick={() => {
                if (allViewed) router.push(`/final`);
              }}
              whileHover={allViewed ? { y: -4 } : {}}
              whileTap={allViewed ? { scale: 0.98 } : {}}
            >
              <div className={styles.lockIcon}>
                {allViewed ? <Unlock size={24} /> : <Lock size={24} />}
              </div>
              <h2 className={`serif ${styles.cardTitle}`}>{AppData.finalLetter.title}</h2>
              <p className={styles.cardSubtitle}>{AppData.finalLetter.subtitle}</p>
              {!allViewed && <p className={styles.lockText}>Unlocks after reading all chapters</p>}
            </motion.div>
          </div>
        </div>
      </PageTransition>
    </main>
  );
}

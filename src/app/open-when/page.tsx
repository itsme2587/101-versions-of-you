"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import styles from "./openWhen.module.css";
import { useProgress } from "@/hooks/useProgress";
import { AppData } from "@/data/content";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function OpenWhenHub() {
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
          <button onClick={() => router.push("/home")} className={styles.backButton}>
            <ArrowLeft size={18} />
            <span>Gallery</span>
          </button>

          <header className={styles.header}>
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className={`serif ${styles.title}`}
            >
              Open When...
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.2 }}
              className={styles.subtitle}
            >
              For the moments you need me most.
            </motion.p>
          </header>

          <div className={styles.grid}>
            {AppData.openWhen.map((section, idx) => (
              <motion.div
                key={section.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                onClick={() => router.push(`/open-when/${section.id}`)}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <h2 className={`serif ${styles.cardTitle}`}>{section.title}</h2>
              </motion.div>
            ))}
          </div>
        </div>
      </PageTransition>
    </main>
  );
}

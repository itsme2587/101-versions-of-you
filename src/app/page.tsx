"use client";
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";
import styles from "./page.module.css";
import { useProgress } from "@/hooks/useProgress";
import { AppConfig } from "@/data/content";

const CORRECT_DOB = "28-03-1996"; // Date of birth
const CORRECT_SECRET = "bemylove"; // Secret password

export default function Home() {
  const [dob, setDob] = useState("");
  const [secret, setSecret] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const { isUnlocked, unlockApp, isLoaded } = useProgress();

  useEffect(() => {
    // Redirect if already unlocked
    if (isLoaded && isUnlocked) {
      router.push("/intro");
    }
  }, [isUnlocked, isLoaded, router]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const dobOk = dob.trim() === CORRECT_DOB;
    const secretOk = secret.toLowerCase().trim() === CORRECT_SECRET;
    if (dobOk && secretOk) {
      unlockApp();
      router.push("/intro");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (!isLoaded || isUnlocked) return null; // Avoid flicker

  return (
    <main className={styles.main}>
      <PageTransition>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.6 }}>
              Happy {AppConfig.birthdayAge}th Birthday
            </span>
            <h1 className={`serif ${styles.title}`} style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              {AppConfig.title}
            </h1>
          </motion.div>
          
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Enter the date our story began &amp; a little secret. <br/>
            <span style={{opacity: 0.3, fontSize: '0.75rem', letterSpacing: '0.05em'}}>Hint: DD-MM-YYYY</span>
          </motion.p>

          <motion.form 
            onSubmit={handleSubmit} 
            className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="DD-MM-YYYY"
                className={`${styles.input} ${error ? styles.inputError : ""}`}
              />
            </div>
            <div className={styles.inputWrapper} style={{ marginTop: '0.75rem' }}>
              <input
                type="password"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Your secret word"
                className={`${styles.input} ${error ? styles.inputError : ""}`}
              />
            </div>
            <AnimatePresence>
              {error && (
                <motion.p 
                  className={styles.errorText}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  That doesn&apos;t seem right.
                </motion.p>
              )}
            </AnimatePresence>
            <div className={styles.submitWrapper}>
              <Button type="submit">Unlock</Button>
            </div>
          </motion.form>
        </div>
      </PageTransition>
    </main>
  );
}

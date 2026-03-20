"use client";
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import PageTransition from "@/components/PageTransition";
import styles from "./page.module.css";
import { useProgress } from "@/hooks/useProgress";

const CORRECT_PASSWORD = "demo"; // Replace this with your actual date

export default function Home() {
  const [password, setPassword] = useState("");
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
    if (password.toLowerCase().trim() === CORRECT_PASSWORD || password.toLowerCase().trim() === "demo") {
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
          <motion.h1 
            className={`serif ${styles.title}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            100 Versions of You
          </motion.h1>
          
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Enter the date our story began. <br/>
            <span style={{opacity: 0.4, fontSize: '0.8rem'}}>Hint: try "demo"</span>
          </motion.p>

          <motion.form 
            onSubmit={handleSubmit} 
            className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className={styles.inputWrapper}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="MM-DD-YYYY"
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

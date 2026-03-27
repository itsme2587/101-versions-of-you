"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import styles from "./section.module.css";
import { useProgress } from "@/hooks/useProgress";
import { AppData, Section } from "@/data/content";
import { ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";

export default function SectionDetail() {
  const router = useRouter();
  const params = useParams();
  const { isUnlocked, unlockSection, isLoaded } = useProgress();
  const [section, setSection] = useState<Section | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!isLoaded) return;
    if (!isUnlocked) {
      router.push("/");
      return;
    }
    const id = params?.id as string;
    const found = AppData.sections.find(s => s.id === id);
    if (found) {
      setSection(found);
      unlockSection(id);
    } else {
      router.push("/home");
    }
  }, [isUnlocked, isLoaded, params, router, unlockSection]);

  if (!isLoaded || !section) return null;

  const hasImages = section.images && section.images.length > 0;

  const nextImage = () => {
    if (hasImages) {
      setImageIndex((prev) => (prev + 1) % section.images.length);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setImageIndex((prev) => (prev - 1 + section.images.length) % section.images.length);
    }
  };

  return (
    <main className={styles.main}>
      <PageTransition>
        <div className={styles.container}>
          <button onClick={() => router.push("/home")} className={styles.backButton}>
            <ArrowLeft size={18} />
            <span>Gallery</span>
          </button>

          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className={`serif ${styles.title}`}>{section.title}</h1>
            {section.subtitle && <p className={styles.subtitle}>{section.subtitle}</p>}
          </motion.div>

          {hasImages && (
            <motion.div 
              className={styles.carousel}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imageIndex}
                  src={section.images[imageIndex]}
                  alt={`${section.title} image`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={styles.image}
                />
              </AnimatePresence>
              {section.images.length > 1 && (
                <div className={styles.carouselControls}>
                  <button onClick={prevImage} className={styles.iconButton}><ChevronLeft size={20}/></button>
                  <span className={styles.imageCounter}>{imageIndex + 1} / {section.images.length}</span>
                  <button onClick={nextImage} className={styles.iconButton}><ChevronRight size={20}/></button>
                </div>
              )}
            </motion.div>
          )}

          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {section.quote && (
              <blockquote className={`serif ${styles.quote}`}>
                "{section.quote}"
              </blockquote>
            )}

            <div className={styles.note}>
              {section.note.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {section.audio && (
              <div className={styles.audioWrapper}>
                <audio controls autoPlay src={section.audio} className={styles.audioPlayer} />
              </div>
            )}
          </motion.div>
        </div>
      </PageTransition>
    </main>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import styles from "../../section/[id]/section.module.css";
import { useProgress } from "@/hooks/useProgress";
import { AppData, OpenWhenSection } from "@/data/content";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

export default function OpenWhenDetail() {
  const router = useRouter();
  const params = useParams();
  const { isUnlocked, isLoaded } = useProgress();
  const [section, setSection] = useState<OpenWhenSection | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!isLoaded) return;
    if (!isUnlocked) {
      router.push("/");
      return;
    }
    const id = params?.id as string;
    const found = AppData.openWhen.find(s => s.id === id);
    if (found) {
      setSection(found);
    } else {
      router.push("/open-when");
    }
  }, [isUnlocked, isLoaded, params, router]);

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
          <button onClick={() => router.push("/open-when")} className={styles.backButton}>
            <ArrowLeft size={18} />
            <span>Open When...</span>
          </button>

          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`serif ${styles.title}`}>{section.title}</h1>
          </motion.div>

          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className={styles.note} style={{ textAlign: "center", fontSize: "1.3rem" }}>
              {section.note.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {hasImages && (
              <div className={styles.carousel} style={{ marginTop: '2rem' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imageIndex}
                    src={section.images[imageIndex]}
                    alt="Memory"
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
              </div>
            )}

            {section.audio && (
              <div className={styles.audioWrapper}>
                <audio controls src={section.audio} className={styles.audioPlayer} />
              </div>
            )}
          </motion.div>
        </div>
      </PageTransition>
    </main>
  );
}

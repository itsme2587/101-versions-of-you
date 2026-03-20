"use client";
import { useState, useEffect } from "react";

export function useProgress() {
  const [unlockedSections, setUnlockedSections] = useState<string[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("versions_unlocked_sections");
    if (saved) {
      try {
        setUnlockedSections(JSON.parse(saved));
      } catch (e) {
        setUnlockedSections([]);
      }
    }
    const globalUnlock = localStorage.getItem("versions_global_unlock");
    if (globalUnlock === "true") {
      setIsUnlocked(true);
    }
    setIsLoaded(true);
  }, []);

  const unlockSection = (id: string) => {
    setUnlockedSections((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      localStorage.setItem("versions_unlocked_sections", JSON.stringify(next));
      return next;
    });
  };

  const unlockApp = () => {
    setIsUnlocked(true);
    localStorage.setItem("versions_global_unlock", "true");
  };

  return { unlockedSections, unlockSection, isUnlocked, unlockApp, isLoaded };
}

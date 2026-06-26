"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tours as ALL_TOURS, Tour } from "@/data/site";
import TourCard from "./TourCard";
import TourModal from "./TourModal";

const CATEGORIES = ["All", "Desert", "Imperial Cities", "Coastal", "Mountains"] as const;

export default function ToursGrid() {
  const [active, setActive] = useState<typeof CATEGORIES[number]>("All");
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return ALL_TOURS;
    return ALL_TOURS.filter((t) => t.category === active);
  }, [active]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
              active === cat
                ? "bg-terracotta text-cream"
                : "bg-cream text-ink/70 border border-ink/12 hover:border-terracotta/50 hover:text-terracotta"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((tour) => (
            <motion.div
              key={tour.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <TourCard tour={tour} onOpen={setSelectedTour} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-ink/50 py-16">
          No tours found in this category yet — check back soon.
        </p>
      )}

      <TourModal tour={selectedTour} onClose={() => setSelectedTour(null)} />
    </>
  );
}

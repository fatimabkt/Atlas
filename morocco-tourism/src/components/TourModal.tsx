"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Clock4, MessageCircle, Check } from "lucide-react";
import { Tour, whatsappBookingLink } from "@/data/site";

export default function TourModal({
  tour,
  onClose,
}: {
  tour: Tour | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!tour) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [tour, onClose]);

  return (
    <AnimatePresence>
      {tour && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-indigo-deep/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={tour.title}
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-cream rounded-3xl shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center text-ink hover:bg-terracotta hover:text-cream transition-colors"
            >
              <X size={20} />
            </button>

            <div className="relative h-64 sm:h-72">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/70 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <span className="inline-block px-3 py-1 rounded-full bg-terracotta text-cream text-xs font-semibold mb-3">
                  {tour.category}
                </span>
                <h2 className="font-display text-cream text-2xl sm:text-3xl leading-tight">
                  {tour.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-5 text-sm text-ink/60 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Clock4 size={15} className="text-terracotta" />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={15} className="fill-gold text-gold" />
                  {tour.rating} rating
                </span>
                <span>{tour.destination}</span>
              </div>

              <p className="text-ink/75 leading-relaxed mt-5">{tour.description}</p>

              <h3 className="font-display text-lg text-ink mt-7 mb-3">Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-ink/70">
                    <Check size={15} className="text-terracotta mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-lg text-ink mt-7 mb-3">Itinerary</h3>
              <div className="space-y-3">
                {tour.itinerary.map((stop) => (
                  <div key={stop.day} className="flex gap-4">
                    <span className="text-xs font-semibold tracking-wide text-terracotta uppercase shrink-0 w-16 pt-0.5">
                      {stop.day}
                    </span>
                    <p className="text-sm text-ink/70 leading-relaxed">{stop.detail}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-ink/10">
                <div>
                  <span className="text-[11px] text-ink/45 uppercase tracking-wide">
                    From
                  </span>
                  <p className="font-display text-2xl text-indigo">
                    {tour.price.toLocaleString()} <span className="text-sm">MAD</span>
                  </p>
                </div>
                <a
                  href={whatsappBookingLink(tour.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-terracotta text-cream font-semibold hover:bg-indigo transition-colors duration-300"
                >
                  <MessageCircle size={17} />
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

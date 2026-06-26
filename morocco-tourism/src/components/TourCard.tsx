"use client";

import Image from "next/image";
import { Star, Clock4 } from "lucide-react";
import { Tour } from "@/data/site";

export default function TourCard({
  tour,
  onOpen,
}: {
  tour: Tour;
  onOpen: (tour: Tour) => void;
}) {
  return (
    <button
      onClick={() => onOpen(tour)}
      className="group text-left flex flex-col bg-cream rounded-2xl overflow-hidden border border-ink/8 hover:shadow-[0_20px_50px_rgba(20,34,43,0.12)] hover:-translate-y-1.5 transition-all duration-400"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-terracotta/95 text-cream text-xs font-semibold tracking-wide">
          {tour.category}
        </span>
        <span className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-cream/95 text-ink text-xs font-semibold">
          <Star size={12} className="fill-gold text-gold" />
          {tour.rating}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs text-ink/50 font-medium">{tour.destination}</span>
        <h3 className="font-display text-xl text-ink leading-snug mt-1">
          {tour.title}
        </h3>
        <p className="text-ink/60 text-sm leading-relaxed mt-2.5 flex-1 line-clamp-2">
          {tour.description}
        </p>

        <div className="flex items-center justify-between mt-5 pt-5 border-t border-ink/8">
          <span className="flex items-center gap-1.5 text-xs text-ink/55">
            <Clock4 size={14} className="text-terracotta" />
            {tour.duration}
          </span>
          <p className="font-display text-lg text-indigo">
            {tour.price.toLocaleString()} <span className="text-xs">MAD</span>
          </p>
        </div>

        <span className="mt-4 inline-flex justify-center items-center px-4 py-2.5 rounded-full border border-ink/15 text-ink text-sm font-semibold group-hover:bg-ink group-hover:text-cream group-hover:border-ink transition-colors duration-300">
          View Details
        </span>
      </div>
    </button>
  );
}

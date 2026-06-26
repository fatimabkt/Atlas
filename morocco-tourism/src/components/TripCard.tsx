"use client";

import Image from "next/image";
import { Clock4, Users, MessageCircle } from "lucide-react";
import { Trip, whatsappBookingLink } from "@/data/site";

export default function TripCard({ trip, index }: { trip: Trip; index: number }) {
  return (
    <div
      className="group flex flex-col bg-cream rounded-2xl overflow-hidden border border-ink/8 hover:shadow-[0_20px_50px_rgba(20,34,43,0.12)] hover:-translate-y-1.5 transition-all duration-400"
      style={{ transitionDelay: `${(index % 3) * 40}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-cream/95 text-ink text-xs font-semibold tracking-wide">
          {trip.destination}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-ink leading-snug">
          {trip.title}
        </h3>
        <p className="text-ink/60 text-sm leading-relaxed mt-2.5 flex-1">
          {trip.shortDescription}
        </p>

        <div className="flex items-center gap-4 mt-5 text-xs text-ink/55">
          <span className="flex items-center gap-1.5">
            <Clock4 size={14} className="text-terracotta" />
            {trip.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} className="text-terracotta" />
            {trip.groupSize}
          </span>
        </div>

        <div className="flex items-center justify-between mt-6 pt-5 border-t border-ink/8">
          <div>
            <span className="text-[11px] text-ink/45 uppercase tracking-wide">
              From
            </span>
            <p className="font-display text-xl text-indigo">
              {trip.price.toLocaleString()} <span className="text-sm">MAD</span>
            </p>
          </div>
          <a
            href={whatsappBookingLink(trip.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-terracotta text-cream text-sm font-semibold hover:bg-indigo transition-colors duration-300"
          >
            <MessageCircle size={15} />
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

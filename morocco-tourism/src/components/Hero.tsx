"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1539020140153-e479b8c2b87c?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-deep/70 via-indigo-deep/40 to-indigo-deep/85" />
      <div className="absolute inset-0 zellij-bg opacity-[0.06]" />

      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gold text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-5"
        >
          Marrakech · Sahara · Fes · Atlas Mountains
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display text-cream text-shadow-soft text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.08] max-w-4xl"
        >
          Discover the Beauty of{" "}
          <span className="italic text-gold">Morocco</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-cream/85 text-base sm:text-lg leading-relaxed"
        >
          Handcrafted journeys through golden dunes, imperial medinas, and
          mountain villages — guided by people who call it home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/tours"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-terracotta text-cream font-semibold text-[15px] tracking-wide hover:bg-gold hover:text-ink transition-all duration-300 shadow-[0_10px_30px_rgba(193,101,47,0.35)]"
          >
            Explore Tours
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/trips"
            className="inline-flex items-center px-7 py-3.5 rounded-full border border-cream/40 text-cream font-medium text-[15px] tracking-wide hover:bg-cream/10 hover:border-cream transition-all duration-300"
          >
            View Trip Packages
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 text-cream/70"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

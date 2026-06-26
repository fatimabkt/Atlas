import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Compass, Leaf, Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Atlas & Sand — a Marrakech-based travel team building handcrafted Morocco itineraries with local guides since 2019.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Hospitality First",
    text: "Every itinerary is built the way we'd host family — generous, unhurried, and personal.",
  },
  {
    icon: Compass,
    title: "Local Expertise",
    text: "Our team and guides are Moroccan, with decades of combined knowledge of the regions we travel.",
  },
  {
    icon: Leaf,
    title: "Responsible Travel",
    text: "We work with family-run riads and camps, and keep groups small to protect the places we love.",
  },
  {
    icon: Award,
    title: "Quality Over Volume",
    text: "We'd rather run fewer trips done exceptionally than chase scale at the cost of care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Born in Marrakech, Built for Travelers"
        description="We're a small team of Moroccan guides and planners who turned a love of this country into the way we make a living."
        image="https://images.unsplash.com/photo-1597212720128-6e7888a17372?q=80&w=2400&auto=format&fit=crop"
      />

      <section className="py-24 sm:py-28 px-5 sm:px-8 lg:px-10 bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1572877625047-2c0d2f5e0dfe?q=80&w=1400&auto=format&fit=crop"
                alt="Atlas & Sand team in Essaouira"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3 leading-tight">
              A trip that started as a favor for a friend
            </h2>
            <p className="text-ink/65 leading-relaxed mt-5">
              Atlas &amp; Sand began in 2019 when our founder, a Marrakech-born
              guide, started planning trips for friends of friends visiting
              Morocco. Word spread quickly — people wanted the version of
              Morocco that locals actually experience, not the version sold in
              a tour-bus brochure.
            </p>
            <p className="text-ink/65 leading-relaxed mt-4">
              Today we&apos;re a small team spread across Marrakech, Fes, and
              Merzouga, each of us responsible for the region we know best. We
              still plan every itinerary by hand, and we still answer our own
              WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-28 px-5 sm:px-8 lg:px-10 bg-cream relative overflow-hidden">
        <div className="absolute -left-24 top-10 w-[420px] h-[420px] zellij-bg opacity-[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <Reveal>
            <SectionHeading
              eyebrow="What Guides Us"
              title="The values behind every itinerary"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="p-7 rounded-2xl bg-sand border border-ink/8 h-full">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                    <v.icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg mt-5 text-ink">{v.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed mt-2.5">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28 px-5 sm:px-8 lg:px-10 bg-indigo-deep relative overflow-hidden">
        <div className="absolute inset-0 zellij-bg opacity-[0.04] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "2,400+", label: "Travelers Hosted" },
            { value: "6", label: "Years of Trips" },
            { value: "30+", label: "Local Guides" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <p className="font-display text-3xl sm:text-4xl text-gold">
                {stat.value}
              </p>
              <p className="text-cream/65 text-sm mt-2">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Want to meet the team that plans your trip?"
        description="Send us a message — we usually reply within the hour."
        ctaLabel="Say Hello"
      />
    </>
  );
}

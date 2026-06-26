import { ShieldCheck, Users, MapPinned, Clock4 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const REASONS = [
  {
    icon: Users,
    title: "Local Berber & City Guides",
    text: "Every guide was born in the region they show you — not trained from a script, but raised in the streets and dunes themselves.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by 2,400+ Travelers",
    text: "Five years of small-group journeys with a five-star average across hundreds of independent reviews.",
  },
  {
    icon: MapPinned,
    title: "Handcrafted Itineraries",
    text: "No fixed buses of fifty. Every route is paced for the season, the group, and the moments worth lingering in.",
  },
  {
    icon: Clock4,
    title: "Always Reachable",
    text: "A real person answers on WhatsApp before, during, and after your trip — no call centers, no hold music.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-28 px-5 sm:px-8 lg:px-10 bg-cream relative overflow-hidden">
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[480px] h-[480px] zellij-bg opacity-[0.05] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Travel planned the way locals would do it for family"
            description="We've spent years learning which roads to skip, which riads to trust, and which sunset is worth the detour."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.1}>
              <div className="group p-7 rounded-2xl border border-ink/8 bg-sand h-full hover:border-terracotta/40 hover:shadow-[0_16px_40px_rgba(20,34,43,0.08)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-indigo/8 flex items-center justify-center text-indigo group-hover:bg-terracotta group-hover:text-cream transition-colors duration-300">
                  <reason.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg mt-5 text-ink">
                  {reason.title}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed mt-2.5">
                  {reason.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

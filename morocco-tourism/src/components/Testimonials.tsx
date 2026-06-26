import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-28 px-5 sm:px-8 lg:px-10 bg-indigo-deep relative overflow-hidden">
      <div className="absolute inset-0 zellij-bg opacity-[0.04] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <SectionHeading
            eyebrow="Traveler Stories"
            title="What our guests remember most"
            light
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full p-7 rounded-2xl bg-cream/[0.04] border border-cream/10 flex flex-col">
                <Quote size={28} className="text-gold/60 mb-4" />
                <p className="text-cream/85 text-[15px] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-cream/10">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-cream text-sm font-semibold">{t.name}</p>
                    <p className="text-cream/50 text-xs">{t.origin}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={13} className="fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FeaturedDestinations() {
  return (
    <section className="py-24 sm:py-28 px-5 sm:px-8 lg:px-10 bg-sand">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Destinations"
            title="Six places that define a journey through Morocco"
            description="Each region carries its own light, rhythm, and craft — from the indigo lanes of Chefchaouen to the silence of the Erg Chebbi dunes."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {destinations.map((dest, i) => (
            <Reveal key={dest.name} delay={i * 0.08}>
              <Link
                href="/tours"
                className="group relative block h-[340px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={dest.image}
                  alt={`${dest.name}, Morocco`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/85 via-indigo-deep/10 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-cream text-2xl">
                        {dest.name}
                      </h3>
                      <p className="text-cream/75 text-sm mt-1">{dest.tagline}</p>
                    </div>
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/15 text-cream backdrop-blur-sm transition-all duration-300 group-hover:bg-gold group-hover:text-ink group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

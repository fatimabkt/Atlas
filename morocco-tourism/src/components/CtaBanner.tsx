import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

type Props = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CtaBanner({
  title = "Ready to see Morocco for yourself?",
  description = "Tell us your dates and your pace — we'll build the rest around it.",
  ctaLabel = "Plan My Trip",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="px-5 sm:px-8 lg:px-10 py-20">
      <Reveal>
        <div className="max-w-7xl mx-auto rounded-3xl bg-indigo relative overflow-hidden px-8 sm:px-14 py-14 sm:py-16 text-center">
          <div className="absolute inset-0 zellij-bg opacity-[0.06]" />
          <div className="relative">
            <h2 className="font-display text-cream text-3xl sm:text-4xl max-w-xl mx-auto leading-tight">
              {title}
            </h2>
            <p className="text-cream/70 mt-4 max-w-md mx-auto">{description}</p>
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-terracotta text-cream font-semibold text-[15px] hover:bg-gold hover:text-ink transition-all duration-300"
            >
              {ctaLabel}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

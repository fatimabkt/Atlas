import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ToursGrid from "@/components/ToursGrid";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Browse Morocco day tours and multi-day excursions by destination — desert, imperial cities, coastal, and mountain experiences. Tap any tour for full details.",
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Guided Tours"
        title="Tours for Every Kind of Traveler"
        description="Filter by destination, open any tour for the full itinerary, and book straight to WhatsApp when you're ready."
        image="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2400&auto=format&fit=crop"
      />

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-sand">
        <div className="max-w-7xl mx-auto">
          <ToursGrid />
        </div>
      </section>

      <CtaBanner
        title="Traveling with a group or for a special occasion?"
        description="We tailor tours for families, honeymoons, and corporate retreats alike."
        ctaLabel="Talk to Us"
      />
    </>
  );
}

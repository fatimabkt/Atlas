import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TripCard from "@/components/TripCard";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { trips } from "@/data/site";

export const metadata: Metadata = {
  title: "Trips & Travel Packages",
  description:
    "Browse our handcrafted Morocco trip packages — Marrakech escapes, Sahara desert treks, imperial city tours, and coastal getaways. Book instantly on WhatsApp.",
};

export default function TripsPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel Packages"
        title="Trips Crafted for Every Pace"
        description="Multi-day journeys that pair the must-sees with the moments only locals know to look for."
        image="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?q=80&w=2400&auto=format&fit=crop"
      />

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {trips.map((trip, i) => (
              <Reveal key={trip.slug} delay={(i % 3) * 0.1}>
                <TripCard trip={trip} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Don't see the exact trip you had in mind?"
        description="Send us your dates, interests, and travel style — we'll design something just for you."
        ctaLabel="Request a Custom Trip"
      />
    </>
  );
}

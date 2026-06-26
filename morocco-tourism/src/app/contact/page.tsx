import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  OFFICE_ADDRESS,
  whatsappBookingLink,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Atlas & Sand — message us on WhatsApp, call, email, or visit our Marrakech office to start planning your Morocco trip.",
};

export default function ContactPage() {
  const whatsappLink = whatsappBookingLink("Morocco trip");

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start Planning"
        description="Whether you have a question or you're ready to book, the fastest way to reach us is WhatsApp."
        image="https://images.unsplash.com/photo-1553102407-187b48da7d2c?q=80&w=2400&auto=format&fit=crop"
      />

      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-10 bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <div className="bg-cream rounded-3xl border border-ink/8 p-7 sm:p-10">
              <h2 className="font-display text-2xl text-ink mb-1.5">
                Send Us a Message
              </h2>
              <p className="text-ink/55 text-sm mb-7">
                We typically reply within an hour during Morocco business hours.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2 flex flex-col gap-5">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-[#25D366] text-white hover:opacity-95 transition-opacity"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 shrink-0">
                <MessageCircle size={22} />
              </span>
              <div>
                <p className="font-semibold">Chat on WhatsApp</p>
                <p className="text-sm text-white/85">Fastest way to reach us</p>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-cream border border-ink/8 flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo/8 text-indigo shrink-0">
                <Phone size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-xs text-ink/50 uppercase tracking-wide">Call Us</p>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="font-semibold text-ink hover:text-terracotta transition-colors">
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/8 flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo/8 text-indigo shrink-0">
                <Mail size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-xs text-ink/50 uppercase tracking-wide">Email Us</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ink hover:text-terracotta transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/8 flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo/8 text-indigo shrink-0">
                <MapPin size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-xs text-ink/50 uppercase tracking-wide">Visit Us</p>
                <p className="font-semibold text-ink text-sm leading-snug">
                  {OFFICE_ADDRESS}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/8 flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo/8 text-indigo shrink-0">
                <Clock size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-xs text-ink/50 uppercase tracking-wide">Office Hours</p>
                <p className="font-semibold text-ink text-sm">
                  Mon–Sat, 9:00 AM – 7:00 PM (GMT)
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="max-w-7xl mx-auto mt-10 rounded-3xl overflow-hidden border border-ink/8 h-[420px]">
            <iframe
              title="Atlas & Sand office location in Marrakech"
              src="https://www.google.com/maps?q=Gueliz,Marrakech,Morocco&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}

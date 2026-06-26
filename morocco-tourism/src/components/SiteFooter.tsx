import Link from "next/link";
import { Compass, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, OFFICE_ADDRESS } from "@/data/site";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 9h2.5V6H14c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-indigo-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 zellij-bg opacity-[0.04] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full border border-gold text-gold">
                <Compass size={18} strokeWidth={1.75} />
              </span>
              <span className="font-display text-xl text-cream">
                Atlas <span className="italic text-gold">&amp; Sand</span>
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Handcrafted journeys through Morocco&apos;s imperial cities, desert
              dunes, and mountain villages — guided by people who call it home.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold transition-colors"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 text-gold">Explore</h3>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li><Link href="/" className="hover:text-cream transition-colors">Home</Link></li>
              <li><Link href="/trips" className="hover:text-cream transition-colors">Trips</Link></li>
              <li><Link href="/tours" className="hover:text-cream transition-colors">Tours</Link></li>
              <li><Link href="/about" className="hover:text-cream transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 text-gold">Destinations</h3>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li>Marrakech</li>
              <li>Sahara Desert</li>
              <li>Fes</li>
              <li>Chefchaouen</li>
              <li>Essaouira</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 text-gold">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                <span>{OFFICE_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-gold shrink-0" />
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="hover:text-cream transition-colors">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-gold shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cream transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/45">
          <p>&copy; {new Date().getFullYear()} Atlas &amp; Sand Travel. All rights reserved.</p>
          <p>Crafted with care in Morocco.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/trips", label: "Trips" },
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_24px_rgba(20,34,43,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-18 py-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Atlas & Sand home"
          >
            <span
              className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${
                solid
                  ? "border-terracotta text-terracotta"
                  : "border-cream/70 text-cream"
              }`}
            >
              <Compass size={18} strokeWidth={1.75} />
            </span>
            <span
              className={`font-display text-xl tracking-wide transition-colors ${
                solid ? "text-ink" : "text-cream"
              }`}
            >
              Atlas <span className="italic text-terracotta">&amp; Sand</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[15px] tracking-wide font-medium transition-colors py-1 ${
                    solid
                      ? active
                        ? "text-terracotta"
                        : "text-ink/80 hover:text-terracotta"
                      : active
                      ? "text-cream"
                      : "text-cream/85 hover:text-cream"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full ${
                        solid ? "bg-terracotta" : "bg-cream"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className={`hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
              solid
                ? "bg-terracotta text-cream hover:bg-indigo"
                : "bg-cream/95 text-ink hover:bg-cream"
            }`}
          >
            Plan My Trip
          </Link>

          <button
            className={`lg:hidden p-2 -mr-2 ${solid ? "text-ink" : "text-cream"}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-cream border-t border-ink/10 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`py-3 text-base font-medium border-b border-ink/5 ${
                      active ? "text-terracotta" : "text-ink/85"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex justify-center items-center px-5 py-3 rounded-full bg-terracotta text-cream font-semibold"
              >
                Plan My Trip
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

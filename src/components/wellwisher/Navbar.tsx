"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Phone, Smartphone } from "lucide-react";
import Link from "next/link";

/**
 * Well Wisher Mobile App Destination URL
 * Update this URL with the official store listing or download link
 */
export const WELL_WISHER_APP_URL = "https://play.google.com/store/apps/details?id=com.wellwisher.app";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "How It Works", href: "#how", id: "how" },
  { label: "About Us", href: "#about", id: "about" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      // Determine active section based on scroll position
      const sectionElements = links.map((l) => document.getElementById(l.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(links[i].id);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    e.preventDefault();
    setActiveSection(id);
    setOpen(false);

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-soft" : "bg-transparent"
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-accent"
        style={{ scaleX }}
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <Link
          href="/#home"
          onClick={(e) => handleNavClick(e, "#home", "home")}
          className="flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <img src="/well-wisher-logo.png" alt="Well Wisher — Care Like Family" className="h-10 w-auto md:h-12" />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const isActive = activeSection === l.id;
            const isHovered = hoveredLink === l.id;

            return (
              <li key={l.href} className="relative">
                <motion.a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href, l.id)}
                  onMouseEnter={() => setHoveredLink(l.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`relative block py-1 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {l.label}

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavbarIndicator"
                      className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-gradient-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover Floating Underline (when not already active) */}
                  {!isActive && isHovered && (
                    <motion.span
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute inset-x-0 -bottom-1 h-[2px] origin-center rounded-full bg-primary/60"
                    />
                  )}
                </motion.a>
              </li>
            );
          })}
        </ul>

        {/* Action Buttons: [Call Now] [Book Companion] [ App ] */}
        <div className="hidden items-center gap-2.5 md:flex">
          <motion.a
            href="tel:+919490906153"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-soft transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-card"
          >
            <Phone className="h-4 w-4" /> Call Now
          </motion.a>
          <motion.a
            href="https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20would%20like%20to%20book%20a%20companion."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:shadow-glow"
          >
            Book Companion
          </motion.a>
          <motion.a
            href={WELL_WISHER_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Well Wisher App"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-2 text-sm font-semibold text-primary shadow-soft transition-all duration-200 hover:border-primary hover:bg-secondary/60 hover:shadow-card"
          >
            <Smartphone className="h-4 w-4 text-primary" /> App
          </motion.a>
        </div>

        <motion.button
          aria-label="Toggle menu"
          whileTap={{ scale: 0.92 }}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-strong overflow-hidden border-t border-border lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => {
                const isActive = activeSection === l.id;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleNavClick(e, l.href, l.id)}
                      className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 ${
                        isActive
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-foreground/80 hover:bg-secondary hover:text-primary"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
              <li className="mt-2 flex flex-wrap gap-2">
                <a
                  href="tel:+919490906153"
                  className="flex-1 min-w-[100px] rounded-full border border-border bg-white px-3 py-2 text-center text-sm font-semibold text-foreground shadow-soft active:scale-95"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20would%20like%20to%20book%20a%20companion."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] rounded-full bg-gradient-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-soft active:scale-95"
                >
                  WhatsApp
                </a>
                <a
                  href={WELL_WISHER_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[80px] inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-white px-3 py-2 text-center text-sm font-semibold text-primary shadow-soft active:scale-95"
                >
                  <Smartphone className="h-4 w-4" /> App
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

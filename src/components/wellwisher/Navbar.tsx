"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Phone, Smartphone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Well Wisher Mobile App Destination URL
 * Update this URL with the official store listing or download link
 */
export const WELL_WISHER_APP_URL = "https://play.google.com/store/apps/details?id=com.wellwisher.app";

const links = [
  { label: "Home", href: "/#home", id: "home", isRoute: false },
  { label: "About", href: "/about-us", id: "about", isRoute: true },
  { label: "Services", href: "/#services", id: "services", isRoute: false },
  { label: "How It Works", href: "/#how", id: "how", isRoute: false },
  { label: "Testimonials", href: "/#testimonials", id: "testimonials", isRoute: false },
  { label: "FAQ", href: "/#faq", id: "faq", isRoute: false },
  { label: "Contact", href: "/#contact", id: "contact", isRoute: false },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(pathname === "/about-us" ? "about" : "home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    if (pathname === "/about-us") {
      setActiveSection("about");
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // On non-homepage, keep route active
      if (pathname !== "/") {
        if (pathname === "/about-us") setActiveSection("about");
        return;
      }

      // Determine active section based on actual section order on homepage
      const sectionOrder = ["home", "about", "services", "how", "testimonials", "faq", "contact"];
      const sectionElements = sectionOrder
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((item) => item.el !== null);
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const top = item.el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string, isRoute?: boolean) => {
    setOpen(false);

    if (isRoute) {
      if (pathname === href) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveSection(id);
      return;
    }

    // Anchor link (#home, #services, etc.)
    if (pathname === "/") {
      e.preventDefault();
      setActiveSection(id);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    } else {
      // On subpage, navigate to homepage section
      window.location.href = href;
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-transparent shadow-none"
          : "glass-strong shadow-soft border-b border-border"
      }`}
    >
      {/* Scroll Progress Bar (visible only when scrolled) */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-accent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ scaleX }}
      />

      {/* Centered Compact Container (height constrained without stretching) */}
      <nav className="mx-auto flex h-14 md:h-16 w-full max-w-[1240px] items-center justify-between px-4 sm:px-6">
        {/* Brand Logo - 150px desktop target size */}
        <Link
          href="/#home"
          onClick={(e) => handleNavClick(e, "/#home", "home", false)}
          className="group flex items-center transition-transform duration-300 shrink-0"
        >
          <img
            src="/well-wisher-logo.png"
            alt="Well Wisher — Care Like Family"
            className="h-auto w-[124px] sm:w-[138px] lg:w-[150px] object-contain transition-all duration-300 ease-out [filter:drop-shadow(0_0_8px_rgba(0,107,255,0.35))_drop-shadow(0_0_14px_rgba(34,143,51,0.18))] group-hover:scale-[1.03] group-hover:[filter:drop-shadow(0_0_12px_rgba(0,107,255,0.60))_drop-shadow(0_0_20px_rgba(34,143,51,0.30))]"
          />
        </Link>

        {/* Center Nav Links - Compact spacing */}
        <ul className="hidden items-center gap-4 xl:gap-5.5 lg:flex">
          {links.map((l) => {
            const isActive = activeSection === l.id;
            const isHovered = hoveredLink === l.id;

            return (
              <li key={l.href} className="relative">
                {l.isRoute ? (
                  <Link
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href, l.id, true)}
                    onMouseEnter={() => setHoveredLink(l.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative block py-1 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? isTransparent
                          ? "text-[#38bdf8] font-semibold"
                          : "text-primary font-semibold"
                        : isTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavbarIndicator"
                        className={`absolute inset-x-0 -bottom-1 h-[2px] rounded-full ${
                          isTransparent ? "bg-[#38bdf8]" : "bg-gradient-primary"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {!isActive && isHovered && (
                      <motion.span
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className={`absolute inset-x-0 -bottom-1 h-[2px] origin-center rounded-full ${
                          isTransparent ? "bg-white/80" : "bg-primary/60"
                        }`}
                      />
                    )}
                  </Link>
                ) : (
                  <motion.a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href, l.id, false)}
                    onMouseEnter={() => setHoveredLink(l.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`relative block py-1 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? isTransparent
                          ? "text-[#38bdf8] font-semibold"
                          : "text-primary font-semibold"
                        : isTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavbarIndicator"
                        className={`absolute inset-x-0 -bottom-1 h-[2px] rounded-full ${
                          isTransparent ? "bg-[#38bdf8]" : "bg-gradient-primary"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {!isActive && isHovered && (
                      <motion.span
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className={`absolute inset-x-0 -bottom-1 h-[2px] origin-center rounded-full ${
                          isTransparent ? "bg-white/80" : "bg-primary/60"
                        }`}
                      />
                    )}
                  </motion.a>
                )}
              </li>
            );
          })}
        </ul>

        {/* Action Buttons: [Call Now] [Book Companion] [ App ] */}
        <div className="hidden items-center gap-2 xl:gap-2.5 lg:flex shrink-0">
          <motion.a
            href="tel:+919490906153"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs xl:px-4 xl:py-1.5 xl:text-sm font-semibold transition-all duration-200 ${
              isTransparent
                ? "bg-white text-slate-900 shadow-sm hover:bg-slate-100"
                : "border border-border bg-white text-foreground shadow-soft hover:border-primary hover:text-primary hover:shadow-card"
            }`}
          >
            <Phone className="h-3.5 w-3.5 xl:h-4 xl:w-4" /> Call Now
          </motion.a>

          <motion.a
            href="https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20would%20like%20to%20book%20a%20companion."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0066ff] px-4 py-1.5 text-xs xl:px-5 xl:py-1.5 xl:text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-blue-600 hover:shadow-glow"
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
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs xl:px-3.5 xl:py-1.5 xl:text-sm font-semibold transition-all duration-200 ${
              isTransparent
                ? "bg-white text-slate-900 shadow-sm hover:bg-slate-100"
                : "border border-border bg-white text-primary shadow-soft hover:border-primary hover:bg-secondary/60 hover:shadow-card"
            }`}
          >
            <Smartphone className="h-3.5 w-3.5 xl:h-4 xl:w-4 text-primary" /> App
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          aria-label="Toggle menu"
          whileTap={{ scale: 0.92 }}
          className={`grid h-9 w-9 place-items-center rounded-lg lg:hidden transition-colors ${
            isTransparent
              ? "border border-white/30 bg-black/20 text-white backdrop-blur-sm hover:bg-black/30"
              : "border border-border bg-white text-foreground hover:bg-secondary"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-strong overflow-hidden border-t border-border shadow-card lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => {
                const isActive = activeSection === l.id;
                return (
                  <li key={l.href}>
                    {l.isRoute ? (
                      <Link
                        href={l.href}
                        onClick={(e) => handleNavClick(e, l.href, l.id, true)}
                        className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 ${
                          isActive
                            ? "bg-primary/10 font-semibold text-primary"
                            : "text-foreground/80 hover:bg-secondary hover:text-primary"
                        }`}
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        onClick={(e) => handleNavClick(e, l.href, l.id, false)}
                        className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 ${
                          isActive
                            ? "bg-primary/10 font-semibold text-primary"
                            : "text-foreground/80 hover:bg-secondary hover:text-primary"
                        }`}
                      >
                        {l.label}
                      </a>
                    )}
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
                  className="flex-1 min-w-[120px] rounded-full bg-[#0066ff] px-3 py-2 text-center text-sm font-semibold text-white shadow-soft active:scale-95"
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

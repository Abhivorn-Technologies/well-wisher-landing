"use client";

import { Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const quickLinks: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks: FooterLink[] = [
  { label: "Hospital Visits", href: "#services" },
  { label: "Elderly Care", href: "#services" },
  { label: "Diagnostic Support", href: "#services" },
  { label: "Post Surgery Support", href: "#services" },
  { label: "Transportation Help", href: "#services" },
  { label: "Book a Companion", href: "#contact" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/wellwisherservices/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591784641413",
  },
];

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      if (typeof window !== "undefined" && window.location.pathname !== "/") {
        window.location.href = `/${href}`;
        return;
      }
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <footer className="relative border-t border-border bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <motion.a
              href="/#home"
              onClick={(e) => handleScroll(e, "#home")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-white/95 p-3 shadow-soft transition-all duration-200"
            >
              <img src="/well-wisher-logo.png" alt="Well Wisher — Care Like Family" className="h-12 w-auto" />
            </motion.a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Trusted healthcare companions for hospital visits, elderly care,
              diagnostics, and patient support across India.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-gradient-primary"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" links={quickLinks} onLinkClick={handleScroll} />
          <FooterCol title="Services" links={serviceLinks} onLinkClick={handleScroll} />

          <div>
            <h4 className="text-sm font-bold">Contact &amp; Legal</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href="tel:+919490906153"
                  className="flex items-center gap-1.5 transition-colors duration-200 hover:text-white"
                >
                  <span>📞</span> +91 94909 06153
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20would%20like%20to%20know%20more%20about%20your%20companion%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors duration-200 hover:text-white"
                >
                  <span>💬</span> WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:care@wellwisher.com"
                  className="flex items-center gap-1.5 transition-colors duration-200 hover:text-white"
                >
                  <span>✉️</span> care@wellwisher.com
                </a>
              </li>
            </ul>

            <div className="mt-6 border-t border-white/10 pt-4">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-white/60">Legal</h5>
              <ul className="mt-2.5 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block text-sm text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <div>©2026 Well Wisher Companion Services. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-1 md:justify-end">
            <span>Developed by</span>
            <a
              href="https://abhivorn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-honey transition-colors hover:underline"
            >
              Abhivorn Technologies Pvt Ltd
            </a>
            <span className="opacity-50">&amp;</span>
            <a
              href="https://www.digilevelup.in/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-honey transition-colors hover:underline"
            >
              DIGI LEVELUP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  onLinkClick,
}: {
  title: string;
  links: FooterLink[];
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <div>
      <h4 className="text-sm font-bold">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => onLinkClick(e, link.href)}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="inline-block text-sm text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

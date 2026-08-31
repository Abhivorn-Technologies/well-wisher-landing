"use client";

import { Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

function WhatsAppIcon({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
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
  { label: "Hospital Visits", href: "#service-hospital-visits" },
  { label: "Elderly Care", href: "#service-elderly-care" },
  { label: "Diagnostic Support", href: "#service-diagnostic-support" },
  { label: "Post Surgery Support", href: "#service-post-surgery" },
  { label: "Transportation Help", href: "#service-transportation" },
  { label: "Book a Companion", href: "#contact" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Data Deletion Policy", href: "/data-deletion-policy" },
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
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    href: "https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20would%20like%20to%20know%20more%20about%20your%20healthcare%20companion%20services.",
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

        // Dispatch highlight event for targeted service cards
        if (id.startsWith("service-")) {
          window.dispatchEvent(new CustomEvent("highlight-service", { detail: id }));
        }
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
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white shadow-soft transition-all duration-300 hover:bg-[linear-gradient(180deg,#006bff_0%,#228f33_100%)] hover:shadow-glow focus:outline-none focus-visible:bg-[linear-gradient(180deg,#006bff_0%,#228f33_100%)] focus-visible:ring-2 focus-visible:ring-[#006bff]"
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
                  href="mailto:support@wellwisherinfo.com"
                  onClick={() => {
                    window.location.href = "mailto:support@wellwisherinfo.com";
                  }}
                  className="flex cursor-pointer items-center gap-1.5 transition-colors duration-200 hover:text-white"
                >
                  <span>✉️</span> support@wellwisherinfo.com
                </a>
              </li>
            </ul>

            <div className="mt-6 border-t border-white/10 pt-4">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-white/60">Legal</h5>
              <ul className="mt-2.5 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {link.label}
                    </Link>
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
              className="font-medium text-white/60 transition-colors duration-300 hover:text-[#2dc0eb]"
            >
              Abhivorn Technologies Pvt Ltd
            </a>
            <span className="opacity-50">&amp;</span>
            <a
              href="https://www.digilevelup.in/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white/60 transition-colors duration-300 hover:text-[#f6c71e]"
            >
              DIGILEVELUP
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

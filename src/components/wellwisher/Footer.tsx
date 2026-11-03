"use client";

import { Facebook, Instagram, Phone, MessageSquare, Mail } from "lucide-react";
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
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
  { label: "Download Apps", href: "/download" },
];

const serviceLinks: FooterLink[] = [
  { label: "Hospital Visits", href: "/#service-hospital-visits" },
  { label: "Elderly Care", href: "/#service-elderly-care" },
  { label: "Diagnostic Support", href: "/#service-diagnostic-support" },
  { label: "Post Surgery Support", href: "/#service-post-surgery" },
  { label: "Transportation Help", href: "/#service-transportation" },
  { label: "Book a Companion", href: "/#contact" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Data Deletion Policy", href: "/data-deletion-policy" },
  { label: "Mobile Apps & QR Codes", href: "/download" },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/wellwisherservices/",
    hoverClasses:
      "hover:bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] hover:border-transparent hover:shadow-[0_0_16px_rgba(220,39,67,0.4)]",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591784641413",
    hoverClasses:
      "hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_16px_rgba(24,119,242,0.4)]",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    href: "https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20would%20like%20to%20know%20more%20about%20your%20healthcare%20companion%20services.",
    hoverClasses:
      "hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_16px_rgba(37,211,102,0.4)]",
  },
];

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") || href.startsWith("/#")) {
      if (typeof window !== "undefined" && window.location.pathname !== "/") {
        window.location.href = href.startsWith("/") ? href : `/${href}`;
        return;
      }
      e.preventDefault();
      const id = href.replace(/^\/?#/, "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);

        // Dispatch highlight event for targeted service cards
        if (id.startsWith("service-")) {
          window.dispatchEvent(new CustomEvent("highlight-service", { detail: id }));
        }
      }
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#031124] text-white">
      {/* Centered Main Footer Container */}
      <div className="mx-auto w-full max-w-[1240px] px-6 pt-14 pb-8 md:pt-16 md:pb-10">
        {/* 4 Balanced Columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 items-start">
          {/* Column 1: Brand Logo & Description & Socials */}
          <div>
            {/* Horizontal Compact White Logo Rectangle (approx 220px x 85px) */}
            <Link
              href="/#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="inline-flex h-[82px] w-[210px] sm:w-[220px] items-center justify-center rounded-lg bg-white px-4 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
            >
              <img
                src="/well-wisher-logo.png"
                alt="Well Wisher — Care Like Family"
                className="h-auto w-[170px] sm:w-[178px] object-contain"
              />
            </Link>

            {/* Description Paragraph moved UP closer to logo (aligned with other columns) */}
            <p className="mt-3.5 text-sm leading-relaxed text-slate-300 max-w-[280px]">
              Trusted healthcare companions for hospital visits, elderly care,
              diagnostics, and patient support across India.
            </p>

            {/* Circular Social Icons moved UP together with paragraph */}
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href, hoverClasses }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/90 shadow-soft transition-all duration-300 ease-out ${hoverClasses} hover:text-white`}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white tracking-tight">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => {
                const isRoute = link.href.startsWith("/") && !link.href.startsWith("/#") && !link.external;
                return (
                  <li key={link.label}>
                    {isRoute ? (
                      <Link
                        href={link.href}
                        className="inline-block text-slate-300 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="inline-block text-slate-300 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-base font-bold text-white tracking-tight">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="inline-block text-slate-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div>
            <h4 className="text-base font-bold text-white tracking-tight">Contact &amp; Legal</h4>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a
                  href="tel:+919490906153"
                  className="inline-flex items-center gap-3 text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#f43f5e] shrink-0" />
                  <span>+91 94909 06153</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20would%20like%20to%20know%20more%20about%20your%20companion%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  <MessageSquare className="h-4 w-4 text-white/90 shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@wellwisherinfo.com"
                  className="inline-flex items-center gap-3 text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-white/90 shrink-0" />
                  <span>support@wellwisherinfo.com</span>
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">LEGAL</h5>
              <ul className="mt-3 space-y-2.5 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Copyright Row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <div className="text-center sm:text-left">
            ©2026 Well Wisher Companion Services. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-center sm:justify-end text-slate-400">
            <span>Developed by</span>
            <a
              href="https://abhivorn.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white transition-colors duration-200 hover:text-[#2dc0eb]"
            >
              Abhivorn Technologies Pvt Ltd
            </a>
            <span className="text-slate-400">&amp;</span>
            <a
              href="https://www.digilevelup.in/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white transition-colors duration-200 hover:text-[#f6c71e]"
            >
              DIGILEVELUP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

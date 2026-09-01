"use client";

import { motion } from "framer-motion";
import { Play, ShieldCheck, Clock, Heart } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Verified Companions" },
  { icon: Clock, label: "24/7 Support" },
  { icon: Heart, label: "Trusted by Families" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24 lg:pt-32"
    >
      {/* LAYER 1: Full-width Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/HERO.png"
          alt="Well Wisher supportive healthcare companion with elderly person"
          className="h-full w-full object-cover object-[78%_25%] sm:object-[82%_25%] md:object-[85%_25%] lg:object-[right_25%]"
          loading="eager"
        />
      </div>

      {/* LAYER 2: Left-to-Right Soft Dark Gradient Mask (Desktop) */}
      <div
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(4, 18, 38, 0.96) 0%, rgba(4, 18, 38, 0.91) 28%, rgba(4, 18, 38, 0.70) 48%, rgba(4, 18, 38, 0.22) 68%, transparent 100%)",
        }}
      />

      {/* LAYER 2: Responsive Gradient Overlay for Tablet & Mobile */}
      <div
        className="pointer-events-none absolute inset-0 z-10 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(4, 18, 38, 0.92) 0%, rgba(4, 18, 38, 0.84) 65%, rgba(4, 18, 38, 0.40) 100%), linear-gradient(90deg, rgba(4, 18, 38, 0.95) 0%, rgba(4, 18, 38, 0.65) 100%)",
        }}
      />

      {/* LAYER 3: Hero Foreground Content (Z-Index 20) */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full border border-white/30 bg-black/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/95 shadow-soft backdrop-blur-sm">
              WELL WISHER COMPANION SERVICES
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]"
          >
            Never Attend a{" "}
            <span className="text-[#0066ff]">Hospital </span>
            <span className="text-[#22c55e]">Visit</span>
            <br className="hidden sm:inline" /> Alone Again
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            Trusted healthcare companions for hospital visits, medical appointments,
            elderly care, diagnostics, and patient support — because every patient
            deserves care like family.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#0066ff] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-600 hover:shadow-glow"
            >
              Book a Companion
            </motion.a>

            <motion.a
              href="#how"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0f172a] shadow-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-xl"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#22c55e] text-white shadow-soft transition-transform duration-200 group-hover:scale-110">
                <Play className="ml-0.5 h-3.5 w-3.5 fill-white" />
              </span>
              Watch How It Works
            </motion.a>
          </motion.div>

          {/* Feature Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                whileHover={{ y: -3, scale: 1.04 }}
                className="inline-flex cursor-default items-center gap-2 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-xs font-semibold text-white shadow-soft backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-black/35"
              >
                <b.icon className="h-4 w-4 text-white" />
                <span>{b.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

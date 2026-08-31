"use client";

import { motion } from "framer-motion";
import { Play, ShieldCheck, Clock, BadgeCheck, Pill, Car, HeartPulse, Stethoscope } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Verified Companions" },
  { icon: Clock, label: "24/7 Support" },
  { icon: BadgeCheck, label: "Trusted by Families" },
];

const floats = [
  { icon: Stethoscope, label: "Appointment Assistance", top: "8%", left: "-6%", delay: 0.1 },
  { icon: Pill, label: "Medicine Support", top: "38%", left: "-12%", delay: 0.25 },
  { icon: Car, label: "Transportation Help", top: "72%", left: "-4%", delay: 0.4 },
  { icon: HeartPulse, label: "Elderly Care", top: "18%", right: "-8%", delay: 0.55 },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" />
      <div className="absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 md:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1], delay: 0.08 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur shadow-soft">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
              Well Wisher Companion Services
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
            className="mt-6 text-[2rem] font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl"
          >
            Never Attend a <span className="text-gradient-mix">Hospital Visit</span> Alone Again
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: 0.34 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Trusted healthcare companions for hospital visits, medical appointments,
            elderly care, diagnostics, and patient support — because every patient
            deserves care like family.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.215, 0.61, 0.355, 1], delay: 0.48 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:shadow-glow"
            >
              Book a Companion
            </motion.a>
            <motion.a
              href="#how"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-card"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-accent text-white transition-transform duration-200 group-hover:scale-110">
                <Play className="h-3.5 w-3.5" fill="white" />
              </span>
              Watch How It Works
            </motion.a>
          </motion.div>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.215, 0.61, 0.355, 1], delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="inline-flex cursor-default items-center gap-2 rounded-full glass px-3.5 py-2 text-xs font-semibold text-foreground/80 shadow-soft transition-all duration-200 hover:border-primary/40 hover:shadow-card"
              >
                <b.icon className="h-4 w-4 text-primary transition-transform duration-200 group-hover:scale-110" />
                {b.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image and Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.22 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gradient-hero shadow-card ring-1 ring-white/60 transition-transform duration-300 hover:scale-[1.01]">
            <img
              src="/hero-companion.jpg"
              alt="Healthcare companion supporting an elderly patient at the hospital"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>

          {floats.map((f) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{
                opacity: { delay: 0.5 + f.delay, duration: 0.6 },
                y: { repeat: Infinity, duration: 4 + f.delay, ease: "easeInOut" },
              }}
              style={{ top: f.top, left: f.left, right: f.right }}
              className="absolute hidden cursor-default items-center gap-2.5 rounded-2xl glass px-4 py-3 shadow-card transition-shadow duration-200 hover:shadow-glow md:inline-flex"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-white shadow-soft">
                <f.icon className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-foreground">{f.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

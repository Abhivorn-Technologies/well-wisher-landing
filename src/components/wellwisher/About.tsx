"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  CalendarClock,
  HandHeart,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const corePillars = [
  { icon: Heart, label: "Care" },
  { icon: Users, label: "Companionship" },
  { icon: CalendarClock, label: "Coordination" },
  { icon: HandHeart, label: "Empathy" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-70" />
      <div className="absolute top-1/4 right-0 -z-10 h-80 w-80 rounded-full bg-brand-green/15 blur-3xl" />
      <div className="absolute bottom-10 left-0 -z-10 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
              ABOUT US
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Care That Goes Beyond the <span className="text-gradient-mix">Hospital</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              At Well Wisher, we believe healthcare is not only about treatment. It is also about{" "}
              <span className="font-semibold text-foreground">care, companionship, coordination, and human empathy</span>.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Patients and families can sometimes need someone they can trust to stand beside them — whether travelling
              to a hospital, attending an appointment, navigating a healthcare facility, or returning home safely.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Well Wisher provides <strong className="font-semibold text-foreground">non-clinical healthcare support</strong>{" "}
              and patient assistance through trained, dependable, and responsible Well Wisher Partners.
            </p>

            {/* 4 Core Pillars */}
            <div className="mt-8">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Our Core Pillars
              </div>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {corePillars.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-soft transition-all duration-200 hover:border-primary/40 hover:shadow-card"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-accent text-foreground">
                      <p.icon className="h-3.5 w-3.5" />
                    </span>
                    {p.label}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Know More CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:scale-[1.03] hover:shadow-glow active:scale-[0.97]"
              >
                <span>Know More</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] bg-gradient-hero shadow-card ring-1 ring-white/60 transition-transform duration-300 hover:scale-[1.01]">
              <img
                src="/family-peace.jpg"
                alt="Well Wisher patient and family companion support"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Reassurance Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.35, duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              className="absolute -bottom-6 -left-4 hidden max-w-xs cursor-default rounded-2xl glass-strong p-4 shadow-card ring-1 ring-white/80 md:block"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white shadow-soft">
                  <HeartHandshake className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-bold text-foreground">Care Like Family</div>
                  <div className="text-xs text-muted-foreground">Dependable human support</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

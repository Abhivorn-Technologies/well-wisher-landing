"use client";

import { motion } from "framer-motion";
import { Plane, Briefcase, HeartHandshake } from "lucide-react";

const pills = [
  { icon: Plane, label: "For NRIs" },
  { icon: Briefcase, label: "Working Professionals" },
  { icon: HeartHandshake, label: "Elderly Parents" },
];

export function PeaceOfMind() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-white/50 transition-transform duration-300 hover:scale-[1.01]">
            <img
              src="/family-peace.jpg"
              alt="Happy elderly couple connecting with family"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.25, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-6 -right-4 hidden cursor-default rounded-2xl glass-strong p-4 shadow-card md:block"
          >
            <div className="text-2xl font-bold text-gradient-mix">98%</div>
            <div className="text-xs font-medium text-muted-foreground">Family confidence</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Family Peace of Mind</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Care for your loved ones, even when <span className="text-gradient-mix">you're far away</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Whether you're across the city or across the world, Well Wisher is the
            family member who shows up. We accompany your parents to the hospital,
            sit through their tests, and send you live updates — so you can be
            present, even when you can't be there.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {pills.map((p, i) => (
              <motion.span
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-soft transition-all duration-200 hover:border-primary/40 hover:shadow-card"
              >
                <p.icon className="h-4 w-4 text-primary" /> {p.label}
              </motion.span>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:shadow-glow"
          >
            Book Companion Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

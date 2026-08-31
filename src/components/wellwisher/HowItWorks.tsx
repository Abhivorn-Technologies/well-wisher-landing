"use client";

import { motion } from "framer-motion";
import { CalendarCheck, UserCheck, HeartHandshake, Home } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book a Companion", desc: "Tell us when and where — book in under 60 seconds." },
  { icon: UserCheck, title: "Companion Assigned", desc: "A verified, trained companion is matched to your needs." },
  { icon: HeartHandshake, title: "Hospital Assistance", desc: "We handle the entire visit — paperwork, doctors, reports." },
  { icon: Home, title: "Safe Return Home", desc: "Comfortable transportation and a full family update." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">How It Works</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Care, in four simple steps
          </h2>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.215, 0.61, 0.355, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative cursor-default text-center"
              >
                <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-white shadow-card ring-1 ring-border transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow group-hover:ring-primary/40">
                  <s.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-accent text-xs font-bold text-foreground shadow-soft transition-transform duration-200 group-hover:scale-110">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

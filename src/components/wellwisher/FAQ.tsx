"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "Who are the companions?", a: "Trained healthcare professionals — including nurses, paramedics, and certified caregivers — selected for empathy, experience, and reliability." },
  { q: "Are companions verified?", a: "Yes. Every companion undergoes thorough background verification, identity checks, medical training validation, and ongoing performance reviews." },
  { q: "Can family members track visits?", a: "Absolutely. Families receive live location tracking, real-time updates, and a complete visit summary at the end." },
  { q: "Do you provide transportation support?", a: "Yes — we arrange safe, comfortable pickup and drop for hospital visits and diagnostic appointments." },
  { q: "Which cities do you operate in?", a: "We currently serve major metros and tier-1 cities, with rapid expansion across India. Reach out to confirm availability in your area." },
  { q: "How do I book a companion?", a: "Use the booking form below, call us, or message on WhatsApp. We typically confirm within 15 minutes." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Questions, answered
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
                className={`overflow-hidden rounded-2xl border bg-white transition-all ${
                  isOpen ? "border-primary/30 shadow-card" : "border-border shadow-soft"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-foreground">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-primary text-white transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

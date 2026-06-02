"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Daughter • NRI in London",
    rating: 5,
    text: "I live abroad and worry constantly about my parents. Well Wisher gave me peace of mind I didn't think was possible. Their companion was so kind to my mother.",
  },
  {
    name: "Rajesh Patel",
    role: "Post-surgery patient",
    rating: 5,
    text: "After my knee surgery, attending follow-ups alone was terrifying. My Well Wisher companion was patient, professional, and felt like family.",
  },
  {
    name: "Anita Verma",
    role: "Family member",
    rating: 5,
    text: "Real-time updates throughout my father's MRI scan. The companion explained everything and even arranged transport. Truly care like family.",
  },
  {
    name: "Mohan Iyer",
    role: "Elderly care",
    rating: 5,
    text: "At 78, I felt independent again. My companion respected my pace, answered every question, and brought me home safely.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % reviews.length), 5500);
    return () => clearInterval(id);
  }, []);
  const r = reviews[i];

  return (
    <section id="testimonials" className="relative bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Loved by families <span className="text-gradient-mix">across India</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-card ring-1 ring-border md:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: r.rating }).map((_, n) => (
                    <Star key={n} className="h-5 w-5 fill-brand-green text-brand-green" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-relaxed text-foreground md:text-xl">
                  "{r.text}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-base font-bold text-white">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-foreground">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous"
              onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white shadow-soft transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, n) => (
                <button
                  key={n}
                  aria-label={`Go to review ${n + 1}`}
                  onClick={() => setI(n)}
                  className={`h-2 rounded-full transition-all ${n === i ? "w-8 bg-gradient-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setI((v) => (v + 1) % reviews.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white shadow-soft transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

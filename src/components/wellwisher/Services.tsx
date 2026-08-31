"use client";

import { motion } from "framer-motion";
import {
  Hospital, UserRound, FlaskConical, Activity, Car, Bell, ArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    id: "service-hospital-visits",
    icon: Hospital,
    title: "Hospital Visit Assistance",
    desc: "Accompany patients throughout hospital visits with empathy and care.",
  },
  {
    id: "service-elderly-care",
    icon: UserRound,
    title: "Elderly Care Support",
    desc: "Helping seniors attend appointments safely and confidently.",
  },
  {
    id: "service-diagnostic-support",
    icon: FlaskConical,
    title: "Diagnostic Test Assistance",
    desc: "MRI, CT scans, blood tests, lab visits — never feel lost again.",
  },
  {
    id: "service-post-surgery",
    icon: Activity,
    title: "Post Surgery Support",
    desc: "Follow-up appointments and gentle recovery support at every step.",
  },
  {
    id: "service-transportation",
    icon: Car,
    title: "Patient Transportation",
    desc: "Reliable pickup and drop support for every hospital visit.",
  },
  {
    id: "service-family-updates",
    icon: Bell,
    title: "Family Updates",
    desc: "Real-time updates so families stay informed and reassured.",
  },
];

export function Services() {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const triggerHighlight = (id: string) => {
      // Toggle briefly to null then set to id to guarantee animation replay on repeat clicks
      setHighlightedId(null);
      requestAnimationFrame(() => {
        setHighlightedId(id);
        clearTimeout(timer);
        timer = setTimeout(() => {
          setHighlightedId(null);
        }, 2200);
      });
    };

    const onHighlight = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        triggerHighlight(customEvent.detail);
      }
    };

    const onHashChange = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash.slice(1);
        if (hash && hash.startsWith("service-")) {
          triggerHighlight(hash);
        }
      }
    };

    window.addEventListener("highlight-service", onHighlight);
    window.addEventListener("hashchange", onHashChange);

    if (typeof window !== "undefined" && window.location.hash.startsWith("#service-")) {
      onHashChange();
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("highlight-service", onHighlight);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Services</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Compassionate care for <span className="text-gradient-mix">every visit</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            From the moment you book to the safe return home, our companions
            handle every detail with warmth and professionalism.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const isHighlighted = highlightedId === s.id;

            return (
              <motion.a
                key={s.id}
                id={s.id}
                href="#contact"
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                animate={
                  isHighlighted
                    ? {
                        scale: [1, 1.035, 1.035, 1],
                        y: [0, -6, -6, 0],
                        transition: { duration: 2, times: [0, 0.15, 0.85, 1], ease: "easeInOut" },
                      }
                    : undefined
                }
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative block scroll-mt-28 md:scroll-mt-32 overflow-hidden rounded-3xl border bg-white p-7 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 ${
                  isHighlighted
                    ? "border-primary ring-4 ring-primary/25 shadow-glow"
                    : "border-border"
                }`}
              >
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-accent opacity-0 blur-2xl transition-opacity duration-300 ${
                    isHighlighted ? "opacity-60" : "group-hover:opacity-40"
                  }`}
                />
                <div className="relative">
                  <span
                    className={`inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-soft transition-transform duration-300 ${
                      isHighlighted ? "scale-110 shadow-glow" : "group-hover:scale-110"
                    }`}
                  >
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3
                    className={`mt-5 text-xl font-bold transition-colors duration-200 ${
                      isHighlighted ? "text-primary" : "text-foreground group-hover:text-primary"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div
                    className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all duration-200 ${
                      isHighlighted
                        ? "translate-x-1 opacity-100 font-bold"
                        : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                    }`}
                  >
                    Book assistance <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Plane, Briefcase, HeartHandshake } from "lucide-react";
import img from "@/assets/family-peace.jpg";

const pills = [
  { icon: Plane, label: "For NRIs" },
  { icon: Briefcase, label: "Working Professionals" },
  { icon: HeartHandshake, label: "Elderly Parents" },
];

export function PeaceOfMind() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-white/50">
            <img
              src={img}
              alt="Happy elderly couple connecting with family"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl glass-strong p-4 shadow-card md:block">
            <div className="text-2xl font-bold text-gradient-mix">98%</div>
            <div className="text-xs font-medium text-muted-foreground">Family confidence</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
            {pills.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-soft"
              >
                <p.icon className="h-4 w-4 text-primary" /> {p.label}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.03]"
          >
            Book Companion Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

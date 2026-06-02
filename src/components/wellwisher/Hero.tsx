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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
            Well Wisher Companion Services
          </span>

          <h1 className="mt-6 text-[2rem] font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Never Attend a <span className="text-gradient-mix">Hospital Visit</span> Alone Again
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Trusted healthcare companions for hospital visits, medical appointments,
            elderly care, diagnostics, and patient support — because every patient
            deserves care like family.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.03]"
            >
              Book a Companion
            </a>
            <a
              href="#how"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-accent text-white transition-transform group-hover:scale-110">
                <Play className="h-3.5 w-3.5" fill="white" />
              </span>
              Watch How It Works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {badges.map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-2 text-xs font-semibold text-foreground/80 shadow-soft"
              >
                <b.icon className="h-4 w-4 text-primary" />
                {b.label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gradient-hero shadow-card ring-1 ring-white/60">
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
              transition={{
                opacity: { delay: f.delay, duration: 0.6 },
                y: { repeat: Infinity, duration: 4 + f.delay, ease: "easeInOut" },
              }}
              style={{ top: f.top, left: f.left, right: f.right }}
              className="absolute hidden items-center gap-2.5 rounded-2xl glass px-4 py-3 shadow-card md:inline-flex"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-white">
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

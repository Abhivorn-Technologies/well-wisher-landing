import { motion } from "framer-motion";
import {
  Hospital, UserRound, FlaskConical, Activity, Car, Bell, ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Hospital, title: "Hospital Visit Assistance", desc: "Accompany patients throughout hospital visits with empathy and care." },
  { icon: UserRound, title: "Elderly Care Support", desc: "Helping seniors attend appointments safely and confidently." },
  { icon: FlaskConical, title: "Diagnostic Test Assistance", desc: "MRI, CT scans, blood tests, lab visits — never feel lost again." },
  { icon: Activity, title: "Post Surgery Support", desc: "Follow-up appointments and gentle recovery support at every step." },
  { icon: Car, title: "Patient Transportation", desc: "Reliable pickup and drop support for every hospital visit." },
  { icon: Bell, title: "Family Updates", desc: "Real-time updates so families stay informed and reassured." },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:border-primary/30 hover:shadow-card"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-accent opacity-0 blur-2xl transition-opacity group-hover:opacity-40" />
              <div className="relative">
                <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-soft transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  ShieldCheck, FileCheck2, MapPin, Siren, BellRing, Hospital, Car, Headphones,
} from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Verified Healthcare Companions" },
  { icon: FileCheck2, title: "Background Verification" },
  { icon: MapPin, title: "Live Tracking" },
  { icon: Siren, title: "Emergency Assistance" },
  { icon: BellRing, title: "Family Notifications" },
  { icon: Hospital, title: "Hospital Coordination" },
  { icon: Car, title: "Safe Transportation" },
  { icon: Headphones, title: "24/7 Support" },
];

export function WhyChoose() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Well Wisher</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Built on trust. Designed for <span className="text-gradient-mix">families</span>.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft transition-all hover:border-primary/30 hover:shadow-card"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-accent text-foreground shadow-soft">
                <f.icon className="h-5 w-5" />
              </span>
              <span className="pt-1.5 text-sm font-semibold text-foreground">{f.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

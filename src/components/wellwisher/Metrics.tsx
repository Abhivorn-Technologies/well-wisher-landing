"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Patients Assisted" },
  { value: 500, suffix: "+", label: "Healthcare Companions" },
  { value: 100, suffix: "+", label: "Hospital Partners" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  const inView = useInView(ref, { once: false, margin: "-40px" });

  useEffect(() => {
    if (inView) {
      mv.set(0);
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    } else {
      mv.set(0);
    }
  }, [inView, mv, to]);

  useEffect(() => rounded.on("change", (v) => {
    if (ref.current) ref.current.textContent = v + suffix;
  }), [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Metrics() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-[2rem] bg-gradient-primary p-8 shadow-card md:p-12"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="cursor-default text-center transition-transform duration-200"
              >
                <div className="text-4xl font-bold text-white md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm font-medium text-white/80 md:text-base">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

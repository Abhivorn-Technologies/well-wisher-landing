"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const services = [
  "Hospital Visit Assistance",
  "Elderly Care Support",
  "Diagnostic Test Assistance",
  "Post Surgery Support",
  "Patient Transportation",
  "Other",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const service = (formData.get("service") as string) || "";
    const date = (formData.get("date") as string) || "";
    const message = (formData.get("message") as string) || "";

    const subject = encodeURIComponent(`Booking Request: ${service || "Companion Service"} - ${name}`);
    const body = encodeURIComponent(
      `Hello Well Wisher Team,\n\nI would like to request companion assistance.\n\nDetails:\n- Name: ${name}\n- Phone: ${phone}\n- Email: ${email}\n- Service Needed: ${service}\n- Preferred Date: ${date}\n- Message: ${message}\n\nThank you!`
    );

    window.location.href = `mailto:support@wellwisherinfo.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-2"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Let's <span className="text-gradient-mix">care together</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Book a Well Wisher companion or reach us instantly — we typically respond in under 15 minutes.
            </p>

            <div className="mt-8 space-y-3">
              <motion.a
                href="tel:+919490906153"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-medium text-muted-foreground">Call us</div>
                  <div className="text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary">+91 94909 06153</div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20would%20like%20to%20book%20a%20companion."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-foreground shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-medium text-muted-foreground">WhatsApp</div>
                  <div className="text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary">+91 94909 06153 / Chat Now</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:support@wellwisherinfo.com"
                onClick={() => {
                  window.location.href = "mailto:support@wellwisherinfo.com";
                }}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-mix text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-medium text-muted-foreground">Email</div>
                  <div className="text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary">support@wellwisherinfo.com</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-[2rem] border border-border bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-glow sm:p-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required maxLength={100} placeholder="Your full name" />
              <Field label="Phone Number" name="phone" type="tel" required maxLength={20} placeholder="+91 94909 06153" />
              <Field label="Email" name="email" type="email" required maxLength={255} placeholder="you@example.com" />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-foreground">Service Needed</label>
                <select
                  name="service"
                  required
                  className="rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <Field label="Preferred Date" name="date" type="date" />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-foreground">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={1000}
                  placeholder="Tell us about the visit..."
                  className="mt-1.5 w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:shadow-glow"
            >
              {submitted ? "Thank you — we'll reach out shortly" : (<>Send Booking Request <Send className="h-4 w-4" /></>)}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-foreground">{label}</label>
      <input
        {...props}
        className="rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}

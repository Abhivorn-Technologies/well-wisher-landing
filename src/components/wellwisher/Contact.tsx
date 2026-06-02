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

  return (
    <section id="contact" className="relative bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
              <a href="tel:+911234567890" className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all hover:border-primary hover:shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-medium text-muted-foreground">Call us</div>
                  <div className="text-sm font-bold text-foreground">+91 12345 67890</div>
                </div>
              </a>
              <a href="https://wa.me/911234567890" className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all hover:border-primary hover:shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-foreground">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-medium text-muted-foreground">WhatsApp</div>
                  <div className="text-sm font-bold text-foreground">Chat with us</div>
                </div>
              </a>
              <a href="mailto:care@wellwisher.com" className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all hover:border-primary hover:shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-mix text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-medium text-muted-foreground">Email</div>
                  <div className="text-sm font-bold text-foreground">care@wellwisher.com</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="lg:col-span-3 rounded-[2rem] border border-border bg-white p-6 shadow-card sm:p-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required maxLength={100} placeholder="Your full name" />
              <Field label="Phone Number" name="phone" type="tel" required maxLength={20} placeholder="+91 12345 67890" />
              <Field label="Email" name="email" type="email" required maxLength={255} placeholder="you@example.com" />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-foreground">Service Needed</label>
                <select
                  required
                  className="rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <Field label="Preferred Date" name="date" type="date" />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-foreground">Message</label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  placeholder="Tell us about the visit..."
                  className="mt-1.5 w-full rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.01]"
            >
              {submitted ? "Thank you — we'll reach out shortly" : (<>Send Booking Request <Send className="h-4 w-4" /></>)}
            </button>
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
        className="rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}

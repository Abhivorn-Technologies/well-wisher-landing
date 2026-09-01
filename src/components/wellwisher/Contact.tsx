"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, AlertCircle } from "lucide-react";
import { useState } from "react";

const services = [
  "Hospital Visit Assistance",
  "Elderly Care Support",
  "Diagnostic Test Assistance",
  "Post Surgery Support",
  "Patient Transportation",
  "Other",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  // Today in YYYY-MM-DD format for date validation
  const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const todayString = getTodayString();

  // Field-level validation function
  const validateField = (field: keyof FormState, value: string): string | undefined => {
    switch (field) {
      case "name": {
        if (!value.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return undefined;
      }
      case "phone": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter a valid phone number.";
        // Clean non-digit characters except leading +
        const cleaned = trimmed.replace(/[^\d+]/g, "");
        // Match 10-digit Indian phone (optionally prefixed with +91 or 0)
        const indianPhoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
        if (!indianPhoneRegex.test(cleaned)) {
          return "Please enter a valid phone number.";
        }
        return undefined;
      }
      case "email": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter a valid email address.";
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(trimmed)) {
          return "Please enter a valid email address.";
        }
        return undefined;
      }
      case "service": {
        if (!value || value === "" || value === "Select a service") {
          return "Please select a service.";
        }
        return undefined;
      }
      case "date": {
        if (!value) return "Please select today or a future date.";
        if (value < todayString) {
          return "Please select today or a future date.";
        }
        return undefined;
      }
      case "message": {
        if (!value.trim()) return "Please enter a message.";
        return undefined;
      }
      default:
        return undefined;
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // If field was already touched, re-validate immediately to clear error
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {
      name: true,
      phone: true,
      email: true,
      service: true,
      date: true,
      message: true,
    };
    setTouched(allTouched);

    // Validate all fields
    const newErrors: FormErrors = {};
    (Object.keys(formData) as (keyof FormState)[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    // If there are errors, halt submission
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Process valid submission
    const { name, phone, email, service, date, message } = formData;
    const subject = encodeURIComponent(`Booking Request: ${service || "Companion Service"} - ${name.trim()}`);
    const body = encodeURIComponent(
      `Hello Well Wisher Team,\n\nI would like to request companion assistance.\n\nDetails:\n- Name: ${name.trim()}\n- Phone: ${phone.trim()}\n- Email: ${email.trim()}\n- Service Needed: ${service}\n- Preferred Date: ${date}\n- Message: ${message.trim()}\n\nThank you!`
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
                  <div className="text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                    +91 94909 06153
                  </div>
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
                  <div className="text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                    +91 94909 06153
                  </div>
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
                  <div className="text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                    support@wellwisherinfo.com
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            noValidate
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-[2rem] border border-border bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-glow sm:p-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Name * */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name-input" className="text-xs font-semibold text-foreground flex items-center gap-0.5">
                  <span>Name</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="name-input"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  maxLength={100}
                  placeholder="Your full name"
                  className={`rounded-xl border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:bg-white focus:ring-4 ${
                    touched.name && errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : "border-border focus:border-primary focus:ring-primary/10"
                  }`}
                />
                <AnimatePresence>
                  {touched.name && errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1 text-xs font-medium text-red-500"
                    >
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.name}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Number * */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone-input" className="text-xs font-semibold text-foreground flex items-center gap-0.5">
                  <span>Phone Number</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="phone-input"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  maxLength={20}
                  placeholder="+91 94909 06153"
                  className={`rounded-xl border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:bg-white focus:ring-4 ${
                    touched.phone && errors.phone
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : "border-border focus:border-primary focus:ring-primary/10"
                  }`}
                />
                <AnimatePresence>
                  {touched.phone && errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1 text-xs font-medium text-red-500"
                    >
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.phone}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email * */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email-input" className="text-xs font-semibold text-foreground flex items-center gap-0.5">
                  <span>Email</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="email-input"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  maxLength={255}
                  placeholder="you@example.com"
                  className={`rounded-xl border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:bg-white focus:ring-4 ${
                    touched.email && errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : "border-border focus:border-primary focus:ring-primary/10"
                  }`}
                />
                <AnimatePresence>
                  {touched.email && errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1 text-xs font-medium text-red-500"
                    >
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.email}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Service Needed * */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service-select" className="text-xs font-semibold text-foreground flex items-center gap-0.5">
                  <span>Service Needed</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <select
                  id="service-select"
                  name="service"
                  value={formData.service}
                  onChange={(e) => handleChange("service", e.target.value)}
                  onBlur={() => handleBlur("service")}
                  className={`rounded-xl border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:bg-white focus:ring-4 ${
                    touched.service && errors.service
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : "border-border focus:border-primary focus:ring-primary/10"
                  }`}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <AnimatePresence>
                  {touched.service && errors.service && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1 text-xs font-medium text-red-500"
                    >
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.service}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Preferred Date * */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="date-input" className="text-xs font-semibold text-foreground flex items-center gap-0.5">
                  <span>Preferred Date</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="date-input"
                  name="date"
                  type="date"
                  min={todayString}
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  onBlur={() => handleBlur("date")}
                  className={`rounded-xl border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:bg-white focus:ring-4 ${
                    touched.date && errors.date
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : "border-border focus:border-primary focus:ring-primary/10"
                  }`}
                />
                <AnimatePresence>
                  {touched.date && errors.date && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1 text-xs font-medium text-red-500"
                    >
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.date}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Empty placeholder div for 2-column alignment if needed */}
              <div className="hidden sm:block" />

              {/* Message * */}
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label htmlFor="message-input" className="text-xs font-semibold text-foreground flex items-center gap-0.5">
                  <span>Message</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder="Tell us about the visit..."
                  className={`w-full rounded-xl border bg-secondary/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:bg-white focus:ring-4 ${
                    touched.message && errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : "border-border focus:border-primary focus:ring-primary/10"
                  }`}
                />
                <AnimatePresence>
                  {touched.message && errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1 text-xs font-medium text-red-500"
                    >
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{errors.message}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:shadow-glow"
            >
              {submitted ? (
                "Thank you — we'll reach out shortly"
              ) : (
                <>
                  Send Booking Request <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

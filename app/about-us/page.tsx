"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  CalendarClock,
  HandHeart,
  Target,
  Clock,
  Smile,
  CalendarCheck2,
  Car,
  HeartHandshake,
  Compass,
  MessageSquareHeart,
  Sparkles,
  ShieldCheck,
  Home,
  UserCheck,
  Award,
  GraduationCap,
  Eye,
  AlertCircle,
  ArrowRight,
  Phone,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/wellwisher/Navbar";
import { Footer } from "@/components/wellwisher/Footer";
import { FloatingWhatsApp } from "@/components/wellwisher/FloatingWhatsApp";

const corePillars = [
  { icon: Heart, label: "Care", desc: "Attentive human presence that puts patient comfort first." },
  { icon: Users, label: "Companionship", desc: "Standing beside patients so they never feel alone." },
  { icon: CalendarClock, label: "Coordination", desc: "Managing transit, appointments, and hospital navigation." },
  { icon: HandHeart, label: "Empathy", desc: "Treating every individual with kindness, patience, and dignity." },
];

const patientNeeds = [
  { text: "Travelling to a hospital, clinic, or diagnostic centre" },
  { text: "Attending scheduled medical consultations or tests" },
  { text: "Navigating complex healthcare departments and facilities" },
  { text: "Returning home safely with peace of mind" },
];

const partnerActivities = [
  {
    icon: Clock,
    title: "Timely Arrival",
    desc: "Reaching the patient's designated pickup location on time with prompt, dependable punctuality.",
  },
  {
    icon: Smile,
    title: "Respectful Assistance",
    desc: "Respectfully greeting the patient and assisting with immediate practical and mobility needs.",
  },
  {
    icon: CalendarCheck2,
    title: "Appointment Details",
    desc: "Confirming appointment schedules, consultation times, and service details in advance.",
  },
  {
    icon: Car,
    title: "Transportation Coordination",
    desc: "Coordinating smooth transportation to hospitals, clinics, diagnostic centres, and facilities.",
  },
  {
    icon: HeartHandshake,
    title: "Patient Accompaniment",
    desc: "Accompanying patients throughout their journey, offering reassuring and attentive company.",
  },
  {
    icon: Compass,
    title: "Healthcare Navigation",
    desc: "Helping patients navigate registrations, waiting rooms, test labs, and hospital departments.",
  },
  {
    icon: MessageSquareHeart,
    title: "Family Communication",
    desc: "Supporting clear communication and coordination with family members and healthcare service staff.",
  },
  {
    icon: Sparkles,
    title: "Practical Assistance",
    desc: "Providing steady reassurance, wheelchair guidance, and practical non-clinical assistance.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Support",
    desc: "Staying beside the patient throughout the required non-clinical assistance process.",
  },
  {
    icon: Home,
    title: "Safe Return Home",
    desc: "Helping ensure a safe, comfortable, and smoothly coordinated return journey back home.",
  },
];

const boundaryItems = [
  "Do NOT diagnose illnesses or medical conditions",
  "Do NOT prescribe medicines or alter dosages",
  "Do NOT provide clinical treatment or medical procedures",
  "Do NOT replace doctors, nurses, or hospital medical staff",
  "Do NOT provide emergency medical dispatch or trauma care",
];

const whyChooseCards = [
  {
    icon: UserCheck,
    title: "Human Care When It Matters",
    badge: "Dependable Presence",
    desc: "Healthcare journeys can feel stressful, especially when patients need to travel alone or family members cannot be present. A Well Wisher Partner provides a helping hand, reassuring presence, and dependable coordination when it is needed most.",
    tagColor: "bg-blue-50 text-brand-blue border-brand-blue/20",
  },
  {
    icon: HandHeart,
    title: "Built on Empathy",
    badge: "Dignity & Kindness",
    desc: "Empathy is at the heart of Well Wisher. Our partners are encouraged to treat every patient with respect, patience, dignity, and kindness — just as they would want their own family members to be treated.",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: Award,
    title: "Professional Support",
    badge: "Responsible Conduct",
    desc: "We focus on punctuality, respectful communication, responsible conduct, and service coordination so patients and families can feel more confident throughout their healthcare journey.",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    icon: GraduationCap,
    title: "Empowering Well Wisher Partners",
    badge: "Meaningful Impact",
    desc: "Well Wisher creates an opportunity for individuals, particularly people with a life sciences background, to use their knowledge, communication skills, time, and empathy to provide meaningful support to patients. Being a partner is about being present when someone needs support and making another person's journey easier.",
    tagColor: "bg-teal-50 text-teal-700 border-teal-200",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ============================================================ */}
      {/* SECTION 1 — ABOUT WELL WISHER (HERO)                          */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-75" />
        <div className="absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" />
        <div className="absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* Breadcrumb Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                ABOUT US
              </div>

              <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Care Like <span className="text-gradient-mix">Family</span>
              </h1>

              <div className="mt-4 text-xl font-semibold text-primary sm:text-2xl">
                Healthcare is more than treatment.
              </div>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                At Well Wisher, we believe healthcare is not only about medical procedures. It is also about{" "}
                <span className="font-semibold text-foreground">care, companionship, coordination, and human empathy</span>.
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Patients and families can sometimes need someone they can trust to stand beside them — providing dependable assistance when family members cannot be physically present.
              </p>

              {/* Patient Support Scenarios */}
              <div className="mt-6 rounded-2xl border border-border bg-white/80 p-5 shadow-soft backdrop-blur">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Trusted Support When You Need It Most
                </div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {patientNeeds.map((item) => (
                    <li key={item.text} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Well Wisher provides <strong className="font-semibold text-foreground">non-clinical healthcare support</strong>{" "}
                and patient assistance through trained, dedicated, and responsible Well Wisher Partners.
              </p>
            </motion.div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative lg:col-span-5"
            >
              <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] bg-gradient-hero shadow-card ring-1 ring-white/60 transition-transform duration-300 hover:scale-[1.01]">
                <img
                  src="/family-peace.jpg"
                  alt="Well Wisher patient companion assisting an elderly patient with care like family"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Highlight Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.35, duration: 0.5 }}
                whileHover={{ scale: 1.04 }}
                className="absolute -bottom-6 -left-4 hidden max-w-xs cursor-default rounded-2xl glass-strong p-4 shadow-card ring-1 ring-white/80 md:block"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white shadow-soft">
                    <HeartHandshake className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-foreground">Care Like Family</div>
                    <div className="text-xs text-muted-foreground">Dependable human support</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* 4 Pillars Horizontal Bar */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {corePillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl border border-border bg-white p-5 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-foreground shadow-soft">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-base font-bold text-foreground">{p.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — OUR MISSION                                       */}
      {/* ============================================================ */}
      <section className="relative bg-secondary/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white p-8 shadow-card md:p-14 lg:p-16"
          >
            {/* Background Glow Accents */}
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-green/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <Target className="h-4 w-4" />
                Our Mission
              </div>

              <h2 className="mt-5 text-2xl font-bold leading-snug text-foreground sm:text-3xl md:text-4xl">
                “To make every patient’s healthcare journey{" "}
                <span className="text-gradient-mix">safer, smoother, and more comfortable</span> through reliable human support.”
              </h2>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Well Wisher connects people who need assistance with compassionate individuals who are willing to dedicate their time and empathy to helping them through every step of their journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — WHAT OUR WELL WISHER PARTNERS DO                  */}
      {/* ============================================================ */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Non-Clinical Support</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              What Our Well Wisher <span className="text-gradient-mix">Partners Do</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Our partners deliver respectful, reliable assistance to ensure patient journeys are smooth, punctual, and reassuring.
            </p>
          </motion.div>

          {/* Activities Grid */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {partnerActivities.map((act, i) => (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-white p-5 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card"
              >
                <div>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <act.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                    {act.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{act.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — OUR ROLE (SERVICE BOUNDARY)                       */}
      {/* ============================================================ */}
      <section className="relative bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="rounded-3xl border border-primary/25 bg-white p-8 shadow-card md:p-12"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-white shadow-soft">
                <AlertCircle className="h-7 w-7" />
              </span>

              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Service Scope &amp; Boundaries
                </span>
                <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                  Our Role
                </h3>
                <p className="mt-3 text-base font-medium text-foreground md:text-lg">
                  “Our role is to support the patient — not to replace doctors, nurses, or other healthcare professionals.”
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Well Wisher provides non-clinical companionship, navigation assistance, and practical journey coordination. To ensure clarity and patient safety, please note that Well Wisher Partners:
                </p>

                <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {boundaryItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-border bg-secondary/30 p-3 text-xs font-medium text-foreground md:text-sm"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — WHY WELL WISHER                                   */}
      {/* ============================================================ */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Why <span className="text-gradient-mix">Well Wisher</span>?
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Four core principles that define how we deliver trusted, empathetic healthcare support.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {whyChooseCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.215, 0.61, 0.355, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card md:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-accent text-foreground shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <card.icon className="h-7 w-7" />
                  </span>
                  <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${card.tagColor}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-2xl">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — OUR VISION                                        */}
      {/* ============================================================ */}
      <section className="relative bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-white shadow-card md:px-12 md:py-20 lg:px-16"
          >
            {/* Background Decorative Rings */}
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-blue/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                <Eye className="h-4 w-4 text-brand-green" />
                Our Vision
              </div>

              <h2 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
                “No patient should feel alone while navigating an important healthcare journey.”
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                Through technology, responsible partners, and a strong culture of empathy, Well Wisher aims to build a trusted support network connecting patients and families with dependable assistance whenever they need it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 — CARE LIKE FAMILY (FINAL BRAND STATEMENT & CTA)    */}
      {/* ============================================================ */}
      <section className="relative border-t border-border bg-gradient-hero py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Well Wisher</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Care Like <span className="text-gradient-mix">Family</span>.
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              We are building more than a service. We are building a community of people who care.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="/#contact"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:shadow-glow"
              >
                Book a Companion <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="tel:+919490906153"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-card"
              >
                <Phone className="h-4 w-4" /> Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

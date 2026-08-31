"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, MapPin, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/wellwisher/Navbar";
import { Footer } from "@/components/wellwisher/Footer";
import { FloatingWhatsApp } from "@/components/wellwisher/FloatingWhatsApp";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
        <div className="absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl" />

        <div className="mx-auto max-w-4xl px-5 md:px-8">
          {/* Breadcrumb / Back Link */}
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

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur shadow-soft">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              Privacy &amp; Data Protection
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Privacy <span className="text-gradient-mix">Policy</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Well Wisher is committed to safeguarding patient privacy, maintaining confidentiality, and handling personal and logistical information with the highest standards of dignity and respect.
            </p>
          </motion.div>

          {/* Policy Document Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="mt-10 space-y-8 rounded-[2rem] border border-border bg-white p-6 shadow-card sm:p-10"
          >
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                1. Introduction and Acceptance of Terms
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                At Well Wisher, we recognize the sensitivity of health-related support and care accompaniment. This Privacy Policy governs the collection, use, protection, and handling of information collected from patients, families, and authorized representatives when accessing or using our non-clinical healthcare companion services, website, or mobile platforms.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                By booking, registering, or utilizing our companion services, you acknowledge and agree to the information practices described in this Privacy Policy.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                2. Information We Collect
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                To properly plan, organize, and execute non-clinical companion visits and transportation coordination, Well Wisher collects the following specific categories of data:
              </p>

              <div className="space-y-4">
                {/* Personal Information */}
                <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-white shadow-soft">
                      <Lock className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-bold text-foreground">Personal Information</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We collect essential identity and communication details, including:
                  </p>
                  <ul className="mt-2.5 space-y-1.5 text-sm text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Patient's full legal name and age</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Physical pickup address and residential location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Patient's contact number and email address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Authorized family member or emergency contact name and phone number</span>
                    </li>
                  </ul>
                </div>

                {/* Logistical Health Data */}
                <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-accent text-foreground shadow-soft">
                      <Eye className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-bold text-foreground">Logistical Health Data</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    To ensure safe, comfortable accompaniment, we collect practical logistical requirements, including:
                  </p>
                  <ul className="mt-2.5 space-y-1.5 text-sm text-foreground/90">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Scheduled appointment time, doctor/department, and healthcare facility name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Practical information regarding patient comfort, mobility limitations, wheelchair needs, or physical support requirements</span>
                    </li>
                  </ul>
                  <p className="mt-2 text-xs italic text-muted-foreground">
                    * Well Wisher does not collect, analyze, interpret, or maintain clinical diagnostic files, medical histories, or lab records.
                  </p>
                </div>

                {/* Location Data */}
                <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-mix text-white shadow-soft">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-bold text-foreground">Location Data</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Real-time location information is collected strictly when required to coordinate the planned journey between the patient's pickup location and the designated healthcare facility, coordinate transportation rides, and provide trip progress updates to authorized family members.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                3. How We Use Your Data
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                All information collected by Well Wisher is utilized solely for legitimate operational and service delivery purposes:
              </p>
              <ul className="space-y-2 rounded-xl bg-secondary/50 p-4 text-sm text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Assigning and dispatching verified Wellwishers to designated locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Confirming appointments, pickup times, and transit schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Communicating live service milestones and updates to authorized family members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Responding to customer inquiries, operational delays, or service feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Ensuring compliance with applicable safety, operational, and regulatory standards</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                4. Data Protection &amp; Confidentiality
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                We implement strict organizational and technical measures to protect your personal and logistical data from unauthorized access, loss, alteration, or disclosure. We do not sell, rent, or trade your personal information. Access to data is restricted strictly to authorized operational staff and the assigned companion on a need-to-know basis.
              </p>
            </section>

            {/* Emergency Disclaimer Banner */}
            <div className="rounded-2xl border border-amber-300 bg-amber-50/80 p-5 text-amber-950">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-amber-900">
                    Important Medical &amp; Emergency Disclaimer
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-amber-900 sm:text-sm">
                    Well Wisher is a non-clinical patient support and coordination service. Well Wisher is <strong>NOT</strong> an emergency medical dispatch service. If you or your loved one is experiencing a medical emergency, please contact your local emergency medical service immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                5. Final Consent &amp; User Rights
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                By booking, accessing, or using Well Wisher services, you explicitly consent to the collection, processing, and logistical use of your information as outlined in this Privacy Policy. Users and authorized family representatives may request updates, corrections, or clarification regarding their data by contacting our support team at{" "}
                <a href="mailto:support@wellwisherinfo.com" className="font-semibold text-primary hover:underline">
                  support@wellwisherinfo.com
                </a>
                .
              </p>
            </section>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

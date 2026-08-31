"use client";

import { motion } from "framer-motion";
import { FileText, AlertTriangle, CheckCircle2, ShieldAlert, ArrowLeft, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/wellwisher/Navbar";
import { Footer } from "@/components/wellwisher/Footer";
import { FloatingWhatsApp } from "@/components/wellwisher/FloatingWhatsApp";

export default function TermsOfServicePage() {
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
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </a>
          </motion.div>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur shadow-soft">
              <FileText className="h-3.5 w-3.5 text-primary" />
              Service Terms &amp; Conditions
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Terms of <span className="text-gradient-mix">Service</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Please review these Terms of Service carefully. They describe the nature, scope, limitations, and responsibilities governing Well Wisher's non-clinical healthcare companion services.
            </p>
          </motion.div>

          {/* Prominent Emergency Notice Banner */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 rounded-2xl border border-red-200 bg-red-50/90 p-5 text-red-950 shadow-soft"
          >
            <div className="flex items-start gap-3.5">
              <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wide text-red-900">
                  Critical Emergency Medical Disclaimer
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-red-900 sm:text-sm">
                  <strong>WELL WISHER IS NOT AN EMERGENCY MEDICAL SERVICE OR EMERGENCY AMBULANCE DISPATCH SERVICE.</strong> If you or your family member is experiencing an acute medical emergency, life-threatening condition, or urgent health crisis, contact qualified emergency medical services immediately (such as 112 / 108 / local ambulance) or proceed to the nearest emergency medical room.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms Content Container */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="mt-8 space-y-8 rounded-[2rem] border border-border bg-white p-6 shadow-card sm:p-10"
          >
            {/* 1. Introduction and Acceptance */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                1. Introduction and Acceptance of Terms
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;Patient&quot;, or &quot;Representative&quot;) and Well Wisher Companion Services (&quot;Well Wisher&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing our website, booking an appointment, or utilizing our companion services, you agree to comply with and be bound by these Terms.
              </p>
            </section>

            {/* 2. The Nature of Wellwisher Services & Medical Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                2. The Nature of Wellwisher Services &amp; Medical Disclaimer
              </h2>
              <div className="rounded-2xl border border-primary/20 bg-secondary/40 p-5">
                <h3 className="text-base font-bold text-primary">
                  Non-Clinical Role &amp; Strict Limitations
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  A Wellwisher is a trained <strong>non-clinical patient support and coordination professional</strong>. A Wellwisher is <strong>NOT</strong> a doctor, nurse, paramedic, or clinical healthcare provider.
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  A Wellwisher is NOT authorized, trained, or expected to:
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Diagnose illness, medical conditions, or physical disorders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Prescribe, administer, or modify medications or prescriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Provide medical treatment, clinical nursing, or specialized clinical procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Replace the medical advice, clinical judgment, or care of licensed doctors, nurses, and clinicians</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                <strong>No Medical Advice:</strong> No information, communication, explanation, or assistance provided by Well Wisher or any Wellwisher constitutes medical advice or clinical diagnosis. For any questions regarding symptoms, treatments, medications, or health decisions, patients must consult directly with their treating doctor or qualified healthcare professional.
              </p>
            </section>

            {/* 3. Scope of Service & Service Journey */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                3. Scope of Service &amp; Planned Service Journey
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Well Wisher provides organized, compassionate non-clinical support to simplify healthcare visits. The planned service journey includes:
              </p>
              <ul className="space-y-2 rounded-xl bg-secondary/50 p-4 text-sm text-foreground/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Visiting the patient at their home or designated pickup location</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Confirming appointment schedules, service details, and special comfort requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Coordinating transportation to and from the healthcare facility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Accompanying the patient through hospital departments, reception desks, diagnostic labs, and billing counters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Assisting with procedural flow and navigational instructions as communicated by hospital administration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Coordinating pharmacy and diagnostic activities within permitted service scope</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Providing timely service updates to authorized family members and ensuring a safe return home</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Patients retain full autonomy to choose their preferred hospitals, doctors, diagnostic centers, and pharmacies. Well Wisher does not compel patients to select any specific healthcare institution.
              </p>
            </section>

            {/* 4. User Responsibilities */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                4. User Responsibilities
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                To enable safe and effective service coordination, users and authorized representatives agree to:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Provide accurate and complete information regarding the patient's physical condition, mobility limitations, and support requirements prior to service commencement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Ensure that the patient's condition is suitable for non-clinical accompaniment and does not require active medical transport, emergency care, or acute clinical intervention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Contact emergency medical services immediately in the event of an emergency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Treat Wellwishers with dignity, courtesy, and respect at all times.</span>
                </li>
              </ul>
            </section>

            {/* 5. Limitation of Liability and Indemnification */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                5. Limitation of Liability &amp; Indemnification
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  <strong>Non-Clinical Scope:</strong> Well Wisher and its companions provide non-clinical service coordination and accompaniment only. Well Wisher shall not be liable for any claims, injuries, or losses arising from reliance outside this non-clinical scope or from misinterpretation of the companion's role.
                </p>
                <p>
                  <strong>Third-Party Healthcare Providers:</strong> Well Wisher is an independent support service and does not operate, manage, or employ third-party hospitals, clinics, diagnostic centers, laboratories, or pharmacies. Well Wisher is not responsible for medical treatment outcomes, clinical negligence, diagnostic errors, hospital delays, or the decisions and actions of third-party healthcare personnel.
                </p>
                <p>
                  <strong>Travel &amp; Transit:</strong> While Well Wisher assists with travel coordination, Well Wisher is not liable for traffic delays, road incidents, or vehicular disruptions caused by third-party transportation providers or external factors beyond reasonable control.
                </p>
                <p>
                  <strong>Indemnification:</strong> You agree to indemnify, defend, and hold harmless Well Wisher, its directors, employees, and companions from any claims, damages, liabilities, or legal expenses resulting from inaccurate health disclosure, failure to seek timely medical attention, or violation of these Terms.
                </p>
              </div>
            </section>

            {/* 6. Belongings & Personal Items Policy */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                6. Belongings, Valuables &amp; Payments Policy
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Well Wisher's service model focuses on companionship, coordination, accompaniment, and navigation. The handling of cash, credit/debit cards, UPI or digital banking credentials, medications, medical records, jewellery, mobile phones, or other valuable personal belongings is strictly governed by Well Wisher's applicable policies and Standard Operating Procedures.
              </p>
            </section>

            {/* 7. Companion Assignment */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                7. Companion Assignment &amp; Preferences
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                While Well Wisher endeavors to accommodate customer preferences where feasible, companion assignment remains subject to operational availability, geographical suitability, and scheduling requirements. Well Wisher does not guarantee the selection or availability of specific individual companions.
              </p>
            </section>

            {/* 8. Final Consent */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                8. Final Consent &amp; Modifications
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                By booking or using Well Wisher services, you confirm that you have read, understood, and agreed to be bound by these Terms of Service. Well Wisher reserves the right to update or modify these Terms to reflect operational improvements or regulatory requirements.
              </p>
              <p className="pt-2 text-sm font-medium text-foreground">
                For questions regarding these Terms of Service, please reach out to us at{" "}
                <a href="mailto:care@wellwisher.com" className="font-semibold text-primary hover:underline">
                  care@wellwisher.com
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

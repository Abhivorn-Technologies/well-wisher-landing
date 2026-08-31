"use client";

import { motion } from "framer-motion";
import { Trash2, Shield, UserCheck, FileText, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/wellwisher/Navbar";
import { Footer } from "@/components/wellwisher/Footer";
import { FloatingWhatsApp } from "@/components/wellwisher/FloatingWhatsApp";

/**
 * Official Data Request Contact
 * NOTE FOR CLIENT / DEVELOPER:
 * Verify and update the official data-deletion contact channel before production.
 */
const DATA_DELETION_CONTACT_EMAIL = "support@wellwisherinfo.com";

export default function DataDeletionPolicyPage() {
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
              <Trash2 className="h-3.5 w-3.5 text-primary" />
              User Rights &amp; Data Governance
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Data Deletion <span className="text-gradient-mix">Policy</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Well Wisher respects your privacy and is committed to providing appropriate controls over the personal information collected for service coordination.
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
            {/* Section 1: What Data May Be Deleted */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                1. What Data May Be Deleted
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Users may request deletion of personal information that Well Wisher has collected for service coordination, subject to applicable legal, operational, and record-keeping requirements.
              </p>
              <p className="text-sm text-muted-foreground">
                This may include information collected for service coordination, such as:
              </p>
              <ul className="space-y-2 rounded-2xl bg-secondary/40 p-5 text-sm text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong>Name:</strong> Patient and representative legal names.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong>Age:</strong> Age information provided for comfort assessment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong>Address:</strong> Residential addresses and pickup locations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong>Contact details:</strong> Phone numbers and email addresses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong>Family member / emergency contact details:</strong> Authorized contact names and numbers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong>Service-related information:</strong> Scheduled appointment records, logistical preferences, and coordination notes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong>Location information:</strong> Journey coordination and pickup location coordinates used during service transit.</span>
                </li>
              </ul>
            </section>

            {/* Section 2: How to Request Data Deletion */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                2. How to Request Data Deletion
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Users who wish to request deletion of their personal information should contact Well Wisher through the official contact channel provided by the company.
              </p>
              <div className="rounded-2xl border border-primary/20 bg-secondary/50 p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-white shadow-soft">
                    <UserCheck className="h-4 w-4" />
                  </span>
                  <h3 className="text-base font-bold text-foreground">Official Request Channel</h3>
                </div>
                <p className="mt-3 text-sm text-foreground/90">
                  Please submit your data deletion request via email to:
                </p>
                <p className="mt-1 text-base font-bold text-primary">
                  <a href={`mailto:${DATA_DELETION_CONTACT_EMAIL}`} className="hover:underline">
                    {DATA_DELETION_CONTACT_EMAIL}
                  </a>
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Please specify your registered contact number and details of the service records you are requesting to delete.
                </p>
              </div>
            </section>

            {/* Section 3: Verification */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                3. Identity Verification
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                To protect user privacy and prevent unauthorized deletion requests, Well Wisher may need to verify the identity or authority of the person making the request before processing.
              </p>
            </section>

            {/* Section 4: Processing of Requests */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                4. Processing of Requests
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Deletion requests will be reviewed and processed in accordance with applicable requirements and Well Wisher's operational policies.
              </p>
            </section>

            {/* Section 5: Information That May Need to Be Retained */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                5. Information That May Need to Be Retained
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Certain information may need to be retained where required for legitimate service, legal, security, dispute-resolution, or record-keeping purposes in accordance with applicable regulations.
              </p>
            </section>

            {/* Section 6: Location Information */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                6. Location Information
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                As detailed in our Privacy Policy, location information is collected strictly when required to coordinate the patient's planned journey, manage pickup transit, and provide service milestone updates. Location data is treated as part of the service coordination information governed by this policy.
              </p>
            </section>

            {/* Section 7: Related Policies & Links */}
            <section className="border-t border-border pt-6">
              <h3 className="text-base font-bold text-foreground">Related Legal Documents</h3>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Shield className="h-4 w-4 text-primary" /> View Privacy Policy <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/terms-of-service"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <FileText className="h-4 w-4 text-primary" /> View Terms of Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

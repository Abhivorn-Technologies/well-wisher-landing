"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: number;
  q: string;
  paragraphs: string[];
  bullets?: string[];
  conclusion?: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    q: "1. What exactly is Well Wisher?",
    paragraphs: [
      "Well Wisher is a patient support and hospital assistance service designed to make a healthcare visit simpler, safer and less stressful.",
      "A Wellwisher can visit the patient at home, confirm the appointment and required details, coordinate transportation, accompany the patient to the hospital or healthcare facility, help with non-clinical navigation and coordination, and support the patient until the journey is completed and they return home.",
      "Our purpose is simple: the patient should not have to face a complicated healthcare journey alone.",
    ],
  },
  {
    id: 2,
    q: "2. Is a Wellwisher a doctor or nurse?",
    paragraphs: [
      "No.",
      "A Wellwisher is a non-clinical patient support professional. The role is not to diagnose illness, prescribe medicines, provide medical treatment, or replace doctors, nurses or other clinical professionals.",
      "The Wellwisher's responsibility is to support, accompany, coordinate, communicate and assist the patient from a service perspective.",
    ],
  },
  {
    id: 3,
    q: "3. What does a Wellwisher actually do during my visit?",
    paragraphs: ["Depending on the service requested, the Wellwisher may:"],
    bullets: [
      "Visit you at your home or designated location",
      "Confirm your appointment and service details",
      "Coordinate your ride",
      "Accompany you to the hospital, clinic or diagnostic centre",
      "Help you navigate departments, counters, labs and other areas",
      "Assist with non-clinical coordination",
      "Help you understand the procedural flow communicated by hospital staff",
      "Coordinate pharmacy or diagnostic-related activities as permitted",
      "Keep you informed and supported during the journey",
      "Coordinate your return home",
      "Report delays or service-related concerns to the Well Wisher operations team",
    ],
    conclusion:
      "The objective is that you feel guided rather than confused, accompanied rather than alone, and respected throughout the journey.",
  },
  {
    id: 4,
    q: "4. Can Well Wisher take me from my home to the hospital?",
    paragraphs: [
      "Yes. Home pickup and coordination of transportation are part of the planned service journey.",
      "The Wellwisher visits the designated pickup location, confirms the required details, coordinates the ride and accompanies the patient to the required healthcare facility.",
    ],
  },
  {
    id: 5,
    q: "5. Will the Wellwisher stay with me at the hospital?",
    paragraphs: [
      "The service is designed to provide support throughout the required non-clinical healthcare journey.",
      "The Wellwisher can help with navigation, coordination, communication and practical assistance so that the patient does not feel unnecessarily confused or unsupported.",
    ],
  },
  {
    id: 6,
    q: "6. Can a Wellwisher explain my doctor's prescription or change my medicines?",
    paragraphs: [
      "No.",
      "A Wellwisher cannot diagnose your condition, prescribe medicines, change a prescription or provide medical interpretation.",
      "If you have a medical question, medication question or treatment decision, you should speak directly with your doctor or qualified healthcare professional.",
    ],
  },
  {
    id: 7,
    q: "7. Can I choose my own hospital, doctor, laboratory or pharmacy?",
    paragraphs: [
      "Yes. Well Wisher's role is to support and coordinate your healthcare journey, not to force you to choose a particular healthcare provider.",
      "The Wellwisher should not force a patient to select a particular hospital, laboratory, pharmacy or doctor.",
    ],
  },
  {
    id: 8,
    q: "8. Can I use Well Wisher for an emergency?",
    paragraphs: [
      "Well Wisher is not an emergency medical service or emergency ambulance dispatch service.",
      "If you or your family member is experiencing a medical emergency, contact the appropriate emergency medical service or healthcare provider immediately.",
      "Well Wisher is designed primarily for planned, non-clinical healthcare support and coordination.",
    ],
  },
  {
    id: 9,
    q: "9. Who can use Well Wisher?",
    paragraphs: [
      "Well Wisher is intended for patients and families who need practical support during a healthcare journey.",
      "This can be particularly valuable when a patient is elderly, anxious, physically uncomfortable, confused, travelling alone, or when family members are unable to accompany them.",
      "The service is designed around dignity, patience, empathy and dependable human support.",
    ],
  },
  {
    id: 10,
    q: "10. Can an elderly person use Well Wisher without a family member?",
    paragraphs: [
      "Well Wisher is specifically designed to provide supportive companionship during healthcare journeys.",
      "A Wellwisher can accompany the patient, help with non-clinical navigation and coordination, and provide reassurance throughout the service.",
      "However, the Wellwisher does not become a substitute for a legally responsible family member, caregiver, doctor or nurse, and the suitability of the service depends on the patient's individual circumstances.",
    ],
  },
  {
    id: 11,
    q: "11. Will the Wellwisher bring me safely back home?",
    paragraphs: [
      "The planned service journey includes support through completion of the healthcare visit and coordination of the patient's return home.",
      "The Wellwisher's role is to help make the overall journey organized, calm and properly coordinated from the service perspective.",
    ],
  },
  {
    id: 12,
    q: "12. What information does Well Wisher collect?",
    paragraphs: [
      "To coordinate the service properly, Well Wisher may collect information such as:",
    ],
    bullets: [
      "Patient's name",
      "Age",
      "Address",
      "Contact details",
      "Family member/contact details",
      "Practical information about comfort or support requirements",
      "Appointment/service information",
      "Location information needed for transportation and coordination",
    ],
    conclusion: "This information is used to organize and provide the requested service.",
  },
  {
    id: 13,
    q: "13. Is my personal and healthcare information private?",
    paragraphs: [
      "Yes. Patient privacy is an important part of the Well Wisher service.",
      "Information collected for service coordination should be handled only for legitimate service purposes and in accordance with Well Wisher's Privacy Policy and applicable requirements.",
      "Our service philosophy is that every patient deserves dignity, privacy and respect.",
    ],
  },
  {
    id: 14,
    q: "14. Does Well Wisher track my location?",
    paragraphs: [
      "Location information may be used when required to coordinate the patient's journey and transportation.",
      "The Privacy Policy specifically describes real-time location information as being used to coordinate the ride between the patient's location and the required healthcare facility.",
    ],
  },
  {
    id: 15,
    q: "15. Can my family member book the service for me?",
    paragraphs: [
      "Yes, where the service permits it, a family member or authorized person can coordinate the patient's service.",
      "The Wellwisher may communicate with the patient or authorized family member to confirm appointment, pickup and other necessary service details.",
    ],
  },
  {
    id: 16,
    q: "16. What happens if my appointment gets delayed?",
    paragraphs: [
      "Please inform the Wellwisher or the Well Wisher operations team as soon as possible.",
      "The Wellwisher is expected to remain calm, communicate appropriately and report delays or special concerns through the operational process.",
    ],
  },
  {
    id: 17,
    q: "17. What if something unexpected happens during the service?",
    paragraphs: [
      "The Wellwisher should remain calm, prioritize appropriate support within the limits of the role, and inform the Well Wisher operations team through the applicable escalation process.",
      "If the situation is a medical emergency, emergency medical assistance must be contacted directly because Well Wisher is not an emergency medical service.",
    ],
  },
  {
    id: 18,
    q: "18. Can the Wellwisher handle my money, medicines or personal belongings?",
    paragraphs: [
      "Well Wisher's current service model focuses on support, coordination, accompaniment and navigation. Handling of cash, cards, UPI/payment credentials, medicines, medical reports, jewellery, mobile phones or other personal belongings is subject to Well Wisher's applicable policies and procedures.",
    ],
  },
  {
    id: 19,
    q: "19. Can the Wellwisher enter my home?",
    paragraphs: [
      "The Wellwisher may visit the patient's home or designated pickup location when this is part of the booked service.",
      "The Wellwisher is expected to respect the patient's privacy, dignity and personal boundaries and to remain within the agreed service scope.",
    ],
  },
  {
    id: 20,
    q: "20. Can I request a particular Wellwisher?",
    paragraphs: [
      "Where available, Well Wisher may consider customer preferences. However, assignment depends on availability, location, suitability and operational requirements.",
    ],
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Frequently Asked <span className="text-gradient-mix">Questions</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Everything you need to know about our healthcare companion support, service scope, and booking process.
          </p>
        </motion.div>

        {/* 2-Column CSS Grid with items-start to prevent neighboring card stretching */}
        <div className="mt-12 grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:gap-6">
          {faqs.map((f, i) => {
            const isOpen = openId === f.id;

            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: Math.min(i * 0.025, 0.25), duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
                whileHover={{ y: -2 }}
                className={`w-full overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-primary/40 shadow-card ring-1 ring-primary/10"
                    : "border-border shadow-soft hover:border-primary/20 hover:shadow-card"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFAQ(f.id)}
                  className="flex min-h-[4.75rem] w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors duration-200 sm:min-h-[5rem] md:px-6 md:py-4.5"
                >
                  <span
                    className={`text-sm font-semibold transition-colors duration-200 sm:text-base ${
                      isOpen ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-primary text-white shadow-soft transition-transform duration-300 md:h-8 md:w-8 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
                    >
                      <div className="border-t border-border/60 px-5 pb-5 pt-3.5 text-xs leading-relaxed text-muted-foreground sm:text-sm md:px-6 md:pb-6">
                        <div className="space-y-2.5">
                          {f.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}

                          {f.bullets && f.bullets.length > 0 && (
                            <ul className="my-2.5 space-y-1.5 rounded-xl bg-secondary/50 p-3.5 text-xs text-foreground/90 sm:text-sm">
                              {f.bullets.map((b, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {f.conclusion && <p className="pt-0.5">{f.conclusion}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

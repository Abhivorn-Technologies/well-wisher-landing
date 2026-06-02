"use client";

import { Navbar } from "@/components/wellwisher/Navbar";
import { Hero } from "@/components/wellwisher/Hero";
import { Metrics } from "@/components/wellwisher/Metrics";
import { Services } from "@/components/wellwisher/Services";
import { HowItWorks } from "@/components/wellwisher/HowItWorks";
import { WhyChoose } from "@/components/wellwisher/WhyChoose";
import { PeaceOfMind } from "@/components/wellwisher/PeaceOfMind";
import { Testimonials } from "@/components/wellwisher/Testimonials";
import { FAQ } from "@/components/wellwisher/FAQ";
import { Contact } from "@/components/wellwisher/Contact";
import { Footer } from "@/components/wellwisher/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Metrics />
      <Services />
      <HowItWorks />
      <WhyChoose />
      <PeaceOfMind />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

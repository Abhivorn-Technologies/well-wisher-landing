"use client";

import { Navbar } from "@/components/wellwisher/Navbar";
import { Hero } from "@/components/wellwisher/Hero";
import { About } from "@/components/wellwisher/About";
import { Services } from "@/components/wellwisher/Services";
import { HowItWorks } from "@/components/wellwisher/HowItWorks";
import { Testimonials } from "@/components/wellwisher/Testimonials";
import { FAQ } from "@/components/wellwisher/FAQ";
import { Contact } from "@/components/wellwisher/Contact";
import { Footer } from "@/components/wellwisher/Footer";
import { FloatingWhatsApp } from "@/components/wellwisher/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

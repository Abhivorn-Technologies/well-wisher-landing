import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Well Wisher — Care Like Family | Healthcare Companions" },
      { name: "description", content: "Trusted healthcare companions for hospital visits, elderly care, diagnostics, and patient support. Book a Well Wisher companion — care like family." },
      { property: "og:title", content: "Well Wisher — Care Like Family" },
      { property: "og:description", content: "Never attend a hospital visit alone. Verified healthcare companions across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
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

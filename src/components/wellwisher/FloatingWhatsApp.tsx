"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function FloatingWhatsApp() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside
      aria-label="Floating quick actions"
      className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3 md:bottom-7 md:right-7"
    >
      {/* Back to Top (Up Arrow) Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            aria-label="Scroll back to top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-primary shadow-card transition-colors hover:border-primary hover:bg-secondary focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
          >
            <ArrowUp className="h-5 w-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button with Soft Green Pulsing Glow */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="relative flex items-center justify-center"
      >
        {/* Soft Pulsing Green Glow Effect */}
        <motion.span
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366] blur-md md:blur-lg"
        />

        <motion.a
          href="https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20would%20like%20to%20know%20more%20about%20your%20healthcare%20companion%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.2 }}
          className="relative block h-14 w-14 rounded-full drop-shadow-xl transition-all duration-300 md:h-16 md:w-16 hover:drop-shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        >
          <img
            src="/whatsapp.png"
            alt="Contact us on WhatsApp"
            width={64}
            height={64}
            className="h-full w-full object-contain"
          />
        </motion.a>
      </motion.div>
    </aside>
  );
}

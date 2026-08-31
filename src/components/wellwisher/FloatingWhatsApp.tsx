"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <motion.a
        href="https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20would%20like%20to%20know%20more%20about%20your%20healthcare%20companion%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Well Wisher (+91 94909 06153)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="group relative flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-[#25d366]/40"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
        <MessageCircle className="h-6 w-6 fill-white text-[#25D366]" />
        <span className="hidden pr-1 text-sm font-bold tracking-wide sm:inline-block">
          WhatsApp Us
        </span>
      </motion.a>
    </aside>
  );
}

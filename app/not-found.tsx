"use client";

import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/wellwisher/Navbar";
import { Footer } from "@/components/wellwisher/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-5 py-32">
        <div className="text-center max-w-md mx-auto">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-white shadow-soft mx-auto mb-6">
            <AlertCircle className="h-8 w-8" />
          </span>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">404</h1>
          <h2 className="mt-3 text-xl font-semibold text-foreground">Page Not Found</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:shadow-glow"
            >
              <ArrowLeft className="h-4 w-4" /> Return to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

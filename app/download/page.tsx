"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { APP_LINKS } from "@/lib/app-links";
import { Navbar } from "@/components/wellwisher/Navbar";
import {
  Camera,
  Heart,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  MessageCircle,
  UserCheck,
  Clock,
  Briefcase,
  Navigation,
} from "lucide-react";

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="none">
      <path d="M32.5 28.5L271.8 256 32.5 483.5c-4.2-4.5-6.5-10.7-6.5-18.5V47c0-7.8 2.3-14 6.5-18.5z" fill="#4285F4" />
      <path d="M349.5 178.3L271.8 256 32.5 28.5c5.3-5.7 13.5-9 22.8-9 8.2 0 16.5 2.8 24.2 7.7l270 151.1z" fill="#EA4335" />
      <path d="M271.8 256l77.7 77.7-270 151.1c-7.7 4.9-16 7.7-24.2 7.7-9.3 0-17.5-3.3-22.8-9L271.8 256z" fill="#34A853" />
      <path d="M479.5 240.2l-130-72.7-77.7 88.5 77.7 77.7 130-72.8c12.5-7 19.5-17.5 19.5-27.4s-7-20.4-19.5-27.4z" fill="#FBBC05" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.3 26.1 2 52.3-14 69.5-33.7z" />
    </svg>
  );
}

function DownloadContent() {
  const searchParams = useSearchParams();
  const appParam = searchParams.get("app");

  const [device, setDevice] = useState<"android" | "ios" | "desktop">("desktop");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [redirectTarget, setRedirectTarget] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent || "";
      const isAndroid = /Android/i.test(ua);
      const isIOS = /iPhone|iPad|iPod/i.test(ua);

      if (isAndroid) {
        setDevice("android");
        if (appParam === "user") {
          setIsRedirecting(true);
          setRedirectTarget(APP_LINKS.userApp.playStore);
          window.location.replace(APP_LINKS.userApp.playStore);
        } else if (appParam === "partner") {
          setIsRedirecting(true);
          setRedirectTarget(APP_LINKS.partnerApp.playStore);
          window.location.replace(APP_LINKS.partnerApp.playStore);
        }
      } else if (isIOS) {
        setDevice("ios");
        if (appParam === "user" && APP_LINKS.userApp.appStore) {
          setIsRedirecting(true);
          setRedirectTarget(APP_LINKS.userApp.appStore);
          window.location.replace(APP_LINKS.userApp.appStore);
        } else if (appParam === "partner" && APP_LINKS.partnerApp.appStore) {
          setIsRedirecting(true);
          setRedirectTarget(APP_LINKS.partnerApp.appStore);
          window.location.replace(APP_LINKS.partnerApp.appStore);
        }
      } else {
        setDevice("desktop");
      }
    }
  }, [appParam]);

  if (isRedirecting) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#031124] text-white p-6 text-center">
        <meta httpEquiv="refresh" content={`0;url=${redirectTarget}`} />
        <div className="h-10 w-10 border-4 border-[#0066ff] border-t-transparent rounded-full animate-spin mb-4" />
        <h2 className="text-lg font-bold">Opening {device === "ios" ? "App Store" : "Google Play Store"}...</h2>
        <p className="text-xs text-slate-400 mt-2 max-w-sm">
          Redirecting automatically. If it doesn&apos;t open,{" "}
          <a href={redirectTarget} className="text-[#38bdf8] underline font-semibold">
            tap here to open
          </a>.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-900 flex flex-col justify-between overflow-x-hidden lg:h-screen lg:overflow-hidden">
      <Navbar />

      {/* Main Single-Screen Content Container */}
      <main className="flex-1 flex flex-col justify-between pt-16 sm:pt-20 pb-4 px-4 sm:px-6 max-w-[1100px] mx-auto w-full">
        
        {/* Title Header */}
        <div className="text-center pt-2 sm:pt-3 shrink-0">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/80 px-3 py-0.5 text-[11px] font-bold text-blue-700">
            <Sparkles className="h-3 w-3 text-blue-600" /> One QR Code for Android &amp; iOS
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl lg:text-[2rem] font-extrabold tracking-tight text-slate-950">
            Download <span className="text-[#0066ff]">Well Wisher</span> Apps
          </h1>
          <p className="mt-0.5 text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            {device === "desktop"
              ? "Scan the QR code with your phone camera to open your app store automatically."
              : "Tap below to install directly on your device from Google Play."}
          </p>
        </div>

        {/* Responsive App Cards (Single-Screen on Desktop, fluid scroll on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-auto max-w-4xl mx-auto w-full items-stretch py-2">
          
          {/* Card 1: User App (Patients & Families) */}
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              {/* Header Badge Row */}
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-700 border border-blue-200">
                  <Heart className="h-3 w-3 fill-blue-600 text-blue-600" /> Patients &amp; Families
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Live on Android
                </span>
              </div>

              <h2 className="mt-2 text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                Well Wisher App
              </h2>
              <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                Hospital visits, elderly care, and appointment support.
              </p>

              {/* QR Code Presentation Box */}
              <div className="my-3 rounded-xl border border-slate-150 bg-slate-50/80 p-3 flex items-center gap-3.5">
                <div className="shrink-0 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xs">
                  <img
                    src="/qr/qr-user-app.png"
                    alt="Well Wisher User App Single QR Code"
                    className="h-24 w-24 sm:h-28 sm:w-28 object-contain rounded-md"
                  />
                </div>
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-900">
                    <Camera className="h-3.5 w-3.5 text-blue-600" />
                    <span>Scan with phone</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Automatically opens Google Play on Android, and App Store on iOS.
                  </p>
                  <span className="inline-block text-[10px] font-bold text-blue-700 bg-blue-100/70 px-1.5 py-0.5 rounded">
                    Universal Single QR
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-1 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <UserCheck className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Trained &amp; verified hospital companions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Live updates &amp; appointment tracking</span>
                </div>
              </div>
            </div>

            {/* Store Action Badges (Side by Side in One Row) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-3 mt-2 border-t border-slate-100">
              {/* Apple App Store */}
              <div
                className="relative flex items-center justify-center gap-2 rounded-xl bg-black px-2 sm:px-2.5 py-2 text-white border border-slate-800 shadow-soft cursor-pointer hover:bg-slate-900 transition-colors"
                title="iOS App Coming Soon"
              >
                <AppleIcon className="h-5 w-5 shrink-0 text-white" />
                <div className="text-left leading-none">
                  <div className="text-[7.5px] sm:text-[8px] text-slate-300 font-medium">Download on the</div>
                  <div className="text-xs sm:text-[13px] font-bold text-white tracking-tight mt-0.5">App Store</div>
                </div>
                <span className="absolute -top-1.5 -right-1 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[8px] px-1.5 py-0.5 shadow-sm leading-none">
                  Soon
                </span>
              </div>

              {/* Google Play */}
              <a
                href={APP_LINKS.userApp.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-black px-2 sm:px-2.5 py-2 text-white border border-slate-800 shadow-soft hover:bg-slate-900 transition-colors cursor-pointer group"
              >
                <GooglePlayIcon className="h-5 w-5 shrink-0" />
                <div className="text-left leading-none">
                  <div className="text-[7px] sm:text-[7.5px] uppercase tracking-wider text-slate-300 font-medium">GET IT ON</div>
                  <div className="text-xs sm:text-[13px] font-bold text-white tracking-tight mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Card 2: Partner / Caretaker App */}
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              {/* Header Badge Row */}
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="h-3 w-3 text-emerald-600" /> Caretakers &amp; Companions
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Live on Android
                </span>
              </div>

              <h2 className="mt-2 text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                Well Wisher Partner
              </h2>
              <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                Join our network of companions &amp; earn with dignity.
              </p>

              {/* QR Code Presentation Box */}
              <div className="my-3 rounded-xl border border-slate-150 bg-slate-50/80 p-3 flex items-center gap-3.5">
                <div className="shrink-0 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xs">
                  <img
                    src="/qr/qr-partner-app.png"
                    alt="Well Wisher Partner App Single QR Code"
                    className="h-24 w-24 sm:h-28 sm:w-28 object-contain rounded-md"
                  />
                </div>
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-900">
                    <Camera className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Scan with phone</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Automatically opens Google Play on Android, and App Store on iOS.
                  </p>
                  <span className="inline-block text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                    Universal Single QR
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-1 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Flexible schedule &amp; companion bookings</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Navigation className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Step-by-step hospital navigation guide</span>
                </div>
              </div>
            </div>

            {/* Store Action Badges (Side by Side in One Row) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-3 mt-2 border-t border-slate-100">
              {/* Apple App Store */}
              <div
                className="relative flex items-center justify-center gap-2 rounded-xl bg-black px-2 sm:px-2.5 py-2 text-white border border-slate-800 shadow-soft cursor-pointer hover:bg-slate-900 transition-colors"
                title="iOS App Coming Soon"
              >
                <AppleIcon className="h-5 w-5 shrink-0 text-white" />
                <div className="text-left leading-none">
                  <div className="text-[7.5px] sm:text-[8px] text-slate-300 font-medium">Download on the</div>
                  <div className="text-xs sm:text-[13px] font-bold text-white tracking-tight mt-0.5">App Store</div>
                </div>
                <span className="absolute -top-1.5 -right-1 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[8px] px-1.5 py-0.5 shadow-sm leading-none">
                  Soon
                </span>
              </div>

              {/* Google Play */}
              <a
                href={APP_LINKS.partnerApp.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-black px-2 sm:px-2.5 py-2 text-white border border-slate-800 shadow-soft hover:bg-slate-900 transition-colors cursor-pointer group"
              >
                <GooglePlayIcon className="h-5 w-5 shrink-0" />
                <div className="text-left leading-none">
                  <div className="text-[7px] sm:text-[7.5px] uppercase tracking-wider text-slate-300 font-medium">GET IT ON</div>
                  <div className="text-xs sm:text-[13px] font-bold text-white tracking-tight mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* 3 Steps to Download Bar (Single Horizontal Row) */}
        <div className="rounded-2xl border border-slate-200 bg-white px-3 sm:px-4 py-2 shadow-xs max-w-4xl mx-auto w-full shrink-0">
          <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center divide-x divide-slate-100 text-xs">
            <div className="flex items-center justify-center gap-1.5 px-1">
              <span className="grid h-4 w-4 sm:h-5 sm:w-5 place-items-center rounded-full bg-blue-100 text-blue-700 text-[10px] sm:text-[11px] font-extrabold shrink-0">
                1
              </span>
              <span className="font-semibold text-slate-800 text-[10px] sm:text-xs">
                {device === "desktop" ? "Open Camera" : "Choose App"}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 px-1">
              <span className="grid h-4 w-4 sm:h-5 sm:w-5 place-items-center rounded-full bg-blue-100 text-blue-700 text-[10px] sm:text-[11px] font-extrabold shrink-0">
                2
              </span>
              <span className="font-semibold text-slate-800 text-[10px] sm:text-xs">
                {device === "desktop" ? "Scan QR Code" : "Tap Install"}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 px-1">
              <span className="grid h-4 w-4 sm:h-5 sm:w-5 place-items-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-[11px] font-extrabold shrink-0">
                3
              </span>
              <span className="font-semibold text-slate-800 text-[10px] sm:text-xs">App Store Opens</span>
            </div>
          </div>
        </div>

        {/* Compact Footer Bar */}
        <div className="pt-2 pb-1 flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-slate-500 shrink-0 border-t border-slate-200/60 max-w-4xl mx-auto w-full gap-2">
          <span>&copy; {new Date().getFullYear()} Well Wisher</span>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919490906153"
              className="inline-flex items-center gap-1 font-medium text-slate-600 hover:text-blue-600"
            >
              <PhoneCall className="h-3 w-3" /> +91 94909 06153
            </a>
            <a
              href="https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20need%20assistance%20downloading%20the%20app."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-emerald-600 hover:text-emerald-700"
            >
              <MessageCircle className="h-3 w-3" /> WhatsApp
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#031124]" />}>
      <DownloadContent />
    </Suspense>
  );
}

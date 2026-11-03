"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { APP_LINKS } from "@/lib/app-links";
import {
  Smartphone,
  ExternalLink,
  Check,
  ShieldCheck,
  Heart,
  Sparkles,
  Camera,
  Share2,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

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

interface AppDownloadModalProps {
  children?: React.ReactNode;
  defaultTab?: "user" | "partner";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function AppDownloadModal({
  children,
  defaultTab = "user",
  open,
  onOpenChange,
}: AppDownloadModalProps) {
  const [selectedApp, setSelectedApp] = useState<"user" | "partner">(defaultTab);
  const [copied, setCopied] = useState(false);

  const isUser = selectedApp === "user";
  const currentApp = isUser ? APP_LINKS.userApp : APP_LINKS.partnerApp;

  // Single universal QR code for each app
  const qrImage = isUser ? "/qr/qr-user-app.png" : "/qr/qr-partner-app.png";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentApp.universalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="max-w-[700px] w-[95vw] overflow-hidden p-0 border border-slate-150 bg-white text-slate-900 rounded-3xl shadow-2xl sm:rounded-3xl">
        {/* Top Header */}
        <div className="relative bg-gradient-to-b from-slate-50/90 to-white px-6 pt-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              <Sparkles className="h-3 w-3 text-blue-600" /> Official Mobile Apps
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live on Google Play
            </span>
          </div>

          <DialogTitle className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
            Download the Well Wisher App
          </DialogTitle>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Scan the QR code with your phone camera or download directly from Google Play.
          </p>

          {/* App Switcher Tabs (Patients & Families vs Companions & Caretakers) */}
          <div className="mt-4 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100/90 p-1.5">
            <button
              type="button"
              onClick={() => setSelectedApp("user")}
              className={`relative flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                isUser
                  ? "bg-white text-blue-600 shadow-sm shadow-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <Heart className={`h-4 w-4 shrink-0 ${isUser ? "fill-blue-600 text-blue-600" : "text-slate-400"}`} />
              <div className="text-left leading-tight">
                <span className="block font-bold">User App</span>
                <span className="block text-[10px] font-medium text-slate-400">Patients &amp; Families</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedApp("partner")}
              className={`relative flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                !isUser
                  ? "bg-white text-emerald-600 shadow-sm shadow-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <ShieldCheck className={`h-4 w-4 shrink-0 ${!isUser ? "text-emerald-600" : "text-slate-400"}`} />
              <div className="text-left leading-tight">
                <span className="block font-bold">Partner App</span>
                <span className="block text-[10px] font-medium text-slate-400">Caretakers &amp; Companions</span>
              </div>
            </button>
          </div>
        </div>

        {/* Content Body: Left QR Code + Right Store Actions */}
        <div className="grid gap-6 p-6 sm:grid-cols-12 sm:items-center">
          {/* Left Column: QR Card */}
          <div className="sm:col-span-5 flex flex-col items-center">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-3.5 shadow-soft transition-transform duration-200 hover:scale-[1.01]">
              {/* QR Image */}
              <img
                src={qrImage}
                alt={`${currentApp.name} QR Code`}
                className="h-44 w-44 sm:h-48 sm:w-48 rounded-xl object-contain"
              />

              {/* Bottom camera instruction tag */}
              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-slate-600">
                <Camera className="h-3.5 w-3.5 text-blue-600" />
                <span className="text-[11px] font-semibold tracking-wide">
                  Scan with Phone Camera
                </span>
              </div>
            </div>

            <p className="mt-2 text-center text-[11px] text-slate-400 max-w-[200px]">
              Point your smartphone camera at the QR code to open the download link.
            </p>
          </div>

          {/* Right Column: App Information & Official Store Badges */}
          <div className="sm:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              {/* App Title & Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-extrabold text-slate-900">{currentApp.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                    isUser
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  {isUser ? "For Patients & Elderly" : "For Health Companions"}
                </span>
              </div>

              <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {isUser
                  ? "Book compassionate, trained companions for hospital visits, doctor consultations, diagnostics, and elderly care."
                  : "Join Well Wisher as a verified healthcare companion. Accept booking requests, guide patient visits, and earn securely."}
              </p>
            </div>

            {/* Value Highlights with icons */}
            <div className="rounded-xl bg-slate-50/80 border border-slate-100 p-3 space-y-2">
              {isUser ? (
                <>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>Trained, background-verified hospital companions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>Real-time visit updates &amp; medicine coordination</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>Transparent pricing with no hidden charges</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>Flexible schedule — accept visits at your convenience</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>Step-by-step patient journey navigation assistance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>Direct bank payouts &amp; 24/7 dedicated partner helpline</span>
                  </div>
                </>
              )}
            </div>

            {/* Store Action Badges (Side by Side in One Row) */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {/* Apple App Store Badge */}
              <div
                className="relative flex items-center justify-center gap-2 rounded-xl bg-black px-3 py-2 text-white border border-slate-800 shadow-soft cursor-pointer hover:bg-slate-900 transition-colors"
                title="iOS App Coming Soon"
              >
                <AppleIcon className="h-5 w-5 shrink-0 text-white" />
                <div className="text-left leading-none">
                  <div className="text-[8px] text-slate-300 font-medium">Download on the</div>
                  <div className="text-[13px] font-bold text-white tracking-tight mt-0.5">App Store</div>
                </div>
                <span className="absolute -top-1.5 -right-1 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[8px] px-1.5 py-0.5 shadow-sm leading-none">
                  Soon
                </span>
              </div>

              {/* Google Play Badge */}
              <a
                href={currentApp.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-black px-3 py-2 text-white border border-slate-800 shadow-soft hover:bg-slate-900 transition-colors cursor-pointer group"
              >
                <GooglePlayIcon className="h-5 w-5 shrink-0" />
                <div className="text-left leading-none">
                  <div className="text-[7.5px] uppercase tracking-wider text-slate-300 font-medium">GET IT ON</div>
                  <div className="text-[13px] font-bold text-white tracking-tight mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/80 px-6 py-3 text-xs">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-700">Link Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Share2 className="h-3.5 w-3.5 text-slate-400" />
                <span>Copy Shareable Download Link</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919490906153?text=Hi%20Well%20Wisher%2C%20I%20would%20like%20to%20know%20more%20about%20the%20mobile%20apps."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
              <span>WhatsApp Help</span>
            </a>

            <Link
              href="/download"
              className="font-bold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
            >
              <span>Download Hub</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

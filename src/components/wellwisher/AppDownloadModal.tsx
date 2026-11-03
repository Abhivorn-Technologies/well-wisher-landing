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
    <svg viewBox="0 0 512 512" className={className} fill="currentColor">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
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

            {/* Store Buttons */}
            <div className="space-y-2">
              {/* Google Play Button */}
              <a
                href={currentApp.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-slate-950 px-4 py-2.5 text-white shadow-soft transition-all duration-200 hover:bg-[#0066ff] hover:shadow-glow cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <GooglePlayIcon className="h-6 w-6 text-[#34A853] group-hover:text-white transition-colors" />
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider text-slate-400 group-hover:text-blue-100">
                      GET IT ON
                    </div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-white">
                  <span>Install</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>

              {/* Apple App Store (Coming Soon) */}
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-2.5 text-slate-600">
                <div className="flex items-center gap-3">
                  <AppleIcon className="h-6 w-6 text-slate-400" />
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider text-slate-400">DOWNLOAD ON THE</div>
                    <div className="text-sm font-bold leading-tight text-slate-700">Apple App Store</div>
                  </div>
                </div>
                <span className="rounded-full bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 text-[10px] font-semibold text-amber-800">
                  iOS Coming Soon
                </span>
              </div>
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

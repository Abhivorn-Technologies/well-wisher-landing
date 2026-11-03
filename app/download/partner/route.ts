import { NextResponse } from "next/server";
import { APP_LINKS } from "@/lib/app-links";

export const dynamic = "force-dynamic";

/**
 * Universal Smart App Redirect for Well Wisher Partner / Caretaker App
 * Single URL for both Android & iOS:
 * - Android: Instantly redirects (HTTP 307) to the Google Play Store listing.
 * - iOS: Redirects (HTTP 307) to Apple App Store (or iOS web booking while app is in review).
 */
export async function GET(request: Request) {
  const userAgent = request.headers.get("user-agent") || "";
  const isIOS = /iphone|ipad|ipod/i.test(userAgent);

  // iOS Device
  if (isIOS) {
    if (APP_LINKS.partnerApp.appStore) {
      return NextResponse.redirect(APP_LINKS.partnerApp.appStore, 307);
    }
    return NextResponse.redirect(new URL("/download?ios=true&app=partner", request.url), 307);
  }

  // Android & Default Scans: Immediately launch Google Play Store listing
  return NextResponse.redirect(APP_LINKS.partnerApp.playStore, 307);
}


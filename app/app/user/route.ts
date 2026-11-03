import { NextResponse } from "next/server";
import { APP_LINKS } from "@/lib/app-links";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const userAgent = request.headers.get("user-agent") || "";
  const isIOS = /iphone|ipad|ipod/i.test(userAgent);

  if (isIOS) {
    if (APP_LINKS.userApp.appStore) {
      return NextResponse.redirect(APP_LINKS.userApp.appStore, 307);
    }
    return NextResponse.redirect(new URL("/download?ios=true&app=user", request.url), 307);
  }

  return NextResponse.redirect(APP_LINKS.userApp.playStore, 307);
}


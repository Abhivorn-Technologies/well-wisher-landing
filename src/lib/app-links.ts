/**
 * Centralized App Store & Download Links Configuration
 */
export const APP_LINKS = {
  userApp: {
    name: "Well Wisher",
    fullName: "Well Wisher — Patient & Elderly Companion App",
    badge: "For Patients & Families",
    audience: "Patients, Seniors & Families",
    tagline: "Book compassionate hospital companions in minutes",
    description:
      "Find and book verified, caring companions for hospital OPD visits, diagnostics, surgery follow-ups, and elderly accompaniment across India.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.wellwisher.userapp&pcampaignid=web_share",
    appStore: null as string | null, // iOS in progress
    iosAvailable: false,
    // Universal URL that detects Android -> Google Play Store, iOS -> Apple App Store
    universalUrl: "https://www.wellwisherinfo.com/download/user",
    qrCodeImage: "/qr/qr-user-app.png",
    packageId: "com.wellwisher.userapp",
    themeColor: "#0066ff",
    features: [
      "Book trained & background-verified companions",
      "Real-time trip & hospital visit live updates",
      "Transparent pricing with no hidden charges",
      "Family portal to monitor appointments remotely",
    ],
  },
  partnerApp: {
    name: "Well Wisher Partner",
    fullName: "Well Wisher Partner — Companion & Caretaker App",
    badge: "For Caretakers & Companions",
    audience: "Caretakers, Companions & Life Science Grads",
    tagline: "Empower patients and earn with pride",
    description:
      "Join our network of healthcare companions. Manage bookings, assist patients with dignity, navigate hospital workflows, and track your earnings transparently.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.wellwisher.partner&pcampaignid=web_share",
    appStore: null as string | null, // iOS in progress
    iosAvailable: false,
    // Universal URL that detects Android -> Google Play Store, iOS -> Apple App Store
    universalUrl: "https://www.wellwisherinfo.com/download/partner",
    qrCodeImage: "/qr/qr-partner-app.png",
    packageId: "com.wellwisher.partner",
    themeColor: "#059669",
    features: [
      "Flexible assignment schedule & location matching",
      "Step-by-step patient journey navigation guide",
      "Prompt and transparent direct bank payouts",
      "Dedicated 24/7 partner support & safety protocols",
    ],
  },
  hubUrl: "https://www.wellwisherinfo.com/download",
  hubQrCodeImage: "/qr/qr-download.png",
  hubQrCodeSvg: "/qr/qr-download.svg",
};

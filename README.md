# Well Wisher — Care Like Family

> **Official web landing page and mobile app distribution portal for Well Wisher Companion Services.**  
> Trusted healthcare companions for hospital visits, elderly care, diagnostic appointments, post-surgery support, and patient accompaniment across India.

---

## 🌟 Overview

**Well Wisher** connects patients and families with trained, empathetic, and background-verified healthcare companions so that no patient ever has to attend a hospital appointment alone.

This repository powers:
- The high-performance, modern marketing and booking landing page ([wellwisherinfo.com](https://www.wellwisherinfo.com)).
- The comprehensive **About Us**, **Services**, and **Compliance / Legal** pages.
- The **App Download Hub** (`/download`), featuring smart device detection and high-resolution QR codes for mobile app distribution.
- Interactive app download modals on desktop and mobile drawer menus.

---

## 📱 Mobile Apps

Well Wisher operates two dedicated mobile applications:

| Application | Audience | Android (Google Play) | iOS (Apple App Store) | Permanent Domain URL |
| :--- | :--- | :--- | :--- | :--- |
| **Well Wisher App** | Patients, Seniors & Families | [Google Play Store](https://play.google.com/store/apps/details?id=com.wellwisher.userapp&pcampaignid=web_share) (`com.wellwisher.userapp`) | *Coming Soon* | [`/download?app=user`](https://www.wellwisherinfo.com/download?app=user) |
| **Well Wisher Partner App** | Caretakers, Companions & Life Sciences Grads | [Google Play Store](https://play.google.com/store/apps/details?id=com.wellwisher.partner&pcampaignid=web_share) (`com.wellwisher.partner`) | *Coming Soon* | [`/download?app=partner`](https://www.wellwisherinfo.com/download?app=partner) |

---

## 🎯 Smart QR Code System (Single QR Code for Android & iOS)

A single QR code is generated for each app that works seamlessly across **both Android and iOS**:

- **User App Single QR Code**: Points to `https://www.wellwisherinfo.com/download/user`
- **Partner App Single QR Code**: Points to `https://www.wellwisherinfo.com/download/partner`

### How the Server-Side Smart Redirect Works:
When someone scans the QR code:
- **On Android**: The server immediately returns an **HTTP 307 Redirect directly to the Google Play Store**. The phone's camera / browser never displays the website — the phone opens the official Google Play Store application instantly!
- **On iOS**: The server returns an **HTTP 307 Redirect directly to the Apple App Store** (or the web booking fallback while iOS is in review).
- **On Desktop / Laptop**: Displays the full download page with app details and scan instructions.

### Pre-generated QR Assets (`public/qr/`):
- `qr-user-app.png`: Well Wisher User App (Single Universal QR for iOS & Android)
- `qr-partner-app.png`: Well Wisher Partner App (Single Universal QR for iOS & Android)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom typography and animations
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives & [Lucide Icons](https://lucide.dev/)
- **QR Code Engine**: `qrcode` (Vector SVG + High-res PNG with Error Correction Level H)
- **Language**: TypeScript 5

---

## 📂 Project Structure

```text
well-wisher-landing/
├── app/                                 # Next.js App Router
│   ├── layout.tsx                       # Root layout & metadata
│   ├── page.tsx                         # Homepage (Hero, Services, Testimonials, FAQ)
│   ├── about-us/page.tsx                # About Us & Partner mission page
│   ├── download/                        # App Download Portal
│   │   ├── page.tsx                     # Main Download Hub with QR codes & device detection
│   │   ├── user/page.tsx                # Direct alias for User App
│   │   └── partner/page.tsx             # Direct alias for Partner / Caretaker App
│   ├── privacy-policy/page.tsx          # Privacy Policy
│   ├── terms-of-service/page.tsx        # Terms of Service
│   └── data-deletion-policy/page.tsx    # Data Deletion Policy
├── public/                              # Static public assets
│   ├── HERO.png                         # Hero banner image
│   ├── well-wisher-logo.png             # Official brand logo
│   └── qr/                              # High-resolution PNG & scalable SVG QR codes
├── scripts/
│   └── generate-qrcodes.js              # Node.js CLI script to generate QR codes
├── src/
│   ├── components/
│   │   ├── ui/                          # Reusable Radix UI components (Dialog, Tabs, etc.)
│   │   └── wellwisher/                  # Feature components
│   │       ├── Navbar.tsx               # Header navigation with interactive App modal trigger
│   │       ├── AppDownloadModal.tsx     # Interactive App Download & QR Scanner Dialog
│   │       ├── Hero.tsx                 # Hero section with trust badges & CTAs
│   │       ├── Services.tsx             # Companion services catalog
│   │       ├── HowItWorks.tsx           # Step-by-step booking journey
│   │       ├── Testimonials.tsx         # Verified family reviews
│   │       ├── FAQ.tsx                  # Frequently asked questions
│   │       ├── Contact.tsx              # Companion booking contact form
│   │       └── Footer.tsx               # Site footer with quick links & social links
│   └── lib/
│       ├── app-links.ts                 # Centralized store URLs, packages & QR config
│       └── utils.ts                     # Utility helpers (cn, formatting)
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ or v20+
- `npm` or `bun`

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-org/well-wisher-landing.git
cd well-wisher-landing
npm install
```

### Running Locally

1. **Development Server** (hot reload):
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Production Build & Server**:
   ```bash
   npm run build
   npm run start
   # or simply: npm start
   ```

> [!NOTE]
> Always run `npm run start` or `npm start`. Do not run `npm run next start` as `next` is not a script name.

---

## ⚡ Useful Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server at `localhost:3000` |
| `npm run build` | Compiles an optimized production build |
| `npm run start` *(or `npm start`)* | Runs the built Next.js production server |
| `npm run lint` | Runs ESLint checks across the codebase |
| `npm run format` | Formats all code with Prettier |
| `npm run generate-qr` | Re-generates all high-resolution PNG & SVG QR codes into `public/qr/` |

---

## 🔧 Windows Troubleshooting

### 1. `'next' is not recognized as an internal or external command`
If running `npm run dev` or `npm run build` shows this error on Windows:
```text
'next' is not recognized as an internal or external command, operable program or batch file.
```
**Reason**: The `node_modules/.bin` folder or its `.cmd` wrapper files (`next.cmd`) are missing or were bypassed.  
**Fix**: Run `npm rebuild` to recreate `node_modules/.bin` and restore all executables:
```bash
npm rebuild
```
Once completed, `npm run dev` and `npm run build` will work immediately.

### 2. `npm error Missing script: "next"`
If you run `npm run next start`:
```text
npm error Missing script: "next"
```
**Fix**: `npm run` expects a script defined in `package.json`. Use:
```bash
npm run start
# or
npm start
```

---

## ⚙️ Updating App Store Links

When the iOS app is approved on the Apple App Store, or when package details change, update [`src/lib/app-links.ts`](file:///c:/Users/Sadik/Downloads/Abhivorn/development/well-wisher-landing/src/lib/app-links.ts):

```typescript
export const APP_LINKS = {
  userApp: {
    playStore: "https://play.google.com/store/apps/details?id=com.wellwisher.userapp",
    appStore: "https://apps.apple.com/app/idYOUR_APP_ID", // Set App Store URL when live
    iosAvailable: true,
    ...
  },
  partnerApp: {
    playStore: "https://play.google.com/store/apps/details?id=com.wellwisher.partner",
    appStore: "https://apps.apple.com/app/idYOUR_PARTNER_APP_ID",
    iosAvailable: true,
    ...
  }
};
```

Then regenerate QR codes with:
```bash
npm run generate-qr
```

---

## 📞 Support & Inquiries

- **Helpline**: [+91 94909 06153](tel:+919490906153)
- **WhatsApp**: [Chat with Well Wisher](https://wa.me/919490906153)
- **Email**: [support@wellwisherinfo.com](mailto:support@wellwisherinfo.com)
- **Website**: [wellwisherinfo.com](https://www.wellwisherinfo.com)


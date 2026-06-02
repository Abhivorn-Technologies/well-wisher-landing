import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Well Wisher — Care Like Family | Healthcare Companions",
  description: "Trusted healthcare companions for hospital visits, elderly care, diagnostics, and patient support. Book a Well Wisher companion — care like family.",
  openGraph: {
    title: "Well Wisher — Care Like Family",
    description: "Never attend a hospital visit alone. Verified healthcare companions across India.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

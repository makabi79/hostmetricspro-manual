import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";

const siteUrl = "https://hostmetricpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "HostMetricsPro | Airbnb ROI & STR Deal Analyzer",
    template: "%s | HostMetricsPro",
  },

  description:
    "Analyze Airbnb and short-term rental deals with cash flow, cap rate, ROI, break-even occupancy, deal score, risk, and PDF export.",

  keywords: [
    "Airbnb ROI calculator",
    "Airbnb profit calculator",
    "short-term rental calculator",
    "STR deal analyzer",
    "Airbnb cash flow calculator",
    "Airbnb investment analysis",
    "real estate investment calculator",
  ],

  authors: [{ name: "HostMetricsPro" }],
  creator: "HostMetricsPro",
  publisher: "HostMetricsPro",

  verification: {
    google: "VLoEafaqK",
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "HostMetricsPro",
    title: "HostMetricsPro | Airbnb ROI & STR Deal Analyzer",
    description:
      "Analyze Airbnb and short-term rental deals before you buy. Calculate cash flow, ROI, cap rate, break-even occupancy, risk, and deal score.",
  },

  twitter: {
    card: "summary_large_image",
    title: "HostMetricsPro | Airbnb ROI & STR Deal Analyzer",
    description:
      "Airbnb and short-term rental deal analysis SaaS for investors.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="site-shell">
            <SiteHeader />

            <main className="site-main">{children}</main>

            <footer className="site-footer">
              <div className="site-container site-footer-inner">
                <div>
                  © 2026 HostMetricsPro. Built for Airbnb and STR investors.
                </div>

                <div className="site-footer-links">
                  <a href="/" className="site-footer-link">
                    Home
                  </a>

                  <a href="/pricing" className="site-footer-link">
                    Pricing
                  </a>

                  <a href="/signup" className="site-footer-link">
                    Signup
                  </a>

                  <a href="/terms" className="site-footer-link">
                    Terms of Service
                  </a>

                  <a href="/privacy" className="site-footer-link">
                    Privacy Policy
                  </a>

                  <a href="/refund" className="site-footer-link">
                    Refund Policy
                  </a>

                  <a
                    href="mailto:support.hostmetricpro@gmail.com"
                    className="site-footer-link"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";

const siteUrl = "https://hostmetricpro.com";
const googleAnalyticsId = "G-GJHC0L7TYR";

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
    google: "VLoEafaqKicf1F_45oOgZlTwuMZLGDzTZI73RpLgUvQ",
    other: {
      "msvalidate.01": ["331C636546915CE1E58F5B8D56D069D8"],
    },
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "${googleAnalyticsId}");
          `}
        </Script>

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
                  <a href="/" className="site-footer-link">Home</a>
                  <a href="/pricing" className="site-footer-link">Pricing</a>
                  <a href="/signup" className="site-footer-link">Signup</a>
                  <a href="/blog" className="site-footer-link">Blog</a>

                  <a href="/airbnb-roi-calculator" className="site-footer-link">
                    Airbnb ROI Calculator
                  </a>

                  <a href="/airbnb-profit-calculator" className="site-footer-link">
                    Airbnb Profit Calculator
                  </a>

                  <a href="/airbnb-revenue-calculator" className="site-footer-link">
                    Airbnb Revenue Calculator
                  </a>

                  <a href="/airbnb-expense-calculator" className="site-footer-link">
                    Airbnb Expense Calculator
                  </a>

                  <a href="/cap-rate-calculator" className="site-footer-link">
                    Cap Rate Calculator
                  </a>

                  <a href="/cash-flow-calculator" className="site-footer-link">
                    Cash Flow Calculator
                  </a>

                  <a href="/noi-calculator" className="site-footer-link">
                    NOI Calculator
                  </a>

                  <a href="/dscr-calculator" className="site-footer-link">
                    DSCR Calculator
                  </a>

                  <a href="/real-estate-roi-calculator" className="site-footer-link">
                    Real Estate ROI Calculator
                  </a>

                  <a
                    href="/investment-property-calculator"
                    className="site-footer-link"
                  >
                    Investment Property Calculator
                  </a>

                  <a
                    href="/cash-on-cash-return-calculator"
                    className="site-footer-link"
                  >
                    Cash on Cash Return Calculator
                  </a>

                  <a href="/rental-yield-calculator" className="site-footer-link">
                    Rental Yield Calculator
                  </a>

                  <a href="/airbnb-investment-analysis" className="site-footer-link">
                    Investment Analysis
                  </a>

                  <a href="/terms" className="site-footer-link">Terms</a>
                  <a href="/privacy" className="site-footer-link">Privacy</a>
                  <a href="/refund" className="site-footer-link">Refund</a>

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
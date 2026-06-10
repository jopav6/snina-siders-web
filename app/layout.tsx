import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snina Siders LLC | Full-Line Home Remodeling — Bridgewater, NJ",
  description:
    "Snina Siders LLC delivers full-line home remodeling across North & Central Jersey — kitchens, baths, basements, additions, siding, roofing and more. 20+ years, NJ licensed. Text for a free estimate.",
  // Unlisted: keep the site out of search engines. The link still works for anyone who has it.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Snina Siders LLC — Full-Line Home Remodeling",
    description:
      "Refined craftsmanship across North & Central Jersey. 20+ years. NJ licensed. Text for a free estimate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

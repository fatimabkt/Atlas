import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const fraunces = Fraunces({
  variable: "--font-display-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Atlas & Sand | Premium Morocco Tours & Travel",
    template: "%s | Atlas & Sand",
  },
  description:
    "Discover the beauty of Morocco with Atlas & Sand — handcrafted desert treks, imperial city tours, and private journeys through Marrakech, Fes, the Sahara, and beyond.",
  keywords: [
    "Morocco tours",
    "Sahara desert trip",
    "Marrakech travel agency",
    "Morocco vacation packages",
    "Atlas Mountains trek",
    "luxury Morocco travel",
  ],
  openGraph: {
    title: "Atlas & Sand | Premium Morocco Tours & Travel",
    description:
      "Handcrafted desert treks, imperial city tours, and private journeys across Morocco.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand text-ink font-body">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Complete Mobile Health",
  description: "Drug testing company based in Wisconsin, USA",
  manifest: "/manifest.ts",
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "Complete Mobile Health",
    type: "website",
    title: "Complete Mobile Health Is Your Corporate Wellness Company",
    description:
      "Custom corporate wellness programs for your employees. On-site biometric screenings, blood testing, and reporting.",
    images: "https://completemobile-health.com/cmh_logo_2.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className="relative flex flex-col min-h-screen w-screen bg-slate-200">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority={true}
            quality={80}
            placeholder="blur"
            blurDataURL="/background_blurred.jpg"
          />
        </div>

        <header className="flex h-fit">
          <Navbar />
        </header>

        <main className="flex flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

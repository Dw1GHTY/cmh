import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
    images: "https://cmh-test.vercel.app/cmh_logo_2.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat bg-slate-200 ">
        <header className="flex h-fit">
          <Navbar />
        </header>
        <main className="flex flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

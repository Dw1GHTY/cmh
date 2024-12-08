import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Complete Mobile Health",
  description: "Drug testing company based in Wisconsin, USA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-200">
        {/*//? styles attribute concat with classname */}
        <Navbar styles="sticky top-0 z-10 flex flex-row h-20 bg-green-500" />
        <main className="flex flex-grow">{children}</main>
        <Footer styles="flex flex-row bg-green-800" />
      </body>
    </html>
  );
}

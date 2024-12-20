import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
      <body className="flex flex-col min-h-screen w-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat bg-slate-200 ">
        {/*//? styles attribute concat with classname */}
        <Navbar />
        <main className="flex flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

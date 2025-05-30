import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "OhmmiiDev | Portfolio",
  description:
    "A modern and responsive personal portfolio website built with Next.js, styled using Tailwind CSS, and enhanced with smooth animations from Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}

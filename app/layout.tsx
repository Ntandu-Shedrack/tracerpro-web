export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "TracerPro",
  description: "A modern, open-source inventory tracking tool",
  icons: {
    icon: "/images/logo-new.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSerif.variable}`}>
      <body className="flex min-h-screen bg-gray-50">
        {/* Main Content Area */}
        <main className="flex-1 mt-16 md:mt-0">{children}</main>
      </body>
    </html>
  );
}

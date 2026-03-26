import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VXU Global | Accelerate Your Future with Global Education",
  description: "Study Abroad, AI Careers, and Migration Pathways. Join 5,000+ students taking the leap to world-class universities and tech roles.",
  openGraph: {
    title: "VXU Global",
    description: "Accelerate Your Future with Global Education",
    url: "https://vxuglobal.com",
    siteName: "VXU Global",
    images: [
      {
         url: "/og-image.png",
         width: 1200,
         height: 630,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <div className="pt-24 lg:pt-28 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

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
         url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070",
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
        {children}
      </body>
    </html>
  );
}

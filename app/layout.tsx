import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krypto",
  description: "Krypto is the easiest way to track and trade your digital assets anytime, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`px-10 sm:px-12 sm:py:10.5  md:px-16 md:py-14.5 lg:px-36 lg:py-18.5  xl:px-48 xl:py-22.5 min-h-screen ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

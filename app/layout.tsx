import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krypto",
  description:
    "Krypto is the easiest way to track and trade your digital assets anytime, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link
          rel="preload"
          href="/Hero Image.png"
          as="image"
          type="image/png"
        />
      </head>
      <body
        className={`transition-all delay-300 sm:py:10.5 min-h-screen px-10 sm:px-12 md:px-16 md:py-14.5 lg:px-36 lg:py-18.5 xl:px-48 xl:py-22.5 xlg:px-60 xxlg:px-72 ${outfit.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

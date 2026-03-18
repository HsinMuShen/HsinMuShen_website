import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "Hsin Mu Shen | Creator and Builder",
  description:
    "A multi-dimensional personal brand website for Hsin Mu Shen, combining photography, sketching, and software craft in one expressive experience."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${playfairDisplay.variable} bg-canvas font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

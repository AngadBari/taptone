import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TapTone",
  description: "Beautiful UI interaction sounds for modern websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>

        {children}
         <Script
          src="https://page-views-api.ratneshc.com/script"
          data-site="tap-tone.vercel.app" // Replace with your domain
          data-path="/"
          strategy="afterInteractive"
        />
        </body>
    </html>
  );
}
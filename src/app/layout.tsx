
import type { Metadata } from "next";
import { Geist, Geist_Mono, Encode_Sans_Expanded } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const encodeSans = Encode_Sans_Expanded({
  variable: "--font-encode-sans",
  subsets: ["latin"],
  weight: ["300"], // ممكن تضيفي أوزان تانية زي ["300", "400", "600"]
});

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js app with custom fonts",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${encodeSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

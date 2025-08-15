import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResposiveNav from "@/components/Home/Navbar/ResposiveNav";

const inter = Inter({
  variable: "--font-inter",
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mansha Vatsh | Portfolio",
  description: "Explore the portfolio of Mansha Vatsh — showcasing innovative full-stack web projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased bg-[#0d0d1f]`}
      >
        <ResposiveNav />
        {children}
      </body>
    </html>
  );
}

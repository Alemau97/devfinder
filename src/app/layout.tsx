import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Proposal",
  description: "The Proposal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

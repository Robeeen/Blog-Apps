import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppin = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "New Blog Apps",
  description: "Generated by create next app",
};

export default function RootLayout({
  children, }: Readonly <{
  children: React.ReactNode;
  }>) {
        return (
          <html lang="en">
            <body className={poppin.className}>{children}</body>
          </html>
        );
}

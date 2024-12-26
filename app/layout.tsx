import type { Metadata } from "next";
import { Oswald, Mulish } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Include desired font weights
});

// Muli Font
const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "600"], // Include desired font weights
});

export const metadata: Metadata = {
  title: "High Gym",
  description: "Empower your fitness journey with High Gym.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      
        className={`${oswald.variable} ${mulish.variable} antialiased`}
      >
        <Header /> 
        {children}
        <Footer /> 
      </body>
    </html>
  );
}

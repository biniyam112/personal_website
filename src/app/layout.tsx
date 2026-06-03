import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-bvp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Biniyam Zergaw - Data Science Portfolio",
  description: "Data Science master's student at Fordham University. Passionate about ML and big data projects.",
  icons: {
    icon: "/images/fav_icon.png",
    shortcut: "/images/fav_icon.png",
    apple: "/images/fav_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnam.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

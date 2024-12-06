import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Sora } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title:
    "Sahari - Your Daily Companion | Solutions for Loneliness and Memories",
  description:
    "Sahari is an innovative platform offering solutions for individuals feeling lonely or struggling to socialize. Connect with professional talents for social activities or relive memories with loved ones through an AI chatbot.",
  keywords: [
    "Sahari",
    "Your Daily Companion",
    "loneliness solutions",
    "social companion",
    "social activities",
    "AI chatbot",
    "memory AI",
    "Sahari Friends",
    "Sahari Memory",
    "Sahari Memory+",
    "conversation partner",
    "social services",
    "interactive AI chatbot",
  ],
  openGraph: {
    title:
      "Sahari - Your Daily Companion | Solutions for Loneliness & Memories",
    description:
      "Find a daily companion for social activities or relive cherished memories with loved ones through an AI chatbot. Sahari helps create meaningful connections.",
    url: "https://sahari.id",
    type: "website",
    images: [
      {
        url: "/images/sahari-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sahari - Your Daily Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahari - Your Daily Companion",
    description:
      "Sahari offers daily companions for social activities and an AI chatbot to relive memories with loved ones.",
    images: "/images/sahari-twitter-image.jpg",
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
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} font-sora antialiased bg-[#070707]`}
      >
        {" "}
        <NextTopLoader showSpinner={false}/>
        {children}
      </body>
    </html>
  );
}

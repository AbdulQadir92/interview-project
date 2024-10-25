import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilroyMedium = localFont({
  src: "./fonts/gilroy-medium.ttf",
  variable: "--gilroy-medium",
  weight: "400",
});
const gilroySemibold = localFont({
  src: "./fonts/gilroy-semibold.ttf",
  variable: "--gilroy-semibold",
  weight: "400",
});
const gilroyBold = localFont({
  src: "./fonts/gilroy-bold.ttf",
  variable: "--gilroy-bold",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Restaurant Owners",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroySemibold.variable} ${gilroyMedium.variable} ${gilroyBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

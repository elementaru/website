import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const monaco = localFont({
  src: "./Monaco.ttf",
  variable: "--font-monaco",
});

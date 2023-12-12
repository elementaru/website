"use client";

import { useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import useAnalytics from "@/hooks/useAnalytics";
import Toggle from "@/components/toggle";
import { useDarkMode } from "@/hooks/useDarkMode";

const monaco = localFont({ src: "./Monaco.ttf" });

function RootLayout({ children }: { children: React.ReactNode }) {
  useAnalytics();
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  }, [isDarkMode]);

  return (
    <html lang="en">
      <body className={monaco.className}>
        {/* <Toggle /> */}
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

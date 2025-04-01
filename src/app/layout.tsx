import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Gilang Ramadhan - Portfolio",
  description: "Frontend Developer & UI/UX Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // @ts-ignore
    <html lang="en">
      {/* @ts-ignore */}
      <body className={inter.className}>
        {/* @ts-ignore */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

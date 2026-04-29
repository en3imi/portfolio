import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eyad Al-Naimi | Data Scientist & AI Engineer",
  description: "Portfolio of Eyad Al-Naimi, a Data Scientist and AI Engineer specializing in machine learning, data analysis, and AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased selection:bg-white/10`}>
        {children}
      </body>
    </html>
  );
}

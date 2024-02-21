import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from '@/ui/Nav';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "全能口袋奥",
  description: "实用工具分享",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}text-white h-screen overflow-hidden`}>
            <Nav/>
            {children}
      </body>
    </html>
  );
}

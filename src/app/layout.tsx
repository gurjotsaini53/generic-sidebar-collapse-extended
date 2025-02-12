import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Asidebar from "@/components/asidebar/Asidebar";
import { sidebarItems } from "@/components/asidebar/asidebar";
import sidebarIcon from "@/assets/icons/sidebar.svg";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASidebar",
  description: "This is a aside bar component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-row">
          <Asidebar
            items={sidebarItems}
            icon={sidebarIcon}
            collapsedWidth={50}
            expandedWidth={300}
            backgroundColor="bg-gray-900"
            textColor="text-gray-100"
            iconColor="text-gray-400"
            activeBg="bg-blue-600"
            activeText="text-white"
          />
          <main className="flex-1 p-2">{children}</main>
        </div>
      </body>
    </html>
  );
}

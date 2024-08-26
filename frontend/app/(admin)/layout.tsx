
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import RightSideBar from "@/components/RightSideBar/RightSideBar";
import NavBar from "@/components/NavBar/NavBar";
import BottomBar from "@/components/BottomBar/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OU Hub",
  description: "A centralized social media platform for the OU community hub, sharing news, events, and connecting students, faculty, and staff of Ho Chi Minh City Open University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          {/* Main Content */}
          <div>
            {children}
          </div>
      </body>
    </html>
  );
}

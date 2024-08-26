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
        <NavBar />
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-12 h-full w-full">
          {/* Left Sidebar */}
          <div className="hidden sm:block sm:col-span-1 lg:col-span-2">
            <LeftSideBar />
          </div>

          {/* Main Content */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-8 pt-20">
            {children}
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block lg:col-span-2">
            <RightSideBar />
          </div>
        </div>
        <BottomBar />
      </body>
    </html>
  );
}

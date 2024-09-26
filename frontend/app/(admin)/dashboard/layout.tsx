
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import AdminSideBar from "@/components/LeftSideBar/AdminSideBar";
import AdminNavBar from "@/components/NavBar/AdminNavBar";

import QueryProvider from "@/providers/QueryProvider";

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
        <QueryProvider>
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-12 h-full w-full">
            <div className="hidden sm:block sm:col-span-1 lg:col-span-2">
              <AdminSideBar />
            </div>
            <div className="col-span-1 sm:col-span-3 lg:col-span-10 pt-20">
              {children}
            </div>
          </div>
          <AdminNavBar />
        </QueryProvider>
      </body>
    </html>
  );
}

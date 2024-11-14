import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../../styles/globals.css';

import NavBar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/Shared/Sidebar";

import { AuthProvider } from "@/providers/AuthProvider";
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
          <AuthProvider>
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <NavBar />
                <main className="grid grid-cols-12 gap-6 px-8">
                  {children}
                </main>
              </div>
            </div>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

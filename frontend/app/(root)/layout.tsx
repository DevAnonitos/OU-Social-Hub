import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import '../../styles/globals.css';
import { type ReactNode } from 'react';

// Components
import NavBar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/Shared/Sidebar";
import BottomBar from "@/components/Shared/BottomBar";
import { Toaster } from "@/components/ui/toaster";

// Providers
import { AuthProvider } from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";
import ThemeProvider from "@/providers/ThemeProvider";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OU Hub",
  description: "A centralized social media platform for the OU community hub, sharing news, events, and connecting students, faculty, and staff of Ho Chi Minh City Open University.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <QueryProvider>
          <AuthProvider>
            <ThemeProvider>
              <Toaster />
              <Sidebar />
              <NavBar />
              <div className="flex">
                <div className="ml-[272px] mt-[64px] flex-1 overflow-y-auto">
                  <main className="grid grid-cols-12 gap-6 px-8">
                    {children}
                  </main>
                  <BottomBar />
                </div>
              </div>
            </ThemeProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

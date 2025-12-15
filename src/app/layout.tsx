import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import BackgroundMeteors from "@/components/background-meteors";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-t from-background via-background to-[#0064b558]" />
        <BackgroundMeteors />

        {/* CONTENT */}
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6 relative z-10">
              {children}
              <Navbar />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import BackgroundMeteors from "@/components/background-meteors";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Abroor Rizky - Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

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
        <div
          className="fixed inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to top, hsl(var(--background)) 85%, transparent), url('/bg.jpg')",
          }}
        />

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

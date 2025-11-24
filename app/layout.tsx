import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // Switched to JetBrains Mono
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load the Monospace font
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Full-stack engineer and designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono bg-white text-[#0B132B]`}>
        {/* Removed ThemeProvider to enforce single theme */}
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="py-8 text-center text-sm text-[#3A506B] border-t border-[#3A506B]/20 mt-20">
            <p className="font-mono">
              // © {new Date().getFullYear()} Built with Next.js 16 & Tailwind.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Developer & Designer Portfolio",
  description: "Portfolio of a high-skill web designer and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-600 border-t border-slate-200 dark:border-slate-900 mt-20">
              <p>© {new Date().getFullYear()} Built with Next.js 16, Tailwind & Firebase.</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNav from "./components/MobileNav";
import Link from 'next/link';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OCCOTO - Empowering the Future of IT Solutions",
  description: "OCCOTO provides cutting-edge IT consulting, software development, cloud solutions, and cybersecurity services. Experience the future of technology with us.",
  keywords: "IT consulting, software development, cloud solutions, cybersecurity, OCCOTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-full flex flex-col`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-red-600">OCCOTO</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors">About</Link>
              <Link href="/services" className="text-gray-600 hover:text-red-600 transition-colors">Services</Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-red-600 transition-colors">Portfolio</Link>
              <Link href="/blog" className="text-gray-600 hover:text-red-600 transition-colors">Blog</Link>
              <Link href="/contact" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">Contact Us</Link>
            </div>
            <MobileNav />
          </nav>
        </header>
        <main className="flex-grow pt-20">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-600">
              © {new Date().getFullYear()} OCCOTO. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

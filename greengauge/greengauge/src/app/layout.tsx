import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreenGauge - Climate Tech Investment Intelligence",
  description: "Discover the most promising climate tech companies from YC and Techstars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-green-600">GreenGauge</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-green-600">Companies</a>
                <a href="#" className="text-gray-700 hover:text-green-600">Sectors</a>
                <a href="#" className="text-gray-700 hover:text-green-600">About</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-500">
              <p>© 2024 GreenGauge. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

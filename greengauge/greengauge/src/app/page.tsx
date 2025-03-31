'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                GreenGauge
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/companies" 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                Companies
              </Link>
              <Link 
                href="/sectors" 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                Sectors
              </Link>
              <Link 
                href="/investments" 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                Investments
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to GreenGauge</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/companies" className="block">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Companies</h2>
                <p className="text-gray-600">Browse climate tech companies and interact with our AI assistant</p>
              </div>
            </Link>
            
            <Link href="/sectors" className="block">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sectors</h2>
                <p className="text-gray-600">Analyze sector growth and ROI trends</p>
              </div>
            </Link>
            
            <Link href="/investments" className="block">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Investments</h2>
                <p className="text-gray-600">Evaluate investment opportunities and market trends</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

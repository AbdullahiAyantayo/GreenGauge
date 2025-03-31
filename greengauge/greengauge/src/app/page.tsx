'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">GreenGauge</h1>
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
    </main>
  );
}

'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
          Discover Climate Tech
          <span className="text-teal-600"> Companies</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find and invest in the most promising climate tech companies from YC and Techstars
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
          <p className="text-gray-600">Get intelligent insights and recommendations for climate tech investments</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Sector Insights</h3>
          <p className="text-gray-600">Explore detailed analysis of different climate tech sectors and trends</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Investment Evaluation</h3>
          <p className="text-gray-600">Make informed decisions with comprehensive company profiles and metrics</p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/companies" className="group">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Companies</h3>
            <p className="text-gray-600">Browse and analyze climate tech companies</p>
          </div>
        </Link>
        <Link href="/sectors" className="group">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Sectors</h3>
            <p className="text-gray-600">Explore different climate tech sectors</p>
          </div>
        </Link>
        <Link href="/investments" className="group">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600">Investments</h3>
            <p className="text-gray-600">Track investment opportunities and trends</p>
          </div>
        </Link>
      </section>
    </div>
  );
}

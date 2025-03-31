'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              GreenGauge
              <span className="text-green-600"> AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your intelligent assistant for climate tech investment decisions. Powered by AI to analyze, evaluate, and guide your sustainable investment journey.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/companies" 
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Explore Companies
              </Link>
              <Link 
                href="/sectors" 
                className="px-6 py-3 bg-white text-green-600 border-2 border-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
                View Sectors
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">Get instant insights and recommendations based on comprehensive climate tech data analysis.</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sector Insights</h3>
              <p className="text-gray-600">Track growth trends and ROI across different climate tech sectors with interactive visualizations.</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Investment Evaluation</h3>
              <p className="text-gray-600">Make data-driven investment decisions with comprehensive company evaluations and market analysis.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/companies" className="group">
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Companies</h2>
              <p className="text-gray-600 mb-6">Browse climate tech companies and interact with our AI assistant for detailed insights</p>
              <div className="flex items-center text-green-600">
                <span className="font-medium">Explore Companies</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/sectors" className="group">
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Sectors</h2>
              <p className="text-gray-600 mb-6">Analyze sector growth and ROI trends with interactive visualizations</p>
              <div className="flex items-center text-green-600">
                <span className="font-medium">View Sectors</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/investments" className="group">
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Investments</h2>
              <p className="text-gray-600 mb-6">Evaluate investment opportunities and market trends with AI-powered analysis</p>
              <div className="flex items-center text-green-600">
                <span className="font-medium">Analyze Investments</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-teal-600">GreenGauge</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/companies"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                isActive('/companies')
                  ? 'border-teal-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Companies
            </Link>
            <Link
              href="/sectors"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                isActive('/sectors')
                  ? 'border-teal-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Sectors
            </Link>
            <Link
              href="/investments"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                isActive('/investments')
                  ? 'border-teal-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Investments
            </Link>
            <Link
              href="/policies"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                isActive('/policies')
                  ? 'border-teal-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Policies
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/companies"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/companies')
                ? 'bg-teal-50 border-teal-500 text-teal-700'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Companies
          </Link>
          <Link
            href="/sectors"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/sectors')
                ? 'bg-teal-50 border-teal-500 text-teal-700'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Sectors
          </Link>
          <Link
            href="/investments"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/investments')
                ? 'bg-teal-50 border-teal-500 text-teal-700'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Investments
          </Link>
          <Link
            href="/policies"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/policies')
                ? 'bg-teal-50 border-teal-500 text-teal-700'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Policies
          </Link>
        </div>
      </div>
    </nav>
  );
} 
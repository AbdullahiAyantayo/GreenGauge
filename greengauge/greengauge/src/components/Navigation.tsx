'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50';
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors">
              GreenGauge
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/companies" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/companies')}`}
            >
              Companies
            </Link>
            <Link 
              href="/sectors" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/sectors')}`}
            >
              Sectors
            </Link>
            <Link 
              href="/investments" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/investments')}`}
            >
              Investments
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
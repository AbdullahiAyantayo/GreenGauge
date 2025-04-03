'use client';

import { useState } from 'react';
import { YC_CLIMATE_COMPANIES, TECHSTARS_CLIMATE_COMPANIES } from '@/utils/scraper';

interface Investment {
  company: string;
  sector: string;
  fundingStage: string;
  amount: string;
  date: string;
  score: number;
}

const INVESTMENTS: Investment[] = [
  {
    company: 'AMP Robotics',
    sector: 'Recycling',
    fundingStage: 'Series C',
    amount: '$91M',
    date: '2023-11',
    score: 85
  },
  {
    company: 'BlocPower',
    sector: 'Clean Energy',
    fundingStage: 'Series B',
    amount: '$150M',
    date: '2023-12',
    score: 92
  },
  {
    company: 'Sila Nanotechnologies',
    sector: 'Battery Technology',
    fundingStage: 'Series D',
    amount: '$375M',
    date: '2023-08',
    score: 88
  }
];

export default function InvestmentsPage() {
  const [filteredInvestments, setFilteredInvestments] = useState(INVESTMENTS);

  const getScoreColor = (score: number) => {
    if (score >= 81) return 'bg-green-100 text-green-800';
    if (score >= 66) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const handleFilterChange = (filters: any) => {
    let filtered = [...INVESTMENTS];
    
    if (filters.sector) {
      filtered = filtered.filter(inv => inv.sector === filters.sector);
    }
    
    if (filters.fundingStage) {
      filtered = filtered.filter(inv => inv.fundingStage === filters.fundingStage);
    }

    setFilteredInvestments(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Climate Tech Investments
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Track and analyze climate tech investment opportunities
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Investment Score Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-green-800 font-medium">High Potential (81-100)</div>
              <div className="text-sm text-green-600">Strong investment opportunity</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-yellow-800 font-medium">Moderate Potential (66-80)</div>
              <div className="text-sm text-yellow-600">Consider with due diligence</div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="text-red-800 font-medium">High Risk (0-65)</div>
              <div className="text-sm text-red-600">Exercise caution</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredInvestments.map((investment) => (
            <div
              key={investment.company}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {investment.company}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Sector:</span>
                    {investment.sector}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Stage:</span>
                    {investment.fundingStage}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Amount:</span>
                    {investment.amount}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Date:</span>
                    {investment.date}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-medium text-gray-500">Investment Score:</span>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getScoreColor(investment.score)}`}>
                      {investment.score}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
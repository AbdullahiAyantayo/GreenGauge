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

// Combine and process all companies into investments
const INVESTMENTS: Investment[] = [
  // YC Companies
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
  },
  {
    company: 'Carbon Engineering',
    sector: 'Carbon Capture',
    fundingStage: 'Series C',
    amount: '$68M',
    date: '2023-09',
    score: 82
  },
  {
    company: 'Form Energy',
    sector: 'Battery Technology',
    fundingStage: 'Series D',
    amount: '$450M',
    date: '2023-10',
    score: 95
  },
  {
    company: 'Helion Energy',
    sector: 'Clean Energy',
    fundingStage: 'Series E',
    amount: '$500M',
    date: '2023-11',
    score: 90
  },
  {
    company: 'Moment Energy',
    sector: 'Battery Technology',
    fundingStage: 'Series A',
    amount: '$17.5M',
    date: '2023-12',
    score: 75
  },
  {
    company: 'Noya',
    sector: 'Carbon Capture',
    fundingStage: 'Series A',
    amount: '$11M',
    date: '2023-10',
    score: 78
  },
  {
    company: 'Opus 12',
    sector: 'Carbon Capture',
    fundingStage: 'Series A',
    amount: '$57M',
    date: '2023-09',
    score: 80
  },
  {
    company: 'Pachama',
    sector: 'Carbon Capture',
    fundingStage: 'Series B',
    amount: '$55M',
    date: '2023-11',
    score: 85
  },
  {
    company: 'Perch Energy',
    sector: 'Clean Energy',
    fundingStage: 'Series A',
    amount: '$30M',
    date: '2023-12',
    score: 72
  },
  {
    company: 'Pivot Bio',
    sector: 'Agriculture',
    fundingStage: 'Series D',
    amount: '$430M',
    date: '2023-08',
    score: 88
  },
  {
    company: 'Redwood Materials',
    sector: 'Battery Technology',
    fundingStage: 'Series D',
    amount: '$1B',
    date: '2023-07',
    score: 95
  },
  {
    company: 'Sublime Systems',
    sector: 'Clean Energy',
    fundingStage: 'Series A',
    amount: '$40M',
    date: '2023-10',
    score: 82
  },
  {
    company: 'Terraform Industries',
    sector: 'Clean Energy',
    fundingStage: 'Seed',
    amount: '$5M',
    date: '2023-12',
    score: 70
  },
  {
    company: 'WasteFuel',
    sector: 'Clean Energy',
    fundingStage: 'Series A',
    amount: '$10M',
    date: '2023-11',
    score: 75
  },
  {
    company: 'ZeroAvia',
    sector: 'Transportation',
    fundingStage: 'Series C',
    amount: '$116M',
    date: '2023-09',
    score: 85
  },

  // Techstars Companies
  {
    company: 'CarbonCure Technologies',
    sector: 'Carbon Capture',
    fundingStage: 'Series B',
    amount: '$80M',
    date: '2023-10',
    score: 85
  },
  {
    company: 'EcoFlow',
    sector: 'Clean Energy',
    fundingStage: 'Series B',
    amount: '$100M',
    date: '2023-11',
    score: 88
  },
  {
    company: 'Heliogen',
    sector: 'Clean Energy',
    fundingStage: 'Series C',
    amount: '$108M',
    date: '2023-08',
    score: 82
  },
  {
    company: 'Momentum Technologies',
    sector: 'Battery Technology',
    fundingStage: 'Series A',
    amount: '$15M',
    date: '2023-12',
    score: 75
  },
  {
    company: 'NexWafe',
    sector: 'Clean Energy',
    fundingStage: 'Series B',
    amount: '$30M',
    date: '2023-09',
    score: 80
  },
  {
    company: 'NuScale Power',
    sector: 'Clean Energy',
    fundingStage: 'Series D',
    amount: '$150M',
    date: '2023-10',
    score: 85
  },
  {
    company: 'OCOchem',
    sector: 'Carbon Capture',
    fundingStage: 'Series A',
    amount: '$5M',
    date: '2023-11',
    score: 72
  },
  {
    company: 'Pivot Bio',
    sector: 'Agriculture',
    fundingStage: 'Series D',
    amount: '$430M',
    date: '2023-08',
    score: 88
  },
  {
    company: 'Redwood Materials',
    sector: 'Battery Technology',
    fundingStage: 'Series D',
    amount: '$1B',
    date: '2023-07',
    score: 95
  },
  {
    company: 'Sublime Systems',
    sector: 'Clean Energy',
    fundingStage: 'Series A',
    amount: '$40M',
    date: '2023-10',
    score: 82
  },
  {
    company: 'Terraform Industries',
    sector: 'Clean Energy',
    fundingStage: 'Seed',
    amount: '$5M',
    date: '2023-12',
    score: 70
  },
  {
    company: 'WasteFuel',
    sector: 'Clean Energy',
    fundingStage: 'Series A',
    amount: '$10M',
    date: '2023-11',
    score: 75
  },
  {
    company: 'ZeroAvia',
    sector: 'Transportation',
    fundingStage: 'Series C',
    amount: '$116M',
    date: '2023-09',
    score: 85
  }
];

export default function InvestmentsPage() {
  const [filteredInvestments, setFilteredInvestments] = useState(INVESTMENTS);
  const [scoreFilter, setScoreFilter] = useState<'all' | 'high' | 'moderate' | 'low'>('all');

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

    // Apply score filter
    if (scoreFilter !== 'all') {
      filtered = filtered.filter(inv => {
        switch (scoreFilter) {
          case 'high':
            return inv.score >= 81;
          case 'moderate':
            return inv.score >= 66 && inv.score <= 80;
          case 'low':
            return inv.score <= 65;
          default:
            return true;
        }
      });
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
            <div className="p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors"
                 onClick={() => setScoreFilter('high')}>
              <div className="text-green-800 font-medium">High Potential (81-100)</div>
              <div className="text-sm text-green-600">Strong investment opportunity</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg cursor-pointer hover:bg-yellow-100 transition-colors"
                 onClick={() => setScoreFilter('moderate')}>
              <div className="text-yellow-800 font-medium">Moderate Potential (66-80)</div>
              <div className="text-sm text-yellow-600">Consider with due diligence</div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg cursor-pointer hover:bg-red-100 transition-colors"
                 onClick={() => setScoreFilter('low')}>
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
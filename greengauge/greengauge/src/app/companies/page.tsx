'use client';

import { useState } from 'react';
import { YC_CLIMATE_COMPANIES, TECHSTARS_CLIMATE_COMPANIES } from '@/utils/scraper';
import CompanyFilter from '@/components/CompanyFilter';

interface Company {
  name: string;
  description: string;
  sector: string;
  fundingStage: string;
  accelerator: string;
  region: string;
  score: number;
}

interface SourceCompany {
  name: string;
  description: string;
  sector: string;
  funding?: {
    stage: string;
  };
  location?: string;
  teamSize?: string;
  exitPotential?: {
    high: boolean;
  };
}

// Combine and process companies from both accelerators
const COMPANIES: Company[] = [
  ...(YC_CLIMATE_COMPANIES as SourceCompany[]).map(company => ({
    name: company.name,
    description: company.description,
    sector: company.sector,
    fundingStage: company.funding?.stage || 'Not Disclosed',
    accelerator: 'YC',
    region: company.location || 'Not Disclosed',
    score: calculateScore(company)
  })),
  ...(TECHSTARS_CLIMATE_COMPANIES as SourceCompany[]).map(company => ({
    name: company.name,
    description: company.description,
    sector: company.sector,
    fundingStage: company.funding?.stage || 'Not Disclosed',
    accelerator: 'Techstars',
    region: company.location || 'Not Disclosed',
    score: calculateScore(company)
  }))
];

// Helper function to calculate company score based on various factors
function calculateScore(company: SourceCompany): number {
  let score = 70; // Base score

  // Funding stage bonus
  if (company.funding?.stage) {
    switch (company.funding.stage.toLowerCase()) {
      case 'seed':
        score += 5;
        break;
      case 'series a':
        score += 10;
        break;
      case 'series b':
        score += 15;
        break;
      case 'series c':
        score += 20;
        break;
      case 'series d':
        score += 25;
        break;
      case 'series e':
        score += 30;
        break;
    }
  }

  // Team size bonus
  if (company.teamSize) {
    const size = parseInt(company.teamSize);
    if (size > 50) score += 10;
    else if (size > 20) score += 5;
  }

  // Exit potential bonus
  if (company.exitPotential?.high) score += 10;

  // Cap score at 100
  return Math.min(score, 100);
}

export default function CompaniesPage() {
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(COMPANIES);

  const getScoreColor = (score: number) => {
    if (score >= 81) return 'bg-green-100 text-green-800';
    if (score >= 66) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const handleFilterChange = (filters: any) => {
    let filtered = [...COMPANIES];

    if (filters.sector) {
      filtered = filtered.filter(company => company.sector === filters.sector);
    }
    if (filters.fundingStage) {
      filtered = filtered.filter(company => company.fundingStage === filters.fundingStage);
    }
    if (filters.accelerator) {
      filtered = filtered.filter(company => company.accelerator === filters.accelerator);
    }
    if (filters.region) {
      filtered = filtered.filter(company => {
        if (filters.region === 'United States') {
          return company.region.toLowerCase().includes('united states') || 
                 company.region.toLowerCase().includes('us') ||
                 company.region.toLowerCase().includes('usa');
        }
        return company.region.toLowerCase().includes(filters.region.toLowerCase());
      });
    }
    if (filters.score) {
      filtered = filtered.filter(company => {
        switch (filters.score) {
          case 'high':
            return company.score >= 81 && company.score <= 100;
          case 'moderate':
            return company.score >= 66 && company.score <= 80;
          case 'low':
            return company.score >= 0 && company.score <= 65;
          default:
            return true;
        }
      });
    }

    setFilteredCompanies(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Climate Tech Companies</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore climate tech companies from leading accelerators and their investment potential.
      </p>

      <CompanyFilter onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                company.accelerator === 'YC' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
              }`}>
                {company.accelerator}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{company.description}</p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium mr-2">Sector:</span>
                {company.sector}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium mr-2">Funding Stage:</span>
                {company.fundingStage}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium mr-2">Region:</span>
                {company.region}
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-medium text-gray-500">Investment Score:</span>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getScoreColor(company.score)}`}>
                  {company.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
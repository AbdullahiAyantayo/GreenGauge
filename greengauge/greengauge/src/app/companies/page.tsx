'use client';

import { useState } from 'react';
import { YC_CLIMATE_COMPANIES, TECHSTARS_CLIMATE_COMPANIES } from '@/utils/scraper';
import CompanySearch from '@/components/CompanySearch';
import PolicyFilter from '@/components/PolicyFilter';

export default function CompaniesPage() {
  const [filteredCompanies, setFilteredCompanies] = useState([...YC_CLIMATE_COMPANIES, ...TECHSTARS_CLIMATE_COMPANIES]);

  const handleFilterChange = (filters: any) => {
    let companies = [...YC_CLIMATE_COMPANIES, ...TECHSTARS_CLIMATE_COMPANIES];

    if (filters.sector) {
      companies = companies.filter(c => c.sector.toLowerCase().includes(filters.sector.toLowerCase()));
    }
    if (filters.fundingStage) {
      companies = companies.filter(c => c.fundingStage.toLowerCase().includes(filters.fundingStage.toLowerCase()));
    }
    if (filters.region) {
      companies = companies.filter(c => c.location.toLowerCase().includes(filters.region.toLowerCase()));
    }

    setFilteredCompanies(companies);
  };

  const getScoreColor = (score: number) => {
    if (score >= 81) return 'text-green-600';
    if (score >= 66) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Climate Tech Companies</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover and analyze promising climate tech companies from YC and Techstars
        </p>
      </div>

      <CompanySearch />

      <PolicyFilter onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => (
          <div key={company.name} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                <p className="text-sm text-gray-500">{company.sector}</p>
              </div>
              <div className={`text-2xl font-bold ${getScoreColor(75)}`}>75</div>
            </div>
            <p className="text-gray-600 mb-4">{company.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Funding Stage</span>
                <span className="font-medium">{company.fundingStage}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Location</span>
                <span className="font-medium">{company.location}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Founded</span>
                <span className="font-medium">{company.founded}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 text-sm font-medium"
              >
                Visit Website →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
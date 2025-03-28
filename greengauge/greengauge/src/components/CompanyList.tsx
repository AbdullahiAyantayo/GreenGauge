'use client';

import { useState, useEffect } from 'react';
import { Company } from '@/utils/scraper';

interface CompanyListProps {
  companies: Company[];
  sectors: string[];
  fundingStages: string[];
}

export default function CompanyList({ companies, sectors, fundingStages }: CompanyListProps) {
  const [filteredCompanies, setFilteredCompanies] = useState(companies);
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [selectedFundingStage, setSelectedFundingStage] = useState<string>('');

  useEffect(() => {
    let filtered = [...companies];

    if (selectedSector) {
      filtered = filtered.filter(company => company.sector === selectedSector);
    }

    if (selectedFundingStage) {
      filtered = filtered.filter(company => company.funding === selectedFundingStage);
    }

    setFilteredCompanies(filtered);
  }, [companies, selectedSector, selectedFundingStage]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <select
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
          className="block w-full sm:w-64 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        >
          <option value="">All Sectors</option>
          {sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>

        <select
          value={selectedFundingStage}
          onChange={(e) => setSelectedFundingStage(e.target.value)}
          className="block w-full sm:w-64 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        >
          <option value="">All Funding Stages</option>
          {fundingStages.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </select>
      </div>

      {/* Company Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCompanies.map((company) => (
          <div
            key={company.name}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-12 w-12 rounded-full object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                  <p className="text-sm text-gray-500">{company.sector}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{company.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {company.funding && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {company.funding}
                  </span>
                )}
                {company.founded && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Founded {company.founded}
                  </span>
                )}
                {company.teamSize && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {company.teamSize} employees
                  </span>
                )}
                {company.location && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {company.location}
                  </span>
                )}
              </div>
              {company.keyMetrics && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900">Key Metrics</h4>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    {company.keyMetrics.carbonReduction && (
                      <div>
                        <p className="text-sm text-gray-500">Carbon Reduction</p>
                        <p className="text-sm font-medium text-gray-900">{company.keyMetrics.carbonReduction}</p>
                      </div>
                    )}
                    {company.keyMetrics.fundingAmount && (
                      <div>
                        <p className="text-sm text-gray-500">Funding</p>
                        <p className="text-sm font-medium text-gray-900">{company.keyMetrics.fundingAmount}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {company.website && (
                <div className="mt-4">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-green-600 hover:text-green-500"
                  >
                    Visit Website →
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Companies</dt>
                  <dd className="text-lg font-medium text-gray-900">{filteredCompanies.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Sectors</dt>
                  <dd className="text-lg font-medium text-gray-900">{sectors.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Funding Stages</dt>
                  <dd className="text-lg font-medium text-gray-900">{fundingStages.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
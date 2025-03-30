'use client';

import { useState, useEffect } from 'react';
import { Company, CompanyListProps } from '../types';

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => (
          <div
            key={company.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                  <p className="text-sm text-gray-500">{company.sector}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{company.description}</p>
              <div className="space-y-2">
                {company.funding && (
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Funding:</span> {company.funding}
                  </p>
                )}
                {company.founded && (
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Founded:</span> {company.founded}
                  </p>
                )}
                {company.teamSize && (
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Team Size:</span> {company.teamSize}
                  </p>
                )}
                {company.location && (
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Location:</span> {company.location}
                  </p>
                )}
              </div>
              {company.keyMetrics && (
                <div className="mt-4 pt-4 border-t">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Metrics</h4>
                  <div className="space-y-1">
                    {company.keyMetrics.carbonReduction && (
                      <p className="text-sm text-gray-500">
                        <span className="font-medium">Carbon Reduction:</span>{' '}
                        {company.keyMetrics.carbonReduction}
                      </p>
                    )}
                    {company.keyMetrics.fundingAmount && (
                      <p className="text-sm text-gray-500">
                        <span className="font-medium">Funding Amount:</span>{' '}
                        {company.keyMetrics.fundingAmount}
                      </p>
                    )}
                    {company.keyMetrics.customers && (
                      <p className="text-sm text-gray-500">
                        <span className="font-medium">Customers:</span>{' '}
                        {company.keyMetrics.customers}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-green-600 hover:text-green-700"
                >
                  Visit Website →
                </a>
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
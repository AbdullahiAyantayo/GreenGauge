'use client';

import { useState } from 'react';

interface CompanyFilterProps {
  onFilterChange: (filters: any) => void;
}

export default function CompanyFilter({ onFilterChange }: CompanyFilterProps) {
  const [filters, setFilters] = useState({
    sector: '',
    fundingStage: '',
    accelerator: '',
    region: '',
    score: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
            Sector
          </label>
          <select
            id="sector"
            name="sector"
            value={filters.sector}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="">All Sectors</option>
            <option value="Clean Energy">Clean Energy</option>
            <option value="Battery Technology">Battery Technology</option>
            <option value="Carbon Capture">Carbon Capture</option>
            <option value="Transportation">Transportation</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Recycling">Recycling</option>
          </select>
        </div>

        <div>
          <label htmlFor="fundingStage" className="block text-sm font-medium text-gray-700 mb-1">
            Funding Stage
          </label>
          <select
            id="fundingStage"
            name="fundingStage"
            value={filters.fundingStage}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="">All Stages</option>
            <option value="Seed">Seed</option>
            <option value="Series A">Series A</option>
            <option value="Series B">Series B</option>
            <option value="Series C">Series C</option>
            <option value="Series D">Series D</option>
            <option value="Series E">Series E</option>
          </select>
        </div>

        <div>
          <label htmlFor="accelerator" className="block text-sm font-medium text-gray-700 mb-1">
            Accelerator
          </label>
          <select
            id="accelerator"
            name="accelerator"
            value={filters.accelerator}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="">All Accelerators</option>
            <option value="YC">Y Combinator</option>
            <option value="Techstars">Techstars</option>
          </select>
        </div>

        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
            Region
          </label>
          <select
            id="region"
            name="region"
            value={filters.region}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="">All Regions</option>
            <option value="United States">United States</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
          </select>
        </div>

        <div>
          <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-1">
            Investment Score
          </label>
          <select
            id="score"
            name="score"
            value={filters.score}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="">All Scores</option>
            <option value="high">High Potential (81-100)</option>
            <option value="moderate">Moderate Potential (66-80)</option>
            <option value="low">High Risk (0-65)</option>
          </select>
        </div>
      </div>
    </div>
  );
} 
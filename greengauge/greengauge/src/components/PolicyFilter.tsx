'use client';

import { useState } from 'react';

interface PolicyFilterProps {
  onFilterChange: (filters: any) => void;
}

export default function PolicyFilter({ onFilterChange }: PolicyFilterProps) {
  const [filters, setFilters] = useState({
    sector: '',
    taxIncentive: '',
    region: '',
    impactLevel: '',
    fundingStage: ''
  });

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Filter by Policy & Impact</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Sector Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sector</label>
          <select
            value={filters.sector}
            onChange={(e) => handleChange('sector', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="">All Sectors</option>
            <option value="clean-energy">Clean Energy</option>
            <option value="carbon-capture">Carbon Capture</option>
            <option value="transportation">Transportation</option>
            <option value="materials">Materials</option>
            <option value="agriculture">Agriculture</option>
            <option value="waste">Waste Management</option>
          </select>
        </div>

        {/* Tax Incentive Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tax Incentives</label>
          <select
            value={filters.taxIncentive}
            onChange={(e) => handleChange('taxIncentive', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="">All Incentives</option>
            <option value="investment-tax-credit">Investment Tax Credit</option>
            <option value="production-tax-credit">Production Tax Credit</option>
            <option value="carbon-credits">Carbon Credits</option>
            <option value="accelerated-depreciation">Accelerated Depreciation</option>
          </select>
        </div>

        {/* Region Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
          <select
            value={filters.region}
            onChange={(e) => handleChange('region', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="">All Regions</option>
            <option value="north-america">North America</option>
            <option value="europe">Europe</option>
            <option value="asia-pacific">Asia Pacific</option>
            <option value="latin-america">Latin America</option>
          </select>
        </div>

        {/* Impact Level Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Impact Level</label>
          <select
            value={filters.impactLevel}
            onChange={(e) => handleChange('impactLevel', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="">All Impact Levels</option>
            <option value="high">High Impact</option>
            <option value="medium">Medium Impact</option>
            <option value="low">Low Impact</option>
          </select>
        </div>

        {/* Funding Stage Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Funding Stage</label>
          <select
            value={filters.fundingStage}
            onChange={(e) => handleChange('fundingStage', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="">All Stages</option>
            <option value="seed">Seed</option>
            <option value="series-a">Series A</option>
            <option value="series-b">Series B</option>
            <option value="series-c">Series C</option>
            <option value="series-d">Series D+</option>
          </select>
        </div>
      </div>

      {/* Policy Highlights */}
      <div className="mt-6 pt-6 border-t">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Current Policy Highlights</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-teal-50 p-4 rounded-lg">
            <h5 className="text-sm font-medium text-teal-800">Inflation Reduction Act</h5>
            <p className="text-sm text-teal-700 mt-1">$369B in climate investments and tax credits</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg">
            <h5 className="text-sm font-medium text-teal-800">EU Green Deal</h5>
            <p className="text-sm text-teal-700 mt-1">€1 trillion investment plan for climate neutrality</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
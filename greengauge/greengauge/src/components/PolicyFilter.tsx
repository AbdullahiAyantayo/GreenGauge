'use client';

import { useState } from 'react';

interface PolicyFilterProps {
  onFilterChange: (filters: any) => void;
}

export default function PolicyFilter({ onFilterChange }: PolicyFilterProps) {
  const [filters, setFilters] = useState({
    region: '',
    sector: '',
    impactLevel: '',
    taxIncentive: '',
    status: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Policies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <option value="Global">Global</option>
          </select>
        </div>

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
            <option value="Transportation">Transportation</option>
            <option value="Carbon Capture">Carbon Capture</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Building">Building</option>
            <option value="Finance">Finance</option>
            <option value="Multiple">Multiple Sectors</option>
          </select>
        </div>

        <div>
          <label htmlFor="impactLevel" className="block text-sm font-medium text-gray-700 mb-1">
            Impact Level
          </label>
          <select
            id="impactLevel"
            name="impactLevel"
            value={filters.impactLevel}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="">All Impact Levels</option>
            <option value="High">High Impact</option>
            <option value="Medium">Medium Impact</option>
            <option value="Low">Low Impact</option>
          </select>
        </div>

        <div>
          <label htmlFor="taxIncentive" className="block text-sm font-medium text-gray-700 mb-1">
            Tax Incentive
          </label>
          <select
            id="taxIncentive"
            name="taxIncentive"
            value={filters.taxIncentive}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="">All Incentives</option>
            <option value="Investment Tax Credit">Investment Tax Credit</option>
            <option value="Production Tax Credit">Production Tax Credit</option>
            <option value="EV Tax Credits">EV Tax Credits</option>
            <option value="Carbon Border Tax">Carbon Border Tax</option>
            <option value="Renewable Energy Support">Renewable Energy Support</option>
            <option value="Building Renovation">Building Renovation</option>
            <option value="Clean Transportation">Clean Transportation</option>
            <option value="Carbon Trading">Carbon Trading</option>
          </select>
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          >
            <option value="">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Proposed">Proposed</option>
            <option value="Expired">Expired</option>
          </select>
        </div>
      </div>
    </div>
  );
} 
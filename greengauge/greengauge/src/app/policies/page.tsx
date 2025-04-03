'use client';

import { useState } from 'react';
import PolicyFilter from '@/components/PolicyFilter';

interface Policy {
  name: string;
  description: string;
  region: string;
  sector: string;
  impactLevel: 'High' | 'Medium' | 'Low';
  taxIncentives: string[];
  status: 'Active' | 'Proposed' | 'Expired';
}

const POLICIES: Policy[] = [
  // US Federal Policies
  {
    name: 'Inflation Reduction Act (IRA)',
    description: 'Comprehensive climate and energy legislation providing $369B in climate investments, tax credits, and incentives for clean energy deployment.',
    region: 'United States',
    sector: 'Clean Energy',
    impactLevel: 'High',
    taxIncentives: ['Investment Tax Credit', 'Production Tax Credit', 'EV Tax Credits'],
    status: 'Active'
  },
  {
    name: 'Bipartisan Infrastructure Law',
    description: '$1.2T infrastructure package including significant funding for clean energy, EV charging, and climate resilience.',
    region: 'United States',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentives: ['Grid Modernization', 'EV Infrastructure'],
    status: 'Active'
  },
  {
    name: 'Clean Air Act',
    description: 'Federal law regulating air emissions and setting standards for air quality.',
    region: 'United States',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentives: ['Emissions Trading', 'Clean Air Permits'],
    status: 'Active'
  },

  // US State Policies
  {
    name: 'California Climate Action Plan',
    description: 'State-level initiative to achieve carbon neutrality by 2045, including incentives for electric vehicles and renewable energy.',
    region: 'United States',
    sector: 'Transportation',
    impactLevel: 'High',
    taxIncentives: ['EV Tax Credits', 'Solar Incentives'],
    status: 'Active'
  },
  {
    name: 'New York Climate Act',
    description: 'Comprehensive climate legislation targeting 70% renewable energy by 2030 and net-zero emissions by 2050.',
    region: 'United States',
    sector: 'Clean Energy',
    impactLevel: 'High',
    taxIncentives: ['Offshore Wind Credits', 'Building Electrification'],
    status: 'Active'
  },

  // European Union Policies
  {
    name: 'EU Green Deal',
    description: 'European Union\'s plan to make Europe climate neutral by 2050, including significant funding for green technologies.',
    region: 'Europe',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentives: ['Carbon Border Adjustment', 'Renewable Energy Support'],
    status: 'Active'
  },
  {
    name: 'Fit for 55 Package',
    description: 'EU legislative package to reduce greenhouse gas emissions by 55% by 2030.',
    region: 'Europe',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentives: ['ETS Reform', 'Carbon Border Tax'],
    status: 'Active'
  },
  {
    name: 'EU Taxonomy',
    description: 'Classification system for sustainable economic activities, guiding investments in climate-friendly projects.',
    region: 'Europe',
    sector: 'Finance',
    impactLevel: 'High',
    taxIncentives: ['Sustainable Finance', 'Green Bonds'],
    status: 'Active'
  },

  // European National Policies
  {
    name: 'German Climate Action Law',
    description: 'Legislation targeting climate neutrality by 2045 with specific sector targets.',
    region: 'Europe',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentives: ['Renewable Energy Support', 'Carbon Pricing'],
    status: 'Active'
  },
  {
    name: 'French Climate and Resilience Law',
    description: 'Comprehensive climate legislation including building renovation and transportation measures.',
    region: 'Europe',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentives: ['Building Renovation', 'Clean Transportation'],
    status: 'Active'
  },
  {
    name: 'UK Net Zero Strategy',
    description: 'Comprehensive plan to achieve net-zero emissions by 2050 across all sectors.',
    region: 'Europe',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentives: ['Carbon Trading', 'Clean Energy Support'],
    status: 'Active'
  }
];

export default function PoliciesPage() {
  const [filteredPolicies, setFilteredPolicies] = useState(POLICIES);

  const handleFilterChange = (filters: any) => {
    let filtered = [...POLICIES];
    
    if (filters.sector) {
      filtered = filtered.filter(policy => policy.sector === filters.sector);
    }
    
    if (filters.region) {
      filtered = filtered.filter(policy => policy.region === filters.region);
    }
    
    if (filters.impactLevel) {
      filtered = filtered.filter(policy => policy.impactLevel === filters.impactLevel);
    }
    
    if (filters.taxIncentive) {
      filtered = filtered.filter(policy => 
        policy.taxIncentives.includes(filters.taxIncentive)
      );
    }

    setFilteredPolicies(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Climate Policy Intelligence
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover and analyze climate policies and incentives worldwide
          </p>
        </div>

        <PolicyFilter onFilterChange={handleFilterChange} />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPolicies.map((policy) => (
            <div
              key={policy.name}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {policy.name}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    policy.status === 'Active' ? 'bg-green-100 text-green-800' :
                    policy.status === 'Proposed' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {policy.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{policy.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Region:</span>
                    {policy.region}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Sector:</span>
                    {policy.sector}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Impact Level:</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      policy.impactLevel === 'High' ? 'bg-green-100 text-green-800' :
                      policy.impactLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {policy.impactLevel}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {policy.taxIncentives.map((incentive) => (
                      <span
                        key={incentive}
                        className="px-2 py-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full"
                      >
                        {incentive}
                      </span>
                    ))}
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
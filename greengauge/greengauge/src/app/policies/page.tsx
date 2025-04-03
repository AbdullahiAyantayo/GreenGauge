'use client';

import { useState } from 'react';
import PolicyFilter from '@/components/PolicyFilter';
import Disclaimer from '@/components/Disclaimer';

interface Policy {
  name: string;
  description: string;
  region: string;
  sector: string;
  impactLevel: string;
  taxIncentive: string;
  status: string;
  year: number;
}

const POLICIES: Policy[] = [
  // US Federal Policies
  {
    name: 'Inflation Reduction Act (IRA)',
    description: 'Comprehensive climate legislation providing $369B in climate investments and tax credits for clean energy, transportation, and industrial decarbonization.',
    region: 'United States',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentive: 'Investment Tax Credit',
    status: 'Active',
    year: 2022
  },
  {
    name: 'Bipartisan Infrastructure Law',
    description: '$1.2 trillion infrastructure package including significant investments in clean energy, electric vehicles, and climate resilience.',
    region: 'United States',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentive: 'Clean Transportation',
    status: 'Active',
    year: 2021
  },
  {
    name: 'Clean Air Act',
    description: 'Established regulatory framework for air pollution control and greenhouse gas emissions.',
    region: 'United States',
    sector: 'Clean Energy',
    impactLevel: 'High',
    taxIncentive: 'Carbon Trading',
    status: 'Active',
    year: 1970
  },

  // US State Policies
  {
    name: 'California Climate Action Plan',
    description: 'Comprehensive plan to achieve carbon neutrality by 2045, including cap-and-trade program and renewable energy mandates.',
    region: 'United States',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentive: 'Carbon Trading',
    status: 'Active',
    year: 2022
  },
  {
    name: 'New York Climate Act',
    description: 'Legislation mandating 85% reduction in greenhouse gas emissions by 2050 and 100% zero-emission electricity by 2040.',
    region: 'United States',
    sector: 'Clean Energy',
    impactLevel: 'High',
    taxIncentive: 'Renewable Energy Support',
    status: 'Active',
    year: 2019
  },

  // European Union Policies
  {
    name: 'EU Green Deal',
    description: 'Comprehensive plan to make Europe climate neutral by 2050, including €1 trillion investment plan.',
    region: 'Europe',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentive: 'Carbon Border Tax',
    status: 'Active',
    year: 2019
  },
  {
    name: 'Fit for 55 Package',
    description: 'Set of proposals to revise EU climate, energy, and transport legislation to reduce net greenhouse gas emissions by 55% by 2030.',
    region: 'Europe',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentive: 'Carbon Trading',
    status: 'Active',
    year: 2021
  },
  {
    name: 'EU Taxonomy',
    description: 'Classification system establishing a list of environmentally sustainable economic activities.',
    region: 'Europe',
    sector: 'Finance',
    impactLevel: 'Medium',
    taxIncentive: 'Carbon Trading',
    status: 'Active',
    year: 2020
  },

  // European National Policies
  {
    name: 'German Climate Action Law',
    description: 'Legislation setting binding targets for greenhouse gas emissions reduction and establishing carbon pricing.',
    region: 'Europe',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentive: 'Carbon Trading',
    status: 'Active',
    year: 2019
  },
  {
    name: 'French Climate and Resilience Law',
    description: 'Comprehensive climate legislation including building renovation requirements and transportation decarbonization measures.',
    region: 'Europe',
    sector: 'Building',
    impactLevel: 'High',
    taxIncentive: 'Building Renovation',
    status: 'Active',
    year: 2021
  },
  {
    name: 'UK Net Zero Strategy',
    description: 'Comprehensive plan to achieve net zero emissions by 2050, including sector-specific decarbonization strategies.',
    region: 'Europe',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentive: 'Carbon Trading',
    status: 'Active',
    year: 2021
  },

  // Asian Policies
  {
    name: 'China Carbon Neutrality Pledge',
    description: 'Commitment to achieve carbon neutrality by 2060, including significant investments in renewable energy and electric vehicles.',
    region: 'Asia',
    sector: 'Multiple',
    impactLevel: 'High',
    taxIncentive: 'Carbon Trading',
    status: 'Active',
    year: 2020
  },
  {
    name: 'Japan Green Growth Strategy',
    description: 'Strategy to achieve carbon neutrality by 2050, focusing on hydrogen economy and renewable energy.',
    region: 'Asia',
    sector: 'Clean Energy',
    impactLevel: 'High',
    taxIncentive: 'Renewable Energy Support',
    status: 'Active',
    year: 2020
  }
];

export default function PoliciesPage() {
  const [filteredPolicies, setFilteredPolicies] = useState<Policy[]>(POLICIES);

  const handleFilterChange = (filters: any) => {
    let filtered = [...POLICIES];

    if (filters.region) {
      filtered = filtered.filter(policy => policy.region === filters.region);
    }
    if (filters.sector) {
      filtered = filtered.filter(policy => policy.sector === filters.sector);
    }
    if (filters.impactLevel) {
      filtered = filtered.filter(policy => policy.impactLevel === filters.impactLevel);
    }
    if (filters.taxIncentive) {
      filtered = filtered.filter(policy => policy.taxIncentive === filters.taxIncentive);
    }
    if (filters.status) {
      filtered = filtered.filter(policy => policy.status === filters.status);
    }

    setFilteredPolicies(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Climate Policies</h1>
      <Disclaimer />
      <PolicyFilter onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPolicies.map((policy, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{policy.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
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
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  policy.impactLevel === 'High' ? 'bg-red-100 text-red-800' :
                  policy.impactLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {policy.impactLevel}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium mr-2">Tax Incentive:</span>
                {policy.taxIncentive}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium mr-2">Year:</span>
                {policy.year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
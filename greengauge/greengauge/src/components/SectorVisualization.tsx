'use client';

import { Company } from '../types';
import { getUniqueSectors } from '../utils/scraper';

interface SectorVisualizationProps {
  companies: Company[];
}

export default function SectorVisualization({ companies }: SectorVisualizationProps) {
  const sectors = getUniqueSectors(companies);
  const sectorCounts = sectors.map(sector => ({
    sector,
    count: companies.filter(company => company.sector === sector).length
  }));

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sector Distribution</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectorCounts.map(({ sector, count }) => (
          <div key={sector} className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900">{sector}</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">{count}</p>
            <p className="text-sm text-gray-500 mt-1">Companies</p>
          </div>
        ))}
      </div>
    </div>
  );
} 
'use client';

import { useState } from 'react';

interface CompanyFiltersProps {
  sectors: string[];
  fundingStages: string[];
  onFilterChange: (filters: { sector: string; funding: string }) => void;
}

export default function CompanyFilters({ sectors, fundingStages, onFilterChange }: CompanyFiltersProps) {
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedFunding, setSelectedFunding] = useState('');

  const handleSectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sector = e.target.value;
    setSelectedSector(sector);
    onFilterChange({ sector, funding: selectedFunding });
  };

  const handleFundingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const funding = e.target.value;
    setSelectedFunding(funding);
    onFilterChange({ sector: selectedSector, funding });
  };

  return (
    <div className="flex flex-wrap gap-4">
      <select
        value={selectedSector}
        onChange={handleSectorChange}
        className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">All Sectors</option>
        {sectors.map(sector => (
          <option key={sector} value={sector}>{sector}</option>
        ))}
      </select>
      <select
        value={selectedFunding}
        onChange={handleFundingChange}
        className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">All Funding Stages</option>
        {fundingStages.map(stage => (
          <option key={stage} value={stage}>{stage}</option>
        ))}
      </select>
    </div>
  );
} 
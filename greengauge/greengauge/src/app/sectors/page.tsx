'use client';

import { useEffect, useState } from 'react';
import { Company } from '../../types';
import { getCompanies } from '../../utils/scraper';
import SectorGrowthTimeline from '../../components/SectorGrowthTimeline';
import SectorROITimeline from '../../components/SectorROITimeline';

export default function SectorsPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getCompanies();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sector Analysis</h1>
        <div className="space-y-8">
          <SectorGrowthTimeline companies={companies} />
          <SectorROITimeline companies={companies} />
        </div>
      </div>
    </main>
  );
} 
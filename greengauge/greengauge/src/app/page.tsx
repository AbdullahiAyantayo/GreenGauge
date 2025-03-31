'use client';

import { useEffect, useState } from 'react';
import { Company } from '../types';
import { getCompanies, getUniqueSectors, getUniqueFundingStages } from '../utils/scraper';
import CompanyList from '../components/CompanyList';
import ChatBot from '../components/ChatBot';
import SectorGrowthTimeline from '../components/SectorGrowthTimeline';
import SectorROITimeline from '../components/SectorROITimeline';
import InvestmentEvaluation from '../components/InvestmentEvaluation';

export default function Home() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [sectors, setSectors] = useState<string[]>([]);
  const [fundingStages, setFundingStages] = useState<string[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getCompanies();
        setCompanies(data);
        setSectors(getUniqueSectors(data));
        setFundingStages(getUniqueFundingStages(data));
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CompanyList 
            companies={companies} 
            sectors={sectors}
            fundingStages={fundingStages}
          />
          <ChatBot companies={companies} />
        </div>

        <div className="space-y-8">
          <SectorGrowthTimeline companies={companies} />
          <SectorROITimeline companies={companies} />
          <InvestmentEvaluation companies={companies} />
        </div>
      </div>
    </main>
  );
}

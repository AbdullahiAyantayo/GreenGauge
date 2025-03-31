'use client';

import { useEffect, useState } from 'react';
import { Company } from '../../types';
import { getCompanies, getUniqueSectors, getUniqueFundingStages } from '../../utils/scraper';
import CompanyList from '../../components/CompanyList';
import ChatBot from '../../components/ChatBot';
import Navigation from '../../components/Navigation';

export default function CompaniesPage() {
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
    <main className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Climate Tech Companies</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CompanyList 
              companies={companies} 
              sectors={sectors}
              fundingStages={fundingStages}
            />
            <ChatBot companies={companies} />
          </div>
        </div>
      </div>
    </main>
  );
} 
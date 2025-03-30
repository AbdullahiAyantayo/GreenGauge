import { Company } from '../types';
import { getCompanies, getUniqueSectors, getUniqueFundingStages } from '../utils/scraper';
import CompanyList from '../components/CompanyList';
import ChatBot from '../components/ChatBot';
import SectorGrowthTimeline from '../components/SectorGrowthTimeline';
import SectorROITimeline from '../components/SectorROITimeline';

export default async function Home() {
  try {
    const companies = await getCompanies();
    const sectors = getUniqueSectors(companies);
    const fundingStages = getUniqueFundingStages(companies);

    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            GreenGauge: Climate Tech Companies
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CompanyList
                companies={companies}
                sectors={sectors}
                fundingStages={fundingStages}
              />
            </div>
            <div className="lg:col-span-1">
              <ChatBot companies={companies} />
            </div>
          </div>

          <div className="mt-8 space-y-8">
            <SectorGrowthTimeline companies={companies} />
            <SectorROITimeline companies={companies} />
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-600">
            We're having trouble loading the data. Please try again later.
          </p>
        </div>
      </main>
    );
  }
}

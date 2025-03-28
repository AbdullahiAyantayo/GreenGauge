import { getUniqueSectors, getUniqueFundingStages } from '@/utils/scraper';
import CompanyList from '@/components/CompanyList';
import ChatBot from '@/components/ChatBot';

async function getCompanies() {
  const res = await fetch('http://localhost:3004/api/companies', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch companies');
  }
  
  return res.json();
}

export default async function Home() {
  const companies = await getCompanies();
  const sectors = getUniqueSectors(companies);
  const fundingStages = getUniqueFundingStages(companies);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              YC Climate Tech Companies
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover and learn about Y Combinator-backed companies working on climate solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company List */}
      <CompanyList companies={companies} sectors={sectors} fundingStages={fundingStages} />

      {/* Chat Bot */}
      <ChatBot companies={companies} />
    </main>
  );
}

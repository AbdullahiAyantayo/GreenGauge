'use client';

import { useState } from 'react';
import { YC_CLIMATE_COMPANIES, TECHSTARS_CLIMATE_COMPANIES } from '@/utils/scraper';

export default function CompanySearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const allCompanies = [...YC_CLIMATE_COMPANIES, ...TECHSTARS_CLIMATE_COMPANIES];
    const company = allCompanies.find(c => 
      c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (company) {
      // Calculate profitability score based on various factors
      const fundingScore = calculateFundingScore(company.fundingStage);
      const growthScore = calculateGrowthScore(company.keyMetrics);
      const marketScore = calculateMarketScore(company.sector);
      
      const totalScore = Math.round((fundingScore + growthScore + marketScore) / 3);
      
      setResult({
        company,
        score: totalScore,
        analysis: {
          funding: fundingScore,
          growth: growthScore,
          market: marketScore,
          recommendation: generateRecommendation(totalScore)
        }
      });
    } else {
      setResult(null);
    }
    
    setLoading(false);
  };

  const calculateFundingScore = (stage: string) => {
    const stages = {
      'Seed': 60,
      'Series A': 70,
      'Series B': 80,
      'Series C': 85,
      'Series D': 90,
      'Series E': 95,
      'Series F': 100,
      'Public': 100,
      'Private': 90
    };
    return stages[stage as keyof typeof stages] || 70;
  };

  const calculateGrowthScore = (metrics: any) => {
    // This would be more sophisticated in a real implementation
    return 75;
  };

  const calculateMarketScore = (sector: string) => {
    // This would be more sophisticated in a real implementation
    return 80;
  };

  const generateRecommendation = (score: number) => {
    if (score >= 81) return 'Strong investment potential';
    if (score >= 66) return 'Moderate investment potential';
    return 'High risk investment';
  };

  const getScoreColor = (score: number) => {
    if (score >= 81) return 'text-green-600';
    if (score >= 66) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="flex gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter company name..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>

      {result && (
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{result.company.name}</h3>
              <p className="text-gray-600">{result.company.description}</p>
            </div>
            <div className={`text-2xl font-bold ${getScoreColor(result.score)}`}>
              {result.score}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-sm text-gray-500">Funding Score</div>
              <div className={`text-lg font-semibold ${getScoreColor(result.analysis.funding)}`}>
                {result.analysis.funding}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500">Growth Score</div>
              <div className={`text-lg font-semibold ${getScoreColor(result.analysis.growth)}`}>
                {result.analysis.growth}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500">Market Score</div>
              <div className={`text-lg font-semibold ${getScoreColor(result.analysis.market)}`}>
                {result.analysis.market}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-semibold text-gray-900 mb-2">Recommendation</h4>
            <p className={`${getScoreColor(result.score)}`}>{result.analysis.recommendation}</p>
          </div>
        </div>
      )}
    </div>
  );
} 
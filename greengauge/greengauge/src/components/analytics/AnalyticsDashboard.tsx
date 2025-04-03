'use client';

import { useState } from 'react';
import PolicyImpactAnalysis from './PolicyImpactAnalysis';
import TechnologyReadiness from './TechnologyReadiness';
import SupplyChainAnalysis from './SupplyChainAnalysis';
import MarketTiming from './MarketTiming';
import TechnologySynergies from './TechnologySynergies';
import RegulatoryRisk from './RegulatoryRisk';
import InfrastructureReadiness from './InfrastructureReadiness';
import TalentAnalysis from './TalentAnalysis';
import FinancialHealth from './FinancialHealth';
import MarketEducation from './MarketEducation';
import CompetitiveAdvantage from './CompetitiveAdvantage';

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState('policy-impact');

  const tabs = [
    { id: 'policy-impact', label: 'Policy Impact' },
    { id: 'tech-readiness', label: 'Technology Readiness' },
    { id: 'supply-chain', label: 'Supply Chain' },
    { id: 'market-timing', label: 'Market Timing' },
    { id: 'tech-synergies', label: 'Technology Synergies' },
    { id: 'regulatory-risk', label: 'Regulatory Risk' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'talent', label: 'Talent Analysis' },
    { id: 'financial', label: 'Financial Health' },
    { id: 'market-education', label: 'Market Education' },
    { id: 'competitive', label: 'Competitive Advantage' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'policy-impact':
        return <PolicyImpactAnalysis />;
      case 'tech-readiness':
        return <TechnologyReadiness />;
      case 'supply-chain':
        return <SupplyChainAnalysis />;
      case 'market-timing':
        return <MarketTiming />;
      case 'tech-synergies':
        return <TechnologySynergies />;
      case 'regulatory-risk':
        return <RegulatoryRisk />;
      case 'infrastructure':
        return <InfrastructureReadiness />;
      case 'talent':
        return <TalentAnalysis />;
      case 'financial':
        return <FinancialHealth />;
      case 'market-education':
        return <MarketEducation />;
      case 'competitive':
        return <CompetitiveAdvantage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab.id
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { Company, InvestmentScore, MarketTrend, DueDiligenceReport, ROIAnalysis } from '../types';

interface InvestmentEvaluationProps {
  companies: Company[];
}

export default function InvestmentEvaluation({ companies }: InvestmentEvaluationProps) {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [activeTab, setActiveTab] = useState<'scores' | 'trends' | 'dueDiligence' | 'roi'>('scores');

  // Mock data for demonstration
  const mockScores: InvestmentScore[] = companies.map(company => ({
    companyName: company.name,
    financialHealth: Math.floor(Math.random() * 100),
    teamExperience: Math.floor(Math.random() * 100),
    innovation: Math.floor(Math.random() * 100),
    marketPotential: Math.floor(Math.random() * 100),
    esgImpact: Math.floor(Math.random() * 100),
    totalScore: Math.floor(Math.random() * 100)
  }));

  const mockTrends: MarketTrend[] = [
    {
      sector: 'Carbon Removal',
      trend: 'Growing adoption of direct air capture',
      impact: 'High',
      opportunities: ['Government incentives', 'Corporate carbon offset demand'],
      risks: ['High capital costs', 'Regulatory uncertainty'],
      policyUpdates: [
        {
          date: '2024-03-15',
          description: 'New carbon credit regulations',
          impact: 'Positive'
        }
      ]
    }
  ];

  const mockDueDiligence: DueDiligenceReport[] = companies.map(company => ({
    companyName: company.name,
    patents: [
      {
        title: 'Sample Patent',
        status: 'Pending',
        innovation: 'High'
      }
    ],
    teamAssessment: {
      founders: [
        {
          name: 'John Doe',
          experience: ['Previous startup', 'Tech industry'],
          achievements: ['Successful exit']
        }
      ],
      advisors: [
        {
          name: 'Jane Smith',
          expertise: ['Climate tech', 'VC']
        }
      ]
    },
    vcActivity: {
      investors: ['VC Fund 1', 'VC Fund 2'],
      fundingRounds: [
        {
          date: '2024-01-01',
          amount: '$10M',
          leadInvestor: 'VC Fund 1'
        }
      ]
    }
  }));

  const mockROI: ROIAnalysis[] = companies.map(company => ({
    companyName: company.name,
    historicalROI: [
      { year: 2020, roi: 15 },
      { year: 2021, roi: 25 },
      { year: 2022, roi: 35 }
    ],
    forecastedROI: [
      { year: 2023, roi: 45, confidence: 0.8 },
      { year: 2024, roi: 55, confidence: 0.7 }
    ],
    riskFactors: [
      {
        factor: 'Market adoption',
        impact: 0.7,
        mitigation: 'Strategic partnerships'
      }
    ],
    exitStrategies: [
      {
        type: 'Acquisition',
        probability: 0.6,
        estimatedValue: '$100M',
        timeline: '2025-2026'
      }
    ]
  }));

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Investment Evaluation</h2>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setActiveTab('scores')}
            className={`px-4 py-2 rounded ${
              activeTab === 'scores' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
          >
            Startup Scores
          </button>
          <button
            onClick={() => setActiveTab('trends')}
            className={`px-4 py-2 rounded ${
              activeTab === 'trends' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
          >
            Market Trends
          </button>
          <button
            onClick={() => setActiveTab('dueDiligence')}
            className={`px-4 py-2 rounded ${
              activeTab === 'dueDiligence' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
          >
            Due Diligence
          </button>
          <button
            onClick={() => setActiveTab('roi')}
            className={`px-4 py-2 rounded ${
              activeTab === 'roi' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
          >
            ROI Analysis
          </button>
        </div>
      </div>

      <div className="mt-4">
        {activeTab === 'scores' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockScores.map(score => (
              <div key={score.companyName} className="p-4 border rounded-lg">
                <h3 className="font-bold text-lg mb-2">{score.companyName}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Financial Health:</span>
                    <span className="font-semibold">{score.financialHealth}/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Experience:</span>
                    <span className="font-semibold">{score.teamExperience}/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Innovation:</span>
                    <span className="font-semibold">{score.innovation}/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Market Potential:</span>
                    <span className="font-semibold">{score.marketPotential}/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ESG Impact:</span>
                    <span className="font-semibold">{score.esgImpact}/100</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold mt-2">
                    <span>Total Score:</span>
                    <span className="text-green-600">{score.totalScore}/100</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'trends' && (
          <div className="space-y-4">
            {mockTrends.map(trend => (
              <div key={trend.sector} className="p-4 border rounded-lg">
                <h3 className="font-bold text-lg mb-2">{trend.sector}</h3>
                <div className="space-y-2">
                  <p><span className="font-semibold">Trend:</span> {trend.trend}</p>
                  <p><span className="font-semibold">Impact:</span> {trend.impact}</p>
                  <div>
                    <span className="font-semibold">Opportunities:</span>
                    <ul className="list-disc list-inside ml-4">
                      {trend.opportunities.map(opp => (
                        <li key={opp}>{opp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold">Risks:</span>
                    <ul className="list-disc list-inside ml-4">
                      {trend.risks.map(risk => (
                        <li key={risk}>{risk}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold">Recent Policy Updates:</span>
                    <ul className="list-disc list-inside ml-4">
                      {trend.policyUpdates.map(update => (
                        <li key={update.date}>
                          {update.date}: {update.description} ({update.impact})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'dueDiligence' && (
          <div className="space-y-4">
            {mockDueDiligence.map(report => (
              <div key={report.companyName} className="p-4 border rounded-lg">
                <h3 className="font-bold text-lg mb-2">{report.companyName}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Patents</h4>
                    <ul className="list-disc list-inside ml-4">
                      {report.patents.map(patent => (
                        <li key={patent.title}>
                          {patent.title} ({patent.status}) - {patent.innovation} innovation
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Team Assessment</h4>
                    <div className="ml-4">
                      <h5 className="font-medium">Founders:</h5>
                      <ul className="list-disc list-inside">
                        {report.teamAssessment.founders.map(founder => (
                          <li key={founder.name}>
                            {founder.name} - {founder.experience.join(', ')}
                          </li>
                        ))}
                      </ul>
                      <h5 className="font-medium mt-2">Advisors:</h5>
                      <ul className="list-disc list-inside">
                        {report.teamAssessment.advisors.map(advisor => (
                          <li key={advisor.name}>
                            {advisor.name} - {advisor.expertise.join(', ')}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">VC Activity</h4>
                    <div className="ml-4">
                      <p>Investors: {report.vcActivity.investors.join(', ')}</p>
                      <h5 className="font-medium mt-2">Funding Rounds:</h5>
                      <ul className="list-disc list-inside">
                        {report.vcActivity.fundingRounds.map(round => (
                          <li key={round.date}>
                            {round.date}: {round.amount} (Lead: {round.leadInvestor})
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'roi' && (
          <div className="space-y-4">
            {mockROI.map(analysis => (
              <div key={analysis.companyName} className="p-4 border rounded-lg">
                <h3 className="font-bold text-lg mb-2">{analysis.companyName}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Historical ROI</h4>
                    <ul className="list-disc list-inside ml-4">
                      {analysis.historicalROI.map(roi => (
                        <li key={roi.year}>
                          {roi.year}: {roi.roi}%
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Forecasted ROI</h4>
                    <ul className="list-disc list-inside ml-4">
                      {analysis.forecastedROI.map(roi => (
                        <li key={roi.year}>
                          {roi.year}: {roi.roi}% (Confidence: {Math.round(roi.confidence * 100)}%)
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Risk Factors</h4>
                    <ul className="list-disc list-inside ml-4">
                      {analysis.riskFactors.map(risk => (
                        <li key={risk.factor}>
                          {risk.factor} (Impact: {Math.round(risk.impact * 100)}%) - Mitigation: {risk.mitigation}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Exit Strategies</h4>
                    <ul className="list-disc list-inside ml-4">
                      {analysis.exitStrategies.map(strategy => (
                        <li key={strategy.type}>
                          {strategy.type} - Probability: {Math.round(strategy.probability * 100)}%, 
                          Value: {strategy.estimatedValue}, Timeline: {strategy.timeline}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 
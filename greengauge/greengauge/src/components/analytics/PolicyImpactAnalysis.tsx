'use client';

import { useState } from 'react';
import { PolicyImpact } from '@/types/analytics';

export default function PolicyImpactAnalysis() {
  const [selectedPolicy, setSelectedPolicy] = useState<string>('');
  const [impactData, setImpactData] = useState<PolicyImpact | null>(null);

  // Mock data - In production, this would come from an API
  const mockImpactData: PolicyImpact = {
    policyId: 'IRA-2022',
    directBeneficiaries: [
      {
        companyId: 'company1',
        potentialImpact: 500,
        impactType: 'tax_credit'
      },
      {
        companyId: 'company2',
        potentialImpact: 300,
        impactType: 'grant'
      }
    ],
    indirectBeneficiaries: [
      {
        companyId: 'company3',
        impactScore: 85,
        impactDescription: 'Supply chain optimization opportunities'
      }
    ],
    timeline: {
      startDate: '2024-01-01',
      endDate: '2025-12-31',
      milestones: [
        {
          date: '2024-06-01',
          description: 'Initial funding allocation',
          status: 'pending'
        }
      ]
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Direct Beneficiaries Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Direct Beneficiaries</h3>
          <div className="space-y-4">
            {mockImpactData.directBeneficiaries.map((beneficiary, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Company {beneficiary.companyId}</span>
                  <span className="text-sm font-semibold text-teal-600">
                    ${beneficiary.potentialImpact}M
                  </span>
                </div>
                <span className="text-xs text-gray-500">{beneficiary.impactType}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Indirect Beneficiaries Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Indirect Beneficiaries</h3>
          <div className="space-y-4">
            {mockImpactData.indirectBeneficiaries.map((beneficiary, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Company {beneficiary.companyId}</span>
                  <span className="text-sm font-semibold text-teal-600">
                    {beneficiary.impactScore}/100
                  </span>
                </div>
                <p className="text-xs text-gray-500">{beneficiary.impactDescription}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation Timeline</h3>
          <div className="space-y-4">
            {mockImpactData.timeline.milestones.map((milestone, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">{milestone.description}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                    milestone.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {milestone.status}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{milestone.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Total Potential Impact</h4>
            <p className="text-2xl font-bold text-teal-600">
              ${mockImpactData.directBeneficiaries.reduce((sum, b) => sum + b.potentialImpact, 0)}M
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Implementation Period</h4>
            <p className="text-sm text-gray-600">
              {mockImpactData.timeline.startDate} to {mockImpactData.timeline.endDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
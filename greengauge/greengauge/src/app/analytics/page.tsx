import AnalyticsDashboard from '@/components/analytics/AnalyticsDashboard';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Advanced Analytics</h1>
          <p className="mt-2 text-sm text-gray-600">
            Comprehensive analysis of climate tech investments, policies, and market opportunities.
          </p>
        </div>
        <AnalyticsDashboard />
      </div>
    </div>
  );
} 
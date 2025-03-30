'use client';

import { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Company } from '../types';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
);

interface SectorROITimelineProps {
  companies: Company[];
}

export default function SectorROITimeline({ companies }: SectorROITimelineProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Get unique sectors
    const sectors = [...new Set(companies.map(company => company.sector))];

    // Generate revenue data for each sector
    const years = Array.from({ length: 5 }, (_, i) => 2020 + i);
    const sectorData = sectors.map(sector => {
      const sectorCompanies = companies.filter(company => company.sector === sector);
      return {
        label: sector,
        data: years.map(year => {
          // Calculate total revenue for companies in this sector up to this year
          const companiesInYear = sectorCompanies.filter(
            company => company.founded && company.founded <= year
          );
          
          // Calculate revenue based on funding amount and growth assumptions
          const totalRevenue = companiesInYear.reduce((sum, company) => {
            if (company.keyMetrics?.fundingAmount) {
              const funding = parseFloat(company.keyMetrics.fundingAmount.replace(/[^0-9.-]+/g, ''));
              if (!isNaN(funding)) {
                // Assume revenue is 2x funding for companies founded in the same year
                // and grows by 50% each year after founding
                const yearsSinceFounded = year - (company.founded || year);
                const revenueMultiplier = Math.pow(1.5, Math.max(0, yearsSinceFounded));
                return sum + (funding * 2 * revenueMultiplier);
              }
            }
            return sum;
          }, 0);

          return totalRevenue;
        }),
        borderColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
        tension: 0.4,
        fill: false
      };
    });

    const config: ChartJS.ChartConfiguration = {
      type: 'line',
      data: {
        labels: years,
        datasets: sectorData
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Sector Revenue Timeline (2020-2024)',
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          legend: {
            position: 'top' as const,
            labels: {
              boxWidth: 12,
              padding: 15
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const value = context.parsed.y;
                return `${context.dataset.label}: $${(value / 1000000).toFixed(1)}M`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Revenue ($)',
              font: {
                weight: 'bold'
              }
            },
            ticks: {
              callback: function(value) {
                return `$${(Number(value) / 1000000).toFixed(1)}M`;
              }
            }
          },
          x: {
            title: {
              display: true,
              text: 'Year',
              font: {
                weight: 'bold'
              }
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        }
      }
    };

    const ctx = chartRef.current.getContext('2d');
    if (ctx) {
      chartInstance.current = new ChartJS(ctx, config);
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [companies]);

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <canvas ref={chartRef} />
    </div>
  );
} 
'use client';

import { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  ChartConfiguration
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Company } from '../types';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController
);

interface SectorGrowthTimelineProps {
  companies: Company[];
}

export default function SectorGrowthTimeline({ companies }: SectorGrowthTimelineProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Process data for the chart
    const sectorData = companies.reduce((acc: { [key: string]: number }, company) => {
      acc[company.sector] = (acc[company.sector] || 0) + 1;
      return acc;
    }, {});

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: Object.keys(sectorData),
        datasets: [
          {
            label: 'Number of Companies',
            data: Object.values(sectorData),
            backgroundColor: 'rgba(34, 197, 94, 0.5)',
            borderColor: 'rgb(34, 197, 94)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Companies by Sector',
            font: {
              size: 16,
              weight: 'bold'
            }
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Companies',
              font: {
                weight: 'bold'
              }
            },
            ticks: {
              stepSize: 1,
            },
          },
          x: {
            title: {
              display: true,
              text: 'Sector',
              font: {
                weight: 'bold'
              }
            }
          }
        },
      },
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
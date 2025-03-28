import { NextResponse } from 'next/server';
import { scrapeYCCompanies, scrapeTechstarsCompanies, filterClimateTechCompanies } from '@/utils/scraper';

export async function GET() {
  try {
    // Fetch companies from both accelerators
    const [ycCompanies, techstarsCompanies] = await Promise.all([
      scrapeYCCompanies(),
      scrapeTechstarsCompanies()
    ]);

    // Combine and filter companies
    const allCompanies = [
      ...ycCompanies.map(company => ({ ...company, accelerator: 'YC' as const })),
      ...techstarsCompanies.map(company => ({ ...company, accelerator: 'Techstars' as const }))
    ];

    const climateTechCompanies = filterClimateTechCompanies(allCompanies);

    return NextResponse.json({
      success: true,
      data: climateTechCompanies
    });
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch companies' },
      { status: 500 }
    );
  }
} 
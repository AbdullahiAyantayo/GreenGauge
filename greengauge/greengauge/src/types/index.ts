export interface Company {
  name: string;
  description: string;
  logo: string;
  accelerator: string;
  sector: string;
  website?: string;
  funding?: string;
  founded?: number;
  teamSize?: string;
  location?: string;
  keyMetrics?: {
    carbonReduction?: string;
    fundingAmount?: string;
    customers?: string;
  };
}

export interface ChatRequest {
  prompt: string;
  companies: Company[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatBotProps {
  companies: Company[];
}

export interface CompanyListProps {
  companies: Company[];
  sectors: string[];
  fundingStages: string[];
}

export interface SectorGrowthTimelineProps {
  companies: Company[];
} 
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
  fundingStage: string;
  keyMetrics: {
    fundingAmount: string;
    carbonReduction: string;
    revenue?: string;
    teamSize?: string;
    patents?: string[];
    customers?: string;
  };
  team?: {
    founders: {
      name: string;
      experience: string[];
      linkedin?: string;
    }[];
  };
  risks?: {
    regulatory: string[];
    technical: string[];
    market: string[];
  };
  marketAnalysis?: {
    competitors: string[];
    marketSize: string;
    growthRate: string;
  };
  esgScore?: {
    environmental: number;
    social: number;
    governance: number;
    total: number;
  };
  financialHealth?: {
    burnRate: string;
    runway: string;
    unitEconomics: string;
  };
  exitPotential?: {
    potentialAcquirers: string[];
    ipoReadiness: string;
    estimatedValuation: string;
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

export interface InvestmentScore {
  companyName: string;
  financialHealth: number;
  teamExperience: number;
  innovation: number;
  marketPotential: number;
  esgImpact: number;
  totalScore: number;
}

export interface MarketTrend {
  sector: string;
  trend: string;
  impact: string;
  opportunities: string[];
  risks: string[];
  policyUpdates: {
    date: string;
    description: string;
    impact: string;
  }[];
}

export interface DueDiligenceReport {
  companyName: string;
  patents: {
    title: string;
    status: string;
    innovation: string;
  }[];
  teamAssessment: {
    founders: {
      name: string;
      experience: string[];
      achievements: string[];
    }[];
    advisors: {
      name: string;
      expertise: string[];
    }[];
  };
  vcActivity: {
    investors: string[];
    fundingRounds: {
      date: string;
      amount: string;
      leadInvestor: string;
    }[];
  };
}

export interface ROIAnalysis {
  companyName: string;
  historicalROI: {
    year: number;
    roi: number;
  }[];
  forecastedROI: {
    year: number;
    roi: number;
    confidence: number;
  }[];
  riskFactors: {
    factor: string;
    impact: number;
    mitigation: string;
  }[];
  exitStrategies: {
    type: string;
    probability: number;
    estimatedValue: string;
    timeline: string;
  }[];
} 
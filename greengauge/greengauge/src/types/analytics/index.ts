// Policy Impact Analysis
export interface PolicyImpact {
  policyId: string;
  directBeneficiaries: {
    companyId: string;
    potentialImpact: number; // in millions
    impactType: 'tax_credit' | 'grant' | 'regulatory' | 'market_access';
  }[];
  indirectBeneficiaries: {
    companyId: string;
    impactScore: number; // 0-100
    impactDescription: string;
  }[];
  timeline: {
    startDate: string;
    endDate: string;
    milestones: {
      date: string;
      description: string;
      status: 'pending' | 'in_progress' | 'completed';
    }[];
  };
}

// Technology Readiness
export interface TechnologyReadiness {
  technologyId: string;
  trlLevel: number; // 1-9
  keyMilestones: {
    description: string;
    status: 'pending' | 'in_progress' | 'completed';
    targetDate: string;
  }[];
  technicalBottlenecks: {
    description: string;
    severity: 'low' | 'medium' | 'high';
    potentialSolutions: string[];
  }[];
  timelineToScale: {
    estimatedDate: string;
    confidence: number; // 0-100
    dependencies: string[];
  };
}

// Supply Chain Analysis
export interface SupplyChainAnalysis {
  companyId: string;
  criticalMaterials: {
    material: string;
    suppliers: {
      name: string;
      location: string;
      reliability: number; // 0-100
      alternatives: number;
    }[];
    riskScore: number; // 0-100
    mitigationStrategies: string[];
  }[];
  vulnerabilities: {
    category: string;
    severity: 'low' | 'medium' | 'high';
    impact: string;
    mitigation: string;
  }[];
}

// Market Timing
export interface MarketTiming {
  sector: string;
  currentStage: 'early' | 'growth' | 'mature' | 'decline';
  competitionLevel: number; // 0-100
  marketSize: number; // in millions
  growthRate: number; // percentage
  bestEntryWindow: {
    startDate: string;
    endDate: string;
    rationale: string;
  };
  barriers: {
    type: string;
    severity: 'low' | 'medium' | 'high';
    description: string;
  }[];
}

// Technology Synergies
export interface TechnologySynergy {
  primaryTechnology: string;
  compatibleTechnologies: {
    technology: string;
    synergyScore: number; // 0-100
    potentialBenefits: string[];
    implementationComplexity: 'low' | 'medium' | 'high';
    estimatedSavings?: number; // in millions
  }[];
  integrationChallenges: {
    challenge: string;
    severity: 'low' | 'medium' | 'high';
    potentialSolutions: string[];
  }[];
}

// Regulatory Risk
export interface RegulatoryRisk {
  policyId: string;
  riskLevel: 'low' | 'medium' | 'high';
  impactScore: number; // 0-100
  timeline: {
    expectedDate: string;
    confidence: number; // 0-100
  };
  affectedCompanies: {
    companyId: string;
    impact: 'positive' | 'negative' | 'neutral';
    severity: 'low' | 'medium' | 'high';
  }[];
  mitigationStrategies: string[];
}

// Infrastructure Readiness
export interface InfrastructureReadiness {
  technology: string;
  requiredInfrastructure: {
    type: string;
    status: 'planned' | 'in_progress' | 'completed';
    timeline: string;
    cost: number; // in millions
  }[];
  gaps: {
    description: string;
    severity: 'low' | 'medium' | 'high';
    potentialSolutions: string[];
  }[];
  opportunities: {
    description: string;
    potentialValue: number; // in millions
    timeline: string;
  }[];
}

// Talent Analysis
export interface TalentAnalysis {
  companyId: string;
  keyPersonnel: {
    role: string;
    expertise: string[];
    experience: number; // years
    impact: 'low' | 'medium' | 'high';
  }[];
  gaps: {
    role: string;
    priority: 'low' | 'medium' | 'high';
    marketAvailability: number; // 0-100
  }[];
  strengths: {
    category: string;
    score: number; // 0-100
    description: string;
  }[];
}

// Financial Health
export interface FinancialHealth {
  companyId: string;
  burnRate: number; // monthly in millions
  runway: number; // months
  fundingNeeds: {
    amount: number; // in millions
    timeline: string;
    purpose: string;
  };
  metrics: {
    revenue: number; // in millions
    growth: number; // percentage
    margins: number; // percentage
  };
}

// Market Education
export interface MarketEducation {
  technology: string;
  adoptionBarriers: {
    barrier: string;
    severity: 'low' | 'medium' | 'high';
    targetAudience: string[];
    mitigationStrategy: string;
  }[];
  educationNeeds: {
    audience: string;
    topics: string[];
    priority: 'low' | 'medium' | 'high';
  }[];
  successMetrics: {
    metric: string;
    target: number;
    current: number;
  }[];
}

// Competitive Advantage
export interface CompetitiveAdvantage {
  companyId: string;
  patents: {
    number: string;
    category: string;
    strength: number; // 0-100
    expiration: string;
  }[];
  technicalAdvantages: {
    category: string;
    description: string;
    sustainability: 'low' | 'medium' | 'high';
  }[];
  marketPosition: {
    segment: string;
    share: number; // percentage
    trend: 'up' | 'stable' | 'down';
  }[];
} 
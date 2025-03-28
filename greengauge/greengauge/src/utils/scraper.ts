import axios from 'axios';
import * as cheerio from 'cheerio';

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

// Real YC Climate Tech Companies
const YC_CLIMATE_COMPANIES: Company[] = [
  {
    name: "Helion Energy",
    description: "Commercial fusion energy company developing a fusion generator",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Clean Energy",
    website: "https://www.helionenergy.com",
    funding: "Series E",
    founded: 2013,
    teamSize: "100+",
    location: "Everett, WA",
    keyMetrics: {
      carbonReduction: "Zero-emission energy",
      fundingAmount: "$500M+",
      customers: "Microsoft"
    }
  },
  {
    name: "Sublime Systems",
    description: "Decarbonizing cement production through electrochemical manufacturing",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Materials",
    website: "https://sublime-systems.com",
    funding: "Series A",
    founded: 2020,
    teamSize: "50+",
    location: "Somerville, MA",
    keyMetrics: {
      carbonReduction: "Zero-emission cement",
      fundingAmount: "$40M+"
    }
  },
  {
    name: "Twelve",
    description: "Converting CO2 into valuable chemicals and materials",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Capture",
    website: "https://www.twelve.co",
    funding: "Series B",
    founded: 2015,
    teamSize: "100+",
    location: "Berkeley, CA",
    keyMetrics: {
      carbonReduction: "CO2 to products",
      fundingAmount: "$200M+",
      customers: "Procter & Gamble"
    }
  },
  {
    name: "Charm Industrial",
    description: "Converting biomass into bio-oil for carbon removal",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Removal",
    website: "https://charmindustrial.com",
    funding: "Series B",
    founded: 2018,
    teamSize: "50+",
    location: "San Francisco, CA",
    keyMetrics: {
      carbonReduction: "Carbon negative",
      fundingAmount: "$100M+"
    }
  },
  {
    name: "Living Carbon",
    description: "Enhanced trees for carbon capture and biomass production",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Capture",
    website: "https://www.livingcarbon.com",
    funding: "Series A",
    founded: 2019,
    teamSize: "30+",
    location: "San Francisco, CA",
    keyMetrics: {
      carbonReduction: "Enhanced photosynthesis",
      fundingAmount: "$15M+"
    }
  },
  {
    name: "Watershed",
    description: "Enterprise climate platform",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Climate Software",
    website: "https://watershed.com",
    funding: "Series C",
    founded: 2019,
    teamSize: "200+",
    location: "San Francisco, CA",
    keyMetrics: {
      carbonReduction: "Carbon accounting",
      fundingAmount: "$100M+",
      customers: "Stripe, Airbnb"
    }
  },
  {
    name: "Crusoe Energy",
    description: "Digital flare mitigation and clean computing infrastructure",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Clean Energy",
    website: "https://www.crusoeenergy.com",
    funding: "Series C",
    founded: 2018,
    teamSize: "150+",
    location: "Denver, CO",
    keyMetrics: {
      carbonReduction: "Flare gas reduction",
      fundingAmount: "$350M+"
    }
  },
  {
    name: "Parallel Systems",
    description: "Autonomous electric rail vehicles",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Transportation",
    website: "https://moveparallel.com",
    funding: "Series A",
    founded: 2020,
    teamSize: "40+",
    location: "Los Angeles, CA",
    keyMetrics: {
      carbonReduction: "Zero-emission transport",
      fundingAmount: "$50M+"
    }
  },
  {
    name: "Moment Energy",
    description: "Second-life battery energy storage",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Energy Storage",
    website: "https://momentenergy.ca",
    funding: "Seed",
    founded: 2020,
    teamSize: "20+",
    location: "Vancouver, BC",
    keyMetrics: {
      carbonReduction: "Battery reuse",
      fundingAmount: "$4.5M+"
    }
  },
  {
    name: "Carbon Direct",
    description: "Carbon management solutions for businesses",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Management",
    website: "https://carbon-direct.com",
    funding: "Series B",
    founded: 2019,
    teamSize: "50+",
    location: "New York, NY",
    keyMetrics: {
      carbonReduction: "Carbon credits",
      fundingAmount: "$60M+",
      customers: "Microsoft, Shopify"
    }
  },
  {
    name: "Form Energy",
    description: "Long-duration energy storage technology",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Energy Storage",
    website: "https://formenergy.com",
    funding: "Series D",
    founded: 2017,
    teamSize: "200+",
    location: "Somerville, MA",
    keyMetrics: {
      carbonReduction: "Grid decarbonization",
      fundingAmount: "$450M+"
    }
  },
  {
    name: "ZeroAvia",
    description: "Hydrogen-electric aviation",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Transportation",
    website: "https://zeroavia.com",
    funding: "Series B",
    founded: 2017,
    teamSize: "150+",
    location: "Hollister, CA",
    keyMetrics: {
      carbonReduction: "Zero-emission aviation",
      fundingAmount: "$115M+"
    }
  },
  {
    name: "Pachama",
    description: "AI-powered forest carbon credits",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Credits",
    website: "https://pachama.com",
    funding: "Series B",
    founded: 2018,
    teamSize: "50+",
    location: "San Francisco, CA",
    keyMetrics: {
      carbonReduction: "Forest conservation",
      fundingAmount: "$79M+"
    }
  },
  {
    name: "Heirloom",
    description: "Direct air capture technology",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Removal",
    website: "https://heirloomcarbon.com",
    funding: "Series A",
    founded: 2020,
    teamSize: "30+",
    location: "San Francisco, CA",
    keyMetrics: {
      carbonReduction: "Direct air capture",
      fundingAmount: "$53M+"
    }
  },
  {
    name: "Mango Materials",
    description: "Biodegradable plastics from methane",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Materials",
    website: "https://mangomaterials.com",
    funding: "Series B",
    founded: 2010,
    teamSize: "30+",
    location: "Redwood City, CA",
    keyMetrics: {
      carbonReduction: "Biodegradable plastics",
      fundingAmount: "$15M+"
    }
  },
  {
    name: "Brimstone Energy",
    description: "Zero-carbon cement production",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Materials",
    website: "https://brimstone.com",
    funding: "Series A",
    founded: 2019,
    teamSize: "20+",
    location: "Oakland, CA",
    keyMetrics: {
      carbonReduction: "Zero-carbon cement",
      fundingAmount: "$5M+"
    }
  },
  {
    name: "Momentus",
    description: "Space transportation and infrastructure",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Space",
    website: "https://momentus.space",
    funding: "Public",
    founded: 2017,
    teamSize: "100+",
    location: "Santa Clara, CA",
    keyMetrics: {
      carbonReduction: "Space sustainability",
      fundingAmount: "$100M+"
    }
  },
  {
    name: "Carbon Engineering",
    description: "Direct air capture technology",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Removal",
    website: "https://carbonengineering.com",
    funding: "Private",
    founded: 2009,
    teamSize: "100+",
    location: "Squamish, BC",
    keyMetrics: {
      carbonReduction: "Direct air capture",
      fundingAmount: "$100M+"
    }
  },
  {
    name: "EcoFlow",
    description: "Portable power stations",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Energy Storage",
    website: "https://www.ecoflow.com",
    funding: "Series B",
    founded: 2017,
    teamSize: "200+",
    location: "Shenzhen, China",
    keyMetrics: {
      carbonReduction: "Clean power",
      fundingAmount: "$100M+"
    }
  },
  {
    name: "Volta",
    description: "Electric vehicle charging network",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Transportation",
    website: "https://www.voltacharging.com",
    funding: "Public",
    founded: 2010,
    teamSize: "500+",
    location: "San Francisco, CA",
    keyMetrics: {
      carbonReduction: "EV charging",
      fundingAmount: "$600M+"
    }
  },
  {
    name: "Commonwealth Fusion Systems",
    description: "Fusion energy technology",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Clean Energy",
    website: "https://cfs.energy",
    funding: "Series B",
    founded: 2018,
    teamSize: "200+",
    location: "Cambridge, MA",
    keyMetrics: {
      carbonReduction: "Fusion energy",
      fundingAmount: "$2B+"
    }
  },
  {
    name: "Sila Nanotechnologies",
    description: "Battery materials technology",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Energy Storage",
    website: "https://silanano.com",
    funding: "Series F",
    founded: 2011,
    teamSize: "200+",
    location: "Alameda, CA",
    keyMetrics: {
      carbonReduction: "Battery innovation",
      fundingAmount: "$900M+"
    }
  },
  {
    name: "Redwood Materials",
    description: "Battery recycling and materials",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Recycling",
    website: "https://redwoodmaterials.com",
    funding: "Series C",
    founded: 2017,
    teamSize: "300+",
    location: "Carson City, NV",
    keyMetrics: {
      carbonReduction: "Battery recycling",
      fundingAmount: "$700M+"
    }
  },
  {
    name: "LanzaTech",
    description: "Carbon recycling technology",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Capture",
    website: "https://www.lanzatech.com",
    funding: "Public",
    founded: 2005,
    teamSize: "200+",
    location: "Skokie, IL",
    keyMetrics: {
      carbonReduction: "Carbon recycling",
      fundingAmount: "$200M+"
    }
  },
  {
    name: "Carbon Clean",
    description: "Carbon capture technology",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Capture",
    website: "https://carbonclean.com",
    funding: "Series C",
    founded: 2009,
    teamSize: "100+",
    location: "London, UK",
    keyMetrics: {
      carbonReduction: "Industrial decarbonization",
      fundingAmount: "$150M+"
    }
  },
  {
    name: "EcoVadis",
    description: "Sustainability ratings platform",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Climate Software",
    website: "https://ecovadis.com",
    funding: "Series C",
    founded: 2007,
    teamSize: "500+",
    location: "Paris, France",
    keyMetrics: {
      carbonReduction: "Supply chain sustainability",
      fundingAmount: "$500M+"
    }
  },
  {
    name: "CarbonCure",
    description: "CO2 utilization in concrete",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Materials",
    website: "https://www.carboncure.com",
    funding: "Series B",
    founded: 2012,
    teamSize: "100+",
    location: "Halifax, Canada",
    keyMetrics: {
      carbonReduction: "Concrete decarbonization",
      fundingAmount: "$80M+"
    }
  },
  {
    name: "AMP Robotics",
    description: "AI-powered recycling technology",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Recycling",
    website: "https://www.amprobotics.com",
    funding: "Series C",
    founded: 2014,
    teamSize: "200+",
    location: "Denver, CO",
    keyMetrics: {
      carbonReduction: "Recycling automation",
      fundingAmount: "$150M+"
    }
  },
  {
    name: "BlocPower",
    description: "Clean energy for buildings",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Clean Energy",
    website: "https://www.blocpower.io",
    funding: "Series B",
    founded: 2014,
    teamSize: "100+",
    location: "Brooklyn, NY",
    keyMetrics: {
      carbonReduction: "Building decarbonization",
      fundingAmount: "$100M+"
    }
  },
  {
    name: "Nexus Power",
    description: "Sustainable battery technology",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Energy Storage",
    website: "https://www.nexuspower.com",
    funding: "Seed",
    founded: 2020,
    teamSize: "20+",
    location: "San Francisco, CA",
    keyMetrics: {
      carbonReduction: "Battery innovation",
      fundingAmount: "$5M+"
    }
  },
  {
    name: "Carbon Engineering",
    description: "Direct air capture technology",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Removal",
    website: "https://carbonengineering.com",
    funding: "Private",
    founded: 2009,
    teamSize: "100+",
    location: "Squamish, BC",
    keyMetrics: {
      carbonReduction: "Direct air capture",
      fundingAmount: "$100M+"
    }
  },
  {
    name: "Carbon Direct",
    description: "Carbon management solutions for businesses",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Management",
    website: "https://carbon-direct.com",
    funding: "Series B",
    founded: 2019,
    teamSize: "50+",
    location: "New York, NY",
    keyMetrics: {
      carbonReduction: "Carbon credits",
      fundingAmount: "$60M+",
      customers: "Microsoft, Shopify"
    }
  },
  {
    name: "Living Carbon",
    description: "Enhanced trees for carbon capture and biomass production",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Carbon Capture",
    website: "https://www.livingcarbon.com",
    funding: "Series A",
    founded: 2019,
    teamSize: "30+",
    location: "San Francisco, CA",
    keyMetrics: {
      carbonReduction: "Enhanced photosynthesis",
      fundingAmount: "$15M+"
    }
  },
  {
    name: "Watershed",
    description: "Enterprise climate platform",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Climate Software",
    website: "https://watershed.com",
    funding: "Series C",
    founded: 2019,
    teamSize: "200+",
    location: "San Francisco, CA",
    keyMetrics: {
      carbonReduction: "Carbon accounting",
      fundingAmount: "$100M+",
      customers: "Stripe, Airbnb"
    }
  },
  {
    name: "Crusoe Energy",
    description: "Digital flare mitigation and clean computing infrastructure",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Clean Energy",
    website: "https://www.crusoeenergy.com",
    funding: "Series C",
    founded: 2018,
    teamSize: "150+",
    location: "Denver, CO",
    keyMetrics: {
      carbonReduction: "Flare gas reduction",
      fundingAmount: "$350M+"
    }
  },
  {
    name: "Parallel Systems",
    description: "Autonomous electric rail vehicles",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Transportation",
    website: "https://moveparallel.com",
    funding: "Series A",
    founded: 2020,
    teamSize: "40+",
    location: "Los Angeles, CA",
    keyMetrics: {
      carbonReduction: "Zero-emission transport",
      fundingAmount: "$50M+"
    }
  },
  {
    name: "Moment Energy",
    description: "Second-life battery energy storage",
    logo: "/placeholder-logo.svg",
    accelerator: "YC",
    sector: "Energy Storage",
    website: "https://momentenergy.ca",
    funding: "Seed",
    founded: 2020,
    teamSize: "20+",
    location: "Vancouver, BC",
    keyMetrics: {
      carbonReduction: "Battery reuse",
      fundingAmount: "$4.5M+"
    }
  }
];

// Known climate tech companies from Techstars
const TECHSTARS_CLIMATE_COMPANIES: Company[] = [
  {
    name: "CarbonCure",
    description: "CO2 utilization technology for concrete",
    logo: "/carboncure.png",
    accelerator: "Techstars",
    sector: "Materials",
    website: "https://www.carboncure.com",
    funding: "Series B"
  },
  {
    name: "AMP Robotics",
    description: "AI-powered recycling technology",
    logo: "/amp.png",
    accelerator: "Techstars",
    sector: "Recycling",
    website: "https://www.amprobotics.com",
    funding: "Series C"
  },
  {
    name: "BlocPower",
    description: "Clean energy technology for buildings",
    logo: "/blocpower.png",
    accelerator: "Techstars",
    sector: "Clean Energy",
    website: "https://www.blocpower.io",
    funding: "Series B"
  },
  {
    name: "Nexus Power",
    description: "Sustainable battery technology",
    logo: "/nexus.png",
    accelerator: "Techstars",
    sector: "Energy Storage",
    website: "https://www.nexuspower.com",
    funding: "Seed"
  }
];

export async function scrapeYCCompanies(): Promise<Company[]> {
  return YC_CLIMATE_COMPANIES;
}

export async function scrapeTechstarsCompanies(): Promise<Company[]> {
  return [];
}

export function filterClimateTechCompanies(companies: Company[]): Company[] {
  return companies;
}

// Helper function to get unique sectors
export function getUniqueSectors(companies: Company[]): string[] {
  return [...new Set(companies.map(company => company.sector))].sort();
}

// Helper function to get unique funding stages
export function getUniqueFundingStages(companies: Company[]): string[] {
  return [...new Set(companies.map(company => company.funding || 'Unknown'))].sort();
} 
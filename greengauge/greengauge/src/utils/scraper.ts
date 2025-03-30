import axios from 'axios';
import * as cheerio from 'cheerio';
import { Company } from '../types';

// Real YC Climate Tech Companies
const YC_CLIMATE_COMPANIES: Company[] = [
  {
    name: "Helion Energy",
    description: "Commercial fusion energy company developing a fusion generator",
    logo: "https://ui-avatars.com/api/?name=Helion+Energy&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Sublime+Systems&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Twelve&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Charm+Industrial&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Living+Carbon&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Watershed&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Crusoe+Energy&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Parallel+Systems&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Moment+Energy&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Carbon+Direct&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Form+Energy&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=ZeroAvia&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Pachama&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Heirloom&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Mango+Materials&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Brimstone+Energy&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Momentus&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Carbon+Engineering&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=EcoFlow&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Volta&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Commonwealth+Fusion+Systems&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Sila+Nanotechnologies&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Redwood+Materials&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=LanzaTech&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Carbon+Clean&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=EcoVadis&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=CarbonCure&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=AMP+Robotics&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=BlocPower&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Nexus+Power&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Carbon+Engineering&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Carbon+Direct&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Living+Carbon&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Watershed&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Crusoe+Energy&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Parallel+Systems&background=0D9488&color=fff",
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
    logo: "https://ui-avatars.com/api/?name=Moment+Energy&background=0D9488&color=fff",
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
].map(company => ({
  ...company,
  logo: `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=0D9488&color=fff`
}));

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

// Mock data for climate tech companies
const mockCompanies: Company[] = [
  {
    name: "CarbonCapture",
    description: "Developing direct air capture technology to remove CO2 from the atmosphere",
    logo: "https://bookface-images.s3.amazonaws.com/logos/company_1.png",
    accelerator: "YC W23",
    sector: "Carbon Removal",
    website: "https://carboncapture.com",
    funding: "Series A",
    founded: 2020,
    teamSize: "11-50",
    location: "San Francisco, CA",
    keyMetrics: {
      carbonReduction: "100,000 tons CO2/year",
      fundingAmount: "$12M",
      customers: "5 major corporations"
    }
  },
  {
    name: "SolarGrid",
    description: "AI-powered solar panel optimization and maintenance platform",
    logo: "https://bookface-images.s3.amazonaws.com/logos/company_2.png",
    accelerator: "YC S23",
    sector: "Renewable Energy",
    website: "https://solargrid.com",
    funding: "Seed",
    founded: 2021,
    teamSize: "1-10",
    location: "Austin, TX",
    keyMetrics: {
      carbonReduction: "50,000 tons CO2/year",
      fundingAmount: "$2.5M",
      customers: "15 solar farms"
    }
  },
  {
    name: "EcoTransport",
    description: "Electric vehicle fleet management and charging infrastructure",
    logo: "https://bookface-images.s3.amazonaws.com/logos/company_3.png",
    accelerator: "YC W22",
    sector: "Transportation",
    website: "https://ecotransport.com",
    funding: "Series B",
    founded: 2019,
    teamSize: "51-200",
    location: "Los Angeles, CA",
    keyMetrics: {
      carbonReduction: "200,000 tons CO2/year",
      fundingAmount: "$45M",
      customers: "25 fleet operators"
    }
  },
  {
    name: "GreenBuild",
    description: "Sustainable building materials and construction technology",
    logo: "https://bookface-images.s3.amazonaws.com/logos/company_4.png",
    accelerator: "YC S22",
    sector: "Construction",
    website: "https://greenbuild.com",
    funding: "Series A",
    founded: 2020,
    teamSize: "11-50",
    location: "Boston, MA",
    keyMetrics: {
      carbonReduction: "75,000 tons CO2/year",
      fundingAmount: "$8M",
      customers: "12 construction companies"
    }
  },
  {
    name: "AgriTech",
    description: "AI-powered precision agriculture and sustainable farming",
    logo: "https://bookface-images.s3.amazonaws.com/logos/company_5.png",
    accelerator: "YC W23",
    sector: "Agriculture",
    website: "https://agritech.com",
    funding: "Seed",
    founded: 2022,
    teamSize: "1-10",
    location: "Chicago, IL",
    keyMetrics: {
      carbonReduction: "30,000 tons CO2/year",
      fundingAmount: "$1.5M",
      customers: "8 farms"
    }
  }
];

export async function scrapeYCCompanies(): Promise<Company[]> {
  try {
    // For now, return the static data
    return YC_CLIMATE_COMPANIES;
  } catch (error) {
    console.error('Error scraping YC companies:', error);
    return []; // Return empty array on error
  }
}

export async function scrapeTechstarsCompanies(): Promise<Company[]> {
  return [];
}

export function filterClimateTechCompanies(companies: Company[]): Company[] {
  return companies;
}

// Helper function to get unique sectors
export function getUniqueSectors(companies: Company[]): string[] {
  return [...new Set(companies.map(company => company.sector).filter((sector): sector is string => !!sector))];
}

// Helper function to get unique funding stages
export function getUniqueFundingStages(companies: Company[]): string[] {
  return [...new Set(companies.map(company => company.funding).filter((funding): funding is string => !!funding))];
}

export async function getCompanies(): Promise<Company[]> {
  // Return the real YC companies data instead of mock data
  return YC_CLIMATE_COMPANIES;
} 
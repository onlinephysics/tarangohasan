export type ProjectCategory = 'Educational Platform' | 'Browser Extension' | 'Tooling' | 'Experiment';
export type ProjectStatus = 'Active' | 'In Development' | 'Maintained' | 'Experimental' | 'Archived' | 'Needs Improvement';

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  role: string;
  ideaProvider: string;
  contentProvider: string;
  stack: string[];
  status: ProjectStatus;
  year: string;
  liveUrl?: string;
  sourceUrl?: string;
  screenshots: { url: string; caption: string }[];
  features: string[];
  architectureDescription?: string;
  workflowSteps?: string[];
  developmentProcess?: string;
  challenges?: string;
  history?: string;
  currentState?: string;
  featured: boolean;
  order: number;
}

export interface Experiment {
  slug: string;
  title: string;
  category: 'AI' | 'Linux & Environments' | 'Infrastructure' | 'Web & APIs' | 'Terminal';
  description: string;
  stack: string[];
  status: string;
}

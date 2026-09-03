export type ProjectCategory = 'Product' | 'Platform' | 'Commerce' | 'Marketing';
export type ProjectStatus = 'shipped' | 'in-development';

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'phone';
}

export interface SiteProfile {
  name: string;
  firstName: string;
  role: string;
  headline: string;
  positioning: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  githubUrl: string;
  linkedinUrl: string;
  socials: SocialLink[];
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Data' | 'Tools';
  icon?: string;
  featured?: boolean;
}

export interface ExperienceRole {
  id: string;
  company: string;
  role: string;
  employmentType: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectSurface {
  title: string;
  body: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  context: string;
  /** Short line for cards: what you personally contributed */
  contribution: string;
  role: string;
  category: ProjectCategory;
  /** Company from the CV / employment affiliation */
  company?: string;
  status?: ProjectStatus;
  stack: string[];
  architecture: string[];
  challenges: string[];
  solutions: string[];
  features: string[];
  surfaces?: ProjectSurface[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  privateNote?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  detail?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
}

export interface NavItem {
  label: string;
  href: string;
  exact?: boolean;
}

export interface ApproachItem {
  title: string;
  body: string;
}

export interface AboutPoint {
  title: string;
  body: string;
}

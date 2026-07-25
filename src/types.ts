export interface Skill {
  name: string;
  category: 'frontend' | 'ui_design' | 'backend' | 'cloud_tools' | 'languages_cs' | string;
  level: number; // 0-100 percentage or proficiency scale
  iconName: string;
  tags?: string[];
  description?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  bullets: string[];
  skillsUsed: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl: string;
  fileType: 'pdf' | 'image';
  images?: string[];
  badgeColor?: string;
  icon?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullOverview: string;
  tags: string[];
  imagePlaceholder: string;
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
  badgeType?: 'capstone' | 'featured' | 'in_progress' | 'ieee';
  highlights: string[];
  architecture?: {
    components: string[];
    dataFlow: string;
    techStackDetails: { label: string; value: string }[];
  };
  demoType: 'lung_cd' | 'expense_tracker' | 'financial_news' | 'shortly';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

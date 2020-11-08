export interface IEducationEntry {
  institution: string;
  degree: string;
  start_year: string;
  end_year?: string;
  description?: string;
  current: boolean;
}

export interface IExperienceEntry {
  role: string;
  company: string;
  start_month: string;
  start_year: string;
  end_month?: string;
  current: boolean;
  techStack?: string[];
  githubProjectUrl?: string;
}

export interface IPersonalProjectEntry {
  name: string;
  description?: string;
  techStack?: string[];
  githubProjectUrl?: string;
}

export interface ICV {
  name: string;
  position?: string;
  bio?: string;
  location?: string;
  email?: string;
  phone?: string;
  homepageUrl?: string;
  linkedinUrl?: string;
  educationEntries: IEducationEntry[];
  experienceEntries: IExperienceEntry[];
  personalProjectEntries: IPersonalProjectEntry[];
  skills: string[];
}

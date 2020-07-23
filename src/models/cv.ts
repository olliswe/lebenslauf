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
  skills: string[];
  githubProjectUrl?: string;
}

export interface IPersonalProjectEntry {
  name: string;
  description?: string;
  skills: string[];
  githubProjectUrl?: string;
}

export interface ICV {
  name: string;
  position?: string;
  bio?: string;
  location?: string;
  email?: string;
  phone?: string;
  homepage_url?: string;
  linkedin_url?: string;
  education_entries: IEducationEntry[];
  experience_entries: IExperienceEntry[];
  personal_project_entries: IPersonalProjectEntry[];
  skills?: string[];
}

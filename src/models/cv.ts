export interface IEducationEntry {
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
  description?: string;
  current: boolean;
}

export interface IExperienceEntry {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  githubProjectUrl?: string;
  description?: string;
}

export interface ISkill {
  id: string;
  name: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface IGetCV extends Omit<ICV, "skills"> {
  skills: ISkill[];
}

export const INITIAL_CV_STATE = {
  name: "",
  position: "",
  bio: "",
  location: "",
  email: "",
  phone: "",
  homepageUrl: "",
  linkedinUrl: "",
  educationEntries: [],
  experienceEntries: [],
  personalProjectEntries: [],
  skills: [],
  createdAt: "",
  updatedAt: "",
};

export const INITIAL_EDUCATION_STATE: IEducationEntry = {
  institution: "",
  degree: "",
  startDate: "",
  endDate: "",
  description: "",
  current: false,
};

export const INITIAL_EXPERIENCE_STATE: IExperienceEntry = {
  role: "",
  company: "",
  startDate: "",
  endDate: "",
  current: false,
  githubProjectUrl: "",
};

export const INITIAL_PERSONAL_PROJECT: IPersonalProjectEntry = {
  name: "",
  description: "",
  githubProjectUrl: "",
};

export interface Option {
  label: string;
  sectionId?: string;
}

export interface Experience {
  time: string;
  title: string;
  description: string;
  skills?: Option[];
}

export interface MenuOption extends Option {
  sectionId: string;
}

export interface Skill extends Option {
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category?: string;
}

export interface PersonalInfo {
  name: {
    first: string;
    last: string;
    full: string;
  };
  position: {
    title: string;
    company: string;
    full: string;
  };
  intro: {
    short: string;
    full: string;
  };
  contact: {
    email?: string;
    phone?: string;
    location?: string;
    social: {
      github?: string;
      linkedin?: string;
      website?: string;
    };
  };
  images: {
    profile: string;
    github_icon: string;
    linkedin_icon: string;
  };
}

export interface NavigationConfig {
  menuOptions: MenuOption[];
  sectionHeaders: {
    about: string;
    skills: string;
    experience: string;
    education: string;
    certifications: string;
    projects?: string;
  };
  messages: {
    loading: string;
    noOptionsAvailable: string;
    noDataAvailable: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}
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
  name: string;
  title: string;
  email?: string;
  phone?: string;
  location?: string;
  summary?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}
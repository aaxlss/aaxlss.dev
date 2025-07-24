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

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  path?: string;
  status?: string;
  institution?: string;
  advisor?: string;
  pdfUrl?: string; // Google Drive file ID for presentation slides
};

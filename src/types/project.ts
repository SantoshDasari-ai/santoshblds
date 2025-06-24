export interface ProjectMetadata {
  timeline: string;
  status: "completed" | "in-progress" | "planned";
  team: string[];
  advisor?: string;
  location?: string;
  institution?: string;
}

export interface ProgressStep {
  status: "completed" | "in-progress" | "pending";
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  demoUrl?: string;
  path?: string;
  status?: "completed" | "in-progress" | "planned";
  institution?: string;
  advisor?: string;
  pdfUrl?: string; // Google Drive file ID for presentation slides
  metadata?: ProjectMetadata;
  progressSteps?: ProgressStep[];
  category?: "robotics" | "medical" | "cad" | "ai";
  featured?: boolean;
  images?: string[];
  links?: {
    github?: string;
    demo?: string;
    document?: string;
  };
}

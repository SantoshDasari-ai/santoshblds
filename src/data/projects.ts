import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "pulsatile-flow",
    title: "IN‐VITRO MECHANICAL HEART VALVE THROMBOGENICITY TESTER",
    description:
      "Mechanical Heart Valves (MHVs) are lifesaving implants but pose a significant risk of thromboembolism, often leading to complications like stroke. The Cardio Lab's original 'Thrombogenicity Tester (TGT)' aimed to study clot formation by simulating pulsatile blood flow through an MHV. While innovative, it struggled to replicate key physiological factors such as flow patterns and valve closure dynamics, limiting its accuracy and potential for impactful insights. As part of my senior project, I am leading the development of the TGT 2.0, an upgraded model designed to address these challenges.",
    image:
      "/assets/projects/pulsatile-flow/optimized/Master Assembly Conference Render.JPG.jpg",
    technologies: ["SolidWorks", "Arduino", "Python", "Medical Devices"],
    demoUrl: "/projects/pulsatile-flow",
    status: "Senior Design Project - In Progress",
    institution: "San Jose State University",
    advisor: "Dr. Alessandro Bellofiore",
  },
  {
    id: "robotics-president",
    title: "SJSU Robotics President",
    description:
      "Led the development of a Mars rover prototype, managing cross-functional teams and implementing advanced control systems.",
    image: "/assets/projects/robotics/render.JPG",
    technologies: ["Project Management", "Robotics", "Mechanical Design"],
    demoUrl: "/projects/robotics-president",
  },
  {
    id: "rag-ai",
    title: "RAG AI Tool",
    description:
      "Retrieval Augmented Generation AI Tool for generating responses based on specific knowledge bases.",
    image: "/assets/projects/ragapp/ragapp.png",
    technologies: ["Python", "AI", "NLP"],
    demoUrl: "/projects/rag-ai",
  },
  {
    id: "surgical-drapes",
    title: "Surgical Robot Drapes",
    description:
      "Created a comprehensive manufacturing plan for the Da Vinci Xi surgical robot draping system. By investigating product documents and requirements, we designed an optimal manufacturing approach to ensure sterility during surgical procedures. My primary contributions focused on CAD modeling and Design for Manufacturing (DFM) analysis of the draping components.",
    image: "/assets/projects/drapes/drapes.jpg",
    technologies: ["Medical Devices", "Manufacturing", "Design"],
    demoUrl: "/projects/surgical-drapes",
    pdfUrl: "1urnPNWTethKmWyLuicomAp1dDLlYmu1Z",
  },
  {
    id: "cad-exercises",
    title: "CAD Exercises",
    description:
      "A series of advanced CAD exercises showcasing 3D modeling and design skills.",
    image: "/assets/projects/cad/robot.JPG",
    technologies: ["CAD", "3D Modeling", "Technical Drawing"],
    demoUrl: "/projects/cad-exercises",
  },
];

export const filteredProjects = projects.filter(
  (project) =>
    project.id !== "camera-gimbal" && project.id !== "medicine-bottle"
);

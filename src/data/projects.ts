import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "pulsatile-flow",
    title: "Pulsatile Flow Blood Loop (TGT 2.0)",
    description:
      "Mechanical Heart Valves (MHVs) are lifesaving implants but pose a significant risk of thromboembolism, often leading to complications like stroke. The Cardio Lab's original 'Thrombogenicity Tester (TGT)' aimed to study clot formation by simulating pulsatile blood flow through an MHV. While innovative, it struggled to replicate key physiological factors such as flow patterns and valve closure dynamics, limiting its accuracy and potential for impactful insights. As part of my senior project, I am leading the development of the TGT 2.0, an upgraded model designed to address these challenges.",
    image: "/assets/projects/pulsatile-flow/PSF.png",
    technologies: ["SolidWorks", "Arduino", "Python", "Medical Devices"],
    demoUrl: "/projects/pulsatile-flow",
    status: "Senior Design Project - In Progress",
    institution: "San Jose State University",
    advisor: "Dr. Alessandro Bellofiore",
  },
  {
    id: "dfm-study",
    title: "Injection Mold DFM Study",
    description:
      "Comprehensive Design for Manufacturing study for injection-molded components of surgical robot drapes.",
    image: "/assets/projects/injection-mold/injectionmold.gif",
    technologies: ["CAD", "DFM", "Injection Molding", "Manufacturing"],
    demoUrl: "/projects/dfm-study",
  },
  {
    id: "robotics-president",
    title: "SJSU Robotics President",
    description:
      "Led the development of a Mars rover prototype, managing cross-functional teams and implementing advanced control systems.",
    image: "/assets/projects/robotics/render.JPG",
    technologies: ["Project Management", "Robotics", "Mechanical Design"],
    demoUrl: "/projects/robotics",
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
      "Developed innovative draping solutions for surgical robots to ensure sterility in operating rooms.",
    image: "/assets/projects/drapes/drapes.jpg",
    technologies: ["Medical Devices", "Manufacturing", "Design"],
    demoUrl: "/projects/surgical-robot-drapes",
  },
  {
    id: "raman-spectroscopy",
    title: "Raman Spectroscopy Tester",
    description:
      "Development of advanced spectroscopy testing equipment for material analysis.",
    image: "/assets/projects/raman/main.jpg",
    technologies: ["Spectroscopy", "Hardware Design", "Testing"],
    demoUrl: "/projects/raman-spectroscopy",
  },
  {
    id: "camera-gimbal",
    title: "Camera Gimbal Project",
    description:
      "Design and implementation of a stabilized camera gimbal system.",
    image: "/assets/projects/gimbal/main.jpg",
    technologies: ["Mechanical Design", "Control Systems", "CAD"],
    demoUrl: "/projects/camera-gimbal",
  },
  {
    id: "medicine-bottle",
    title: "Medicine Bottle Opener for Elderly",
    description:
      "Innovative solution to help elderly individuals safely open medicine bottles.",
    image: "/assets/projects/medicine bottle/main.jpg",
    technologies: ["Product Design", "Ergonomics", "Accessibility"],
    demoUrl: "/projects/medicine-bottle-opener",
  },
  {
    id: "cad-exercises",
    title: "CAD Exercises",
    description:
      "A series of advanced CAD exercises showcasing 3D modeling and design skills.",
    image: "/assets/projects/cad/main.jpg",
    technologies: ["CAD", "3D Modeling", "Technical Drawing"],
    demoUrl: "/projects/cad-exercises",
  },
];

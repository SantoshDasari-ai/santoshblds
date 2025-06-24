import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "pulsatile-flow",
    title: "Pulsatile Flow System for Heart Valve Testing",
    category: "medical",
    image:
      "/assets/projects/pulsatile-flow/Master Assembly Conference Render.JPG",
    description:
      "A pulsatile flow system designed to simulate physiological conditions for testing heart valve thrombogenicity, meeting FDA and ISO 5840 standards.",
    technologies: [
      "SolidWorks CAD",
      "Arduino Programming",
      "Python Data Analysis",
      "FDA Compliance",
      "ISO 10993",
      "Biocompatible Materials",
      "Flow Dynamics",
      "Medical Device Testing",
      "Rapid Prototyping",
      "Validation Protocols",
    ],
    featured: true,
    status: "completed",
    path: "/projects/pulsatile-flow",
    images: [
      "/assets/projects/pulsatile-flow/oldTGT.png",
      "/assets/projects/pulsatile-flow/draft-assembly.png",
      "/assets/projects/pulsatile-flow/PSF.png",
      "/assets/projects/pulsatile-flow/MHVicon.jpg",
    ],
    links: {
      github: "https://github.com/SantoshDasari-ai/TGT2.0",
    },
  },
  {
    id: "robotics-president",
    title: "President of the Spartan Robotics Club",
    category: "robotics",
    image: "/assets/projects/robotics/render.JPG",
    description:
      "Led a university robotics club, overseeing multiple projects including a 6-axis robot arm and a Mars rover. Managed teams, budgets, and outreach events.",
    technologies: [
      "Project Management",
      "Team Leadership",
      "SolidWorks CAD",
      "Autonomous Systems",
      "Sensor Integration",
      "Mechanical Design",
      "Technical Documentation",
      "Workshop Organization",
      "Industry Partnerships",
      "Cross-functional Collaboration",
    ],
    featured: false,
    status: "completed",
    path: "/projects/robotics-president",
    images: [
      "/assets/projects/robotics/sjr_main.jpg",
      "/assets/projects/robotics/render.JPG",
      "/assets/projects/robotics/sjr_1.png",
      "/assets/projects/robotics/sjr_2.png",
      "/assets/projects/robotics/sjr_3.png",
      "/assets/projects/robotics/sjr_4.png",
      "/assets/projects/robotics/sjr_5.png",
      "/assets/projects/robotics/sjr_6.png",
      "/assets/projects/robotics/sjr_7.png",
      "/assets/projects/robotics/sjr_8.png",
    ],
    links: {
      github: "https://github.com/SantoshDasari-ai",
    },
  },
  {
    id: "surgical-drapes",
    title: "SURGICAL DRAPES DESIGN FOR MANUFACTURING ANALYSIS",
    description:
      "Comprehensive DFM analysis and cost optimization study for surgical drape manufacturing at Silk Road Medical. Conducted detailed material analysis, manufacturing process evaluation, and cost reduction strategies for FDA-approved surgical drapes used in carotid artery procedures. Applied DFMA principles, lean manufacturing concepts, and regulatory compliance requirements. Project resulted in 15% cost reduction recommendations while maintaining FDA compliance and sterility requirements. Demonstrates expertise in medical device manufacturing, regulatory affairs, and process optimization crucial for medical device companies.",
    image: "/assets/projects/drapes/drapes.jpg",
    technologies: [
      "Design for Manufacturing (DFM)",
      "Cost Analysis",
      "FDA Regulatory Compliance",
      "Sterile Manufacturing",
      "Lean Manufacturing",
      "Process Optimization",
      "Material Selection",
      "Quality Assurance",
      "Medical Device Standards",
      "Supply Chain Analysis",
    ],
    featured: true,
    status: "completed",
    path: "/projects/surgical-drapes",
    images: ["/assets/projects/drapes/drapes.jpg"],
    links: {
      document: "/assets/projects/drapes/slides.pdf",
    },
  },
  {
    id: "rag-ai",
    title: "RAG AI Application for Document Analysis",
    category: "ai",
    image: "/assets/projects/ragapp/preview.png",
    description:
      "Developed a Retrieval-Augmented Generation (RAG) AI application for analyzing and chatting with PDF documents, featuring a feedback system and performance monitoring.",
    technologies: ["React", "Python", "FastAPI", "LLM", "Docker", "AWS"],
    featured: false,
    status: "completed",
    path: "/projects/rag-ai",
    images: [
      "/assets/projects/ragapp/preview.png",
      "/assets/projects/ragapp/chatstart.png",
      "/assets/projects/ragapp/chatend.png",
      "/assets/projects/ragapp/feedback.png",
      "/assets/projects/ragapp/flow-map.png",
    ],
    links: {
      github: "https://github.com/SantoshDasari-ai/ragapp",
      demo: "https://ragapp-frontend.vercel.app/",
    },
  },
  {
    id: "cad-exercises",
    title: "Advanced CAD Design Exercises",
    category: "cad",
    image: "/assets/projects/cad/robot.JPG",
    description:
      "A collection of advanced CAD projects showcasing skills in SolidWorks, including complex assemblies, surfacing, and sheet metal design.",
    technologies: ["SolidWorks", "CAD", "Surfacing", "Sheet Metal"],
    featured: false,
    status: "completed",
    path: "/projects/cad-exercises",
    images: [
      "/assets/projects/cad/BMW Wheel.jpg",
      "/assets/projects/cad/Boat.jpg",
    ],
  },
];

export const filteredProjects = projects;

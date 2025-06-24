import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "pulsatile-flow",
    title: "IN‐VITRO MECHANICAL HEART VALVE THROMBOGENICITY TESTER",
    description:
      "Senior design project developing FDA-compliant medical device testing equipment for heart valve thrombogenicity analysis. Leading development of TGT 2.0 system that replicates physiological blood flow patterns for mechanical heart valve testing. Designed electromechanical system with Arduino control, Python programming, and ISO 10993 compliance. Experience includes CAD design, rapid prototyping, biocompatible material selection, and validation testing protocols. This project demonstrates expertise in medical device development, regulatory compliance, and advanced testing methodologies essential for medical device engineering roles.",
    image:
      "/assets/projects/pulsatile-flow/optimized/Master Assembly Conference Render.JPG.jpg",
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
    category: "medical",
    featured: true,
    status: "in-progress",
    images: [
      "/assets/projects/pulsatile-flow/oldTGT.webp",
      "/assets/projects/pulsatile-flow/draft-assembly.webp",
      "/assets/projects/pulsatile-flow/PSF.webp",
      "/assets/projects/pulsatile-flow/MHVicon.webp",
    ],
    links: {
      github: "https://github.com/SantoshDasari-ai/TGT2.0",
    },
  },
  {
    id: "robotics-president",
    title: "ROBOTICS CLUB PRESIDENT & ENGINEERING PROJECTS",
    description:
      "Leadership role as President of San Jose Robotics Club, managing 50+ members and overseeing multiple engineering projects. Led development of autonomous robots, organized technical workshops, and coordinated with industry partners. Projects included autonomous navigation systems, sensor integration, and mechanical design using SolidWorks. Experience in project management, team leadership, technical documentation, and cross-functional collaboration essential for engineering leadership roles in medical device companies.",
    image: "/assets/projects/robotics/render.JPG",
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
    category: "robotics",
    featured: false,
    status: "completed",
    images: [
      "/assets/projects/robotics/sjr_main.webp",
      "/assets/projects/robotics/render.JPG.webp",
      "/assets/projects/robotics/sjr_1.webp",
      "/assets/projects/robotics/sjr_2.webp",
      "/assets/projects/robotics/sjr_3.webp",
      "/assets/projects/robotics/sjr_4.webp",
      "/assets/projects/robotics/sjr_5.webp",
      "/assets/projects/robotics/sjr_6.webp",
      "/assets/projects/robotics/sjr_7.webp",
      "/assets/projects/robotics/sjr_8.webp",
    ],
    links: {
      github: "https://github.com/SantoshDasari-ai",
    },
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
    category: "medical",
    featured: true,
    status: "completed",
    images: ["/assets/projects/drapes/drapes.webp"],
    links: {
      document: "/assets/projects/drapes/slides.pdf",
    },
  },
  {
    id: "dfm-study",
    title: "DESIGN FOR MANUFACTURING STUDY",
    description:
      "Advanced DFM analysis project focusing on medical device component optimization for manufacturing efficiency and cost reduction. Applied systematic approach to evaluate design alternatives, material selection, and manufacturing processes for medical device components. Utilized SolidWorks for 3D modeling, conducted tolerance analysis, and developed manufacturing recommendations. Project demonstrates proficiency in design optimization, manufacturing engineering, and cost analysis essential for product development roles in medical device companies.",
    image: "/assets/projects/injection-mold/injectionmold.webp",
    technologies: [
      "SolidWorks CAD",
      "Design for Manufacturing",
      "Tolerance Analysis",
      "Cost Optimization",
      "Manufacturing Processes",
      "Material Analysis",
      "Product Development",
      "Engineering Analysis",
      "Process Improvement",
      "Quality Engineering",
    ],
    category: "medical",
    featured: false,
    status: "completed",
  },
  {
    id: "ragapp",
    title: "RAG AI CHATBOT APPLICATION",
    description:
      "Full-stack development of an AI-powered chatbot application using Retrieval-Augmented Generation (RAG) technology. Built with React frontend, Node.js backend, and integrated with OpenAI API for intelligent document processing and question answering. Implemented vector database for efficient document retrieval, user authentication, and responsive design. Demonstrates software development skills, AI integration, and full-stack development capabilities valuable for technical roles in medical device companies requiring software integration.",
    image: "/assets/projects/ragapp/preview.webp",
    technologies: [
      "React.js",
      "Node.js",
      "OpenAI API",
      "Vector Database",
      "TypeScript",
      "REST APIs",
      "Authentication",
      "Responsive Design",
      "AI Integration",
      "Full-Stack Development",
    ],
    category: "ai",
    featured: false,
    status: "completed",
    images: [
      "/assets/projects/ragapp/preview.webp",
      "/assets/projects/ragapp/chatstart.webp",
      "/assets/projects/ragapp/chatend.webp",
      "/assets/projects/ragapp/feedback.webp",
      "/assets/projects/ragapp/flow-map.webp",
    ],
    links: {
      github: "https://github.com/SantoshDasari-ai/ragapp",
      demo: "https://ragapp-frontend.vercel.app/",
    },
  },
  {
    id: "cad-exercises",
    title: "ADVANCED CAD MODELING & DESIGN EXERCISES",
    description:
      "Comprehensive collection of advanced CAD modeling projects demonstrating proficiency in SolidWorks, complex assemblies, and engineering design principles. Projects include mechanical assemblies, product design iterations, and manufacturing-ready models. Features parametric modeling, assembly constraints, motion studies, and technical drawings. Showcases CAD expertise, attention to detail, and design visualization skills essential for product development and engineering roles in medical device industry.",
    image: "/assets/projects/cad/robot.JPG",
    technologies: [
      "SolidWorks Advanced",
      "Parametric Modeling",
      "Assembly Design",
      "Technical Drawings",
      "Motion Studies",
      "Rendering & Visualization",
      "Design Optimization",
      "Engineering Standards",
      "3D Modeling",
      "Product Development",
    ],
    category: "cad",
    featured: false,
    status: "completed",
    images: [
      "/assets/projects/cad/BMW Wheel.jpg",
      "/assets/projects/cad/Boat.jpg",
    ],
  },
];

export const filteredProjects = projects.filter(
  (project) =>
    project.id !== "camera-gimbal" && project.id !== "medicine-bottle"
);

import { lazy } from "react";
import { RouteConfig, ProjectRouteConfig } from "../types/routes";

// Lazy load all pages for code splitting
const Home = lazy(() => import("../pages/Home"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Resume = lazy(() => import("../pages/Resume"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Project pages
const PulsatileFlow = lazy(() => import("../pages/projects/PulsatileFlow"));
const DFMStudy = lazy(() => import("../pages/projects/DFMStudy"));
const RoboticsPresident = lazy(
  () => import("../pages/projects/RoboticsPresident")
);
const RagAi = lazy(() => import("../pages/projects/RagAi"));
const SurgicalDrapes = lazy(() => import("../pages/projects/SurgicalDrapes"));
const RamanSpectroscopy = lazy(
  () => import("../pages/projects/RamanSpectroscopy")
);
const CameraGimbal = lazy(() => import("../pages/projects/CameraGimbal"));
const MedicineBottle = lazy(() => import("../pages/projects/MedicineBottle"));
const CadExercises = lazy(() => import("../pages/projects/CadExercises"));
const SystemOverview = lazy(() => import("../pages/projects/SystemOverview"));
const MechanicalWork = lazy(() => import("../pages/projects/MechanicalWork"));
const Troubleshooting = lazy(() => import("../pages/projects/Troubleshooting"));
const OutreachEvents = lazy(() => import("../pages/projects/OutreachEvents"));

// Main navigation routes
export const mainRoutes: RouteConfig[] = [
  {
    path: "/",
    label: "Home",
    component: Home,
    showInNav: true,
  },
  {
    path: "/portfolio",
    label: "Portfolio",
    component: Portfolio,
    showInNav: true,
  },
  {
    path: "/resume",
    label: "Resume",
    component: Resume,
    showInNav: true,
  },
];

// Project routes
export const projectRoutes: ProjectRouteConfig[] = [
  {
    path: "/projects/pulsatile-flow",
    label: "Pulsatile Flow",
    component: PulsatileFlow,
    category: "medical",
    status: "in-progress",
  },
  {
    path: "/projects/dfm-study",
    label: "DFM Study",
    component: DFMStudy,
    category: "medical",
    status: "completed",
  },
  {
    path: "/projects/robotics-president",
    label: "Robotics President",
    component: RoboticsPresident,
    category: "robotics",
    status: "completed",
  },
  {
    path: "/projects/rag-ai",
    label: "RAG AI",
    component: RagAi,
    category: "ai",
    status: "completed",
  },
  {
    path: "/projects/surgical-drapes",
    label: "Surgical Drapes",
    component: SurgicalDrapes,
    category: "medical",
    status: "completed",
  },
  {
    path: "/projects/raman-spectroscopy",
    label: "Raman Spectroscopy",
    component: RamanSpectroscopy,
    category: "medical",
    status: "completed",
  },
  {
    path: "/projects/camera-gimbal",
    label: "Camera Gimbal",
    component: CameraGimbal,
    category: "robotics",
    status: "completed",
  },
  {
    path: "/projects/medicine-bottle",
    label: "Medicine Bottle",
    component: MedicineBottle,
    category: "medical",
    status: "completed",
  },
  {
    path: "/projects/cad-exercises",
    label: "CAD Exercises",
    component: CadExercises,
    category: "cad",
    status: "completed",
  },
  {
    path: "/projects/robotics/system-overview",
    label: "System Overview",
    component: SystemOverview,
    category: "robotics",
    status: "completed",
  },
  {
    path: "/projects/robotics/mechanical-work",
    label: "Mechanical Work",
    component: MechanicalWork,
    category: "robotics",
    status: "completed",
  },
  {
    path: "/projects/robotics/troubleshooting",
    label: "Troubleshooting",
    component: Troubleshooting,
    category: "robotics",
    status: "completed",
  },
  {
    path: "/projects/robotics/outreach-events",
    label: "Outreach Events",
    component: OutreachEvents,
    category: "robotics",
    status: "completed",
  },
];

// Special routes
export const specialRoutes: RouteConfig[] = [
  {
    path: "*",
    label: "Not Found",
    component: NotFound,
    showInNav: false,
  },
];

// All routes combined
export const allRoutes = [...mainRoutes, ...projectRoutes, ...specialRoutes];

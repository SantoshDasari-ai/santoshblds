import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { projects } from "../../data/projects";

const MedicineBottle: React.FC = () => {
  const projectData = projects.find((p) => p.id === "medicine-bottle");

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return <ProjectTemplate project={projectData} />;
};

export default MedicineBottle;

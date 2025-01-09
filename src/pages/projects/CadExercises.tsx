import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { projects } from "../../data/projects";

const CadExercises: React.FC = () => {
  const projectData = projects.find((p) => p.id === "cad-exercises");

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return <ProjectTemplate project={projectData} />;
};

export default CadExercises;

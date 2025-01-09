import React from "react";
import { motion } from "framer-motion";
import { Project } from "../../types/project";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectTemplateProps {
  project: Project;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">{project.description}</p>
            {/* Additional project details can be added here */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectTemplate;

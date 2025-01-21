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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>

          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="bg-gray-50 rounded-xl overflow-hidden mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Additional project details can be added here */}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectTemplate;

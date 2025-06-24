import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../../data/projects";

const SurgicalDrapes: React.FC = () => {
  const projectData = projects.find((p) => p.id === "surgical-drapes");

  if (!projectData) {
    return <div>Project not found</div>;
  }

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
              {projectData.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {projectData.technologies.map((tech) => (
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
                {projectData.description}
              </p>
            </div>
          </div>

          {projectData.links?.document && (
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Project Presentation
                </h2>
                <div className="w-full h-[700px] border border-gray-200 rounded-xl overflow-hidden">
                  <iframe
                    src={projectData.links.document}
                    title="Surgical Drapes Presentation"
                    className="w-full h-full"
                    allow="autoplay"
                  />
                </div>
              </div>
            </section>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SurgicalDrapes;

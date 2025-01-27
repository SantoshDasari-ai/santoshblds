import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Users,
  ExternalLink,
  ZoomIn,
  X,
} from "lucide-react";
import { projects } from "../../data/projects";

const DFMStudy: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const projectData = projects.find((p) => p.id === "dfm-study");

  const openModal = useCallback((imageSrc: string) => {
    setModalImage(imageSrc);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModalImage(null);
    document.body.style.overflow = "unset";
  }, []);

  if (!projectData) {
    return <div>Project not found</div>;
  }

  const projectMetadata = {
    timeline: "Oct 2023 - Dec 2023",
    status: "Completed",
    team: ["Santosh Dasari"],
    location: "San Jose State University",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 lg:space-y-16"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 py-2"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>

          {/* Project Header */}
          <div className="project-header">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-8">
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Design for Manufacturing Study
                </h1>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl">
                  A comprehensive analysis and optimization study for
                  injection-molded components, focusing on manufacturability,
                  cost reduction, and quality assurance.
                </p>

                {/* Project Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <Calendar size={18} className="mr-2 flex-shrink-0" />
                    <span>{projectMetadata.timeline}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <Users size={18} className="mr-2 flex-shrink-0" />
                    <span>{projectMetadata.team.length} Team Member</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <ExternalLink size={18} className="mr-2 flex-shrink-0" />
                    <span>{projectMetadata.location}</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/assets/projects/dfm-study/icon.jpg"
                  alt="DFM Study Icon"
                  className="w-20 h-20 object-cover rounded-full shadow-md cursor-pointer transition-transform hover:scale-105"
                  onClick={() =>
                    openModal("/assets/projects/dfm-study/icon.jpg")
                  }
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <ZoomIn className="text-white drop-shadow-lg" size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Initial Design Section */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 md:px-8 py-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </span>
                  Initial Design
                </h2>
              </div>
              <div className="p-4 md:p-8">
                <div className="sketchfab-embed-wrapper bg-gray-50 rounded-xl overflow-hidden">
                  <iframe
                    title="Bottom Tool Site V1"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    className="w-full aspect-video"
                    src="https://sketchfab.com/models/20ba8949b9a24f67bc0203793fb0c409/embed"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Tap to interact, pinch to zoom
                </p>
              </div>
            </section>

            {/* Study Details Section */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 md:px-8 py-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </span>
                  Study Details
                </h2>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    Key Focus Areas
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
                    <li>
                      Material selection optimization for injection molding
                    </li>
                    <li>Wall thickness analysis and optimization</li>
                    <li>Draft angle considerations and improvements</li>
                    <li>Prevention of common injection molding defects</li>
                    <li>Plastic flow analysis and simulation</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    Results & Impact
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
                    <li>Reduced manufacturing costs by optimizing design</li>
                    <li>Improved part quality and consistency</li>
                    <li>Enhanced production efficiency</li>
                    <li>Minimized potential defects through simulation</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="max-w-4xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <img
              src={modalImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DFMStudy;

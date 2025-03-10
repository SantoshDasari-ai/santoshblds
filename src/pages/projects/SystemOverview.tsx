import React from "react";
import { motion } from "framer-motion";

const SystemOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-8 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                System Overview
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                Led a team of engineering students with the goal of providing
                SJSU students with experiences that closely mirror real-world
                engineering practices. It is our mission to create an
                environment where students can develop practical skills through
                hands-on project work and collaborative problem-solving.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Team Structure */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <h2 className="text-xl font-semibold text-gray-900">
                  Team Structure
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">Content coming soon...</p>
              </div>
            </div>

            {/* Technical Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 6V2m0 4v4m0 12v-4m0 4v-4m4-8h4m-4 0h-4m-4-4H4m4 0H4m16 4h-4m4 0h-4M4 16h4m-4 0h4m12 0h4m-4 0h4"></path>
                  </svg>
                </span>
                <h2 className="text-xl font-semibold text-gray-900">
                  Technical Overview
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">Content coming soon...</p>
              </div>
            </div>

            {/* Project Goals */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 20v-8m0 8v-8m0 0V4m0 8V4m0 0L8 8m4-4l4 4"></path>
                  </svg>
                </span>
                <h2 className="text-xl font-semibold text-gray-900">
                  Project Goals
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">Content coming soon...</p>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </span>
              <h2 className="text-xl font-semibold text-gray-900">
                Development Timeline
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">Content coming soon...</p>
            </div>
          </div>

          {/* System Architecture Diagram */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
              </span>
              <h2 className="text-xl font-semibold text-gray-900">
                System Architecture
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">Content coming soon...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemOverview;

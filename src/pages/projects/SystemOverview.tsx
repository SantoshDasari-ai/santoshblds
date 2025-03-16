import React from "react";
import { motion } from "framer-motion";

const SystemOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
              <h1 className="text-3xl font-bold text-gray-900">
                System Overview
              </h1>
            </div>
          </div>

          {/* Competition Summary */}
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
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </span>
              <h2 className="text-xl font-semibold text-gray-900">
                Competition Requirements
              </h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Mission Requirements
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-600">
                      <strong>Science Mission:</strong> Analyze terrain, detect
                      life, collect and study soil samples.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-600">
                      <strong>Delivery Mission:</strong> Pick up and transport
                      objects across rough terrain.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-600">
                      <strong>Equipment Servicing Mission:</strong> Perform
                      dexterous tasks on a mock lander using a robotic arm.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-600">
                      <strong>Autonomous Navigation Mission:</strong> Navigate
                      to set locations without manual control.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Technical Constraints
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-600">Maximum weight: 50 kg</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-600">Budget limit: $22,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-600">
                      Wireless communication required
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-600">
                      Manual interventions result in penalties
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex items-center">
                <a
                  href="https://urc.marssociety.org/home/requirements-guidelines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Official Competition Guidelines
                </a>
              </div>
            </div>
          </div>

          {/* Philosophies Section */}
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
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </span>
              <h2 className="text-xl font-semibold text-gray-900">
                Design Philosophies
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 italic">
                Note: These are additional principles beyond the competition
                requirements that guide our design decisions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Lightweight */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Lightweight
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Rover should be as lightweight as possible without
                    compromising functionality and stability.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Easier for students to handle and transport</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Reduced shipping costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>
                        Reduces load on electrical and mechanical systems
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Low Cost */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Low Cost
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Minimize costs without compromising functionality and
                    stability.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Enables purchase of spare parts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Reduces sponsorship requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>
                        Enables early development with minimal upfront costs
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Reusability & BOM */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Reusability & BOM
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Minimize unique components while maintaining functionality.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Reuse frameworks across Mission Control pages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Standardized libraries for control systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>
                        Consistent electrical components and connectors
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Portability */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Portability
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Design for easy transport without compromising capabilities.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>
                        Fits in standard sedan with empty trunk and back seats
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>
                        Passes through standard engineering building doors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>No specialized transport equipment needed</span>
                    </li>
                  </ul>
                </div>

                {/* Accessibility of Design Tools */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Accessibility of Design Tools
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Use tools accessible to all team members while maintaining
                    industry standards.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Cross-platform tools like git and EasyEDA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>SolidWorks for primary mechanical design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>
                        Onshape for collaborative and cloud-based CAD work
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Manufacturability */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Manufacturability & Assembly
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Design for simple manufacturing and intuitive assembly.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Avoid specialized manufacturing requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>IKEA-like assembly process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Early error detection in assembly process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* System Architecture */}
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

          {/* Technical Specifications */}
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
                Technical Specifications
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

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
              <p className="text-gray-600 italic">
                Note: These are the official requirements as defined by the
                University Rover Challenge.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Science Mission */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Science Mission
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Analyze terrain, detect life, collect and study soil
                    samples.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Soil sample collection from diverse locations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>On-site analysis for biomarkers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Geological feature identification</span>
                    </li>
                  </ul>
                </div>

                {/* Delivery Mission */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Delivery Mission
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Pick up and transport objects across rough terrain.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Transport of 1kg supply containers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Navigation through uneven terrain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Accurate placement at delivery points</span>
                    </li>
                  </ul>
                </div>

                {/* Equipment Servicing Mission */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Equipment Servicing Mission
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Perform dexterous tasks on a mock lander using a robotic
                    arm.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Switch toggling and button pressing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Typing on keypad interfaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Connection of cables and components</span>
                    </li>
                  </ul>
                </div>

                {/* Autonomous Navigation Mission */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Autonomous Navigation Mission
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Navigate to set locations without manual control.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>GPS waypoint navigation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Obstacle detection and avoidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Minimal human intervention</span>
                    </li>
                  </ul>
                </div>

                {/* Technical Constraints */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Technical Constraints
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Key requirements and limitations for the rover design.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Maximum weight: 50 kg</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Budget limit: $22,000</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Wireless communication required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>Manual interventions result in penalties</span>
                    </li>
                  </ul>
                </div>

                {/* Competition Guidelines */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Official Documentation
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Access the complete competition documentation and rules.
                  </p>
                  <div className="mt-4">
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

          {/* Detailed Presentation Section */}
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
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </span>
              <h2 className="text-xl font-semibold text-gray-900">
                Detailed System Presentation
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                We've prepared a comprehensive presentation that covers our
                rover's complete technical design, including mechanical systems,
                electronics, software architecture, and testing procedures.
              </p>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-5 w-5 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-md font-medium text-blue-800">
                      Full Design Presentation
                    </h3>
                    <p className="mt-1 text-sm text-blue-700">
                      For a detailed look at our rover's design, please view our
                      complete presentation:
                    </p>
                    <div className="mt-3">
                      <a
                        href="https://docs.google.com/presentation/d/1Hclo7H8hDjwqvdRX3ROdrl1YwS88jFFx/edit?usp=sharing&ouid=104102956017389925053&rtpof=true&sd=true"
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
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                          />
                        </svg>
                        View Full Presentation
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Note: This presentation contains 100+ slides with detailed
                diagrams, technical specifications, and testing data from our
                project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemOverview;

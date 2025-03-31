import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

// Sub-projects data
const subProjects = [
  {
    id: "system-overview",
    title: "System Overview",
    description:
      "Comprehensive overview of our robotics systems, architecture, and technical specifications for the Mars rover project.",
    image: "/assets/projects/robotics/sub/triangles.jpg",
    technologies: [
      "System Architecture",
      "Technical Documentation",
      "Integration",
    ],
    demoUrl: "/projects/robotics/system-overview",
  },
  {
    id: "mechanical-work",
    title: "Mechanical Work",
    description:
      "Complete mechanical engineering process including design, CAD modeling, fabrication, materials selection, and assembly of robotic components.",
    image: "/assets/projects/robotics/sub/arm.jpg",
    technologies: [
      "CAD Design",
      "Fabrication",
      "Assembly",
      "Engineering Analysis",
      "Quality Control",
    ],
    demoUrl: "/projects/robotics/mechanical-work",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description:
      "Systematic approach to identifying, diagnosing, and resolving technical issues in robotic systems and components.",
    image: "/assets/projects/robotics/sub/drone.jpg",
    technologies: ["Problem Solving", "Diagnostics", "Testing", "Repair"],
    demoUrl: "/projects/robotics/troubleshooting",
  },
  {
    id: "outreach-events",
    title: "Outreach and Events",
    description:
      "Community engagement, educational workshops, competitions, and public demonstrations of our robotics projects.",
    image: "/assets/projects/robotics/sub/rover.jpg",
    technologies: ["Community Engagement", "Education", "Competitions"],
    demoUrl: "/projects/robotics/outreach-events",
  },
];

const RoboticsPresident: React.FC = () => {
  const projectData = projects.find((p) => p.id === "robotics-president");
  const [modalImage, setModalImage] = useState<string | null>(null);

  if (!projectData) {
    return <div>Project not found</div>;
  }

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <header className="px-4 py-3 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex justify-between items-center gap-4 max-w-[90rem] mx-auto">
                <div className="flex-1">
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Robotics Club President
                  </h1>
                  <p className="text-base text-gray-600 max-w-2xl">
                    A multidisciplinary team of engineering students from
                    Mechanical, Controls, Electrical, Biology/Geology, and
                    Autonomy fields collaborated to develop a Mars rover robot.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 p-2">
                    <img
                      src="/assets/projects/robotics/SJRlogo.png"
                      alt="SJSU Robotics Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </header>

            <div className="p-4">
              <div className="grid grid-cols-12 gap-4 max-w-[90rem] mx-auto">
                {/* Left Column - Role and Social Links */}
                <div className="col-span-12 lg:col-span-3 space-y-4">
                  {/* Role Section */}
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 flex items-center mb-2">
                      <span className="w-5 h-5 rounded-lg bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3"
                        >
                          <path d="M20 7h-9"></path>
                          <path d="M14 17H5"></path>
                          <circle cx="17" cy="17" r="3"></circle>
                          <circle cx="7" cy="7" r="3"></circle>
                        </svg>
                      </span>
                      My Role
                    </h2>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="prose prose-blue max-w-none">
                        <p className="text-gray-600 mb-2 text-sm">
                          Led a team of 20+ students in developing advanced
                          robotic systems, including our flagship Mars Rover
                          project.
                        </p>
                        <ul className="space-y-1.5 text-gray-600 text-sm">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                            <span>
                              Strategic planning and project execution
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                            <span>
                              Managing cross-functional engineering teams
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                            <span>Technical workshops and training</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Social Links Section */}
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 flex items-center mb-2">
                      <span className="w-5 h-5 rounded-lg bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </span>
                      Social Links
                    </h2>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex flex-col gap-3">
                        <a
                          href="https://sjsurobotics.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors p-2 rounded-lg hover:bg-green-50"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                          <span className="text-sm font-medium">
                            Club Website
                          </span>
                        </a>
                        <a
                          href="https://github.com/SJSURoboticsTeam"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium">
                            GitHub Repository
                          </span>
                        </a>
                        <a
                          href="https://www.youtube.com/@SJSURobotics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-red-50"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium">
                            YouTube Channel
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Gallery Section */}
                <div className="col-span-12 lg:col-span-9">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center mb-2">
                    <span className="w-5 h-5 rounded-lg bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </span>
                    Project Gallery
                  </h2>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="grid grid-cols-4 gap-2">
                      {/* Main Preview */}
                      <div className="col-span-2 row-span-2">
                        <div
                          className="relative h-full cursor-pointer group rounded-lg overflow-hidden"
                          onClick={() =>
                            openModal("/assets/projects/robotics/sjr_main.jpg")
                          }
                        >
                          <img
                            src="/assets/projects/robotics/sjr_main.jpg"
                            alt="SJSU Robotics Main"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              Click to enlarge
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Additional Images */}
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                        <div key={index} className="col-span-1">
                          <div
                            className="relative h-40 cursor-pointer group rounded-lg overflow-hidden"
                            onClick={() =>
                              openModal(
                                `/assets/projects/robotics/sjr_${index}.png`
                              )
                            }
                          >
                            <img
                              src={`/assets/projects/robotics/sjr_${index}.png`}
                              alt={`SJSU Robotics Image ${index}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white text-sm font-medium">
                                Click to enlarge
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sub-projects Section */}
          <section>
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Sub-Projects
                </h2>
                <p className="text-gray-600 text-sm">
                  Key projects developed under my leadership
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {subProjects.map((project, index) => (
                <Link key={project.id} to={project.demoUrl} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-base font-semibold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="px-2 py-0.5 bg-gray-50 text-gray-600 rounded-full text-xs font-medium">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

          {/* Image Modal */}
          {modalImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
              onClick={closeModal}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={closeModal}
              >
                <span className="text-4xl font-light">&times;</span>
              </button>
              <img
                src={modalImage}
                alt="Enlarged view"
                className="max-w-[90%] max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RoboticsPresident;

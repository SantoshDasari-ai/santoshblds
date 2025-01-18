import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

// Sub-projects data
const subProjects = [
  {
    id: "mars-rover",
    title: "Mars Rover Project",
    description:
      "Development of a Mars rover prototype capable of autonomous navigation, soil sampling, and scientific analysis.",
    image: "/assets/projects/robotics/sub/rover.jpg",
    technologies: ["ROS", "Computer Vision", "Mechanical Design"],
    demoUrl: "#",
  },
  {
    id: "autonomous-drone",
    title: "Autonomous Drone",
    description:
      "Design and implementation of an autonomous drone system for aerial mapping and surveillance applications.",
    image: "/assets/projects/robotics/sub/drone.jpg",
    technologies: ["Flight Control", "Path Planning", "Sensors"],
    demoUrl: "#",
  },
  {
    id: "robotic-arm",
    title: "Robotic Arm",
    description:
      "Creation of a 6-DOF robotic arm with precise motion control for industrial automation applications.",
    image: "/assets/projects/robotics/sub/arm.jpg",
    technologies: ["Inverse Kinematics", "Motion Control", "CAD"],
    demoUrl: "#",
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
                    Directed cross-functional teams to develop a Mars rover
                    robot, overseeing Mechanical, Controls, Electrical,
                    Biology/Geology, and Autonomy
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
                {/* Role Section */}
                <div className="col-span-12 lg:col-span-3">
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
                        As President of SJSU Robotics, I led a diverse team of
                        50+ students in the development of advanced robotic
                        systems, including our flagship Mars Rover project. My
                        responsibilities included:
                      </p>
                      <ul className="space-y-1.5 text-gray-600 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                          <span>
                            Strategic planning and execution of multiple
                            robotics projects
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                          <span>
                            Managing cross-functional teams across engineering
                            disciplines
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                          <span>
                            Organizing technical workshops and training sessions
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                          <span>
                            Securing funding through university partnerships
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                          <span>
                            Representing at competitions and conferences
                          </span>
                        </li>
                      </ul>
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
                    <div className="grid grid-cols-6 grid-rows-2 gap-2 aspect-[3/1]">
                      {/* Main Preview */}
                      <div className="col-span-3 row-span-2">
                        <div
                          className="relative h-full cursor-pointer group rounded-lg overflow-hidden"
                          onClick={() =>
                            openModal("/assets/projects/robotics/main.jpg")
                          }
                        >
                          <img
                            src="/assets/projects/robotics/main.jpg"
                            alt="Robotics Club Main Activity"
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
                      {[1, 2, 3, 4].map((index) => (
                        <div key={index} className="col-span-1.5 row-span-1">
                          <div
                            className="relative h-full cursor-pointer group rounded-lg overflow-hidden"
                            onClick={() =>
                              openModal(
                                `/assets/projects/robotics/image${index}.jpg`
                              )
                            }
                          >
                            <img
                              src={`/assets/projects/robotics/image${index}.jpg`}
                              alt={`Robotics Project Image ${index}`}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {subProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

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
    </div>
  );
};

export default RoboticsPresident;

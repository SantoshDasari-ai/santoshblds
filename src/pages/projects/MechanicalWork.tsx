import { useState } from "react";
import { motion } from "framer-motion";

// Define types for mechanical systems
type Section = {
  id: string;
  title: string;
  description: string;
  media: Array<{
    type: "image" | "video";
    src: string;
    title: string;
    thumbnail?: string; // Optional thumbnail for videos
  }>;
};

const sections: Section[] = [
  {
    id: "differential-gearbox",
    title: "Differential Gearbox",
    description:
      "I developed precision design optimizations for a 3D-printed differential gearbox system integral to a robotic arm wrist joint. The project focused on enhancing mechanical performance while maintaining manufacturability through consumer-grade FDM technology.\nKey achievements included:\n• Redesigned miter gear alignment systems to ensure optimal mesh geometry and torque transfer\n• Implemented critical tolerance optimizations specifically calibrated for FDM printing constraints\n• Engineered heat-set insert integration points for superior component mounting and structural integrity\n\nThe optimized differential design significantly improved rotational precision, reduced backlash, and enhanced the robotic arm's overall dexterity for fine-motor applications. The solution balances high mechanical performance with accessible manufacturing techniques, making it suitable for both prototyping and production environments.",
    media: [
      {
        type: "image",
        src: "/assets/projects/robotics/sub/differential-assembly.jpg",
        title: "Differential Gearbox Assembly",
      },
      {
        type: "image",
        src: "/assets/projects/robotics/sub/wrist.JPG",
        title: "Robotic Wrist Integration",
      },
      {
        type: "video",
        src: "/assets/projects/robotics/sub/differential-demo.mp4",
        title: "Differential Gearbox Operation",
        thumbnail:
          "/assets/projects/robotics/sub/thumbnails/differential-thumb.jpg",
      },
    ],
  },
  {
    id: "ackerman-steering",
    title: "Ackerman Steering Calculations",
    description:
      "I performed precision angle calculations for a 3-wheeled omnidirectional robot's steering system using polynomial fitting and data-driven modeling. The robot featured two independently steered front wheels and one steerable rear wheel, each requiring unique steering angles to follow circular arcs around a common Instantaneous Center of Rotation (ICR).\n\nKey contributions included:\n• Created mathematical models using exponential and polynomial regression to map relationships between wheel angles and turn radii\n• Achieved high-precision steering calculations with R² values exceeding 0.98 in fitted equations\n• Provided these calculations to the control system team for implementation\n\nMy angle calculations enabled the robot's agile maneuvering in tight spaces, supporting scalable control logic and precision in path tracking without lookup tables, significantly improving the system's responsiveness and efficiency.",
    media: [
      {
        type: "image",
        src: "/assets/projects/robotics/sub/Ackerman Steering 1.jpg",
        title: "Ackerman Geometry",
      },
      {
        type: "video",
        src: "/assets/projects/robotics/sub/Ackerman Steering demo.mp4",
        title: "Ackerman Steering Demo",
        thumbnail:
          "/assets/projects/robotics/sub/Ackerman Steering demo thumb.png",
      },
    ],
  },
  {
    id: "dfm-manufacturing",
    title: "Design and Manufacturing Management",
    description:
      "I provided comprehensive design and manufacturing oversight for mechanical subsystems, ensuring optimal production feasibility, cost-effectiveness, and system-wide compatibility.\n\nMy responsibilities included:\n• Conducting thorough design reviews across all mechanical subsystem components, validating manufacturability, cost optimization, and clearance requirements to integrate mechanical design with electrical and control system needs\n• Collaborating directly with manufacturing partners, particularly for waterjet-cut components, preparing detailed DXF files and work instructions to eliminate production errors\n• Developing and implementing a standardized part numbering system with version control to streamline inventory management, track design iterations, and accelerate the component ordering process\n• Administering the GrabCAD Workbench platform for cohesive CAD system management, enforcing proper check-in/check-out protocols and resolving potential merge conflicts prior to master assembly updates\n\nThis systematic approach to design and manufacturing management significantly reduced production errors, minimized costly revisions, and maintained consistent design integrity throughout the development process.",
    media: [
      {
        type: "image",
        src: "/assets/projects/robotics/sub/dxf-file.jpg",
        title: "DXF File for Manufacturing",
      },
      {
        type: "image",
        src: "/assets/projects/robotics/sub/manufacturing-layout.png",
        title: "Manufacturing Layout Design",
      },
      {
        type: "image",
        src: "/assets/projects/robotics/sub/part numbering.png",
        title: "Part Numbering System",
      },
      {
        type: "image",
        src: "/assets/projects/robotics/sub/water-jet parts.JPG",
        title: "Waterjet-Cut Components",
      },
    ],
  },
  {
    id: "topology-exploration",
    title: "SolidWorks Topology Exploration",
    description:
      "I experimented with SolidWorks Topology Optimization tools as a creative exercise to explore innovative design possibilities, though these designs were ultimately not implemented in our production robots.\n\nExperimentation included:\n• Testing different constraint scenarios and load cases to observe how the optimization algorithm would respond\n• Exploring potential weight reduction patterns for various robotic components\n• Comparing generative results with conventional manual designs\n\nWhile manual design proved more practical for our immediate applications, this exploratory work provided valuable insights into advanced design techniques and potential future applications for weight-critical components.",
    media: [
      {
        type: "image",
        src: "/assets/projects/robotics/sub/topology image.png",
        title: "Topology Optimization Study",
      },
    ],
  },
];

const MechanicalWork: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [videoError, setVideoError] = useState<string | null>(null);

  const openMediaModal = (src: string) => {
    setSelectedMedia(src);
    setVideoError(null); // Reset error on new selection
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
    setVideoError(null);
  };

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    setVideoError("Error loading video. Please check format compatibility.");
    console.error("Video loading error:", e);
  };

  // Helper function to detect if the media is a video
  const isVideoFile = (src: string): boolean => {
    const videoExtensions = [".mp4", ".mov", ".webm", ".ogg"];
    return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Mechanical Engineering Work
            </h1>
            <p className="text-gray-600">
              Detailed documentation of mechanical engineering projects and
              analyses.
            </p>
          </div>

          {/* Content Sections */}
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Media Gallery */}
                <div className="p-6 bg-gray-50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.media.map((item, mediaIndex) => (
                      <div
                        key={mediaIndex}
                        className="relative aspect-video cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                        onClick={() => openMediaModal(item.src)}
                      >
                        {item.type === "image" ? (
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="relative w-full h-full bg-gray-900">
                            {item.thumbnail ? (
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <video
                                src={item.src}
                                className="w-full h-full object-cover"
                              />
                            )}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg
                                className="w-16 h-16 text-white opacity-80"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z" />
                              </svg>
                            </div>
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>

                  {section.id === "ackerman-steering" && (
                    <div className="mt-4">
                      <a
                        href="https://docs.google.com/spreadsheets/d/1ww3WbTJPUeTH-cEoijuNYlHlonMDF_w5/edit?usp=sharing&ouid=104102956017389925053&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        View Calculation Spreadsheet
                      </a>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="prose max-w-none">
                    <div className="text-gray-600 whitespace-pre-line">
                      {section.description}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}

          {/* Media Modal */}
          {selectedMedia && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              onClick={closeMediaModal}
            >
              <div className="relative max-w-4xl w-full">
                <button
                  onClick={closeMediaModal}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300"
                >
                  Close
                </button>
                {isVideoFile(selectedMedia) ? (
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    autoPlay={false}
                    poster={
                      sections
                        .flatMap((s) => s.media)
                        .find((m) => m.src === selectedMedia)?.thumbnail
                    }
                    className="w-full rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                    onError={handleVideoError}
                  >
                    <source src={selectedMedia} type="video/mp4" />
                    <source
                      src={selectedMedia.replace(".mp4", ".webm")}
                      type="video/webm"
                    />
                    <source
                      src={selectedMedia.replace(".mp4", ".mov")}
                      type="video/quicktime"
                    />
                    Your browser does not support the video tag or the file
                    format.
                  </video>
                ) : (
                  <img
                    src={selectedMedia}
                    alt="Enlarged view"
                    className="w-full h-auto rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
                {videoError && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-center">
                    {videoError}
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MechanicalWork;

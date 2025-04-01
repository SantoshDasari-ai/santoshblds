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
  }>;
};

const sections: Section[] = [
  {
    id: "differential-gearbox",
    title: "Differential Gearbox",
    description: "Description placeholder for differential gearbox section.",
    media: [
      {
        type: "image",
        src: "/assets/projects/robotics/mechanical/differential1.jpg",
        title: "Differential Gearbox Design",
      },
      {
        type: "image",
        src: "/assets/projects/robotics/mechanical/differential2.jpg",
        title: "Gearbox Assembly",
      },
    ],
  },
  {
    id: "ackerman-steering",
    title: "Ackerman Steering Calculations",
    description: "Description placeholder for Ackerman steering calculations.",
    media: [
      {
        type: "image",
        src: "/assets/projects/robotics/mechanical/ackerman1.jpg",
        title: "Ackerman Geometry",
      },
      {
        type: "image",
        src: "/assets/projects/robotics/mechanical/ackerman2.jpg",
        title: "Steering Calculations",
      },
    ],
  },
  {
    id: "dfm-manufacturing",
    title: "DFM & Manufacturing Management",
    description:
      "Description placeholder for DFM and manufacturing management.",
    media: [
      {
        type: "image",
        src: "/assets/projects/robotics/mechanical/dfm1.jpg",
        title: "Manufacturing Process",
      },
      {
        type: "video",
        src: "/assets/projects/robotics/mechanical/manufacturing.mp4",
        title: "Manufacturing Demo",
      },
    ],
  },
  {
    id: "pdm-system",
    title: "PDM System Management",
    description: "Description placeholder for PDM system management.",
    media: [
      {
        type: "image",
        src: "/assets/projects/robotics/mechanical/pdm1.jpg",
        title: "PDM System Overview",
      },
      {
        type: "image",
        src: "/assets/projects/robotics/mechanical/pdm2.jpg",
        title: "Data Management",
      },
    ],
  },
  {
    id: "topology-exploration",
    title: "SolidWorks Topology Exploration",
    description: "Description placeholder for SolidWorks topology exploration.",
    media: [
      {
        type: "image",
        src: "/assets/projects/robotics/mechanical/topology1.jpg",
        title: "Topology Study",
      },
      {
        type: "video",
        src: "/assets/projects/robotics/mechanical/topology.mp4",
        title: "Optimization Process",
      },
    ],
  },
];

const MechanicalWork: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const openMediaModal = (src: string) => {
    setSelectedMedia(src);
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
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
                            <video
                              src={item.src}
                              className="w-full h-full object-cover"
                            />
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
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600">{section.description}</p>
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
                {selectedMedia.endsWith(".mp4") ? (
                  <video
                    src={selectedMedia}
                    controls
                    className="w-full rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <img
                    src={selectedMedia}
                    alt="Enlarged view"
                    className="w-full h-auto rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
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

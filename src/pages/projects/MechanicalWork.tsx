import React, { useState } from "react";
import { motion } from "framer-motion";
import OptimizedImage from "../../components/OptimizedImage";
import OptimizedVideo from "../../components/OptimizedVideo";
import { PlayCircle } from "lucide-react";

const MechanicalWork: React.FC = () => {
  const [modalMedia, setModalMedia] = useState<{
    src: string;
    type: "image" | "video";
  } | null>(null);

  const openModal = (src: string, type: "image" | "video") => {
    setModalMedia({ src, type });
  };

  const closeModal = () => {
    setModalMedia(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-4xl font-bold mb-8">Mechanical Work</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div
                className="cursor-pointer"
                onClick={() => openModal(p.src, p.type)}
              >
                {p.type === "image" ? (
                  <OptimizedImage
                    src={p.src}
                    alt={p.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="relative w-full h-56">
                    <OptimizedVideo
                      src={p.src}
                      poster={p.thumbnail}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <PlayCircle className="text-white w-16 h-16" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {modalMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          {modalMedia.type === "image" ? (
            <OptimizedImage
              src={modalMedia.src}
              alt="Enlarged view"
              className="max-w-[90vw] max-h-[90vh]"
            />
          ) : (
            <video
              src={modalMedia.src}
              className="max-w-[90vw] max-h-[90vh]"
              controls
              autoPlay
            />
          )}
        </div>
      )}
    </div>
  );
};

const projects = [
  {
    title: "Differential Assembly",
    description: "A complex assembly with multiple moving parts.",
    src: "/assets/projects/robotics/sub/differential-assembly.jpg",
    type: "image",
  },
  {
    title: "Wrist Assembly",
    description: "A multi-axis wrist for a robotic arm.",
    src: "/assets/projects/robotics/sub/wrist.JPG",
    type: "image",
  },
  {
    title: "Differential Demo",
    description: "Animation showing the differential in action.",
    src: "/assets/projects/robotics/sub/differential-demo.mp4",
    type: "video",
    thumbnail:
      "/assets/projects/robotics/sub/thumbnails/differential-thumb.jpg",
  },
  {
    title: "Ackerman Steering",
    description: "CAD model of an Ackerman steering mechanism.",
    src: "/assets/projects/robotics/sub/Ackerman Steering 1.jpg",
    type: "image",
  },
  {
    title: "Ackerman Steering Demo",
    description: "Animation of the Ackerman steering system.",
    src: "/assets/projects/robotics/sub/Ackerman Steering demo.mp4",
    type: "video",
    thumbnail: "/assets/projects/robotics/sub/Ackerman Steering demo thumb.png",
  },
  {
    title: "DXF for Manufacturing",
    description: "A DXF file ready for laser cutting or water jet.",
    src: "/assets/projects/robotics/sub/dxf-file.jpg",
    type: "image",
  },
  {
    title: "Manufacturing Layout",
    description: "Layout of parts for efficient manufacturing.",
    src: "/assets/projects/robotics/sub/manufacturing-layout.png",
    type: "image",
  },
  {
    title: "Part Numbering System",
    description: "A clear and organized part numbering system.",
    src: "/assets/projects/robotics/sub/part numbering.png",
    type: "image",
  },
  {
    title: "Water Jet Cut Parts",
    description: "Parts ready for or cut by a water jet machine.",
    src: "/assets/projects/robotics/sub/water-jet parts.JPG",
    type: "image",
  },
  {
    title: "Topology Optimized Part",
    description: "A part optimized for strength and weight.",
    src: "/assets/projects/robotics/sub/topology image.png",
    type: "image",
  },
];

export default MechanicalWork;
